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
        <div className="px-4 mt-10 relative flex justify-center w-full bg-primary-50">
          <div className="max-w-screen-md w-full bg-white px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
