"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

interface Invest {
  _id: string | null
  name: string
  value: number
  percentage: string
  color: string
}

const colors = ["#368839ff", "#6e9c1dff", "#7eb82eff", "#bbf288ff", "#e1e6ddff"]

const demoInvests: Invest[] = [
  { _id: "", name: "BTC", value: 40.2, percentage: "40", color:colors[0] },
  { _id: "", name: "ETH", value: 5.8, percentage: "30", color:colors[1] },
  { _id: "", name: "SOL", value: 13.0, percentage: "20", color: colors[2] },
  { _id: "", name: "MATIC", value: 30.0, percentage: "10", color: colors[3] },
]

const CryptoPortfolio = () => {
  const { address, isConnected } = useAccount()
  const [invests, setInvests] = useState<Invest[]>(demoInvests)

useEffect(() => {
  console.log("isConnected:", isConnected)
  console.log("address:", address)

  if (!isConnected || !address) {
    console.log("Using demoInvests")
    setInvests(demoInvests)
    return
  }

  const GET = async () => {
    try {
      console.log("Fetching real holdings...")
      const res = await fetch(
        `https://deep-index.moralis.io/api/v2/${address}/erc20?chain=eth`,
        {
          headers: { "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_KEY! },
        }
      )
      const data = await res.json()
      console.log("API data:", data)

      if (Array.isArray(data)) {
        const totalValue = data.reduce(
          (sum, token) => sum + Number(token.balance) / 10 ** token.decimals,
          0
        )
        const mapped = data.slice(0, 5).map((token, i) => {
          const value = Number(token.balance) / 10 ** token.decimals
          const percentage = ((value / totalValue) * 100).toFixed(2)
          return {
            _id: token.token_address,
            name: token.symbol,
            value,
            percentage,
            color: colors[i % colors.length],
          }
        })
        setInvests(mapped)
      }
    } catch (e) {
      console.error("Error fetching holdings:", e)
      setInvests(demoInvests)
    }
  }

  GET()
}, [isConnected, address])

  return (
    <Card className="p-2 h-[500px] w-[345px] shadow-md relative">
      <CardHeader className="p-2">
        <CardTitle className="text-sm text-left flex justify-between items-center">
          <a>Personal Holdings 💼</a>
          <ConnectButton />
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie
              data={invests}
              cx="50%"
              cy="50%"
              outerRadius={67}
              innerRadius={55}
              dataKey="value"
            >
              {invests.map((invest, index) => (
                <Cell key={`cell-${index}`} fill={invest.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute left-4 flex flex-col gap-3 m-4 text-sm">
          {invests.map((invest, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center w-64"
            >
              <div className="flex items-center gap-2">
                <a
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: invest.color }}
                />
                <a className="font-medium">{invest.name}</a>
              </div>

              <div className="flex flex-col text-right">
                <a className="font-medium">{invest.value.toFixed(4)}</a>
                <a className="text-gray-500 text-xs">{invest.percentage}%</a>
              </div>
            </div>
            
          ))}
<a className="text-gray-500 text-xs">
  If the data does not change, it means zero holdings or a failure to fetch holdings.
</a>
        </div>
      </CardContent>
    </Card>
  )
}

export default CryptoPortfolio
