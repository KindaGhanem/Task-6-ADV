import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice";

const store = configureStore({ reducer: { blogs: blogReducer } });


export default store;
