import * as React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

const SIDEBAR_WIDTH = 280;

export const Layout: React.FC = () => {
  return (
    <Box display="flex" width="100vw" height="100vh">
      <Box flex={`0 0 ${SIDEBAR_WIDTH}px`}>
        <Sidebar width={SIDEBAR_WIDTH} />
      </Box>
      <Topbar />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        marginTop="5rem"
      >
        <Outlet />
      </Box>
    </Box>
  );
};
