import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Providers } from "./providers";

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
        // width: 1200,
        // height: 630,
        // alt: "Ethan Villalovoz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    // card: "summary_large_image",
    title: "Ethan Villalovoz",
    description:
      "AI researcher and engineer, building intelligent systems that perceive, reason, and interact with the physical world.",
    images: ["/images/EthanVillalovozPic.jpeg"],
    creator: "@etvillalovoz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Providers>
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
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
