import type { Metadata, Viewport } from "next";
import { Outfit, Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gazitourstravels.com"),
  title: {
    default: "GAZI TOURS AND TRAVELS",
    template: "%s | GAZI TOURS AND TRAVELS",
  },
  description: "Guiding pilgrims on Umrah, Ziyarat (Iraq & Iran), Hajj 2027 pre-registration, and Kashmir tours since 2004. 25,000+ pilgrims served. Book your spiritual journey today.",
  keywords: ["Umrah", "Ziyarat", "Hajj 2027", "Kashmir tours", "pilgrimage", "travel agency", "Kashmir", "Iraq Ziyarat", "Iran Ziyarat", "Makkah", "Madinah"],
  authors: [{ name: "GAZI TOURS AND TRAVELS" }],
  creator: "GAZI TOURS AND TRAVELS",
  publisher: "GAZI TOURS AND TRAVELS",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gazitourstravels.com",
    siteName: "GAZI TOURS AND TRAVELS",
    title: "GAZI TOURS AND TRAVELS",
    description: "Guiding pilgrims on Umrah, Ziyarat, Hajj 2027, and Kashmir tours since 2004.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gazi Tour & Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAZI TOURS AND TRAVELS",
    description: "Trusted pilgrimage & travel since 2004",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#FFFFFF" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${dmMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="antialiased font-body text-body bg-bg text-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}