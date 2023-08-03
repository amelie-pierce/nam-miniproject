import { AuthProvider } from "@/contexts/AuthContextProvider";
import ThemeContextProvider, {
  EnumTheme,
} from "@/contexts/ThemeContextProvider";

import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value as EnumTheme;
  const cookieUser = cookies().get("user")?.value;

  let user;

  if (typeof cookieUser === "string") {
    user = JSON.parse(cookieUser);
  }

  return (
    <html lang="en">
      <body>
        <main>
          <AuthProvider defaultUser={user}>
            <ThemeContextProvider defaultTheme={theme}>
              {children}
            </ThemeContextProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
