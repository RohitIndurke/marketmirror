"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
// Line chart data
const lineData = [
  { 
    name: "Jan",
     value: 110, 
     altValue: 0
     },
  { 
    name: "Feb", 
    value: 70, 
    altValue: 10
   },
  { 
    name: "Mar", 
    value: 90, 
    altValue: 20 
  },
  { 
    name: "Apr", 
    value: 140, 
    altValue: 50
   },
  {
     name: "May",
      value: 89,
       altValue: 80
   },
  { 
    name: "Jun",
     value: 190,
      altValue: 150
     },
  { 
    name: "Jul",
    value: 80,
     altValue: 110
     },
     { 
    name: "Aug",
     value: 40,
      altValue: 100
    
    },
  { 
    name: "Sep",
     value: 120,
      altValue: 100
    
    },
  { 
    name: "Oct",
     value: 90,
      altValue: 95
     },
  { 
    name: "Nov",
     value: 140,
      altValue: 105
     },
  { 
    name: "Dec",
     value: 19,
      altValue: 60
     }
]


const NiftyCard = () => {

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
          <Line type="monotone" dataKey="value" stroke="#ecf3f7ff" dot={{ r: 2 }} />
          {/* ✅ Added second line */}
          <Line type="monotone" dataKey="altValue" stroke="#25d61fff" dot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
) 
}
export default NiftyCard;