import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../service/http";

export const loginUser = createAsyncThunk("loginUser", async (input, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                await http.post("/auth/login", input);

                return true;
        } catch (err) {
                return rejectWithValue("Error");
        }
});

export const resetUser = createAsyncThunk("UserInfo", async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                const res = await http.get("/user");
                return res.data.data;
        } catch (err) {
                return rejectWithValue("Error");
        }
});
export const getUserInfo = createAsyncThunk("UserInfo", async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                const res = await http.get("/user");
                console.log(res);
                return res.data.data;
        } catch (err) {
                return rejectWithValue("Error");
        }
});

export const registerUser =
        createAsyncThunk >
        ("registerUSer",
        async (input, thunkApi) => {
                const { rejectWithValue } = thunkApi;
                try {
                        await http.post("/auth/register", input);
                        return;
                } catch (err) {
                        console.log(err);
                        return rejectWithValue("Error");
                }
        });

export const changeUser = createAsyncThunk("changeUser", async (input, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        try {
                await http.put("/user", input);
                dispatch(getUserInfo());
                return;
        } catch (err) {
                return rejectWithValue("Error");
        }
});

export default loginUser;
