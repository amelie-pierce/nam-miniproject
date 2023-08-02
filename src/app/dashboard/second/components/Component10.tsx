"use client";

import { Box, TextField } from "@mui/material";
import React from "react";
import Component11 from "./Component11";

export default function Component10() {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box component="span">
      Component10
      <br />
      &emsp; &emsp;
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      &emsp; &emsp;
      <Component11 inputValue={inputValue} />
    </Box>
  );
}
