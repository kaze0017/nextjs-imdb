import Link from "next/link";
import React from "react";
import clsx from "clsx";

export default function MenuItem({
  title,
  href,
  icon: Icon,
}: {
  title: string;
  href: string;
  icon: React.ComponentType<React.ComponentProps<any>>;
}) {
  return (
    <Link href={href} className="flex items-center">
      <p className="mx-4 lg:mx-6 hover:text-amber-600">
        <span className={clsx("hidden sm:inline")}>{title}</span>
        <span className={clsx("inline sm:hidden", "h-6 w-6")}>
          <Icon width={30} height={30} />
        </span>
      </p>
    </Link>
  );
}
