import moment from "moment";
import { IoCalendarOutline, IoFlag } from "react-icons/io5";
import { Priority, Task } from "../types";

type Props = {
  task: Task;
  actions: any[];
};

export function TaskCard(props: Props) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-lg">{props.task.title}</div>
        <div className="flex items-center gap-2">
          {props.actions.map((action) => (
            action
          ))}
        </div>
      </div>
      <div className="font-light text-sm text-gray-500">
        {props.task.description}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoCalendarOutline className="text-gray-500" />
          <span>{moment(props.task.dueDate).format("MM/DD")}</span>
        </div>
        <div className="flex items-center gap-2">
          <IoFlag
            color={`${
              props.task.priority === Priority.High
                ? "red"
                : props.task.priority === Priority.Medium
                ? "yellow"
                : "green"
            }`}
          />
          <span>{props.task.priority}</span>
        </div>
      </div>
    </div>
  );
}
