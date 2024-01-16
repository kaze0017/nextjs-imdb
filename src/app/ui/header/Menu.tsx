import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "@/app/ui/header/MenuItem";
import DarkModeSwitch from "@/app/ui/header/DarkModeSwitch";

export default function Menu() {
  const menuItems: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<React.ComponentProps<any>>;
  }> = [
    {
      title: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      title: "About",
      href: "/about",
      icon: ExclamationCircleIcon,
    },
  ];

  return (
    <div className="flex items-center justify-between m-x-2 max-w-6xl sm:mx-auto py-6">
      <nav className="flex sm:flex-row ">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.title + menuItem.href} {...menuItem} />
        ))}
      </nav>
      <div className=" flex items-center space-x-4">
        <DarkModeSwitch />
        <p className="text-2xl">
          <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </p>
      </div>
    </div>
  );
}
