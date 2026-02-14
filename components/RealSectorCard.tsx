"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from 'react'
import Dialog from "@/components/Dialog";

interface Invest {
  _id: string,
  name: string,
  value: number,
  percentage: string,
  color: string
}

const RealSectorCard = () => {
  const [invests, setInvests] = useState<Invest[]>([]);

  useEffect(() => {
    const GET = async () => {
      try {
        const req = await fetch("/api/sector");
        if (req.ok) {
          const data = await req.json();
          setInvests(data);
        }
      } catch (error) {
        console.error("Failed to fetch sector data", error);
      }
    };
    GET();
  }, [])

  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">Personal Holdings</CardTitle>
        <Dialog />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="h-[200px] w-full relative max-w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={invests}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {invests.map((invest, index) => (
                    <Cell key={`cell-${index}`} fill={invest.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#fff", border: "1px solid #eee", borderRadius: "8px", fontSize: "12px" }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any, name: any, props: any) => [`${value}`, props.payload?.percentage ? `${props.payload.percentage}%` : '']}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label if needed */}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm w-full">
            {invests.map((invest, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: invest.color }}
                />
                <span className="text-muted-foreground truncate">{invest.name}</span>
                <span className="font-medium ml-auto text-xs">{invest.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default RealSectorCard
