"use client";

import s from "@/style/navBar.module.css";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

const NavBar = () => {
  const path = usePathname();
  const { width } = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  const linkClass = (pathname: string) =>
    clsx("text-wine-600 text-xl", {
      "underline text-wine-950": path === pathname,
    });

  const links = () => (
    <>
      <Link href='/resume' className={linkClass("/resume")}>
        Resume
      </Link>
      <Link href='/gallery' className={linkClass("/gallery")}>
        Gallery
      </Link>
      <Link href='/contact' className={linkClass("/contact")}>
        Contact
      </Link>
    </>
  );

  if (width !== 0 && width <= 768) {
    return (
      <nav>
        <div
          className={`${s.hamburger} ${showMenu ? s.active : ""}`}
          onClick={() => setShowMenu((prev) => !prev)}
          role='button'
        >
          <span className={`${s.line} bg-wine-800`} />
          <span className={`${s.line} bg-wine-800`} />
          <span className={`${s.line} bg-wine-800`} />
        </div>
        {showMenu && <div className={`${s.menu} bg-wine-100`}>{links()}</div>}
      </nav>
    );
  }

  return (
    <nav className='flex gap-4 items-center justify-between'>{links()}</nav>
  );
};

export default NavBar;
