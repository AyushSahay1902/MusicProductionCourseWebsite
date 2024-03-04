'use client';

import React, {useState} from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem item="Home" active={active} setActive={setActive}>
                {/* <HoveredLink href="/web-dev">Web Development</HoveredLink> */}
                </MenuItem>
            </Link>
            <Link href={"/"}>
                <MenuItem item="Courses" active={active} setActive={setActive}>
                <HoveredLink href="/courses">Web Development</HoveredLink>
                </MenuItem>
            </Link>
            <Link href={"/"}>
                <MenuItem item="ContactUs" active={active} setActive={setActive}>
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                </MenuItem>
            </Link>
        </Menu>
    </div>
  );
}

export default Navbar