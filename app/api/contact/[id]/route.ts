import Contact from "@/models/Contact";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  await connectToDatabase();
  try {
    const contact = await Contact.findById(id);

    return NextResponse.json(contact);
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = await req.json();
  await connectToDatabase();
  try {
    const updateContact = await Contact.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json(updateContact);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  await connectToDatabase();
  try {
    const deleteContact = await Contact.findByIdAndDelete(id);

    return NextResponse.json(deleteContact, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
