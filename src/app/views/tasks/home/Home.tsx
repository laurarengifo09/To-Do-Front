import { FiSearch } from "react-icons/fi";
import { IoCheckmarkDoneCircleOutline, IoFilterOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { withReducer } from "../../../store/withReducer";
import tasksSlice, { selectLoading, selectTasks } from "../store/tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { TaskCard } from "../components/TaskCard";
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { selectUser } from "../../auth/store/userSlice";
import { getTasks } from '../store/thunks/get-tasks.thunk';
import { Task } from "../types";
import {
  toggleDone,
  toggleSoftDelete,
} from "../store/thunks/update-task.thunk";
import { toast } from "react-toastify";

function Home() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const loading = useAppSelector(selectLoading);
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const [searchTimeout, setSearchTimeout] = useState<number>();
  const [sortStrategy, setSortStrategy] = useState<"due_date" | "created_at">(
    "due_date"
  );

  const onKeyDown = () => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
  };

  const onKeyUp = (e: any) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchTimeout(
      setTimeout(() => {
        console.log("Search for", e.target.value);
      }, 500)
    );
  };

  const getTasksByUserId = () => {
    dispatch(
      // @ts-ignore
      getTasks({
        userId: user.id,
        filters: {
          sorting: sortStrategy,
          done: false,
          page: 0,
          size: 9,
          deleted: false,
        },
      })
    );
  }

  const toggleTaskDone = async (task: Task) => {
    // @ts-ignore
    await dispatch(toggleDone({ task, userId: user.id })).unwrap();
    toast.success("Task marked as done");
    getTasksByUserId();
  };

  const softDeleteTask = async (task: Task) => {
    // @ts-ignore
    await dispatch(toggleSoftDelete({ task, userId: user.id })).unwrap();
    toast.success("Task deleted");
    getTasksByUserId();
  };

  useEffect(() => {
    if (!user) return;
    getTasksByUserId();
  }, [user, sortStrategy]);

  return (
    <div className="flex flex-col gap-10 w-full h-full">
      <div className="font-semibold text-xl">Explore Tasks</div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md w-2/5">
          <input
            className="bg-transparent ml-2 outline-none text-sm font-light placeholder:text-custom-secondary-400"
            type="text"
            placeholder="Search task"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
          />
          <FiSearch className="text-custom-secondary-300" />
        </div>
        <div className="font-light text-sm flex items-center justify-between bg-gray-50 gap-2 p-2 rounded-md">
          <IoFilterOutline />
          <span
            onClick={() =>
              setSortStrategy((v) =>
                v === "due_date" ? "created_at" : "due_date"
              )
            }
            className="cursor-pointer select-none"
          >
            Sort by: {sortStrategy === "due_date" ? "Deadline" : "Created"}
          </span>
        </div>
      </div>
      {loading ? (
        <CircularProgress />
      ) : tasks.length === 0 ? (
        <div className="flex flex-col flex-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-3xl font-extralight">
              Looks like your to-do list is empty.
            </span>
            <span className="text-3xl font-extralight">
              Ready to add something new?
            </span>
          </div>
          <button
            onClick={() => navigate("/create")}
            className="bg-custom-primary-500 font-semibold hover:bg-blue-700 p-3 rounded-md text-white"
          >
            Create a new one
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              actions={[
                task.done ? (
                  <MdOutlineCancel
                    className="cursor-pointer text-red-400"
                    onClick={() => toggleTaskDone(task)}
                  />
                ) : (
                  <IoCheckmarkDoneCircleOutline
                    className="cursor-pointer text-green-400"
                    onClick={() => toggleTaskDone(task)}
                  />
                ),
                <MdDeleteOutline
                  className="cursor-pointer text-red-400"
                  onClick={() => softDeleteTask(task)}
                />,
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default withReducer("tasks", tasksSlice)(Home);
