import axios from "axios";
import { User } from "../redux/userSlice";

const BASE_URL = "http://localhost:5000/users";
const API = axios.create({ baseURL: BASE_URL });

interface UserToken { 
  user: User;
  token: string;
}

export const getAllUsernames = async () => {
  return await API.get<{ username: string }[]>("/usernames");
};

export const createUser = async (user: User) => {
  return await API.post<UserToken>("/", user);
};
