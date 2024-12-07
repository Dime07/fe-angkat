"use client";

import useGetUser from "@/app/hooks/useGetUser";

const Header = () => {
  const { user } = useGetUser();
  return (
    <div className="space-y-0.5 mt-5">
      <h1 className="text-2xl font-bold text-neutral-950">
        Welcome , {user.name} 👋
      </h1>
      <p className="text-neutral-800 text-sm">
        Let&apos;s start a healthy life
      </p>
    </div>
  );
};

export default Header;
