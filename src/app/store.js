import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todoSlice.js";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
