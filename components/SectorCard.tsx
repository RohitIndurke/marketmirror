import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
const sectorDatas = [
  {
    name: "Fin. Serv.",
    value: 37.32,
    percentage: "37.32%",
    color: "#76B900" // NVIDIA Green
  },
  {
    name: "IT",
    value: 11.16,
    percentage: "11.16%",
    color: "#8CC63F" // Fresh Green
  },
  {
    name: "Energy",
    value: 10.53,
    percentage: "10.53%",
    color: "#A4D65E" // Soft Green
  },
  {
    name: "Auto",
    value: 7.02,
    percentage: "7.02%",
    color: "#b7e683ff" // Light Green
  },
  {
    name: "FMCG",
    value: 6.46,
    percentage: "6.46%",
    color: "#bbebaaff" // Very Light Green
  },
  {
    name: "Other",
    value: 19.06,
    percentage: "19.06%",
    color: "#ccf1aaff " // Neutral Gray
  },
  {
    name: "Telecommunication",
    value: 4.65,
    percentage: "4.65%",
    color: "#d1f0baff" // Darker Gray
  },
  {
    name: "Construction",
    value: 3.80,
    percentage: "3.80%",
    color: "#FFFFFF" // White
  }
];






const SectorCard = () => {
    return(
  <Card className="p-2 h-[250px] w-[345px] shadow-md rounded-xl relative">
    <CardHeader className="p-2">
      <CardTitle className="text-sm text-left">NIFTY50 Sector Holdings🏢</CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <ResponsiveContainer width="100%" height={140}>
        <PieChart>
          <Pie
            data={sectorDatas}
            cx="75%"
            cy="49.8%"
            outerRadius={70}
            innerRadius={35}
            dataKey="value"
          >
              <Cell fill={sectorDatas[0].color} /> 
              <Cell fill={sectorDatas[1].color} /> 
              <Cell fill={sectorDatas[2].color} />
              <Cell fill={sectorDatas[3].color} />
              <Cell fill={sectorDatas[4].color} /> 
              <Cell fill={sectorDatas[5].color} />
              <Cell fill={sectorDatas[6].color} /> 
              <Cell fill={sectorDatas[7].color} /> 
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 left-2 text-[10px] flex flex-col gap-1">
        {sectorDatas.map((sector,index)=>(
            <div key={index} className="flex items-center gap-1">
                <span
                className="w-2 h-2 rounded-full"
                style={{backgroundColor:sector.color}}>
                </span>
                {sector.name}   {sector.percentage}
            </div>
        ))}
        </div>
     
    </CardContent>
  </Card>
)
}
export default SectorCard