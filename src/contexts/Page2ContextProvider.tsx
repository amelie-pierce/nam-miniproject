"use client";

import React, { createContext, useState, useContext, useRef } from "react";

interface Page2ContextProviderProps {
  value: string;
  setValue: (value: string) => void;
  submit: () => void;
}

const Page2Context = createContext<Page2ContextProviderProps>({
  value: "",
  setValue: () => {},
  submit: () => {},
});

export const usePage2Context = () => useContext(Page2Context);

export const Page2ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const refValue = useRef("");

  const [value, setValue] = useState("");

  const handleSetValue = (newValue: string) => {
    refValue.current = newValue;
  };

  const submit = () => {
    if (refValue.current) {
      return setValue(refValue.current);
    }

    return setValue("Value is empty");
  };

  return (
    <Page2Context.Provider value={{ value, setValue: handleSetValue, submit }}>
      {children}
    </Page2Context.Provider>
  );
};
