"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
// Line chart data
const lineData = [
  { 
    name: "Jan",
     investment: 110, 
     nifty: 0
     },
  { 
    name: "Feb", 
    investment: 70, 
    nifty: 10
   },
  { 
    name: "Mar", 
    investment: 90, 
    nifty: 20 
  },
  { 
    name: "Apr", 
    investment: 140, 
    nifty: 50
   },
  {
     name: "May",
      investment: 89,
       nifty: 80
   },
  { 
    name: "Jun",
     investment: 190,
      nifty: 150
     },
  { 
    name: "Jul",
    investment: 80,
     nifty: 110
     },
     { 
    name: "Aug",
     investment: 40,
      nifty: 100
    
    },
  { 
    name: "Sep",
     investment: 120,
      nifty: 100
    
    },
  { 
    name: "Oct",
     investment: 90,
      nifty: 95
     },
  { 
    name: "Nov",
     investment: 140,
      nifty: 105
     },
  { 
    name: "Dec",
     investment: 19,
      nifty: 60
     }
]


const NiftyGraph = () => {

return(
    <Card className="p-2 h-[250px] w-[345px] shadow-md rounded-xl">
    <CardHeader className="p-2 text-left">
      <CardTitle className="text-sm "><a className="text-white-500">NIFTY50</a> vs  <a className="text-green-500">Investment🧾</a> </CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={lineData}>
          <XAxis dataKey="name" stroke="#888" fontSize={10} />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="investment" stroke="#299cdeff" dot={{ r: 2 }} />
          {/* ✅ Added second line */}
          <Line type="monotone" dataKey="nifty" stroke="#25d61fff" dot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
) 
}
export default NiftyGraph;