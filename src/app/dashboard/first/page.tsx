"use client";
import { Box } from "@mui/material";
import React from "react";
import { useAuth } from "@/contexts/AuthContextProvider";

export default function First() {
  const { user } = useAuth();

  return (
    <Box sx={{ p: 3 }}>
      <h1>User&apos;s Email: </h1>
      {user?.email}
    </Box>
  );
}
