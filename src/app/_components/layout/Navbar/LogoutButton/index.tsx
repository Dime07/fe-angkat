"use client";

import Button from "@/app/_components/Button";
import logout from "../action";
import useGetUserFromLocalstorage from "@/hooks/useGetUserFromLocalstorage";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const { removeUser, user } = useGetUserFromLocalstorage();

  const handleLogout = async () => {
    startTransition(() => {
      logout();
      removeUser();
      router.push("/auth/login");
    });
  };

  return (
    <>
      {!!user ? (
        <Button
          onClick={handleLogout}
          className="bg-white py-1 px-3 text-neutral-950 font-medium"
        >
          <span>Logout</span>
        </Button>
      ) : (
        <p>
          <span className="text-white">Made with ❤️</span>
        </p>
      )}
    </>
  );
};

export default LogoutButton;
