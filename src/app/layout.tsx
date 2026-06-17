import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ServiceWorkerRegister } from "./ServiceWorkerRegister";

export const metadata: Metadata = {
  metadataBase: new URL("https://alex-portfolio-eosin.vercel.app"),
  title: "Alexander Horison — AI Builder & Technology Consultant",
  description:
    "Portfolio of Alexander Horison — AI Builder, Solution Architect, and Technology Consultant with 13+ years of experience building automation, AI tools, and web products.",
  applicationName: "Alexander Horison",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Alexander",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Alexander Horison — AI Builder & Technology Consultant",
    description:
      "AI Builder & Technology Consultant with 13+ years building automation, AI tools, and web products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
