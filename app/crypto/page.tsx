"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import Footer from "@/components/Fotter";
import Link from "next/link";
import CryptoPortfolio from "@/components/CryptoPortfolio";
const TradingViewWidget = dynamic(
  () => import("@/components/tradingview-widget"),
  { ssr: false }
);
const coins = [
  "BTC",
  "ETH",
  "BNB",
  "SOL",
  "XRP",
  "DOGE",
  "ADA",
  "DOT",
  "AVAX",
  "LINK",
  "TAO",
];

export default function CoinPage() {
   const { symbol } = useParams();

  const coinSymbol = symbol ? (symbol as string).toUpperCase() : "BTCUSDT";


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MobileTopNavbar />
        <div>
          <div className="items-center flex-1">
            <a className="text-white-500 text-center text-2xl text-green-400 font-sans font-medium tracking-tight">Live Crypto Prices</a><br/>
            <a className="text-white-500 text-center text-base font-semibold">Stay Ahead with Live Market Updates</a>
          </div>
        <div className="pt-16 pb-20 px-4">
          
          <h1 className="text-2xl font-bold mb-4">{coinSymbol} Chart</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className=" p-4 rounded shadow w-full md:w-2/3">
              <TradingViewWidget symbol={coinSymbol} />
            </div>

            <div className=" p-4  shadow w-full md:w-1/3">
              <CryptoPortfolio />
            </div>
          </div>

          <div className="text-2xl font-semibold mt-8 mb-4">
            Also check related cryptos:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {coins
              .filter((c) => `${c}USDT` !== coinSymbol)
              .map((coinName, index) => {
                const fullSymbol = `${coinName}USDT`;
                return (
                  <Link key={index} href={`/crypto/${fullSymbol}`}>
                    <div className="p-4 bg-muted/50 rounded-lg hover:scale-105 transition cursor-pointer text-center font-medium text-lg">
                      {fullSymbol}
                    </div>
                  </Link>
                );
              })}
          </div>
              <div className="mt-4">
              <Footer />
              </div>
        </div>
        </div>
        <MobileBottomNavbar />
      </SidebarInset>
    </SidebarProvider>
  );
}
