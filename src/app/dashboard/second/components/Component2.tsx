"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import Component3 from "./Component3";
import { useSidebarContext } from "@/contexts/SidebarContextProvider";

export default function Component2() {
  const { toggleSidebar } = useSidebarContext();
  return (
    <Box component="span">
      <Button variant="contained" color="primary" onClick={toggleSidebar}>
        Toggle Sidebar
      </Button>{" "}
      Component 2
      <br />
      &emsp; &emsp;
      <Component3 />
    </Box>
  );
}
