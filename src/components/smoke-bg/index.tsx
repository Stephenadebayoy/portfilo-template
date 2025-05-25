/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";

export const SmokeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-300/30 blur-xl"
          initial={{
            x: `${Math.random() * 100 + 100}%`,
            y: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            x: `-${Math.random() * 200 + 100}%`,
            y: `${Math.random() * 100}%`,
            transition: {
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        />
      ))}
    </div>
  );
};
