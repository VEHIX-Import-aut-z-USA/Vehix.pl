import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: "Email jest wymagany" },
        { status: 400 }
      );
    }
    
    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: {
        email: data.email,
      },
    });
    
    if (existingSubscriber) {
      return NextResponse.json(
        { success: true, message: "Email już istnieje w bazie" },
        { status: 200 }
      );
    }
    
    // Create new subscriber
    const subscriber = await prisma.subscriber.create({
      data: {
        email: data.email,
        name: data.name || null,
      },
    });
    
    return NextResponse.json(
      { success: true, id: subscriber.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas dodawania subskrybenta" },
      { status: 500 }
    );
  }
}