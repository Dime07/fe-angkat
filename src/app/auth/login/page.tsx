"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import login from "./action";
import { useActionState, useEffect } from "react";

export default function LoginPage() {
  const [state, formAction] = useActionState(login, null);

  useEffect(() => {
    if (state) {
      if (!state.success) {
        alert(state.message);
        return;
      }
    }
  }, [state]);

  return (
    <div className="flex flex-col justify-center items-center py-4 min-h-[calc(100vh-40px)] overflow-auto">
      <h1 className="text-2xl text-neutral-950 font-semibold leading-tight">
        Welcome to <span className="text-secondary-950">Angkat</span>
      </h1>
      <p className="text-neutral-950 text-sm">your personal workout tracker</p>
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
        <Button
          type="submit"
          className="w-full py-2 text-base bg-secondary-950"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
