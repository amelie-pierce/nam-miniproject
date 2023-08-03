"use client";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { setCookie } from "cookies-next";

export enum EnumTheme {
  LIGHT = "light",
  DARK = "dark",
}

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
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme: EnumTheme;
}) {
  const [theme, setTheme] = useState<string>(defaultTheme || EnumTheme.DARK);

  const handleChangeTheme = (value: string) => {
    setTheme(value);
    setCookie("theme", value);
  };

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: (theme: string) => handleChangeTheme(theme),
      }}
    >
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
