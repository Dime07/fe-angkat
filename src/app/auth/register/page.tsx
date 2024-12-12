"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import register from "./action";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import useGetUserFromLocalstorage from "@/hooks/useGetUserFromLocalstorage";

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction] = useActionState(register, null);
  const { addToast } = useToast();
  const { handleSetUser } = useGetUserFromLocalstorage();

  useEffect(() => {
    if (state) {
      if (!state.success) {
        addToast({ message: state.message, type: "error" });
        return;
      }

      handleSetUser({
        id: String(state.data.id),
        name: state.data.name,
        email: state.data.email,
      });
      router.push("/");
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-3 justify-center items-center py-4 min-h-[calc(100vh-40px)] overflow-auto">
      <div className="space-y-1">
        <h1 className="text-2xl text-neutral-950 font-semibold leading-tight text-center">
          Welcome to <span className="text-secondary-950">Angkat</span>
        </h1>
        <p className="text-neutral-950 text-sm text-center">
          create an account to start tracking your workout
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
          placeholder="Name"
          name="name"
          label="Name"
          required
        />
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
          Register
        </Button>
      </form>
      <Link
        href="/auth/login"
        className="text-sm text-secondary-800 hover:font-medium"
      >
        Already have an account?
      </Link>
    </div>
  );
}
