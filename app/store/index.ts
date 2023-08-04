import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";

const reducers = combineReducers({ user: userSlice.reducer });

const store = configureStore({
  reducer: reducers,
});

export default store;
