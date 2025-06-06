/** @format */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  drawerWidth?: number; // optional, default width in px
}

const drawerVariants = {
  hidden: { x: "100%", width: 0, opacity: 0 },
  visible: { x: 0, width: 320, opacity: 1 }, // width 320px example
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  drawerWidth = 320,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex flex-col bg-white shadow-lg border-l fixed right-0 h-full border-gray-200"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={drawerVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            minWidth: drawerWidth,
            maxWidth: drawerWidth,
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className=" font-semibold">{title}</h2>
            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="text-gray-600 hover:text-gray-900"
            >
              &#10005;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto ">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomDrawer;
