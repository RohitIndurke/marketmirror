import "./globals.css";
import Script from "next/script";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import '@rainbow-me/rainbowkit/styles.css';

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
