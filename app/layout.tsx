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
  openGraph: {
    title: "MarketMirror - Track Markets in Real Time",
    description: "Track Markets in Real Time, Trade Smarter Invest Better.",
    url: "https://marketmirror.vercel.app", // Assuming vercel deployment, can be updated
    siteName: "MarketMirror",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketMirror - Track Markets in Real Time",
    description: "Track Markets in Real Time, Trade Smarter Invest Better.",
  },
  metadataBase: new URL("https://marketmirror.vercel.app"), // Placeholder, update if known
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
