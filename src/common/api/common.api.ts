import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY as string;

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": apiKey,
  },
});
