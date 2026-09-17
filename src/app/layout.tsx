import type { Metadata } from "next";
import { personReference, site, siteShareImage } from "@/data/site";
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
      { url: "/favicon.ico?v=purple-1", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/images/identity/favicon-purple-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/identity/favicon-purple-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/identity/favicon-purple-48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/identity/favicon-purple-96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/identity/share-icon-purple-180.png", sizes: "180x180", type: "image/png" },
      { url: "/images/identity/share-icon-purple-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/identity/share-icon-purple-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "YI1L3YOtnukh0nVwoZ-TVjTTp9_PN65NylPHNUshHII",
  },
  openGraph: {
    images: [siteShareImage],
    title: site.name,
    description: site.description,
    url: `${site.url}/`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    images: ["/images/identity/share-icon-purple-512.png"],
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
