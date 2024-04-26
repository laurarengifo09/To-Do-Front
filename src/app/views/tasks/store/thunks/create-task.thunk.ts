import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { api } from "../../../../config/api.config";
import { AxiosResponse } from "axios";

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (payload: Omit<Task, "id">) => {
    const response: AxiosResponse<Task> = await api.post("/api/task", payload);
    return response.data;
  }
);
