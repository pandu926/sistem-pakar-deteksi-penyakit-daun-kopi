import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const penyakit = await prisma.penyakit.findMany({
      include: { gejala: { include: { gejala: true } } },
    });
    return NextResponse.json(penyakit);
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
    const { nama, kodePenyakit, solusi } = body;

    const penyakit = await prisma.penyakit.create({
      data: {
        nama,
        kodePenyakit,
        solusi,
      },
    });

    return NextResponse.json(penyakit, { status: 201 });
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
    const { id, nama, kodePenyakit, solusi, gejalaIds } = body;

    const penyakit = await prisma.penyakit.update({
      where: { id },
      data: {
        nama,
        kodePenyakit,
        solusi,
        gejala: {
          deleteMany: {}, // Hapus relasi lama
          create: gejalaIds.map((gejalaId: number) => ({ gejalaId })),
        },
      },
    });

    return NextResponse.json(penyakit, { status: 200 });
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

    await prisma.penyakit.delete({ where: { id } });
    return NextResponse.json({ message: "Penyakit deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
