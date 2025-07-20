"use client"

import { useParams } from "next/navigation"
import dynamic from "next/dynamic"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import MobileTopNavbar from "@/components/MobileTopNavbar"
import MobileBottomNavbar from "@/components/MobileBottomNavbar"
import Footer from "@/components/Fotter"
import Link from "next/link"

const TradingViewWidget = dynamic(() => import("@/components/tradingview-widget"), { ssr: false })
const coins = ["BTC", "ETH", "BNB", "SOL", "XRP", "DOGE", "ADA", "DOT", "AVAX", "LINK", "TAO"]

export default function CoinPage() {
  const { symbol } = useParams()
  const coinSymbol = (symbol as string).toUpperCase()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MobileTopNavbar />
        <div className="pt-16 pb-20 px-4">
          <h1 className="text-2xl font-bold mb-4">{coinSymbol} Chart</h1>

          <TradingViewWidget symbol={coinSymbol} />

          <div className="text-2xl font-semibold mt-8 mb-4">
            Also check related cryptos:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {coins
  .filter((c) => `${c}USDT` !== coinSymbol) // ignore current coin
  .map((coinName, index) => {
    const fullSymbol = `${coinName}USDT`; // correct symbol
    return (
      <Link key={index} href={`/crypto/${fullSymbol}`}>
        <div className="p-4 bg-muted/50 rounded-lg hover:scale-105 transition cursor-pointer text-center font-medium text-lg">
          {fullSymbol}
        </div>
      </Link>
    );
  })}

          </div>

          <Footer />
        </div>
        <MobileBottomNavbar />
      </SidebarInset>
    </SidebarProvider>
  )
}
