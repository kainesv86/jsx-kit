import { loginUser, registerUser, getUserInfo, changeUser } from "./action";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
        isLogin: false,
};

const auth = createSlice({
        name: "auth",
        initialState,
        reducers: {},
        extraReducers: (builder) => {},
});

export const userActions = {
        ...auth.actions,
        loginUser,
        registerUser,
        getUserInfo,
        changeUser,
};

export const authReducer = auth.reducer;
export const authSelecter = (state) => state.auth;
