import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserStateProps, userSlice } from "./user";

const reducers = combineReducers({ user: userSlice.reducer });

const store = configureStore({
  reducer: reducers,
});

export interface StoreProps {
  user: UserStateProps;
}

export default store;
