/** @format */

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@packages/_shared/drawer";
import { X } from "lucide-react";
import { ChevronLeft } from "react-feather";
import Modal from "../modal";
import { useViewMode } from "@/hooks/useModal";

interface ModalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
  showBackButton?: boolean;
}

const ModalDrawer = ({
  isOpen,
  onClose,
  onBack,
  children,
  title,
  className,
  showBackButton = false,
}: ModalDrawerProps) => {
  const { viewMode } = useViewMode();

  if (viewMode === "modal") {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={` ${className ? className : "max-w-sm"} bg-white text-black`}
        title={title}
        border
      >
        {children}
      </Modal>
    );
  }

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={onClose}>
      {/* Overlay wrapper */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="pointer-events-auto h-full rounded-none">
          <DrawerContent
            className={`h-full rounded-none ${
              viewMode === "drawer"
                ? "inset-x-auto w-full xs:w-[28rem]"
                : "inset-x-0 w-full"
            } block right-0 dark:!bg-blacky dark:!text-white outline-none dark:border-none bg-white`}
          >
            <DrawerHeader className="flex justify-between items-center ">
              <div className="flex items-center space-x-1">
                {showBackButton && onBack && (
                  <ChevronLeft className="cursor-pointer" onClick={onBack} />
                )}
                <DrawerTitle className="text-xl dark:text-white">
                  {title}
                </DrawerTitle>
              </div>
              <X
                onClick={onClose}
                size={18}
                className="cursor-pointer dark:text-white"
              />
            </DrawerHeader>
            {children}
          </DrawerContent>
        </div>
      </div>
    </Drawer>
  );
};

export default ModalDrawer;
