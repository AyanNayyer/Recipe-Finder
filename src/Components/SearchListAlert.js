import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Snackbar, Slide, IconButton } from "@mui/material";
import { useTranslate, T } from '@tolgee/react';
import { Close } from "@mui/icons-material";
const SearchListAlert = () => {
  const { t } = useTranslate();
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
  const action = (
    <>
      <Link
        to="/SearchList"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button   onClick={handleClose}>
           
<T keyName="search-list-alert-list-button" />
        </Button>
      </Link>
      <IconButton
        size="small"
        aria-label={
t('search-list-alert-close-icon-aria-label')}
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Snackbar
        open={open}
        TransitionComponent={SlideTransition}
        autoHideDuration={7000}
        onClose={handleClose}
        message={
t('search-list-alert-message')}
        action={action}
        
      />
    </>
  );
};
export default SearchListAlert;
