"use client"
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {useState,useEffect} from 'react'
import  Dialog  from "@/components/Dialog";

interface Invest {
  _id: string,
  name: string,
  value: number,
  percentage: string,
  color: string
}




const RealSectorCard = () => {
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
  <Card className="p-2 h-[250px] w-[345px] shadow-md rounded-xl relative">
    <CardHeader className="p-2">
      <CardTitle className="text-sm text-left flex"><a className="flex-2">Personal Holdings💼</a>
      <a className="text-right flex-2"><Dialog/></a></CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <ResponsiveContainer width="100%" height={140}>
        <PieChart>
          <Pie
            data={invests}
            cx="75%"
            cy="49.8%"
            outerRadius={70}
            innerRadius={35}
            dataKey="value"
          >{invests.map((invest,index)=>(
              <Cell key={`cell-${index}`} fill={invest.color}/> 
          ))}
              
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 left-2 text-[10px] flex flex-col gap-1">
        {invests.map((invest,index)=>(
            <div key={index} className="flex items-center gap-1">
                <span
                className="w-2 h-2 rounded-full"
                style={{backgroundColor:invest.color}}>
                </span>
                {invest.name}   {invest.percentage}%
            </div>
        ))}
        </div>
     
    </CardContent>
  </Card>
)
}
export default RealSectorCard