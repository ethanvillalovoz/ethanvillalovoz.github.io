import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethanvillalovoz.com"),
  title: {
    default: "Ethan Villalovoz",
    template: "%s | Ethan Villalovoz",
  },
  description:
    "Master's student in Computer Science at Georgia Tech, specializing in Computational Perception and Robotics.",
  applicationName: "Ethan Villalovoz",
  icons: {
    icon: [
      { url: "/images/website_icon_white.png", media: "(prefers-color-scheme: dark)", type: "image/png" },
      { url: "/images/website_icon.png", media: "(prefers-color-scheme: light)", type: "image/png" },
    ],
    apple: [
      { url: "/images/website_icon.png" },
    ],
  },
  verification: {
    google: "YI1L3YOtnukh0nVwoZ-TVjTTp9_PN65NylPHNUshHII",
  },
  openGraph: {
    title: "Ethan Villalovoz",
    description:
      "Master's student in Computer Science at Georgia Tech, specializing in Computational Perception and Robotics.",
    url: "https://ethanvillalovoz.com",
    siteName: "Ethan Villalovoz",
    images: [
      {
        url: "/images/website_icon.png",
        width: 800,
        height: 800,
        alt: "Ethan Villalovoz Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ethan Villalovoz",
    description:
      "Master's student in Computer Science at Georgia Tech, specializing in Computational Perception and Robotics.",
    images: ["/images/website_icon.png"],
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
        {/* ✅ WebSite Structured Data (For Google Site Name) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ethan Villalovoz",
              url: "https://ethanvillalovoz.com",
              alternateName: ["ethanvillalovoz.com", "Ethan Villalovoz"],
            }),
          }}
        />
        {/* ✅ Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ethan Villalovoz",
              url: "https://ethanvillalovoz.com",
              image: "https://ethanvillalovoz.com/images/EthanVillalovozPic.jpeg",
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
                "Master's student in Computer Science at Georgia Tech, specializing in Computational Perception and Robotics.",
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
