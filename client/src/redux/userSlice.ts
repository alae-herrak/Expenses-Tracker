import { createSlice } from "@reduxjs/toolkit";

export interface User {
  __v?: number;
  _id?: string;
  username: string;
  password: string;
  profilePicture: string;
}

const user: User | null = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;
const token: string = localStorage.getItem("token")
  ? localStorage.getItem("token")!
  : "";

const initState = {
  user: <User>user
    ? user
    : {
        _v: undefined,
        _id: "",
        username: "",
        password: "",
        profilePicture: "",
      },
  token: token,
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    login: (state) => {
      state.user = JSON.parse(localStorage.getItem("user")!);
      state.token = localStorage.getItem("token")!;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = initState.user;
      state.token = initState.token;
    },
    update: (state, action) => {
      localStorage.setItem("user", action.payload);
      state.user = JSON.parse(localStorage.getItem("user")!);
    },
  },
});

export default userSlice.reducer;
export const { login, logout, update } = userSlice.actions;
