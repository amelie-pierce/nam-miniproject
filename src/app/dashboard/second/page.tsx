"use client";

import { Box } from "@mui/material";
import React from "react";
import Component1 from "./components/Component1";
import Component7 from "./components/Component7";

import {
  Page2ContextProvider,
  usePage2Context,
} from "@/contexts/Page2ContextProvider";
import Component10 from "./components/Component10";

const WrapperContent = () => {
  const { value } = usePage2Context();
  return (
    <>
      <h1>Second Page</h1>
      <p>{value}</p>
      <Component1 />
      <br />
      <br />
      <br />
      <Component7 />
    </>
  );
};

export default function Second() {
  return (
    <Box sx={{ p: 3 }}>
      <Page2ContextProvider>
        <WrapperContent />
      </Page2ContextProvider>

      <br />
      <br />
      <br />
      <Component10 />
    </Box>
  );
}
