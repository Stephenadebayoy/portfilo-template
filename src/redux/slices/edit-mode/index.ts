/** @format */

// redux/slices/editModeSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface EditModeState {
  editMode: boolean;
}

const initialState: EditModeState = {
  editMode: false,
};

const editModeSlice = createSlice({
  name: "editMode",
  initialState,
  reducers: {
    toggleEditMode(state) {
      state.editMode = !state.editMode;
    },
    setEditMode(state, action: { payload: boolean }) {
      state.editMode = action.payload;
    },
  },
});

export const { toggleEditMode, setEditMode } = editModeSlice.actions;
export default editModeSlice.reducer;
