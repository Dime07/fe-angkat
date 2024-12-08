"use server";

import { AuthService } from "@/services/auth";
import { cookies } from "next/headers";

export default async function register(
  _prevState: unknown,
  formData: FormData
) {
  const payload = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const registerRes = await AuthService.register(payload);

  if (registerRes.success) {
    // Set cookie for token
    (await cookies()).set({
      name: `${process.env.ACCESS_TOKEN_SECRET}`,
      value: registerRes.data.token,
    });
  }

  return registerRes;
}