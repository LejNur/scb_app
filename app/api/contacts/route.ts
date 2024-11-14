import Contact from "@/models/Contact";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  try {
    const contacts = await Contact.find();

    return NextResponse.json(contacts);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ValidationError") {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
    const body = await req.json();
    const newContact = new Contact(body);
    const savedContact = await newContact.save();

    return NextResponse.json(savedContact);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ValidationError") {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
