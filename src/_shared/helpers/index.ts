/** @format */

import { AUTH_TOKEN_KEY } from "../constants";
import Cookie from "js-cookie";

type AppCookieProp = {
  cookie?: string | null;
  userRole?: Array<"owner" | "member" | "admin" | "unknown-user">;
  allowDelete?: boolean;
};

export const AppCookie = ({
  cookie = null,
  userRole = ["unknown-user"],
  allowDelete = false,
}: AppCookieProp) => {
  if (cookie && !allowDelete) {
    Cookie.set(AUTH_TOKEN_KEY, cookie);
    Cookie.set(`${AUTH_TOKEN_KEY}_user`, JSON.stringify(userRole));
  } else {
    Cookie.remove(AUTH_TOKEN_KEY);
    Cookie.remove(`${AUTH_TOKEN_KEY}_user`);
  }
  return;
};

export const generateBlurDataURL = (width: number, height: number): string => {
  const shimmer = `
      <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="${width}" height="${height}" fill="#f3f4f6" />
        <rect width="${width}" height="${height}" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stop-color="#f3f4f6" />
            <stop offset="20%" stop-color="#e5e7eb" />
            <stop offset="40%" stop-color="#d1d5db" />
            <stop offset="60%" stop-color="#e5e7eb" />
            <stop offset="80%" stop-color="#f3f4f6" />
          </linearGradient>
        </defs>
      </svg>
    `;

  return `data:image/svg+xml;base64,${Buffer.from(shimmer).toString("base64")}`;
};
