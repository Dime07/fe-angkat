"use server";

import { cookies } from "next/headers";

export default async function logout() {
  (await cookies()).delete({
    name: `${process.env.ACCESS_TOKEN_SECRET}`,
  });

  return true;
}
