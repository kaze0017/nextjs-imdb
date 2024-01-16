import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const navBarItems: Array<{
    title: string;
    param: string;
  }> = [
    {
      title: "Trending",
      param: "trending",
    },
    {
      title: "Top Rated",
      param: "top_rated",
    },
  ];
  return (
    <div className="bg-gray-100 dark:bg-gray-800    py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-center space-x-8 lg:text-lg">
          {navBarItems.map((navBarItem) => (
            <NavbarItem
              key={navBarItem.title + navBarItem.param}
              {...navBarItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
