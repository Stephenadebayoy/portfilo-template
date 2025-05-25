/** @format */

"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "default" | "zoomIn" | "zoomOut";
  repeat?: boolean;
  style?: React.CSSProperties;
  disableAnimation?: boolean;
  id?: any;
}

const AnimatedContainer = ({
  children,
  className,
  direction = "default",
  repeat = false,
  style,
  disableAnimation = false,
  id,
}: AnimatedContainerProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: !repeat, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      if (repeat) {
        controls.start("hidden").then(() => {
          controls.start("visible");
        });
      }
    }
  }, [controls, inView, repeat]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "default" ? 20 : 0,
      scale: direction === "zoomIn" ? 0.8 : direction === "zoomOut" ? 1.2 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  // If animation is disabled, return a plain div
  if (disableAnimation) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={className}
      style={style}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
