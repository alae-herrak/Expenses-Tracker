import axios from "axios";

export interface User {
  __v?: number;
  _id?: string;
  password: string;
  profilePicture: string;
  username: string;
}

const BASE_URL = "http://localhost:5000/users";
const API = axios.create({ baseURL: BASE_URL });

export const getAllUsernames = async () => {
  return await API.get<{ username: string }[]>("/usernames");
};

export const createUser = async (user: User) => {
  return await API.post<User>("/", user);
};
