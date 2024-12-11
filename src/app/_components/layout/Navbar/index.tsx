/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import useGetUserFromLocalstorage from "@/hooks/useGetUserFromLocalstorage";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";
import { cn } from "../../utils";

const NAV_LINK = [
  {
    name: "My Exercise",
    href: "/",
  },
  {
    name: "Community",
    href: "/community",
  },
];

const Navbar = () => {
  const { user } = useGetUserFromLocalstorage();
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 bg-neutral-950 shadow-sm flex justify-between items-center py-2 px-4 z-50">
      <Link href="/">
        <img
          src="/angkat-logo.svg"
          alt="angkat logo"
          className="w-full h-8"
          height={32}
          width={65}
        />
      </Link>
      <ul className="flex gap-2 text-xs items-center justify-center">
        {NAV_LINK.map((link) => (
          <li
            className={cn(
              "font-semibold px-2 py-0.5 flex items-center  rounded text-white",
              {
                "text-neutral-950 bg-white": pathname === link.href,
              }
            )}
            key={link.name}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        {user?.name ? (
          <LogoutButton />
        ) : (
          <p className="text-white font-medium text-sm">made with ❤️</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
