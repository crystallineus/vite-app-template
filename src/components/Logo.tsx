import { forwardRef } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = forwardRef<HTMLDivElement>(() => {
  return (
    <Box
      component={Link}
      to="/"
      aria-label="Logo"
      sx={{
        width: 60,
        height: 60,
        flexShrink: 0,
        display: "inline-flex",
        verticalAlign: "middle",
      }}
    >
      <img
        src={`${import.meta.env.PUBLIC_URL || ""}/logo.png`}
        alt="Logo"
        style={{ width: "80%", height: "80%", objectFit: "contain" }}
      />
    </Box>
  );
});
