"use client";

import React, { createContext, useContext, useState } from "react";

interface InputContextProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputContext = createContext<InputContextProps | null>(null);

export const useInputContext = (): InputContextProps => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error(
      "useInputContext must be used within an InputContextProvider"
    );
  }

  return context;
};

export const InputContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
