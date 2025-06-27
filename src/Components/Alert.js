import React from "react";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { useTranslate } from '@tolgee/react';
const Alert = ({ open, setOpen }) => {
  const { t } = useTranslate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <>
      <div>
        <Snackbar
          open={open}
          TransitionComponent={SlideTransition}
          autoHideDuration={1500}
          onClose={handleClose}
          message={
t('recipe-already-in-favorite-message')}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        />
      </div>
    </>
  );
};

export default Alert;
