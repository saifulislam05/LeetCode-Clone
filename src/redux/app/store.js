
import { configureStore } from "@reduxjs/toolkit";
import  problemReducer  from "../features/problemSlice";
import userReducer from "../features/userSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    problems:problemReducer
  },
});
