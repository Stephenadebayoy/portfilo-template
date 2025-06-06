/** @format */

type ViewMode = "modal" | "drawer" | "fullScreen";

const VIEW_MODE_KEY = "viewMode";

export const getViewMode = (): ViewMode => {
  return (localStorage.getItem(VIEW_MODE_KEY) as ViewMode) || "drawer";
};

export const setViewMode = (mode: ViewMode) => {
  localStorage.setItem(VIEW_MODE_KEY, mode);
  window.dispatchEvent(new Event("viewModeChanged"));
};
