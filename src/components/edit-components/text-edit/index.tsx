/** @format */

import WordFadeIn from "@/components/framer/word-fade";
import { updateField } from "@/redux/slices/edit/editorSlice";
import { useTemplateDispatch, useTemplateSelector } from "@/redux/store";
import { Input, Textarea } from "@packages/_shared";

import {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  useEffect,
} from "react";

type EditableTextProps = {
  id: string;
  text: string;
  className?: string;
  multiline?: boolean;
  type?: string;
  animate?: boolean;
};

export const EditableText = ({
  id,
  text,
  className,
  multiline = false,
  type,
  animate,
}: EditableTextProps) => {
  const dispatch = useTemplateDispatch();
  const editMode = useTemplateSelector((state) => state.editMode.editMode);

  const reduxValue = useTemplateSelector((state) => state.editor.data[id]);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(reduxValue || text);

  useEffect(() => {
    setValue(reduxValue || text);
  }, [reduxValue, text]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const commitChange = () => {
    dispatch(updateField({ id, value }));
    setEditing(false);
  };

  const handleBlur = () => {
    commitChange();
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!multiline && e.key === "Enter") {
      commitChange();
    } else if (e.key === "Escape") {
      setValue(reduxValue || text);
      setEditing(false);
    }
  };
  if (!editMode) {
    return (
      <span className={`${className}  transition-colors`}>
        {animate ? <WordFadeIn words={value} /> : value}
      </span>
    );
  }

  if (!editing) {
    return (
      <span
        className={`${className} cursor-pointer hover:underline dark:hover:bg-gray-800 rounded py-0.5 transition-colors`}
        onClick={() => setEditing(true)}
      >
        {reduxValue || text}
      </span>
    );
  }

  return multiline ? (
    <Textarea
      className={`${className} border-none rounded resize-y py-1 px-2 focus:outline-none h-fit  focus:ring-0`}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
      rows={4}
    />
  ) : (
    <Input
      className={`${className} border-none rounded h-fit py-1 px-0 focus:outline-none focus:ring-0`}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
      type={type}
    />
  );
};
