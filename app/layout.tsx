import "./globals.css";
import Script from "next/script";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import '@rainbow-me/rainbowkit/styles.css';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MarketMirror - Track Markets in Real Time",
    template: "%s | MarketMirror",
  },
  description: "Track Markets in Real Time, Trade Smarter Invest Better. Stay Ahead of Every Move Your Mirror to the Global Market.",
  keywords: ["Stock Market", "Crypto", "Mutual Funds", "Indian Market", "Finance", "Trading", "Investment", "Real-time Data", "Market Analysis"],
  authors: [{ name: "MarketMirror Team" }],
  creator: "MarketMirror",
  publisher: "MarketMirror",
  metadataBase: new URL("https://marketmirror.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MarketMirror - Track Markets in Real Time",
    description: "Track Markets in Real Time, Trade Smarter Invest Better. Stay Ahead of Every Move Your Mirror to the Global Market.",
    url: "https://marketmirror.vercel.app",
    siteName: "MarketMirror",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/marketMirror.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "MarketMirror - Track Markets in Real Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketMirror - Track Markets in Real Time",
    description: "Track Markets in Real Time, Trade Smarter Invest Better.",
    images: ["/marketMirror.png"], // Ensure this image exists in public folder
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <Script
            src="https://s3.tradingview.com/tv.js"
            strategy="afterInteractive"
          />
        </head>
        <body className="font-mono">
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
