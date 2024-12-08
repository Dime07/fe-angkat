"use client";

import Link from "next/link";
import Button from "../../Button";
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
    <nav className="w-full fixed top-0 bg-white shadow-sm flex justify-between items-center py-2 px-4 z-50">
      {/* //Todo : Replace logo with image */}
      <a href="/">Angkat</a>
      <ul className="flex gap-2 text-xs">
        {NAV_LINK.map((link) => (
          <li
            className={cn(
              "font-semibold px-2 py-0.5 flex items-center bg-slate-100 rounded text-neutral-950",
              {
                "text-secondary-700": pathname === link.href,
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
          <Link href="/auth/login">
            <Button variant="secondary">
              <span>Login</span>
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
