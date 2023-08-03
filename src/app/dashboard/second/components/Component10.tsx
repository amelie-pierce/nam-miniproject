"use client";

import { TextField } from "@mui/material";
import React, { useState } from "react";
import Component11 from "./Component11";

const Component10 = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Component 10
      <div style={{ paddingLeft: "1rem" }}>
        <TextField
          value={value}
          id="outlined-basic"
          label="Input 2"
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
        />
        <Component11 value={value} />
      </div>
    </div>
  );
};

export default Component10;
