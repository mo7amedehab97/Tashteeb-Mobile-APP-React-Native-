import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/auth";
export default configureStore({
  reducer: {
    auth: useReducer,
  },
});
