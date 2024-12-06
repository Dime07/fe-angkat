import { cookies } from "next/headers";

const fetchApi = async (url: string, options: RequestInit = {}) => {
  const accessToken = (await cookies()).get("an9kat")?.value;

  options.headers = {
    "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...options.headers,
  };

  const response = await fetch(url, options);

  return response.json();
};

export default fetchApi;
