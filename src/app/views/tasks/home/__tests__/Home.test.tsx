import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import store from "../../../../store";
import { login } from "../../../auth/store/thunks/login.thunk";
import Home from "../Home";

describe("Tasks Home", () => {
  beforeAll(async () => {
    vi.doMock("react-router-dom");
    await store.dispatch(login({ email: "jorge@email.com", password: "1234" }));
  });

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    vi.doUnmock("react-router-dom");
  });

  it("should render a list of tasks", async () => {
    expect(await screen.findAllByText("Task 1")).toBeDefined();
  });
});
