"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Holdings = [
  { name: "Energy", value: 27.13, color: "#166534" }, // Deep Green
  { name: "Fin.Serv.", value: 14.89, color: "#15803d" }, // Green
  { name: "FMCG", value: 3.99, color: "#16a34a" }, // Light Green
  { name: "Banking", value: 10.89, color: "#4ade80" }, // Bright Green
]

const InvestmentCard = () => {
  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Personal Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="h-[200px] w-full relative max-w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={Holdings}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {Holdings.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#fff", border: "1px solid #eee", borderRadius: "8px", fontSize: "12px" }}
                  formatter={(value: number) => `${value.toFixed(2)}%`}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-sm font-semibold text-muted-foreground">Portfolio</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm w-full">
            {Holdings.map((holding, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: holding.color }}
                />
                <span className="text-muted-foreground truncate">{holding.name}</span>
                <span className="font-medium ml-auto text-xs">{holding.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InvestmentCard
