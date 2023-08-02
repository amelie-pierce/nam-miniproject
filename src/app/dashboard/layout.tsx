"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

const styles = {
  container: {
    display: "flex",
  },
  aside: {
    flex: "0 0 250px",
  },
  main: {
    flex: "1",
    padding: "24px",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <CssBaseline />
      <div style={styles.container}>
        <header>
          <Header open={open} toggleDrawer={toggleDrawer} />
        </header>
        <aside style={styles.aside}>
          <nav>
            <Sidebar open={open} toggleDrawer={toggleDrawer} />
          </nav>
        </aside>
        <main style={styles.main}>{children}</main>
      </div>
    </>
  );
}
