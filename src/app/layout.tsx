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
  metadataBase: new URL("https://ethanvillalovoz.vercel.app"),
  title: "Ethan Villalovoz",
  description:
    "AI researcher and engineer, building intelligent systems that perceive, reason, and interact with the physical world.",
  icons: {
    icon: "/images/website_icon.png",
  },
  verification: {
    google: "YI1L3YOtnukh0nVwoZ-TVjTTp9_PN65NylPHNUshHII",
  },
  openGraph: {
    title: "Ethan Villalovoz",
    description:
      "AI researcher and engineer, building intelligent systems that perceive, reason, and interact with the physical world.",
    url: "https://ethanvillalovoz.vercel.app/",
    // siteName: "Ethan Villalovoz",
    images: [
      {
        url: "/images/EthanVillalovozPic.jpeg",
        width: 800,
        height: 800,
        // alt: "Ethan Villalovoz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Villalovoz",
    description:
      "AI researcher and engineer, building intelligent systems that perceive, reason, and interact with the physical world.",
    images: ["/images/website_icon_with_background.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ethan Villalovoz",
              url: "https://ethanvillalovoz.vercel.app",
              image: "https://ethanvillalovoz.vercel.app/images/EthanVillalovozPic.jpeg",
              sameAs: [
                "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
                "https://github.com/ethanvillalovoz",
                "https://x.com/etvillalovoz",
                "https://www.linkedin.com/in/evillalovoz27/",
                "https://ethanvillalovoz.github.io/",
              ],
              jobTitle: "MSCS @ Georgia Tech",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Washington State University",
              },
              description:
                "AI researcher and engineer, building intelligent systems that perceive, reason, and interact with the physical world.",
            }),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
