import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const siteDescription =
  "I work on robot learning at Georgia Tech and multi-agent systems at Microsoft.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethanvillalovoz.com"),
  title: {
    default: "Ethan Villalovoz",
    template: "%s | Ethan Villalovoz",
  },
  description: siteDescription,
  applicationName: "Ethan Villalovoz",
  icons: {
    icon: [
      {
        url: "/images/identity/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/identity/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/identity/favicon-on-dark-16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/identity/favicon-on-dark-32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { url: "/images/identity/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "YI1L3YOtnukh0nVwoZ-TVjTTp9_PN65NylPHNUshHII",
  },
  openGraph: {
    title: "Ethan Villalovoz",
    description: siteDescription,
    url: "https://ethanvillalovoz.com",
    siteName: "Ethan Villalovoz",
    images: [
      {
        url: "/images/identity/icon-512.png",
        width: 512,
        height: 512,
        alt: "Lowercase e mark for Ethan Villalovoz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ethan Villalovoz",
    description: siteDescription,
    images: ["/images/identity/icon-512.png"],
    creator: "@ethanvillalovoz",
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
        {/* WebSite structured data for Google site name. */}
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
        {/* Person structured data. */}
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
                "https://x.com/ethanvillalovoz",
                "https://www.linkedin.com/in/ethanvillalovoz/",
                "https://ethanvillalovoz.github.io/",
              ],
              jobTitle: "MSCS @ Georgia Tech",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Washington State University",
              },
              description: siteDescription,
            }),
          }}
        />
				<Providers>
					<div className="flex-1">{children}</div>
				</Providers>
      </body>
    </html>
  );
}
