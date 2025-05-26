/** @format */

"use client";

import { cn } from "@/_shared/_utils/cn";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  noText?: boolean;
};

export const Logo = ({
  className,
  width = 250,
  height = 100,
  noText = true,
}: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center justify-between md:block", className)}
    >
      <Image
        src={noText ? "/portlify.svg" : "/portlify-logo.svg"}
        width={width}
        height={height}
        alt="portlify Logo"
        className={className}
      />
    </Link>
  );
};
