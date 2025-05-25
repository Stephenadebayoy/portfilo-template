/** @format */

"use client";

import { cn } from "@/_shared/_utils/cn";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="flex  items-center">
      {text.split("").map((char, i) => (
        <motion.h1
          key={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={framerProps}
          transition={{ duration, delay: i * delayMultiple }}
          className={cn("drop-shadow-sm", className)}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.h1>
      ))}
    </div>
  );
}
