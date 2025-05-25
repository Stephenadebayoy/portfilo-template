/** @format */

"use client";

import { cn } from "@/_shared/_utils/cn";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;

};

export const Logo = ({
  className,
  width = 150,
  height = 100,

}: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center justify-between md:block", className)}
    >
      <Image
        src={"/images/logo.png"}
        width={width}
        height={height}
        alt="gigbanc Logo"
        className={className}
      />
    </Link>
  );
};
