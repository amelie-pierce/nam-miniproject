"use client";

import { ThemeContext } from "@/contexts/ThemeContextProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";

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
