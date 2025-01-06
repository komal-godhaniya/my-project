import { configureStore } from "@reduxjs/toolkit";
import  Api  from "../features/ApiSlice";

export const store = configureStore({
    reducer : {
        apiKey : Api
    }
})