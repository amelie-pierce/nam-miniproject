"use client";

import React from "react";
import Component8 from "./Component8";
import { Box, Button } from "@mui/material";
import { useInputContext } from "@/contexts/InputContextProvider";

interface Component7Props {
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Component7({ setDisplayText }: Component7Props) {
  const { inputValue } = useInputContext();

  const handleSubmit = () => {
    setDisplayText(inputValue);
  };

  return (
    <Box component="span">
      Component7
      <br />
      &emsp;
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Component8 />
    </Box>
  );
}
