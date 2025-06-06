/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateField, setActiveFieldId } from "@/redux/slices/edit/editorSlice";

interface FieldStyles {
  color: string;
  fontFamily: string;
  fontSize: string;
}

export const useHeroSection = (
  templateId: string,
  data: { title: string; description?: string }
) => {
  const dispatch = useDispatch();
  const editorData = useSelector((state: RootState) => state.editor.data);
  const [isOpen, setIsOpen] = useState(false);

  const getFieldValue = (id: string, fallback: string) => {
    return editorData[id] !== undefined && editorData[id] !== null
      ? (editorData[id] as string)
      : fallback;
  };

  const getFieldStyles = (fieldId: string, defaults: FieldStyles) => ({
    color: getFieldValue(`${fieldId}-color`, defaults.color),
    fontFamily: getFieldValue(`${fieldId}-fontFamily`, defaults.fontFamily),
    fontSize: getFieldValue(`${fieldId}-fontSize`, defaults.fontSize),
  });

  const getFieldId = (name: string) => `template-${templateId}-${name}`;

  // Field IDs
  const greetingId = getFieldId("greeting");
  const titleId = getFieldId("title");
  const descId = getFieldId("description");

  // Field values
  const greeting = getFieldValue(greetingId, "Hi, I am");
  const title = getFieldValue(titleId, data.title);
  const description = getFieldValue(descId, data.description ?? "");

  // Styles
  const greetingStyles = getFieldStyles(greetingId, {
    color: "#555",
    fontFamily: "Arial, sans-serif",
    fontSize: "",
  });
  const titleStyles = getFieldStyles(titleId, {
    color: "#000",
    fontFamily: "Arial, sans-serif",
    fontSize: "",
  });
  const descStyles = getFieldStyles(descId, {
    color: "#666",
    fontFamily: "Arial, sans-serif",
    fontSize: "",
  });

  const handleFieldClick = (id: string, value: string | null) => {
    dispatch(updateField({ id, value }));
    dispatch(setActiveFieldId(id));
    setIsOpen(true);
  };

  const submitData = async () => {
    const payload = {
      greeting: {
        text: greeting,
        styles: {
          color: getFieldValue(`${greetingId}-color`, "#555"),
          fontFamily: getFieldValue(
            `${greetingId}-fontFamily`,
            "Arial, sans-serif"
          ),
          fontSize: getFieldValue(`${greetingId}-fontSize`, ""),
        },
      },
      title: {
        text: title,
        styles: {
          color: getFieldValue(`${titleId}-color`, "#000"),
          fontFamily: getFieldValue(
            `${titleId}-fontFamily`,
            "Arial, sans-serif"
          ),
          fontSize: getFieldValue(`${titleId}-fontSize`, ""),
        },
      },
      description: {
        text: description,
        styles: {
          color: getFieldValue(`${descId}-color`, "#666"),
          fontFamily: getFieldValue(
            `${descId}-fontFamily`,
            "Arial, sans-serif"
          ),
          fontSize: getFieldValue(`${descId}-fontSize`, ""),
        },
      },
    };

    console.log("payload", payload);
  };

  return {
    isOpen,
    setIsOpen,
    greetingId,
    titleId,
    descId,
    greeting,
    title,
    description,
    greetingStyles,
    titleStyles,
    descStyles,
    handleFieldClick,
    submitData,
  };
};
