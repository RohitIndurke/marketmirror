import { NextResponse } from "next/server";
import Sector from "@/models/Sector";
import connectDB from "@/lib/mongodb";
import { auth } from "@clerk/nextjs/server";

export const GET = async () => {
  try {
    await connectDB();
    const { userId: clerkId } = await auth();
    const sectors = await Sector.find({ clerkId });
    return NextResponse.json(sectors);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "fail to fetch data from database" },
      { status: 500 }
    );
  }
};
export const POST = async (req: Request) => {
  try {
    await connectDB();
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Login first" }, { status: 401 });
    }
    const body = await req.json();
    const newSector = await Sector.create({
      name: body.name,
      percentage: body.percentage,
      value: body.value,
      color: body.color,
      clerkId: userId,
    });
    return NextResponse.json(newSector, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "faild to insert " }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    await connectDB();
    const { _id } = await req.json();
    if (!_id) {
      console.error("Unexpected error,id of sector not found", { status: 404 });
    }
    await Sector.deleteOne({ _id });
    return NextResponse.json({ message: "Data deletion done" });
  } catch (error) {
    console.error("Unable to delete data", error);
    return NextResponse.json(
      { error: "not able to delete data" },
      { status: 500 }
    );
  }
};
