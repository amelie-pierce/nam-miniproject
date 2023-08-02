"use client";

import React from "react";
import Component8 from "./Component8";
import { Box, Button } from "@mui/material";
import { useInputContext } from "@/contexts/InputContextProvider";

export default function Component7() {
  const { inputValue } = useInputContext();

  const handleSubmit = () => {
    console.log("Submit value: ", inputValue);
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
