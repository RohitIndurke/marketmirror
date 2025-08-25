import {NextResponse} from "next/server";
import Sector from "@/models/Sector";
import connectDB from '@/lib/mongodb';
import {auth} from '@clerk/nextjs/server';


export const GET = async () =>{
    try{
    await connectDB();
    const {userId:clerkId}= await auth();
    console.log("here is id",clerkId);

    const sectors = await Sector.find({});
    return NextResponse.json(sectors)
    }
    catch(error){
        console.error(error);
        return NextResponse.json({error:"fail to fetch data from database"},{status:500})
    }
}
export const POST = async (req:Request) =>{
    try{
    await connectDB();
    const body = await req.json();
    const newSector = await Sector.create(body)
     return NextResponse.json(newSector,{status:201})
    }
    catch(error){
        console.error(error);
        return NextResponse.json({error:"faild to insert "},{status:500});
    }
};
