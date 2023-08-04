import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface initialStateProps {
  auth_token: string | undefined;
  name: string;
  profile_pic: string;
  balance: null | number;
}

const initialState: initialStateProps = {
  auth_token: Cookies.get("auth_token"),
  name: "",
  profile_pic: "",
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
