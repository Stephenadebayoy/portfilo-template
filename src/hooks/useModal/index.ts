/** @format */

import { useState, useEffect } from "react";
import { getViewMode, setViewMode } from "./storage";

export const useViewMode = () => {
  const [viewMode, setViewModeState] = useState(getViewMode());

  useEffect(() => {
    const handleStorageChange = () => {
      setViewModeState(getViewMode());
    };

    window.addEventListener("viewModeChanged", handleStorageChange);

    return () => {
      window.removeEventListener("viewModeChanged", handleStorageChange);
    };
  }, []);

  const updateViewMode = (mode: "modal" | "drawer" | "fullScreen") => {
    setViewMode(mode);
    setViewModeState(mode);
  };

  return { viewMode, updateViewMode };
};
