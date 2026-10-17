import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
// import { Header } from "@/components/header";
import { Toaster } from "react-hot-toast";
import { ThemeToggle } from "@/components/theme-toggle";

// Runs before the page paints: use the saved theme, otherwise the OS setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})();`;

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
    <html lang="en" className="!scroll-smooth motion-reduce:!scroll-auto" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        {/* <Header /> */}
        <ThemeToggle />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
