import axios, { AxiosInstance } from "axios";

const initApi = (api: AxiosInstance) => {
  api.interceptors.request.use(
    (config) => {
      if (!localStorage.getItem("token")) return config;
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return api;
};

export const api = initApi(
  axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    headers: {
      "Content-Type": "application/json",
    },
  })
);

export const services = {
  auth: {
    prefix: "auth",
    endpoints: {
      login: "login",
      register: "register",
      jwt: "me",
    },
  },
  tasks: {
    prefix: "api/task",
    endpoints: {
      getByUserId: "getByUserId",
      update: "",
      delete: "",
    },
  },
  users: {
    prefix: "api/users",
    endpoints: {
      me: "me",
    },
  }
};
