import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { AxiosResponse } from "axios";
import { api, services } from "../../../../config/api.config";

export const deleteTask = createAsyncThunk<Task, string>(
  "task/delete",
  async (taskId: string) => {
    const response: AxiosResponse<Task> = await api.delete(
      `/${services.tasks.prefix}/${services.tasks.endpoints.delete}${taskId}`
    );
    return response.data;
  }
);