export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: Date | string;
  priority: Priority;
  userId: string;
  done?: boolean;
  isDeleted?: boolean;
};
