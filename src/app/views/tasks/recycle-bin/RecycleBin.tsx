import { MdDeleteOutline, MdOutlineUnarchive } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { withReducer } from "../../../store/withReducer";
import { selectUser } from "../../auth/store/userSlice";
import { TaskCard } from "../components/TaskCard";
import tasksSlice, { selectLoading, selectTasks } from "../store/tasksSlice";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { getTasks } from "../store/thunks/get-tasks.thunk";
import { toast } from "react-toastify";
import { Task } from "../types";
import { toggleSoftDelete } from "../store/thunks/update-task.thunk";
import { deleteTask } from "../store/thunks/delete-task.thunk";
import { useSelector } from "react-redux";

function RecycleBin() {
  const dispatch = useAppDispatch();
  const tasks = useSelector(selectTasks);
  const loading = useSelector(selectLoading);
  const user = useAppSelector(selectUser);

  const getTasksByUserId = () => {
    dispatch(
      getTasks({
        userId: user?.id as string,
        filters: {
          done: false,
          deleted: true,
          page: 0,
          size: 9,
          sorting: "created_at",
        },
      })
    );
  };

  const recoverTask = async (task: Task) => {
    await dispatch(toggleSoftDelete({ task, userId: user?.id as string })).unwrap();
    toast.success("Task recovered successfully!");
    getTasksByUserId();
  };

  const hardDeleteTask = async (task: Task) => {
    await dispatch(deleteTask(task.id)).unwrap();
    toast.success("Task deleted successfully!");
    getTasksByUserId();
  };

  useEffect(() => {
    if (!user) return;
    getTasksByUserId();
  }, [user]);

  return (
    <div className="flex flex-col flex-1">
      <div className="font-semibold text-xl mb-5">Recycle Bin</div>
      {loading ? (
        <CircularProgress />
      ) : tasks.length === 0 ? (
        <div className="flex flex-col flex-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-3xl font-extralight">
              The app's trash can is currently empty,
            </span>
            <span className="text-3xl font-extralight">
              but it's ready to collect any deleted items.
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              actions={[
                <MdOutlineUnarchive
                  className="cursor-pointer text-green-400"
                  onClick={() => recoverTask(task)}
                />,
                <MdDeleteOutline
                  className="cursor-pointer text-red-400"
                  onClick={() => hardDeleteTask(task)}
                />,
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default withReducer("tasks", tasksSlice)(RecycleBin);
