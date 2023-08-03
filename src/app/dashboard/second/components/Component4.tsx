import { TextField } from "@mui/material";
import React from "react";
import Component5 from "./Component5";
import { usePage2Context } from "@/contexts/Page2ContextProvider";

const Component4 = () => {
  const { setValue } = usePage2Context();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingLeft: "3rem" }}
    >
      Component 4
      <TextField
        id="outlined-basic"
        label="Input 1"
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
      />
      <Component5 />
    </div>
  );
};

export default Component4;
