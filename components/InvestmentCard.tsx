import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sectorDatas = [
  { 
    name: "IT", 
    value: 200, 
    color: "#0088FE" 
  },
    { 
      name: "Health",
       value: 90, 
       color: "#00C49F"
       },
  { 
    name: "FMCG",
     value: 300, 
     color: "#FFBB28" 
    },
  { 
    name: "Banking", 
    value: 400, 
    color: "#FF8042"
   },
]


const SectorCard = () => {
    return(
  <Card className="p-2 h-[180px] w-[220px] shadow-md rounded-xl relative">
    <CardHeader className="p-2">
      <CardTitle className="text-sm">Personal Holdings</CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={sectorDatas}
            cx="70%"
            cy="40%"
            outerRadius={40}
            innerRadius={20}
            dataKey="value"
          >
            <Cell fill="#0088FE" />
            <Cell fill="#00C49F" />
            <Cell fill="#FFBB28" />
            <Cell fill="#FF8042" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 left-2 text-[10px] flex flex-col gap-1">
       {sectorDatas.map((sector, index) => (
            <div key={index} className="flex items-center gap-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: sector.color }}
              ></span>
              {sector.name}
            </div>
          ))}
      </div>
    </CardContent>
  </Card>
)
}
export default SectorCard