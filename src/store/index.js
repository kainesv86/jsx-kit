import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { apiReducer } from "./api";
import { authReducer } from "./auth";

const reducers = combineReducers({ auth: authReducer, api: apiReducer });

export const store = configureStore({
        reducer: reducers,
        devTools: process.env.NODE_ENV === "production" ? false : true,
});
