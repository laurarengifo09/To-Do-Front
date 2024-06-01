import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  afterAll,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { Login } from "../Login";
import store from "../../../../store";

describe("Login", () => {
  beforeEach(() => {
    vi.mock("react-router-dom");
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    vi.doUnmock("react-router-dom");
  });

  it("should render two inputs and a button", () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Contraseña");
    const submitButton = screen.getByRole("button");

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });
});
