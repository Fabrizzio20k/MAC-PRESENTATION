import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REALFUSSION",
  description: "Reimaginando la generación de modelos 3D con algoritmos e IA",
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
