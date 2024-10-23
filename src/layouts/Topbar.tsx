import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";

export const Topbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense" />
    </AppBar>
  );
};
