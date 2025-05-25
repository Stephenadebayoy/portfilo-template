/** @format */
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle } from "react-feather";
import { MdError, MdWarningAmber } from "react-icons/md";

interface ToasterProps {
  config: {
    message?: string;
    title?: string;
    description?: string;
    duration?: number;
    type?: "success" | "error" | "warning" | "neutral";
    direction?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    icon?: React.ReactNode;
  };
  onClose: () => void;
}

const Toaster = ({ config, onClose }: ToasterProps) => {
  const {
    message,
    title,
    description,
    duration = 5000,
    type = "success",
    direction = "top-right",
    icon,
  } = config;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const colorScheme = {
    success: {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      bg: "bg-white border border-gray-100 dark:border-none",
      text: "text-blacky",
      loading: "from-green-500 to-green-400",
    },
    error: {
      icon: <MdError className="w-5 h-5 text-red-500" />,
      bg: "bg-red-50",
      text: "text-red-800",
      loading: "from-red-500 to-red-400",
    },
    warning: {
      icon: <MdWarningAmber className="w-5 h-5 text-yellow" />,
      bg: "bg-yellow/40 z-40",
      text: "text-black",
      loading: "from-yellow to-yellow",
    },
    neutral: {
      icon: null,
      bg: "bg-white border border-gray-200",
      text: "text-black",
      loading: "from-gray-300 to-gray-200",
    },
  };

  const position = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: direction.includes("left") ? "-100%" : "100%",
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction.includes("left") ? "-100%" : "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.5}
        onDragEnd={(event, info) => {
          if (Math.abs(info.offset.x) > 100) {
            onClose();
          }
        }}
        className={`fixed ${position[direction]} z-50 ${colorScheme[type].bg} shadow-lg rounded-lg p-4 max-w-sm w-full cursor-grab active:cursor-grabbing`}
      >
        <div className="flex z-50 items-start space-x-5">
          {icon ? icon : colorScheme[type].icon}
          <div>
            {title && (
              <p className={`font-semibold ${colorScheme[type].text}`}>
                {title}
              </p>
            )}
            <p className={`text-sm ${colorScheme[type].text}`}>
              {description || message}
            </p>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme[type].loading} origin-left`}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Toaster;
