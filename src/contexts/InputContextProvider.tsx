"use client";

import React, { createContext, useContext, useRef, useState } from "react";

interface InputContextProps {
  inputValue: string;
  setInputValue: (value: string) => void;
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
  const inputRef = useRef<string>("");

  const setInputValueRef = (value: string) => {
    inputRef.current = value;
    setInputValue(value);
  };

  console.log("inputValue", inputValue);

  return (
    <InputContext.Provider
      value={{
        inputValue,
        setInputValue: setInputValueRef,
      }}>
      {children}
    </InputContext.Provider>
  );
};
