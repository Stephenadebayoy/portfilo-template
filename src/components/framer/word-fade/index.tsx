/** @format */

"use client";

import { cn } from "@/_shared/_utils/cn";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay, duration: 0.4 },
    }),
  },
  className,
}: WordFadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const _words = words.split(" ");

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn(
        "tracking-[-0.01em] font-semibold drop-shadow-sm",
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span
          key={word + i}
          variants={variants}
          custom={i}
          className={`${className ? className : "font-semibold"} `}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
