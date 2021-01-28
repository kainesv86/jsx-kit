import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
        isLoading: false,
};

const reducer = createSlice({
        name: "api",
        initialState,
        reducer: {
                initReq: (state) => {
                        // state.isLoading = true;
                },
        },
        extraReducers: (builder) => {},
});

export const apiActions = {
        ...reducer.actions,
};

export const apiReducer = reducer.reducer;
