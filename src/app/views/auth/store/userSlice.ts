import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks/login.thunk";
import { register } from "./thunks/register.thunk";
import { RootState } from "../../../store";
import { loginWithJwt } from "./thunks/login-with-jwt.thunk";

export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  role: string;
};

type State = {
  user?: User;
  loggedIn: boolean;
  loading: boolean;
};

const initialState: State = {
  user: undefined,
  loggedIn: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loggedIn = true;
        state.loading = false;
      })
      .addCase(loginWithJwt.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loggedIn = true;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loggedIn = true;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;

export const selectLoading = ({ user }: RootState) => user.loading;
export const selectLoggedIn = ({ user }: RootState) => user.loggedIn;
export const selectUser = ({ user }: RootState) => user.user;
