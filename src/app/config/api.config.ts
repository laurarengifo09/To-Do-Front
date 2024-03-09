import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${localStorage.getItem("token")}` : "",
  },
});

export const services = {
  auth: {
    prefix: "auth",
    endpoints: {
      login: "login",
      register: "register",
    },
  },
};
