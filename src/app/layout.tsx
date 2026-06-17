import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexander Horison — AI Builder & Technology Consultant",
  description: "Portfolio of Alexander Horison — AI Builder, Solution Architect, and Technology Consultant with 13+ years of experience building automation, AI tools, and web products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
