"use client";

import { Button } from "@/components/ui/button";
import useResponseStore from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const response = useResponseStore((state) => state.responseData);

  return (
    <section className="h-screen max-w-3xl space-y-8 mx-auto flex items-center justify-center flex-col px-4">
      <h1 className="my-5 text-3xl font-bold">Hasil Analisis</h1>
      <div className="flex flex-col border rounded-lg overflow-hidden bg-gray-50 w-full">
        <div className="grid grid-cols-3 p-2 border-b">
          <p className="font-semibold">Gambar Terdeteksi</p>
          <p className="col-span-2">
            {response ? response.predicted_class : "Data tidak tersedia"}
          </p>
        </div>
        <div className="grid grid-cols-3 p-2">
          <p className="font-semibold">Prediksi Penyakit</p>
          <p className="col-span-2">
            {response ? response.disease_detected : "-"}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button asChild>
          <Link href={"/"}>Kembali</Link>
        </Button>
      </div>
    </section>
  );
}
