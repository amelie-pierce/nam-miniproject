import { useAppContext } from "@/contexts/AppContextProvider";
import { Button } from "@mui/material";
import React from "react";
import Component3 from "./Component3";

const Component2 = () => {
  const { toggleDrawer } = useAppContext();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}
    >
      Component 2<Button onClick={toggleDrawer}>Toogle Side bar</Button>
      <Component3 />
    </div>
  );
};

export default Component2;
