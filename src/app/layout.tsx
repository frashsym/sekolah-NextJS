"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { usePathname } from "next/navigation";
import LandingPage from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          {pathname === "/" ? <LandingPage /> : children}
        </ThemeProvider>
      </body>
    </html>
  );
}
