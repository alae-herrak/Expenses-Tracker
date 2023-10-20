import { createSlice } from "@reduxjs/toolkit";

export type User = {
    _id: String;
    username: String;
    profilePicture: String;
    password?: String;  
}

