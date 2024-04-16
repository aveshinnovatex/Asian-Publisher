import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bookSlice from "../slices/bookSlice";
import authorSlice from "../slices/authorSlice";
import courseSlice from "../slices/courseSlice";
import cartSlice from "../slices/cartSlice";
import semesterSlice from "../slices/semesterSlice";

const reducer = combineReducers({
  /* here we will be adding reducers*/
  book: bookSlice,
  cart: cartSlice,
  author: authorSlice,
  course: courseSlice,
  semester: semesterSlice,
});

/*Define the store using configureStore*/
const store = configureStore({
  reducer: reducer,
});

export default store;
