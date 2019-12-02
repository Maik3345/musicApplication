import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "typesafe-actions";
import { SnackbarProps } from "@material-ui/core/Snackbar";

const showSnackBarReducer = createReducer<Partial<SnackbarProps> | null>(
  null
).handleAction(types.SHOW_SNACKBAR, (state, { payload }) => ({
  ...state,
  ...payload
}));

export default combineReducers({
  showSnackbar: showSnackBarReducer
});
