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

export const Logo = ({ className, width = 250, height = 100 }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center justify-between md:block", className)}
    >
      <Image
        src={"/portlify.svg"}
        width={width}
        height={height}
        alt="portlify Logo"
        className={className}
      />
    </Link>
  );
};
