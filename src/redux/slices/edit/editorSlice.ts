/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StyledText {
  text: string;
  color?: string; // e.g. "#FF0000"
  fontSize?: string; // e.g. "14px", "1.2rem"
  fontWeight?: string; // e.g. "bold", "400"
  fontStyle?: string; // e.g. "italic"
  // add more style props as needed
}

export type EditorDataValue =
  | string
  | string[]
  | StyledText
  | { [key: string]: EditorDataValue | null };

export interface EditorData {
  [key: string]: EditorDataValue | null;
}

interface EditorState {
  data: EditorData;
  currentTemplateId: number | null;
  isDirty: boolean;
  activeFieldId: string | null; // added active field id
}

const initialState: EditorState = {
  data: {},
  currentTemplateId: null,
  isDirty: false,
  activeFieldId: null,
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

interface UpdateFieldStylePayload {
  id: string; // dot-separated path to the field
  styles: Partial<StyledText>; // partial styles to update (e.g., { color: "#00f" })
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

    updateFieldStyle: (
      state,
      action: PayloadAction<UpdateFieldStylePayload>
    ) => {
      const { id, styles } = action.payload;
      const path = id.split(".");

      // Traverse to get existing value
      let currentValue: EditorDataValue | null = state.data;
      for (const segment of path) {
        if (!currentValue || typeof currentValue !== "object") {
          currentValue = null;
          break;
        }
        currentValue = (currentValue as any)[segment] ?? null;
      }

      // If current value is StyledText, merge styles; else create new with empty text
      let newValue: StyledText;
      if (
        currentValue &&
        typeof currentValue === "object" &&
        "text" in currentValue
      ) {
        newValue = { ...(currentValue as StyledText), ...styles };
      } else {
        newValue = { text: "", ...styles };
      }

      state.data = deepUpdate(state.data, path, newValue);
      state.isDirty = true;
    },

    resetEditor: (state) => {
      state.data = {};
      state.currentTemplateId = null;
      state.isDirty = false;
      state.activeFieldId = null;
    },

    loadTemplate: (
      state,
      action: PayloadAction<{ templateId: number; data: EditorData }>
    ) => {
      const { templateId, data } = action.payload;
      state.currentTemplateId = templateId;
      state.data = { ...data };
      state.isDirty = false;
      state.activeFieldId = null;
    },

    bulkUpdate: (state, action: PayloadAction<EditorData>) => {
      state.data = { ...state.data, ...action.payload };
      state.isDirty = true;
    },

    removeField: (state, action: PayloadAction<string>) => {
      const path = action.payload.split(".");
      state.data = deepDelete(state.data, path);
      state.isDirty = true;
    },

    setSegment: (
      state,
      action: PayloadAction<{ segment: string; data: EditorDataValue | null }>
    ) => {
      const { segment, data } = action.payload;
      state.data[segment] = data;
      state.isDirty = true;
    },

    removeSegment: (state, action: PayloadAction<string>) => {
      const segment = action.payload;
      if (segment in state.data) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [segment]: _, ...rest } = state.data;
        state.data = rest;
        state.isDirty = true;
      }
    },

    setActiveFieldId: (state, action: PayloadAction<string | null>) => {
      state.activeFieldId = action.payload;
    },
  },
});

export const {
  updateField,
  updateFieldStyle,
  resetEditor,
  loadTemplate,
  bulkUpdate,
  removeField,
  setSegment,
  removeSegment,
  setActiveFieldId,
} = editorSlice.actions;

export default editorSlice.reducer;
