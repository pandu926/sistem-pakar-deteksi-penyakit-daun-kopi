import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const gejala = await prisma.gejala.findMany({});
    return NextResponse.json(gejala);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama, kodeGejala, gambar, CF } = body;

    const gejala = await prisma.gejala.create({
      data: {
        nama,
        kodeGejala,
        gambar,
        CF: parseFloat(CF),
      },
    });

    return NextResponse.json(gejala, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// Handle PUT requests
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, nama, kodeGejala, gambar, CF } = body;

    const gejala = await prisma.gejala.update({
      where: { id },
      data: {
        nama,
        kodeGejala,
        gambar,
        CF,
      },
    });

    return NextResponse.json(gejala, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// Handle DELETE requests
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.gejala.delete({ where: { id } });
    return NextResponse.json({ message: "gejala deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
