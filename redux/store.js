import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import articleRedcer from "./slices/articleSlice"

export const store = configureStore({
    reducer: {
        counter: userReducer,
        auth: authReducer,
        article: articleRedcer
    },
});
