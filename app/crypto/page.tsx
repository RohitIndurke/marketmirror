"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import MobileTopNavbar from "@/components/MobileTopNavbar"
import MobileBottomNavbar from "@/components/MobileBottomNavbar"
import Footer from "@/components/Fotter"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { getBinancePrices } from "@/lib/api/binance"
import { Button } from "@/components/ui/button"

const coins = ["BTC", "ETH", "BNB", "SOL", "XRP", "DOGE", "ADA", "DOT", "AVAX", "LINK", "TAO"]

export default function Page() {
  const [prices, setPrices] = useState<{ [key: string]: number }>({})
  const [prevPrices, setPrevPrices] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const fetchData = async () => {
      const updatedPrices = await getBinancePrices(coins)
      setPrevPrices(prices)
      setPrices(updatedPrices)
    }

    fetchData()
    const interval = setInterval(fetchData, 3000)
    return () => clearInterval(interval)
  }, [prices])
  
 const [bdata, setBdata] = useState(null);

  const fetchInvest = async () => {
    alert("Connecting...");
    
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MobileTopNavbar />
        <div className="pt-8 pb-20 px-4">
          <div className="flex flex-row">
          <div className="items-center flex-1">
            <a className="text-white-500 text-center text-2xl text-green-400 font-sans font-medium tracking-tight">Live Crypto Prices</a><br/>
            <a className="text-white-500 text-center text-base font-semibold">Stay Ahead with Live Market Updates</a>
          </div>
          <Button onClick={fetchInvest}>Connect Wallet</Button>
          </div>
            <div className="flex flex-1 flex-col gap-4 p-4">
            {coins.map((coin, index) => {
              const symbol = `${coin}USDT`
              const price = prices[symbol]
              const prev = prevPrices[symbol]

              const isUp = price > prev
              const isDown = price < prev

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-muted/100 p-4 rounded-lg shadow-sm"
                >
                  <Link href={`crypto/${symbol}`}>
                    <div className="text-base font-medium hover:underline cursor-pointer">
                      {coin}/USDT
                    </div>
                  </Link>
                  <div
                    className={`text-sm font-semibold transition-all duration-300 ${
                      isUp ? "text-green-500" : isDown ? "text-red-500" : "text-muted-foreground"
                    }`}
                  >
                    {price ? `$${price.toFixed(2)}` : "Loading..."}
                    {isUp && <span> 🔺</span>}
                    {isDown && <span> 🔻</span>}
                  </div>
                </div>
              )
            })}
            <Footer />
          </div>
        </div>
        <MobileBottomNavbar />
      </SidebarInset>
    </SidebarProvider>
  )
}
