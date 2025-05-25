/** @format */

import { combineReducers } from "redux";
import editorReducer from "./../slices/edit/editorSlice";
import editModeReducer from "./../slices/edit-mode";
export default combineReducers({
  editor: editorReducer,
  editMode: editModeReducer,
});
