"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { InputContextProvider } from "@/contexts/InputContextProvider";
import SidebarContextProvider from "@/contexts/SidebarContextProvider";
import { CssBaseline } from "@mui/material";

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
  return (
    <>
      <SidebarContextProvider>
        <InputContextProvider>
          <CssBaseline />
          <div style={styles.container}>
            <header>
              <Header />
            </header>
            <aside style={styles.aside}>
              <nav>
                <Sidebar />
              </nav>
            </aside>
            <main style={styles.main}>{children}</main>
          </div>
        </InputContextProvider>
      </SidebarContextProvider>
    </>
  );
}
