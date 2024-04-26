//login with jwt

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, services } from "../../../../config/api.config";
import { AxiosResponse } from "axios";
import { User } from "../userSlice";

export const loginWithJwt = createAsyncThunk<User, any>("user/loginWithJwt", async () => {
  const response: AxiosResponse<User> = await api.get(
    `/${services.users.prefix}/${services.users.endpoints.me}`
  );
  return response.data;
});
