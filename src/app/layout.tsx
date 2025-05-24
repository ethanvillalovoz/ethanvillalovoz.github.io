import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Villalovoz",
  description: "Portfolio of Ethan Villalovoz: AI/ML Researcher & Engineer.",
  icons: {
    icon: "/images/ai_robot_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Use .png for best browser compatibility and match Next.js metadata */}
        <link rel="icon" href="/images/ai_robot_icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/ai_robot_icon.png" type="image/png" />
        {/* Remove .jpeg favicon links */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
