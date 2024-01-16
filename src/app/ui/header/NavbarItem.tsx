"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function NavbarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const urlSeachParams = new URLSearchParams(searchParams);

  return (
    <Link href={`/?type=${param}`}>
      <p
        className={clsx("hover:text-amber-600", {
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg":
            urlSeachParams.get("type") === param,
        })}
      >
        {title}
      </p>
    </Link>
  );
}
