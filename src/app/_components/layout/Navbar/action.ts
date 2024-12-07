"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {
  (await cookies()).delete({
    name: `${process.env.ACCESS_TOKEN_SECRET}`,
  });
  redirect("/auth/login");
}
