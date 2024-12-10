"use client";

import useGetUserFromLocalstorage from "@/hooks/useGetUserFromLocalstorage";

const Header = () => {
  const { user } = useGetUserFromLocalstorage();
  return (
    <div className="space-y-0.5 mt-5">
      <h1 className="text-2xl font-bold text-neutral-950">
        Welcome , {user?.name} 👋
      </h1>
      <p className="text-neutral-800 text-sm">Lets start a healthy life</p>
    </div>
  );
};

export default Header;
