import { Box, Typography } from "@mui/material";
import React from "react";

interface Component11Props {
  inputValue: string;
}

export default function Component11({ inputValue }: Component11Props) {
  return (
    <Box component="span">
      Component11
      <Typography sx={{ paddingLeft: "3.5rem" }}>
        Also change the State here: {inputValue}
      </Typography>
    </Box>
  );
}
