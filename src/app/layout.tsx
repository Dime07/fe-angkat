import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/layout/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angkat",
  description: "Record your personal record at Angkat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <div className="mt-10">{children}</div>
      </body>
    </html>
  );
}
