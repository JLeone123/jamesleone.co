import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Spotlight } from "@/lib/components";
// import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Leone",
  description:
    "James Leone is a software engineer who enjoys building websites and full-stack applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <Spotlight />
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
