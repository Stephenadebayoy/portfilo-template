/** @format */

"use client";

/** @format */

import { type ChangeEvent, useState } from "react";
import { useTemplateDispatch, useTemplateSelector } from "@/redux/store";
import { updateField } from "@/redux/slices/edit/editorSlice";
import { Upload } from "lucide-react";
import { ImageComponent } from "@/components/imageComponent";

type EditableImageProps = {
  id: string;
  src: string;
  placeholder?: string;
  width?: number;
  height?: number;
};

export const EditableImage = ({
  id,
  src,
  placeholder,
  width,
  height,
}: EditableImageProps) => {
  const dispatch = useTemplateDispatch();
  const editMode = useTemplateSelector((state) => state.editMode.editMode);

  const value = useTemplateSelector((state) => state.editor.data[id] || src);
  const [editing, setEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      dispatch(updateField({ id, value: url }));
      setEditing(false);
    }
  };

  if (!editMode) {
    return (
      <ImageComponent
        src={value || "/placeholder.svg"}
        alt="Editable"
        className="rounded-lg transition-all duration-200 group-hover:opacity-80"
        width={width || 0}
        height={height || 0}
        unoptimized
        priority
      />
    );
  }

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => setEditing(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageComponent
        src={value || "/placeholder.svg"}
        alt="Editable"
        className="rounded-lg transition-all duration-200 group-hover:opacity-80"
        width={width || 0}
        height={height || 0}
        unoptimized
        priority
      />

      {/* Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center transition-opacity duration-200">
          <div className="text-white text-center">
            <Upload className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-medium">
              {placeholder || "click to change your profile image"}
            </p>
          </div>
        </div>
      )}

      {editing && (
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          onBlur={() => setEditing(false)}
          className="absolute inset-0 opacity-0 cursor-pointer"
          autoFocus
        />
      )}
    </div>
  );
};
