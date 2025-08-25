import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

interface Invest {
  _id: string,
  name: string,
  value: number,
  percentage: string,
  color: string
}
export default function DialogDemo() {
    const [invests,setInvest] = useState<Invest[]>([]);
    useEffect(()=>{
        const get = async() =>{
            const req = await fetch("/api/sector");
            const data = await req.json();
            setInvest(data);
        }
        get();
    },[])
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Edit✏️</Button>
            </DialogTrigger>
         <DialogContent className="sm:max-w-[425px] max-h-[80vh] flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          <DialogHeader>
            <DialogTitle>Edit Holding</DialogTitle>
            <DialogDescription>
             Here you can add or delete your holdings
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Sector Name</Label>
              <Input id="name-1" name="name"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Percentage Occupied by Sector</Label>
              <Input id="username-1" name="username"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Value same as Pecentage</Label>
              <Input id="username-1" name="username"/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">colour</Label>
              <Input id="username-1" name="username"  />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          {invests.map((invest,index)=>(
            <div key={index} className="flex items-center justify-between bg-muted/100 p-4 rounded-lg shadow-sm flex">
                <a className="flex-1 text-sm">{invest.name}</a>
                <a className="flex-1 text-sm">{invest.percentage}</a>
                <a className="w-4 h-4 rounded-md border mr-4"style={{backgroundColor:invest.color}}></a>   
                <Button  className="bg-red-400 text-gray-900">Delete</Button>  
            </div>
          ))}
          </div>
        </DialogContent>
      </form>
    </Dialog>

  ) 
}
