"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContextProvider";
import { Box, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeButton() {
  const [theme, setTheme] = useState<string>("dark");

  const themeContextValue = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    themeContextValue.changeTheme(theme);
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100px", height: "40px" }}
        startIcon={
          themeContextValue.theme === "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )
        }
        onClick={handleThemeChange}>
        {themeContextValue.theme === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}
