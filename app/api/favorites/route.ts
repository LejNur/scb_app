import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();

  try {
    const favorites = await Contact.find({ favorite: true });
    return NextResponse.json(favorites);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
