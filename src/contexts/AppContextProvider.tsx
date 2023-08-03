"use client";

import React, { createContext, useState, useContext } from "react";

interface AppContextProviderProps {
  open: boolean;
  toggleDrawer: () => void;
}

const AppContext = createContext<AppContextProviderProps>({
  open: true,
  toggleDrawer: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleToogleSideBar = () => {
    setOpen((open) => !open);
  };

  return (
    <AppContext.Provider value={{ open, toggleDrawer: handleToogleSideBar }}>
      {children}
    </AppContext.Provider>
  );
};
