/** @format */

import { Expand, PanelRightClose } from "lucide-react";
import { useViewMode } from "..";
import { Button } from "@packages/_shared/button";
import { toast } from "@packages/_shared/toaster/toaster-provider";

const ViewModeToggle = () => {
  const { viewMode, updateViewMode } = useViewMode();
  const handleClick = () => {
    if (viewMode === "drawer") {
      updateViewMode("modal");
      toast({
        title: "Success!",
        description: "Switched to Modal mode ",
      });
    } else {
      updateViewMode("drawer");
      toast({
        title: "Success!",
        description: "Switched to Drawer mode ",
      });
    }
  };

  return (
    <Button
      variant={"unstyled"}
      className="flex p-0 font-normal items-center gap-x-2 cursor-pointer text-sm"
      onClick={handleClick}
    >
      {viewMode === "drawer" ? (
        <Expand size={16} />
      ) : (
        <PanelRightClose size={16} />
      )}
      {viewMode === "drawer" ? "Modal mode" : "Drawer mode"}
    </Button>
  );
};

export default ViewModeToggle;
