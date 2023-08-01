"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
