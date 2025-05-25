/** @format */

import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={`relative rounded font-medium transition-shadow duration-500 overflow-hidden cursor-pointer ${
        showBorder ? "px-[1px] py-[1px]" : ""
      } ${className}`}
    >
      {showBorder && (
        <span
          className="absolute inset-0 z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <span
            className="absolute inset-0 bg-black rounded z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></span>
        </span>
      )}
      <span
        className="relative z-10 text-transparent bg-clip-text animate-gradient"
        style={{
          ...gradientStyle,
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </span>
    </span>
  );
}
