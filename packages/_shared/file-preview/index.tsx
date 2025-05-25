/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoDocument } from "react-icons/io5";
import { X } from "lucide-react";

const FilePreview = ({
  text,
  fileUrl,
  className,
}: {
  text: string;
  fileUrl: string;
  className?: string;
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const fileExtension = fileUrl?.split(".").pop()?.toLowerCase();

  return (
    <>
      <section
        className={`border shadow-sm border-black/5 flex justify-between w-full items-center h-14 px-4 rounded-md ${className}`}
      >
        <section className="flex items-center gap-x-2">
          <section className="flex items-center justify-center w-10 rounded-full h-10 bg-[#D7F1FF]">
            <IoDocument className="text-primary" size={16} />
          </section>
          <p className="text-sm dark:text-white font-medium">{text}</p>
        </section>

        <Image
          src="/images/eye.png"
          width={24}
          height={24}
          alt="preview"
          className="cursor-pointer"
          onClick={() => setShowPreview(true)}
        />
      </section>

      {showPreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-md p-4 w-full max-w-2xl max-h-[90vh] overflow-auto relative">
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={() => setShowPreview(false)}
            >
              <X size={20} />
            </button>

            {fileExtension === "pdf" ? (
              <iframe
                src={fileUrl}
                className="w-full h-[80vh]"
                title="PDF Preview"
              />
            ) : (
              <img
                src={fileUrl}
                alt="File preview"
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FilePreview;
