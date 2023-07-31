"use client";

import React from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to access the dashboard.</div>;
  }

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>Hello, {user.email}!</p>
      <p>This is the protected dashboard page after login.</p>
    </div>
  );
}
