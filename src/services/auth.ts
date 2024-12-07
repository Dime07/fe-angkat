import { IBEResponse } from "@/types";
import { ILoginPayload, IAuthResponse } from "@/types/auth";
import fetchApi from "@/utils/fetch";

export const AuthService = {
  login: async (
    payload: ILoginPayload
  ): Promise<IBEResponse<IAuthResponse>> => {
    return await fetchApi("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },

  register: async (
    payload: ILoginPayload
  ): Promise<IBEResponse<IAuthResponse>> => {
    return await fetchApi("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
};
