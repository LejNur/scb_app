import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Molecules/Navbar";

export const metadata: Metadata = {
  title: "Simple Contacts Book",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-smokyBlack">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
