import { IBEResponse } from "../types";
import { ILoginPayload, ILoginResponse } from "../types/auth";
import fetchApi from "../utils/fetch";

const BASE_URL = process.env.API_URL;

export const AuthService = {
  login: async (
    payload: ILoginPayload
  ): Promise<IBEResponse<ILoginResponse>> => {
    return await fetchApi(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
};
