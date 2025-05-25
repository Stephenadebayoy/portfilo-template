/** @format */
"use client";

import { useState, useEffect } from "react";
import React from "react";

interface ToastConfig {
  message?: string;
  title?: string;
  description?: string;
  duration?: number;
  type?: "success" | "error" | "warning" | "neutral";
  direction?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  icon?: React.ReactNode;
}

let setToastState: React.Dispatch<React.SetStateAction<ToastConfig | null>>;

export const toast = (config: ToastConfig) => {
  if (setToastState) {
    setToastState(config);

    // Auto-clear toast after duration
    if (config.duration) {
      setTimeout(() => {
        setToastState(null);
      }, config.duration);
    }
  }
};

export const useToastManager = () => {
  const [toastConfig, setToastConfig] = useState<ToastConfig | null>(null);

  useEffect(() => {
    setToastState = setToastConfig;
    return () => {
      setToastState = () => {};
    };
  }, []);

  const clearToast = () => {
    setToastConfig(null);
  };

  return { toastConfig, clearToast };
};
