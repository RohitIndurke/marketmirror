"use client"

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
import { useUser,SignedIn } from "@clerk/nextjs";

interface Invest {
  _id: string,
  name: string,
  value: number,
  percentage: string,
  color: string,
  clerkId?:string,
}
export default function DialogDemo() {
    const {user} = useUser();
    const [invests,setInvest] = useState<Invest[]>([]);
    const [name,setName] =useState("");
    const [percentage,setPercentage] =useState("");
    const [value,setValue] = useState("");
    const [color,setColor] = useState("");

  const fetchSector = async() =>{
            const req = await fetch("/api/sector");
            const data = await req.json();
            setInvest(data);
        }
    useEffect(()=>{ 
        fetchSector();
    },[])

    const handelSave = async() =>{
      const body = {
        name,
        percentage,
        value,
        color,
      };
      await fetch("api/sector",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(body)
      });
     fetchSector();
    }
    
  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button variant="outline">✏️Edit</Button>
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
              <Input id="name-1" name="name" value={name} onChange={(e) => setName(e.target.value) }/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Percentage Occupied by Sector</Label>
              <Input id="username-1" name="percentage" value={percentage}  onChange={(e) => setPercentage(e.target.value)}/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Value same as Pecentage</Label>
              <Input id="username-1" name="value" value={value}onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">colour</Label>
              <Input id="username-1" name="color "value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handelSave}>Save changes</Button>
          </DialogFooter>
          {invests.map((invest)=>(
            <div key={invest._id} className="flex items-center justify-between bg-muted/100 p-4 rounded-lg shadow-sm flex">
                <a className="flex-1 text-sm">{invest.name}</a>
                <a className="flex-1 text-sm">{invest.percentage}</a>
                <a className="w-4 h-4 rounded-md border mr-4"style={{backgroundColor:invest.color}}></a>   
                <Button  className="bg-red-400 text-gray-900">Delete</Button>  
            </div>
          ))}
          </div>
        </DialogContent>

    </Dialog>

  ) 
}
