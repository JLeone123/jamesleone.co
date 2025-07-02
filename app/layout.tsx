import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Leone",
  description:
    "James Leone is a software engineer with a Bachelor of Science in Computer Science from UMass Amherst. He is passionate about full-stack development and cloud computing. He is currently working toward his AWS Certified Cloud Practitioner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
