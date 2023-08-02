"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Component1 from "./components/Component1";
import Component7 from "./components/Component7";
import Component10 from "./components/Component10";
import { useInputContext } from "@/contexts/InputContextProvider";

export default function Second() {
  const { inputValue } = useInputContext();

  return (
    <Box sx={{ p: 3 }}>
      <h1>Second Page</h1>
      <hr />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" component="span">
          Hello me!!! Change the State here: {inputValue}
        </Typography>
        <Component1 />
        <br />
        <Component7 />
        <br />
        <Component10 />
      </Box>
    </Box>
  );
}
