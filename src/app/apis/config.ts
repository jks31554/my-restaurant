import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL!,
  // baseURL: "http://localhost:8080",
  // baseURL: process.env.DATABASE_URL!,
});
