"use client";

import { useRef } from "react";
import { Paperclip } from "lucide-react";
import { cn } from "@/_shared/_utils/cn";

interface ChatInputProps {
  className?: string;
  onFileChange: (files: FileList) => void;
  onTextChange: (text: string) => void;
  placeholder?: string;
  supportedFiles?: string;
}

const ChatInput = ({
  className,
  onFileChange,
  onTextChange,
  placeholder = "Type your question...",
  supportedFiles = "PNG, JPG, PDF",
}: ChatInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileChange(files);
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        <textarea
          onChange={(e) => onTextChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full h-40 rounded-lg bg-background focus-visible:ring-1",
            "focus-visible:ring-primary border p-3 resize-none",
            "pr-10 pb-10"
          )}
        />

        <button
          type="button"
          onClick={handleUploadClick}
          className="absolute left-2 bottom-12 hover:bg-accent rounded-full transition-colors dark:text-white/50"
          aria-label="Attach file"
        >
          <Paperclip className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept="image/png, image/jpeg, application/pdf"
      />
    </div>
  );
};

export default ChatInput;
