"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import CertaintyFactor from "../CertainyFactor";

interface Gejala {
  id: number;
  nama: string;
  gambar: string;
  kodeGejala: string;
  CF: number;
}

interface Penyakit {
  id: number;
  nama: string;
  solusi: string;
}

interface GejalaPenyakit {
  id: number;
  kodePenyakit: string;
  kodeGejala: string;
  penyakit: Penyakit;
  gambar: string;
  gejala: Gejala;
}

export default function QuestionPage() {
  const [questions, setQuestions] = useState<GejalaPenyakit[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [selectedGejala, setSelectedGejalaState] = useState<
    Record<string, Gejala[]>
  >({});
  const [skippedIndices, setSkippedIndices] = useState<Set<number>>(new Set());

  const router = useRouter();

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Pilih jawaban sebelum melanjutkan!");
      return;
    }

    const currentGejala = questions[currentIndex].gejala;
    const penyakitNama = questions[currentIndex].penyakit.nama;

    if (selectedAnswer === "ya") {
      setSelectedGejalaState((prev) => {
        const existingGejala = prev[penyakitNama] || [];
        return {
          ...prev,
          [penyakitNama]: [...existingGejala, currentGejala],
        };
      });
    }

    setSelectedAnswer("");
    setCurrentIndex((prev) => {
      let nextIndex = prev + 1;

      if (
        selectedGejala["karat daun"]?.some(
          (gejala) => gejala.kodeGejala == "g02"
        )
      ) {
        setSkippedIndices((prevSkipped) => new Set(prevSkipped.add(3)));
      }

      while (nextIndex < questions.length && skippedIndices.has(nextIndex)) {
        nextIndex++;
      }

      return nextIndex;
    });
  };

  const fetchGejala = async () => {
    try {
      const response = await axios.get("/api/gejalapenyakit");
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching gejala data:", error);
    }
  };

  useEffect(() => {
    fetchGejala();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg">
        {questions.length > 0 && currentIndex < questions.length ? (
          <div>
            {/* Gambar Gejala */}
            <div className="flex justify-center mb-4 md:mb-20">
              <Image
                src={`https://api.pandusubekti.com/uploads/${questions[currentIndex].gejala.gambar}`}
                alt={questions[currentIndex].gejala.nama}
                className="w-full max-w-lg h-auto rounded-lg shadow-md"
                width={1000}
                height={1000}
                quality={100}
                priority
              />
            </div>

            {/* Pertanyaan */}
            <h2 className="mb-4 md:mb-20 text-xl font-semibold text-gray-800 text-center">
              Apakah Anda mengalami gejala berikut:{" "}
              <h1 className="text-blue-500">
                {questions[currentIndex].gejala.nama} ?
              </h1>
            </h2>

            {/* Jawaban */}
            <div className="mb-4">
              <div className="mb-2">
                <input
                  type="radio"
                  id="yes"
                  name="answer"
                  value="ya"
                  checked={selectedAnswer === "ya"}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="yes" className="text-gray-700">
                  Ya
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="answer"
                  value="tidak"
                  checked={selectedAnswer === "tidak"}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="no" className="text-gray-700">
                  Tidak
                </label>
              </div>
            </div>

            {/* Tombol Berikutnya */}
            <button
              onClick={handleNext}
              className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Pertanyaan Berikutnya
            </button>
          </div>
        ) : (
          <div>
            {/* Penyelesaian */}
            <h2 className="mb-4 text-xl font-semibold text-gray-800 text-center">
              Anda telah menyelesaikan semua pertanyaan!
            </h2>
            <p className="mb-4 text-gray-700">
              Gejala yang dipilih:{" "}
              <span className="text-blue-500">
                {Object.entries(selectedGejala)
                  .map(([penyakit, gejalaList]) => {
                    return `${penyakit}: ${gejalaList
                      .map((gejala) => gejala.nama)
                      .join(", ")}`;
                  })
                  .join(" | ") || "Tidak ada"}
              </span>
            </p>

            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedAnswer("");
                setSelectedGejalaState({});
                setSkippedIndices(new Set()); // Reset skipped indices when restarting
              }}
              className="w-full px-2 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 mt-2"
            >
              Ulangi
            </button>
            <CertaintyFactor selectedGejala={selectedGejala} />
          </div>
        )}
      </div>
    </div>
  );
}
