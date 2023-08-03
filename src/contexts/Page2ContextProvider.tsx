"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  ReactNode,
} from "react";

interface Page2ContextProviderProps {
  value: ReactNode;
  setValue: (value: string) => void;
  submit: () => void;
}

const Page2Context = createContext<Page2ContextProviderProps>({
  value: null,
  setValue: () => {},
  submit: () => {},
});

export const usePage2Context = () => useContext(Page2Context);

export const Page2ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const refValue = useRef("");

  const [value, setValue] = useState<ReactNode>();

  const handleSetValue = (newValue: string) => {
    refValue.current = newValue;
  };

  const submit = () => {
    if (refValue.current) {
      return setValue(<span>{refValue.current}</span>);
    }

    return setValue(<span style={{ color: "red" }}>Value is empty</span>);
  };

  return (
    <Page2Context.Provider value={{ value, setValue: handleSetValue, submit }}>
      {children}
    </Page2Context.Provider>
  );
};
