"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import login from "./action";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useToast } from "@/hooks/useToast";

export default function LoginPage() {
  const [state, formAction] = useActionState(login, null);
  const { addToast } = useToast();

  useEffect(() => {
    if (state) {
      if (!state.success) {
        addToast({ message: state.message, type: "error" });
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: state.data.id,
          name: state.data.name,
          email: state.data.email,
        })
      );
      addToast({
        message: "Login success, redirecting...",
        type: "success",
      }).then(() => {
        redirect("/");
      });
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-3 justify-center items-center py-4 min-h-[calc(100vh-40px)] overflow-auto">
      <div className="space-y-1">
        <h1 className="text-2xl text-neutral-950 font-semibold leading-tight text-center">
          Welcome to <span className="text-secondary-950">Angkat</span>
        </h1>
        <p className="text-neutral-950 text-sm text-center">
          your personal workout tracker
        </p>
      </div>
      <form
        action={(formData) => {
          formAction(formData);
        }}
        className="w-1/2 flex flex-col gap-3"
      >
        <Input
          type="text"
          placeholder="Email"
          name="email"
          label="Email"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          label="Password"
          required
        />
        <Button type="submit" className="w-full py-2 text-base">
          Login
        </Button>
      </form>
      <Link
        href="/auth/register"
        className="text-sm text-secondary-800 hover:font-medium"
      >
        Don&apos;t have an account?
      </Link>
    </div>
  );
}
