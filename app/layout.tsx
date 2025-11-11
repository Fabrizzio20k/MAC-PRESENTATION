import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REAL FUSSION",
  description: "Real Fussion App",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
