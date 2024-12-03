"use client";

import ProcessingAnimation from "@/components/Animasi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const router = useSearchParams();
  const penyakit = router.get("q");

  const penyakitSolusi = [
    {
      penyakit: "Karat Daun",
      solusi: [
        "Pemangkasan dan Pembuangan Daun yang Terinfeksi",
        "Penggunaan Fungisida",
        "Perbaikan Drainase Tanah",
        "Penanaman Varietas yang Tahan Penyakit",
        "Pemberian Pupuk yang Seimbang",
        "Peningkatan Sirkulasi Udara",
      ],
    },
    {
      penyakit: "Bercak Kuning",
      solusi: [
        "Pemangkasan Daun yang Terinfeksi",
        "Penyemprotan dengan Fungisida Berbasis Copper atau Mancozeb",
        "Penyiraman yang Tepat dan Pengaturan Kelembaban Tanah",
        "Peningkatan Kualitas Drainase Tanah",
        "Rotasi Tanaman dan Pemupukan yang Tepat",
      ],
    },
    {
      penyakit: "Nematoda",
      solusi: [
        "Penggunaan Pestisida Nematoda",
        "Rotasi Tanaman untuk Mengurangi Populasi Nematoda",
        "Tanaman Penutup Tanah untuk Mencegah Penyebaran Nematoda",
        "Peningkatan Pengolahan Tanah dan Penggunaan Tanah Subur",
      ],
    },
    {
      penyakit: "Jamur Upas",
      solusi: [
        "Pemangkasan dan Pembuangan Bagian Tanaman yang Terinfeksi",
        "Penggunaan Fungisida untuk Jamur",
        "Menjaga Kebersihan Kebun",
        "Penyuluhan kepada Petani untuk Mencegah Penyebaran Jamur",
        "Penanaman Varietas yang Tahan terhadap Jamur",
      ],
    },
    {
      penyakit: "Busuk Buah",
      solusi: [
        "Menghilangkan Buah yang Terinfeksi",
        "Penyemprotan dengan Fungisida Berbasis Klorotalonil atau Benomil",
        "Pengaturan Suhu dan Kelembaban di Sekitar Tanaman",
        "Penanaman Varietas yang Tahan Terhadap Busuk Buah",
        "Menghindari Kerusakan Fisik pada Buah",
      ],
    },
  ];

  // Filter array berdasarkan penyakit yang dipilih
  const penyakitDetail = penyakitSolusi.find(
    (item) => item.penyakit.toLowerCase() === penyakit?.toString().toLowerCase()
  );

  if (!penyakitDetail) {
    return (
      <section className="max-w-3xl space-y-8 mx-auto flex items-center justify-center flex-col px-4">
        <h1 className="my-5 text-3xl font-bold">Hasil Analisis</h1>
        <p className="flex justify-center mb-10">Penyakit tidak ditemukan.</p>
        <div className="flex justify-center">
          <Button asChild>
            <Link href={"/"}>Kembali</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl space-y-8 mx-auto flex items-center justify-center flex-col px-4">
      <h1 className="my-5 text-3xl font-bold">Hasil Analisis</h1>
      <div className="flex flex-col justify-center rounded-lg overflow-hidden capitalize">
        <p className="flex justify-center mb-10">
          Kemungkinan Terkena Penyakit
        </p>

        <h1 className="flex justify-center text-2xl font-bold mb-10">
          {penyakitDetail.penyakit}
        </h1>
        <h1 className="mb-10">Cara Penanganan:</h1>
        <ul className="list-disc pl-6">
          {penyakitDetail.solusi.map((solusi, index) => (
            <li key={index} className="text-justify">
              {solusi}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Button asChild>
          <Link href={"/"}>Kembali</Link>
        </Button>
      </div>
      <ProcessingAnimation />
    </section>
  );
}
