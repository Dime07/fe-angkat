"use server";

import { AuthService } from "@/app/service/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(_prevState: unknown, formData: FormData) {
  const payload = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const loginRes = await AuthService.login(payload);

  console.log(loginRes);

  if (loginRes.success) {
    (await cookies()).set({
      name: "an9kat",
      value: loginRes.data.token,
    });
    redirect("/");
  }

  return loginRes;
}
