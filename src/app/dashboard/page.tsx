"use client";

import { useAuth } from "@/contexts/AuthContextProvider";
import { Box } from "@mui/material";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <Box sx={{ p: 3 }}>
          <h1>Dashboard</h1>
        </Box>
      ) : (
        <Box sx={{ p: 3 }}>
          <h1>Not logged in</h1>
        </Box>
      )}
    </div>
  );
}
