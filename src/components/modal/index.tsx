/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title?: string;
  others?: ReactNode;
  border?: boolean;
  closeIcon?: boolean;
  noPadding?: boolean;
  zIndex?: string;
}

const Modal = ({
  others,
  isOpen,
  onClose,
  children,
  className,
  title,
  border = false,
  closeIcon = true,
  noPadding = false,
  zIndex,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 cursor-pointer ${
            zIndex ? zIndex : "z-50"
          } flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`bg-white w-full  py-4  cursor-default rounded-lg shadow ${
              className || ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {others}
            <div
              className={`flex ${
                border ? "border-b" : ""
              } justify-between items-center px-4 ${noPadding ? "" : "pb-4"} `}
            >
              <h1 className="font-semibold text-[#1f1f1f] text-xl">{title}</h1>
              {closeIcon && (
                <X onClick={onClose} size={16} className="cursor-pointer" />
              )}
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
