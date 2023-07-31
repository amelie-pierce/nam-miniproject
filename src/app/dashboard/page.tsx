"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box, CssBaseline } from "@mui/material";
import React, { useState, useContext } from "react";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
      </Box>
    </ThemeProvider>
  );
}
