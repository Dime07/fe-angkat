/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";
import { cn } from "../../utils";
import navbarLogo from "@/app/_components/images/angkat-logo.svg";

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
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 bg-neutral-950 shadow-sm flex justify-between items-center py-2 px-4 z-50">
      <Link href="/">
        <img
          src={navbarLogo.src}
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
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
