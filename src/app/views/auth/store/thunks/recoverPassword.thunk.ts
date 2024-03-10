import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { api, services } from "../../../../config/api.config";

type Payload = {
    email: string;
};

type Response = {
    state: number;
    message: string;
};

export const recoverPassword = createAsyncThunk<Response, Payload>(
    "user/recoverPassword",
    async (payload: Payload) => {
        const response: AxiosResponse<Response> = await api.post(
            `/${services.auth.prefix}/${services.auth.endpoints.recoverPassword}`,
            payload
        );
        return response.data;
    }
);
