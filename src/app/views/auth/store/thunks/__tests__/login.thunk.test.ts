import { describe, expect, it } from "vitest";
import { login } from "../login.thunk";
import store from "../../../../../store";

describe("login thunk", () => {

  it("should fail with wrong credentials", () => {
    store.dispatch(login({ email: "", password: "" }));
    expect(store.getState().user?.user).toBeFalsy();
  });

  it("should login with correct credentials", async () => {
    await store.dispatch(
      login({ email: "jorge@email.com", password: "1234" })
    );
    expect(store.getState().user?.user).toBeTruthy();
  });
});
