/** @format */

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/_shared/_utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  textStyle?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      }
    );
  }, [scope]);

  const renderWords = () => {
    const lines = words.split("\n");

    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => (
          <div key={`line-${lineIdx}`} className="inline-block">
            {line.split(" ").map((word, idx) => (
              <motion.span
                key={`${word}-${lineIdx}-${idx}`}
                className="dark:text-white text-black opacity-0 inline-block"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                  marginRight: "0.25rem",
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={`dark:text-white text-black text-2xl leading-snug tracking-wide ${className}`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
