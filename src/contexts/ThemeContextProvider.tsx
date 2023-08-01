"use client";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/utils/theme";

interface ThemeContextProps {
  theme: string;
  changeTheme: (value: string) => void;
}

const defaultThemeValue: ThemeContextProps = {
  theme: "dark",
  changeTheme: (value: string) => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultThemeValue);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>(defaultThemeValue.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
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
