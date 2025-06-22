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
  title: "Ethan Villalovoz | AI Researcher & Developer",
  description:
    "Portfolio of Ethan Villalovoz: AI/ML researcher, engineer, and recent WSU graduate. Explore my projects, research, and journey.",
  icons: {
    icon: "/images/ai_robot_icon.png",
  },
  openGraph: {
    title: "Ethan Villalovoz | AI Researcher & Developer",
    description:
      "Portfolio of Ethan Villalovoz: AI/ML researcher, engineer, and recent WSU graduate. Explore my projects, research, and journey.",
    url: "https://ethanvillalovoz.vercel.app/", // Update to your real URL
    siteName: "Ethan Villalovoz Portfolio",
    images: [
      {
        url: "/images/ai_robot_icon.png", // Place this image in your public/images folder
        width: 1200,
        height: 630,
        alt: "Ethan Villalovoz Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Villalovoz | AI Researcher & Developer",
    description:
      "Portfolio of Ethan Villalovoz: AI/ML researcher, engineer, and recent WSU graduate.",
    images: ["/images/ai_robot_icon.png"],
    creator: "@etvillalovoz",
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

        {/* ✅ Add your Google verification meta tag here */}
        <meta name="google-site-verification" content="YI1L3YOtnukh0nVwoZ-TVjTTp9_PN65NylPHNUshHII" />
        {/* Remove .jpeg favicon links */}

        {/* ✅ JSON-LD Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ethan Villalovoz",
            "url": "https://ethanvillalovoz.vercel.app",
            "image": "https://ethanvillalovoz.vercel.app/images/ai_robot_icon.png",
            "sameAs": [
              "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
              "https://github.com/ethanvillalovoz",
              "https://x.com/etvillalovoz",
              "https://www.linkedin.com/in/evillalovoz27/"
            ],
            "jobTitle": "AI Researcher & Developer",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Washington State University"
            },
            "description": "AI/ML researcher and engineer focused on robotics and human-AI interaction."
          })
        }} />
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
