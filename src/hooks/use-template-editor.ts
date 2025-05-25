/** @format */

"use client";

import { useCallback } from "react";
import { useTemplateDispatch, useTemplateSelector } from "@/redux/store";
import {
  updateField,
  resetEditor,
  bulkUpdate,
  removeField,
} from "@/redux/slices/edit/editorSlice";

export const useTemplateEditor = () => {
  const dispatch = useTemplateDispatch();
  const editorState = useTemplateSelector((state) => state.editor);

  const updateFieldValue = useCallback(
    (id: string, value: string) => {
      dispatch(updateField({ id, value }));
    },
    [dispatch]
  );

  const resetEditorData = useCallback(() => {
    dispatch(resetEditor());
  }, [dispatch]);

  const bulkUpdateFields = useCallback(
    (data: Record<string, string>) => {
      dispatch(bulkUpdate(data));
    },
    [dispatch]
  );

  const removeFieldValue = useCallback(
    (id: string) => {
      dispatch(removeField(id));
    },
    [dispatch]
  );

  const saveTemplate = useCallback(() => {
    // Here you would typically save to your backend
    console.log("Saving template data:", editorState.data);
    // You could also dispatch an action to mark as saved
    return editorState.data;
  }, [editorState.data]);

  const getFieldValue = useCallback(
    (id: string, fallback = "") => {
      return editorState.data[id] || fallback;
    },
    [editorState.data]
  );

  const hasUnsavedChanges = useCallback(() => {
    return editorState.isDirty;
  }, [editorState.isDirty]);

  return {
    // State
    editorData: editorState.data,
    currentTemplateId: editorState.currentTemplateId,
    isDirty: editorState.isDirty,

    // Actions
    updateField: updateFieldValue,
    resetEditor: resetEditorData,

    bulkUpdate: bulkUpdateFields,
    removeField: removeFieldValue,
    saveTemplate,
    getFieldValue,
    hasUnsavedChanges,
  };
};
