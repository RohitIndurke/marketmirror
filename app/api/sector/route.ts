import {NextResponse} from "next/server";
import Sector from "@/models/Sector";
import connectDB from '@/lib/mongodb';

export const GET = async () =>{
    try{
    await connectDB();
    const sectors = await Sector.find({});
    return NextResponse.json(sectors)
    }
    catch(error){
        console.error(error);
        return NextResponse.json({error:"fail to fetch data from database"},{status:500})
    }
    

}
