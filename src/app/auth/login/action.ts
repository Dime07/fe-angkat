"use server";

import { AuthService } from "@/app/service/auth";
import { cookies } from "next/headers";

export default async function login(_prevState: unknown, formData: FormData) {
  const payload = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const loginRes = await AuthService.login(payload);

  if (loginRes.success) {
    // Set cookie for token
    (await cookies()).set({
      name: `${process.env.ACCESS_TOKEN_SECRET}`,
      value: loginRes.data.token,
    });
  }

  return loginRes;
}
