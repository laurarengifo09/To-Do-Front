//mark task as done

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, services } from "../../../../config/api.config";
import { AxiosResponse } from "axios";
import { Task } from "../../types";

type Payload = {
  userId: string;
  task: Task;
};

export const toggleDone = createAsyncThunk<Task, Payload>(
  "task/markAsDone",
  async (payload: Payload) => {
    const response: AxiosResponse<Task> = await api.put(
      `/${services.tasks.prefix}/${services.tasks.endpoints.update}${payload.task.id}`,
      { ...payload.task, done: !payload.task.done, id: undefined, userId: payload.userId }
    );
    return response.data;
  }
);

export const toggleSoftDelete = createAsyncThunk<Task, Payload>(
  "task/softDelete",
  async (payload: Payload) => {
    const response: AxiosResponse<Task> = await api.put(
      `/${services.tasks.prefix}/${services.tasks.endpoints.update}${payload.task.id}`,
      { ...payload.task, deleted: !payload.task.isDeleted, id: undefined, userId: payload.userId }
    );
    return response.data;
  }
);