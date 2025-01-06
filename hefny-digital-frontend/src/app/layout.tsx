import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
