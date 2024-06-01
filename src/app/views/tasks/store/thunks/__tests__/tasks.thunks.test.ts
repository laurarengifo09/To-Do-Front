import { beforeAll, describe, expect, it } from "vitest";
import store from "../../../../../store";
import { login } from "../../../../auth/store/thunks/login.thunk";
import { Priority } from "../../../types";
import { createTask } from "../create-task.thunk";
import { toggleDone } from "../update-task.thunk";

describe("Tasks Thunks", () => {
  beforeAll(async () => {
    await store.dispatch(login({ email: "jorge@email.com", password: "1234" }));
  });
  
  it("should create a task", async () => {
    expect(store.getState().user.user?.id).toBeDefined();
    const task = await store.dispatch(
      createTask({
        title: "Task 1",
        description: "Description 1",
        dueDate: new Date(),
        priority: Priority.High,
        userId: store.getState().user.user?.id as string,
        done: false,
        isDeleted: false,
      })
    );
    expect(task.payload).toBeDefined();
  });

  it("should not create a task if user is not logged in", async () => {
    try {
      await store.dispatch(
        createTask({
          title: "Task 1",
          description: "Description 1",
          dueDate: new Date(),
          priority: Priority.High,
          userId: "",
          done: false,
          isDeleted: false,
        })
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should not create a task if title is empty", async () => {
    try {
      await store.dispatch(
        createTask({
          title: "",
          description: "Description 1",
          dueDate: new Date(),
          priority: Priority.High,
          userId: store.getState().user.user?.id as string,
          done: false,
          isDeleted: false,
        })
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should not create a task if due date is in the past", async () => {
    try {
      await store.dispatch(
        createTask({
          title: "Task 1",
          description: "Description 1",
          dueDate: new Date("2020-01-01"),
          priority: Priority.High,
          userId: store.getState().user.user?.id as string,
          done: false,
          isDeleted: false,
        })
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should not create a task if priority is invalid", async () => {
    try {
      await store.dispatch(
        createTask({
          title: "Task 1",
          description: "Description 1",
          dueDate: new Date(),
          priority: "Invalid" as Priority,
          userId: store.getState().user.user?.id as string,
          done: false,
          isDeleted: false,
        })
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should mark a task as done", async () => {
    const task = await store
      .dispatch(
        createTask({
          title: "Task 1",
          description: "Description 1",
          dueDate: new Date(),
          priority: Priority.High,
          userId: store.getState().user.user?.id as string,
          done: false,
          isDeleted: false,
        })
      )
      .unwrap();
    expect(task.done).toBeFalsy();
    const editedTask = await store
      .dispatch(
        toggleDone({
          userId: store.getState().user.user?.id as string,
          task: task,
        })
      )
      .unwrap();
    expect(editedTask.done).toBeTruthy();
  });
});
