import type { Metadata } from "next";
import { personReference, site } from "@/data/site";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
      {
        url: "/images/identity/favicon-96.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/identity/favicon-on-dark-96.png",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/identity/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/identity/icon-on-dark-512.png",
        sizes: "512x512",
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
    title: site.name,
    description: site.description,
    url: `${site.url}/`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
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
      <body className="site-body" suppressHydrationWarning>
        {/* WebSite structured data for Google site name. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              name: site.name,
              url: `${site.url}/`,
              alternateName: ["ethanvillalovoz.com", "Ethan Villalovoz"],
              author: personReference,
              inLanguage: "en-US",
            }),
          }}
        />
        <Providers>
          <div className="site-content">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
