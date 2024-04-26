import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types";
import { createTask } from "./thunks/create-task.thunk";
import { getTasks } from "./thunks/get-tasks.thunk";

type State = {
  tasks: Task[];
  loading: boolean;
};

const initialState: State = {
  tasks: [],
  loading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.loading = false;
      })
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      }),
});

export default tasksSlice.reducer;

export const selectTasks = (state: { tasks: State }) => state.tasks.tasks;
export const selectLoading = (state: { tasks: State }) => state.tasks.loading;
