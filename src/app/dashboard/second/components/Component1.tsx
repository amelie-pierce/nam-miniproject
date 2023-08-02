import { Box } from "@mui/material";
import React from "react";
import Component2 from "./Component2";

export default function Component1() {
  return (
    <Box component="span">
      Component 1
      <br />
      &emsp;
      <Component2 />
    </Box>
  );
}
