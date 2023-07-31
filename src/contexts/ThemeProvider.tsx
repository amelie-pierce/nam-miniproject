import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme, Theme } from "@mui/material/styles";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleColorMode: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
