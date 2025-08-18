import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Holdings = [
  { 
    name: "Energy", 
    value: 200, 
    color: "#76B900", 
    per:"27.13%"
  },
  { 
    name: "Fin.Serv.",
    value: 90, 
    color: "#8CC63F",
    per:"14.89%"
  },
  { 
    name: "FMCG",
    value: 300, 
    color: "#A4D65E", 
    per:"3.99%"
  },
  { 
    name: "Banking", 
    value: 400, 
    color: "#E5F5D6", 
    per:"10.89%" 
  },
]



const SectorCard = () => {
    return(
  <Card className="p-2 h-[250px] w-[345px] shadow-md rounded-xl relative">
    <CardHeader className="p-2">
      <CardTitle className="text-sm text-left">Personal Holdings💼</CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <ResponsiveContainer width="100%" height={140}>
        <PieChart>
          <Pie
            data={Holdings}
            cx="75%"
            cy="49.8%"
            outerRadius={70}
            innerRadius={35}
            dataKey="value"
          >
            <Cell fill={Holdings[0].color} />
            <Cell fill={Holdings[1].color} />
            <Cell fill={Holdings[2].color} />
            <Cell fill={Holdings[3].color} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 left-2 text-[10px] flex flex-col gap-1">
       {Holdings.map((Holding, index) => (
            <div key={index} className="flex items-center gap-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: Holding.color }}
              ></span>
              {Holding.name} {Holding.per}
            </div>
          ))}
      </div>
    </CardContent>
  </Card>
)
}
export default SectorCard