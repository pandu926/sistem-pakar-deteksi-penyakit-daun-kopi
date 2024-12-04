import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const manuk = await prisma.manuk.findMany({
      include: {
        gejala: true, // Relasi ke tabel gejala
        penyakit: true, // Relasi ke tabel penyakit
      },
    });
    return NextResponse.json(manuk);
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
    const { kodePenyakit, kodeGejala } = body;

    const manuk = await prisma.manuk.create({
      data: {
        kodePenyakit,
        kodeGejala,
      },
    });

    return NextResponse.json(manuk, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// Handle PUT requests
// export async function PUT(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { id, nama, kodemanuk, gambar, CF } = body;

//     const manuk = await prisma.manuk.update({
//       where: { id },
//       data: {
//         nama,
//         kodemanuk,
//         gambar,
//         CF,
//       },
//     });

//     return NextResponse.json(manuk, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: error instanceof Error ? error.message : "Unknown error" },
//       { status: 500 }
//     );
//   }
// }

// Handle DELETE requests
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.manuk.delete({ where: { id } });
    return NextResponse.json({ message: "manuk deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
