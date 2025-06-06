/** @format */

"use client";

import { cn } from "@/_shared/_utils/cn";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurIntProps {
  word: string | ReactNode;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className, "drop-shadow-sm ")}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
