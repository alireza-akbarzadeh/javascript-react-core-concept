import { combineReducers } from "@reduxjs/toolkit";
import counterReducers from "./slice/counterSlice";
const RootReducer = combineReducers({
  counter: counterReducers,
});

export default RootReducer;
