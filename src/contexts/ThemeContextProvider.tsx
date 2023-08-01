"use client";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/utils/theme";

interface ThemeContextType {
  theme: string;
  changeTheme: (value: string) => void;
}

const defaultThemeValue: ThemeContextType = {
  theme: "dark",
  changeTheme: (value: string) => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeValue);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>(defaultThemeValue.theme);

  // Run this effect only on the client-side to access localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("store theme:", storedTheme);
    setTheme(storedTheme || defaultThemeValue.theme);
  }, []);

  const handleChangeTheme = (value: string) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: (theme: string) => handleChangeTheme(theme),
      }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
