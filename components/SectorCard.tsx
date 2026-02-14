"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sectorData = [
  { name: "Financial Services", value: 37.32, color: "#166534" }, // Deep Green
  { name: "Information Tech", value: 11.16, color: "#15803d" }, // Green
  { name: "Energy", value: 10.53, color: "#16a34a" }, // Light Green
  { name: "Automobile", value: 7.02, color: "#22c55e" }, // Lighter Green
  { name: "FMCG", value: 6.46, color: "#4ade80" }, // Bright Green
  { name: "Construction", value: 3.80, color: "#86efac" }, // Pale Green
  { name: "Telecom", value: 4.65, color: "#bbf7d0" }, // Very Pale Green
  { name: "Others", value: 19.06, color: "#f0fdf4" }, // Near White Green
];

const SectorCard = () => {
  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Sector Weightage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="h-[200px] w-full relative max-w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#fff", border: "1px solid #eee", borderRadius: "8px", fontSize: "12px" }}
                  formatter={(value: any) => [`${value.toFixed(2)}%`, 'Weight']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-sm font-semibold text-muted-foreground">NIFTY 50</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm w-full">
            {sectorData.map((sector, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: sector.color }}
                />
                <span className="text-muted-foreground truncate">{sector.name}</span>
                <span className="font-medium ml-auto text-xs">{sector.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SectorCard
