"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

// Line chart data
const lineData = [
  { name: "Jan", investment: 110, nifty: 90 },
  { name: "Feb", investment: 130, nifty: 100 },
  { name: "Mar", investment: 125, nifty: 110 },
  { name: "Apr", investment: 140, nifty: 115 },
  { name: "May", investment: 135, nifty: 120 },
  { name: "Jun", investment: 150, nifty: 125 },
  { name: "Jul", investment: 160, nifty: 130 },
  { name: "Aug", investment: 155, nifty: 128 },
  { name: "Sep", investment: 165, nifty: 135 },
  { name: "Oct", investment: 170, nifty: 140 },
  { name: "Nov", investment: 180, nifty: 145 },
  { name: "Dec", investment: 190, nifty: 150 },
]

const NiftyGraph = () => {
  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <span>Benchmarking</span>
          <span className="text-xs font-normal text-muted-foreground ml-auto">NIFTY 50 vs. Portfolio</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${value}`}
              />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #eee", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                itemStyle={{ fontSize: "12px", fontWeight: "600" }}
                labelStyle={{ color: "#666", marginBottom: "4px" }}
              />
              <Line
                type="monotone"
                dataKey="investment"
                stroke="#2563EB"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
                name="My Portfolio"
              />
              <Line
                type="monotone"
                dataKey="nifty"
                stroke="#16A34A"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
                name="NIFTY 50"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600"></span>Portfolio</div>
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-600"></span>NIFTY 50</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default NiftyGraph;
