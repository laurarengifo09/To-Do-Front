import { Select, MenuItem } from "@mui/material";
import { Priority, Task } from "../types";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../auth/store/userSlice";
import moment from "moment";
import { toast } from "react-toastify";
import { MdOutlineClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { withReducer } from "../../../store/withReducer";
import tasksSlice from "../store/tasksSlice";
import { createTask } from "../store/thunks/create-task.thunk";

function CreateTask() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [taskToCreate, setTaskToCreate] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    dueDate: moment().format("YYYY-MM-DD"),
    priority: Priority.Low,
    userId: user?.id as string,
  });

  const submitTask = async () => {
    if (!taskToCreate.title || !taskToCreate.description) {
      toast.error("Please fill all fields");
    }
    // @ts-ignore
    const response = await dispatch(createTask(taskToCreate)).unwrap();
    console.log(response)
    toast.success("Task created successfully");
    navigate(-1);
  };

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="font-semibold text-xl mb-5">Create Task</div>
      <div className="flex items-end justify-between w-full gap-4">
        <div className="flex flex-1 items-center justify-between bg-gray-50 font-semibold text-xl p-2 rounded-md">
          <input
            className="bg-transparent ml-2 outline-none placeholder:text-black w-full placeholder:font-light"
            type="text"
            placeholder="Task name"
            value={taskToCreate.title}
            onChange={(e) =>
              setTaskToCreate((v) => ({ ...v, title: e.target.value }))
            }
          />
          <MdOutlineClear
            onClick={() => setTaskToCreate((v) => ({ ...v, title: "" }))}
            className={`cursor-pointer transition-all duration-[350ms] ease-in-out ${
              taskToCreate.title ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="flex flex-1 items-center justify-between gap-4 rounded-md">
          <span>Deadline:</span>
          <DatePicker
            value={moment(taskToCreate.dueDate)}
            onChange={(date) =>
              date &&
              setTaskToCreate((v) => ({ ...v, dueDate: date?.format("YYYY-MM-DD") }))
            }
          />
          <span>Priority:</span>
          <Select
            variant="standard"
            value={taskToCreate.priority}
            onChange={(e) => {
              setTaskToCreate((v) => ({
                ...v,
                priority: e.target.value as Priority,
              }));
            }}
          >
            <MenuItem value={Priority.Low}>Low</MenuItem>
            <MenuItem value={Priority.Medium}>Medium</MenuItem>
            <MenuItem value={Priority.High}>High</MenuItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between bg-gray-50 p-2 rounded-md">
        <textarea
          className="bg-transparent ml-2 outline-none placeholder:text-black w-full placeholder:font-light resize-y min-h-64"
          placeholder="Task description"
          onChange={(e) =>
            setTaskToCreate((v) => ({ ...v, description: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <button
          className="bg-custom-primary-500 font-semibold hover:bg-blue-700 p-2 rounded-md text-white"
          onClick={submitTask}
        >
          Create
        </button>
        <button
          onClick={() => navigate(-1)}
          className="text-custom-primary-500 rounded-md p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default withReducer("tasks", tasksSlice)(CreateTask);
