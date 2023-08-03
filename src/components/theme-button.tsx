"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContextProvider";
import { Box, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeButton() {
  const { changeTheme, theme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100px", height: "40px" }}
        startIcon={theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        onClick={handleThemeChange}
      >
        {theme === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}
