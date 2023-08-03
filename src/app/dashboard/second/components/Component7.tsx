import React from "react";
import Component8 from "./Component8";
import { Button } from "@mui/material";
import { usePage2Context } from "@/contexts/Page2ContextProvider";

const Component7 = () => {
  const { submit } = usePage2Context();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {"Component 7"}
      <Button onClick={submit}>Submit</Button>
      <Component8 />
    </div>
  );
};

export default Component7;
