/** @format */
"use client";
import { CustomModalProps } from "@/types/types";
import { useRouter } from "next/navigation";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  className,
}: CustomModalProps) => {
  const router = useRouter();
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
      router.refresh();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1000,
      }}
      onClick={handleOverlayClick}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",

          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
        }}
        className={`${className} `}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className=""
        >
          {/* <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
            className="cursor-pointer"
          >
            <FaTimes />
          </button> */}
        </div>
        <div style={{ marginTop: "10px" }} className="w-fit">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
