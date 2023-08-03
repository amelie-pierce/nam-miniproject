import { useInputContext } from "@/contexts/InputContextProvider";
import { Box, TextField } from "@mui/material";
import React from "react";
import Component5 from "./Component5";

export default function Component4() {
  const { inputValue, setInputValue } = useInputContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const error = inputValue === "";

  return (
    <Box component="span">
      Component 4
      <br />
      &emsp; &emsp; &emsp; &emsp;
      <TextField
        id="outlined-basic"
        label="Input Field 1"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        error={error}
        helperText={error ? "This field is required." : ""}
      />
      <br />
      &emsp; &emsp; &emsp; &emsp;
      <Component5 />
    </Box>
  );
}
