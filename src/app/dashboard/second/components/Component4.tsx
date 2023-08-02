import { Box, TextField } from "@mui/material";
import React from "react";
import Component5 from "./Component5";
import { useInputContext } from "@/contexts/InputContextProvider";

export default function Component4() {
  const { inputValue, setInputValue } = useInputContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box component="span">
      Component 4
      <br />
      &emsp; &emsp; &emsp; &emsp;
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      &emsp; &emsp; &emsp; &emsp;
      <Component5 />
    </Box>
  );
}
