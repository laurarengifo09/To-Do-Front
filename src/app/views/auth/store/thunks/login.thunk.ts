import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, services } from "../../../../config/api.config";
import { AxiosResponse } from "axios";
import { User } from "../userSlice";

type Payload = {
  email: string;
  password: string;
};

type Response = {
  accessToken: string;
  user: any;
};

export const login = createAsyncThunk<User, Payload>(
  "user/login",
  async (payload: Payload) => {
    localStorage.removeItem("token");
    const response: AxiosResponse<Response> = await api.post(
      `/${services.auth.prefix}/${services.auth.endpoints.login}`,
      payload
    );
    console.log(response)
    localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
  }
);
