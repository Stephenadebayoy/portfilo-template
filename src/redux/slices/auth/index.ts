/** @format */

import { AppCookie } from "@/_shared/helpers";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  authData: null | any;
  sessionToken: string | null;
  isAdmin: boolean;
  isOwner: boolean;
};

export const initialState = {
  authData: null,
  sessionToken: null,
  isAdmin: false,
  isOwner: false,
} as InitialStateType;

const AUTH_KEY = "auth";

export const authSlice = createSlice({
  name: AUTH_KEY,
  initialState,
  reducers: {
    isOwner: (_, action) => {
      return {
        ...initialState,
        isOwner: action.payload,
      };
    },
    logout: () => {
      AppCookie({ allowDelete: true });
      return initialState;
    },
  },
});

export const { logout, isOwner } = authSlice.actions;

export default authSlice.reducer;
