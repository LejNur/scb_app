import Contact from "@/models/Contact";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  try {
    const contacts = await Contact.find();
    console.log("Data", contacts);
    return NextResponse.json(contacts);
  } catch (error: any) {
    console.error("Error", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
    const body = await req.json();
    const newContact = new Contact(body);
    const savedContact = await newContact.save();
    console.log(savedContact);
    return NextResponse.json(savedContact);
  } catch (error: any) {
    console.error("Error", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
