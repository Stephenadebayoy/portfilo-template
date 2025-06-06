/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { updateField } from "@/redux/slices/edit/editorSlice";
import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@packages/_shared";
import { Slider } from "@packages/_shared/slider";
import { fonts } from "@/_shared/_utils/data";

const fontSizes = ["12px", "14px", "16px", "18px", "20px", "24px", "30px"];

export const HeroEditorForm = ({
  submitData,
}: {
  onClose: () => void;
  submitData: any;
}) => {
  const editorData = useSelector((state: RootState) => state.editor.data);
  const activeFieldId = useSelector(
    (state: RootState) => state.editor.activeFieldId
  );
  const dispatch = useDispatch();

  const getFieldStyleValue = (suffix: string, fallback: string) => {
    if (!activeFieldId) return fallback;
    const key = `${activeFieldId}-${suffix}`;
    return editorData[key] !== undefined
      ? (editorData[key] as string)
      : fallback;
  };

  const textValue =
    activeFieldId && editorData[activeFieldId] !== undefined
      ? (editorData[activeFieldId] as string)
      : "";

  const colorValue = getFieldStyleValue("color", "#000000");
  const fontFamilyValue = getFieldStyleValue("fontFamily", fonts[0]);
  const fontSizeValue = getFieldStyleValue("fontSize", fontSizes[2]);
  const isDescriptionField = activeFieldId
    ?.toLowerCase()
    .includes("description");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (activeFieldId) {
      dispatch(updateField({ id: activeFieldId, value: e.target.value }));
    }
  };

  const handleStyleChange = (suffix: string, value: string) => {
    if (!activeFieldId) return;
    dispatch(updateField({ id: `${activeFieldId}-${suffix}`, value }));
  };

  return (
    <div className="p-4 flex flex-col space-y-4">
      <Label className="font-semibold ">Text Content</Label>
      {isDescriptionField ? (
        <Textarea
          autoFocus
          value={textValue}
          onChange={(e) => {
            if (activeFieldId) {
              dispatch(
                updateField({ id: activeFieldId, value: e.target.value })
              );
            }
          }}
          placeholder="Edit content"
          className="border text-sm resize-none border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500  min-h-[80px]"
        />
      ) : (
        <Input
          autoFocus
          type="text"
          value={textValue}
          onChange={handleChange}
          placeholder="Edit content"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      )}

      <Label className="font-semibold ">Font Family</Label>
      <Select
        value={fontFamilyValue}
        onValueChange={(value) => handleStyleChange("fontFamily", value)}
      >
        <SelectTrigger className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <SelectValue placeholder="Select font family" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {fonts.map((font) => (
            <SelectItem key={font} value={font} style={{ fontFamily: font }}>
              {font.split(",")[0].replace(/['"]/g, "")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label className="font-semibold  flex items-center justify-between">
        Font Size
        <span className="ml-2 text-sm text-gray-600">{fontSizeValue}</span>
      </Label>
      <Slider
        min={8}
        max={72}
        step={1}
        value={[parseInt(fontSizeValue, 10)]}
        onValueChange={(valueArray: number[]) =>
          handleStyleChange("fontSize", valueArray[0] + "px")
        }
        className="w-full h-9"
      />
      <Label className="font-semibold text-sm ">Text Color</Label>
      <input
        type="color"
        value={colorValue}
        onChange={(e) => handleStyleChange("color", e.target.value)}
        className="w-16 h-10 rounded border-none cursor-pointer"
      />
      <button onClick={submitData}>Save</button>
    </div>
  );
};
