"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";

type SidebarProps = {
  fullName: string;
  avatar: string;
  email: string;
};

const Sidebar = ({ fullName, avatar, email }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/images/thor_1.png"
          alt="brand logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src="/images/thor_1.png"
          alt="brand logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src="/images/files.png"
        alt="files image"
        width={506}
        height={418}
        className="w-[200px]"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="user avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />

        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
