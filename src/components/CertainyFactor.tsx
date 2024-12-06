"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useResponseStore from "@/lib/store";

interface Gejala {
  id: number;
  nama: string;
  kodeGejala: string;
  CF: number;
}

interface CertaintyFactorProps {
  selectedGejala: Record<string, Gejala[]>;
}

const CertaintyFactor: React.FC<CertaintyFactorProps> = ({
  selectedGejala,
}) => {
  const [results, setResults] = useState<{ penyakit: string; cf: number }[]>(
    []
  );
  const { setResponseData } = useResponseStore();
  const router = useRouter();
  const calculateCF = () => {
    const hasil = Object.keys(selectedGejala).map((penyakitNama) => {
      const gejalaArray = selectedGejala[penyakitNama];

      if (gejalaArray.length === 0) {
        return { penyakit: penyakitNama, cf: 0 };
      }

      // Menghitung CF untuk setiap penyakit berdasarkan gejala yang dipilih
      const cfCombined = gejalaArray.reduce((acc, gejala, index) => {
        if (index === 0) return gejala.CF;
        return acc + gejala.CF * (1 - acc);
      }, 0);

      return {
        penyakit: penyakitNama,
        cf: cfCombined,
      };
    });
    const data = new FormData();
    data.append("penyakit", hasil[0].penyakit);
    data.append("akurasi", hasil[0].cf.toString());
    const penyakit = data.get("penyakit")?.toString() || "";
    const akurasi = parseFloat(data.get("akurasi")?.toString() || "0");

    // Kirim data ke Zustand
    setResponseData({ penyakit, akurasi });
    router.replace("/dashboard/hasil-analisis");
  };

  return (
    <div className="flex flex-col items-center py-2 bg-white rounded-lg ">
      <button
        onClick={calculateCF}
        className="px-4 py-2 mb-4 w-full text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Analisa Gejala
      </button>
      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="text-lg text-gray-700">
              <p>
                Penyakit: <span className="font-bold">{result.penyakit}</span>
              </p>
              <p>
                Tingkat kepercayaan:{" "}
                <span className="font-bold">
                  {(result.cf * 100).toFixed(2)}%
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertaintyFactor;
