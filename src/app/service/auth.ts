import { IBEResponse } from "../types";
import { ILoginPayload, ILoginResponse } from "../types/auth";

const BASE_URL = process.env.API_URL;

export const AuthService = {
  login: async (
    payload: ILoginPayload
  ): Promise<IBEResponse<ILoginResponse>> => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  },
};
