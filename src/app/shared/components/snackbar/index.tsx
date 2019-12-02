import React, { useEffect } from "react";
import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { showSnackBar } from "./redux/actions";

const SnackbarMaterial = () => {
  const showSnackbar = useSelector<RootState, Partial<SnackbarProps> | null>(
    state => state.snackbar.showSnackbar
  ) as SnackbarProps;

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  function handleClose(
    _event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) {
    if (reason === "clickaway") {
      return;
    }

    dispatch(showSnackBar({ open: false }));
    setOpen(false);
  }

  useEffect(() => {
    if (showSnackbar) {
      setOpen(showSnackbar.open);
    }
  }, [showSnackbar]);

  if (!showSnackbar) {
    return null;
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={showSnackbar.anchorOrigin}
        open={open}
        autoHideDuration={showSnackbar.autoHideDuration}
        onClose={handleClose}
        ContentProps={showSnackbar.ContentProps}
        message={showSnackbar.message}
        action={showSnackbar.action}
      />
    </div>
  );
};

export default SnackbarMaterial;
