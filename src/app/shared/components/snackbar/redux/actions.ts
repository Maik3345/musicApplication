import { action } from "typesafe-actions";
import * as types from "./types";
import { SnackbarProps } from "@material-ui/core/Snackbar";

/**
 * Open snackbar component
 * @param snackbar
 */
export const showSnackBar = (snackbar: Partial<SnackbarProps> | null) =>
  action(types.SHOW_SNACKBAR, snackbar);
