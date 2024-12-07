"use server";

import { cookies } from "next/headers";

const fetchApi = async (url: string, options: RequestInit = {}) => {
  const accessToken = (await cookies()).get(
    "process.env.ACCESS_TOKEN_SECRET"
  )?.value;

  options.headers = {
    "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...options.headers,
  };

  // todo: research more about fetch api
  const response = await fetch(`${process.env.API_URL}${url}`, options);
  return response.json();
};

export default fetchApi;
