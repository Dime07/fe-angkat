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
  try {
    const response = await fetch(`${process.env.API_URL}${url}`, options);
    if (!response?.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      success: false,
      message: "something error when fetching data",
    };
  }
};

export default fetchApi;
