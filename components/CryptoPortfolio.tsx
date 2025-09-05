"use client"
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {useState,useEffect} from 'react'
import { Button } from "./ui/button";

interface Invest {
  _id: string,
  name: string,
  value: number,
  percentage: string,
  color: string
}




const CryptoPortfolio = () => {
  const [invests,setInvests] = useState<Invest[]>([]);

useEffect(()=>{

  const GET = async()=>{
    const req = await fetch("/api/sector");
    const data = await req.json();
    setInvests(data)
  };
  GET();
},[])


    return(
  <Card className="p-2 h-[500px] w-[345px] shadow-md relative">
    <CardHeader className="p-2">
      <CardTitle className="text-sm text-left flex"><a className="flex-2">Personal Holdings💼</a>
      <a className="text-right flex-2"> <Button>Connect Wallet</Button></a></CardTitle>
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
          >{invests.map((invest,index)=>(
              <Cell key={`cell-${index}`} fill={invest.color}/> 
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
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: invest.color }}
        />
        <span className="font-medium">{invest.name}</span>
      </div>

      <div className="flex flex-col text-right">
        <span className="font-medium">${invest.value}</span>
        <span className="text-gray-500 text-xs">{invest.percentage}%</span>
      </div>
    </div>
  ))}
</div>

     
    </CardContent>
  </Card>
)
}
export default CryptoPortfolio