/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type EditorDataValue =
  | string
  | string[]
  | { [key: string]: EditorDataValue | null };

export interface EditorData {
  [key: string]: EditorDataValue | null;
}

interface EditorState {
  data: EditorData;
  currentTemplateId: number | null;
  isDirty: boolean;
}

const initialState: EditorState = {
  data: {},
  currentTemplateId: null,
  isDirty: false,
};

// Helper function to deep update nested fields given a dot-separated path
function deepUpdate(
  obj: EditorData,
  path: string[],
  value: EditorDataValue | null
): EditorData {
  if (path.length === 1) {
    return { ...obj, [path[0]]: value };
  }

  const key = path[0];
  const next =
    obj[key] && typeof obj[key] === "object" ? (obj[key] as EditorData) : {};

  return {
    ...obj,
    [key]: deepUpdate(next, path.slice(1), value),
  };
}

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ id: string; value: EditorDataValue | null }>
    ) => {
      const { id, value } = action.payload;
      const path = id.split(".");
      state.data = deepUpdate(state.data, path, value);
      state.isDirty = true;
    },

    resetEditor: (state) => {
      state.data = {};
      state.currentTemplateId = null;
      state.isDirty = false;
    },

    loadTemplate: (
      state,
      action: PayloadAction<{ templateId: number; data: EditorData }>
    ) => {
      const { templateId, data } = action.payload;
      state.currentTemplateId = templateId;
      state.data = { ...data };
      state.isDirty = false;
    },

    bulkUpdate: (state, action: PayloadAction<EditorData>) => {
      state.data = { ...state.data, ...action.payload };
      state.isDirty = true;
    },

    removeField: (state, action: PayloadAction<string>) => {
      const path = action.payload.split(".");

      // Helper to deep delete
      function deepDelete(obj: EditorData, keys: string[]): EditorData {
        if (keys.length === 1) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [keys[0]]: _, ...rest } = obj;
          return rest;
        }

        const key = keys[0];
        if (!(key in obj)) return obj;

        return {
          ...obj,
          [key]: deepDelete(obj[key] as EditorData, keys.slice(1)),
        };
      }

      state.data = deepDelete(state.data, path);
      state.isDirty = true;
    },
  },
});

export const {
  updateField,
  resetEditor,
  loadTemplate,
  bulkUpdate,
  removeField,
} = editorSlice.actions;

export default editorSlice.reducer;
