import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunks/login.thunk";
import { register } from "./thunks/register.thunk";
import { RootState } from "../../../store";

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
  reducers: {},
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

export const selectLoading = ({ user }: RootState) => user.loading;
