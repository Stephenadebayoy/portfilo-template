/** @format */

import {
  FetchArgs,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query";
import { RootState } from "@/redux/store";
import { AppCookie } from "@/_shared/helpers";
import { Dict } from "@/types/types";

const baseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.sessionToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("X-API-KEY", process.env.NEXT_PUBLIC_API_KEY as string);
      return headers;
    },
  });

export const baseQueryWithResponse =
  (baseUrl: string) =>
  async (args: FetchArgs, api: BaseQueryApi, extraOptions: Dict) => {
    const { data, error } = await baseQuery(baseUrl)(args, api, extraOptions);
    const { meta, data: authData } = (data as any) || {};
    const token = meta?.token;
    if (error) {
      return { error: { status: error?.status, data: error?.data } };
    }
    if (token) AppCookie({ cookie: token, userRole: authData?.role });
    return { data };
  };
