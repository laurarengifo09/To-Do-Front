import { createAsyncThunk } from "@reduxjs/toolkit";
import { Priority, Task } from "../../types";
import { api, services } from "../../../../config/api.config";
type Filters = {
  sorting: "due_date" | "created_at";
  content?: string;
  page: number;
  size: number;
  startDate?: string;
  endDate?: string;
  priority?: Priority;
  done?: boolean;
  deleted?: boolean;

};

type Payload = {
  userId: string;
  filters?: Filters;
};

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async ({ userId, filters }: Payload) => {
    const response = await api.get<Task[]>(
      `/${services.tasks.prefix}/${services.tasks.endpoints.getByUserId}/${userId}`,
      { params: filters }
    );
    return response.data;
  }
);
