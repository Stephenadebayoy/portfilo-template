/** @format */
"use client";
import React, { useState, ChangeEvent, useRef, ReactNode } from "react";
import Image from "next/image";
import { Input } from "./input";

interface FileUploaderProps {
  uploadUrl: string;
  allowedTypes?: string[];
  maxSize?: number;
  onSuccess?: () => void;
  buttonText?: ReactNode;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  uploadUrl,
  allowedTypes = [],
  maxSize = 5 * 1024 * 1024,
  buttonText = "Click to Upload Files",
  onSuccess,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (
      allowedTypes.length > 0 &&
      !files.every((file) => allowedTypes.includes(file.type))
    ) {
      setError(
        `Only the following file types are allowed: ${allowedTypes.join(", ")}`
      );
      return;
    }

    if (files.some((file) => file.size > maxSize)) {
      setError(
        `File size should not exceed ${(maxSize / 1024 / 1024).toFixed(2)} MB`
      );
      return;
    }

    setSelectedFiles(files);
    setError(null);
  };

  const uploadFiles = async () => {
    if (selectedFiles.length === 0) {
      setError("No files selected for upload.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      setSuccess(true);
      setSelectedFiles([]);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="">
      <Input
        type="file"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        disabled={uploading}
      />
      <div
        className="border-dashed border-2 border-[#98A2B3] text-center items-center cursor-pointer flex p-6 rounded-md space-x-2"
        onClick={handleClick}
      >
        <Image
          src={"/images/upload.png"}
          width={24}
          height={24}
          alt="upload"
          className="cursor-pointer"
        />
        <div className="text-center text-sm justify-center flex">
          {buttonText}
        </div>
      </div>
      <button
        onClick={uploadFiles}
        disabled={uploading || selectedFiles.length === 0}
        style={{
          marginTop: "10px",
          display: selectedFiles.length > 0 ? "inline-block" : "none",
        }}
      >
        {uploading ? "Uploading..." : "Start Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Files uploaded successfully!</p>
      )}
    </div>
  );
};

export default FileUploader;
