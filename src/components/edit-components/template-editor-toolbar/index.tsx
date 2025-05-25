/** @format */

"use client";

import { useTemplateEditor } from "@/hooks/use-template-editor";
import { Button } from "@packages/_shared";
import { Save, RotateCcw, Download } from "lucide-react";

interface TemplateEditorToolbarProps {
  templateId: number;
  onSave?: () => void;
  onReset?: () => void;
}

export const TemplateEditorToolbar = ({
  templateId,
  onSave,
  onReset,
}: TemplateEditorToolbarProps) => {
  const { isDirty, saveTemplate, resetEditor, hasUnsavedChanges, editorData } =
    useTemplateEditor();

  const handleSave = () => {
    const savedData = saveTemplate();
    onSave?.();
    console.log("Template saved:", savedData);
  };

  const handleReset = () => {
    resetEditor();
    onReset?.();
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(editorData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `template-${templateId}-data.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Template Editor</h2>
          {hasUnsavedChanges() && (
            <Button variant="destructive" className="text-xs">
              Unsaved Changes
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            disabled={Object.keys(editorData).length === 0}
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            disabled={!isDirty}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>

          <Button size="sm" onClick={handleSave} disabled={!isDirty}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};
