"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  const linkClass = (pathname: string) =>
    clsx("text-wine-600 text-xl", { "underline text-wine-950": path === pathname });

  return (
    <nav className='flex gap-4 items-center justify-between'>
      <Link href='/resume' className={linkClass("/resume")}>
        Resume
      </Link>
      <Link href='/gallery' className={linkClass("/gallery")}>
        Gallery
      </Link>
      <Link href='/contact' className={linkClass("/contact")}>
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
