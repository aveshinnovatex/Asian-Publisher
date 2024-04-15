import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bookSlice from "../slices/bookSlice";
import authorSlice from "../slices/authorSlice";

const reducer = combineReducers({
  /* here we will be adding reducers*/
  book: bookSlice,
  author: authorSlice,
});

/*Define the store using configureStore*/
const store = configureStore({
  reducer: reducer,
});

export default store;
