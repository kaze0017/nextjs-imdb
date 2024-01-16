"use client";
import { useState } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 rounded focus:outline-none"
        onClick={handleClick}
      >
        <SunIcon
          width={30}
          height={30}
          className={clsx(
            theme === "dark" ? "hidden" : "block",
            "text-amber-500",
          )}
        />
        <MoonIcon
          width={30}
          height={30}
          className={clsx(
            theme !== "dark" ? "hidden" : "block",
            "text-gray-500",
          )}
        />
      </button>
    </div>
  );
}
