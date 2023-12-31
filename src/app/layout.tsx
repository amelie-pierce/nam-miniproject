import { AuthProvider } from "@/contexts/AuthContextProvider";
import ThemeContextProvider from "@/contexts/ThemeContextProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <AuthProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
