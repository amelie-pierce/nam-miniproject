"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Component1 from "./components/Component1";
import Component10 from "./components/Component10";
import Component7 from "./components/Component7";

export default function Second() {
  const [displayText, setDisplayText] = useState("");

  return (
    <Box sx={{ p: 3 }}>
      <h1>Second Page</h1>
      <hr />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" component="span">
          Hello me!!! Change the State here: {displayText}
        </Typography>
        <Component1 />
        <br />
        <Component7 setDisplayText={setDisplayText} />
        <br />
        <Component10 />
      </Box>
    </Box>
  );
}
