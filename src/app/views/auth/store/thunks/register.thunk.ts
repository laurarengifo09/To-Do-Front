import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../userSlice";
import { AxiosResponse } from "axios";
import { api, services } from "../../../../config/api.config";

type Payload = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

type Response = {
  accessToken: string;
  user: User;
};

export const register = createAsyncThunk<User, Payload>(
  "user/register",
  async (payload: Payload) => {
    const response: AxiosResponse<Response> = await api.post(
      `/${services.auth.prefix}/${services.auth.endpoints.register}`,
      payload
    );
    localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
  }
);
