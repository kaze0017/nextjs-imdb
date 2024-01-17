"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function NavbarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const urlSeachParams = new URLSearchParams(searchParams.toString());

  function handleClick() {
    replace(`${pathname}?type=${param}`);
  }

  return (
    <button
      className={clsx("hover:text-amber-600", {
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg":
          urlSeachParams.get("type") === param,
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
