import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface UserStateProps {
  auth_token: string | undefined;
  name: string;
  profile_pic: string | undefined;
  balance: null | number;
}

const initialState: UserStateProps = {
  auth_token: Cookies.get("auth_token"),
  name: "",
  profile_pic: undefined,
  balance: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.auth_token = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setProfilePic: (state, action: PayloadAction<string>) => {
      state.profile_pic = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setInitialState: (state) => {
      state = initialState;
    },
  },
});
