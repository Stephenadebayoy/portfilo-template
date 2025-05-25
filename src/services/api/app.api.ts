/** @format */

import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import tagTypes from "../tags";
import { baseQueryWithResponse } from ".";

export const api = createApi({
  reducerPath: "app_api",
  baseQuery: baseQueryWithResponse(""),
  tagTypes,
  extractRehydrationInfo(action: any, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
