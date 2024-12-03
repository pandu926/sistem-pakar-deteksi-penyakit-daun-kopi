"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  gambar: string; // URL gambar gejala
  gejala: Gejala;
}

export default function QuestionPage() {
  const [questions, setQuestions] = useState<GejalaPenyakit[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [selectedGejala, setSelectedGejalaState] = useState<
    Record<string, Gejala[]>
  >({});
  const router = useRouter();

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Pilih jawaban sebelum melanjutkan!");
      return;
    }

    if (selectedAnswer === "ya") {
      const currentGejala = questions[currentIndex].gejala;
      const penyakitNama = questions[currentIndex].penyakit.nama;

      setSelectedGejalaState((prev) => {
        const existingGejala = prev[penyakitNama] || [];
        return {
          ...prev,
          [penyakitNama]: [...existingGejala, currentGejala],
        };
      });
    }

    setSelectedAnswer("");
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {};

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {questions.length > 0 && currentIndex < questions.length ? (
          <div>
            {/* Gambar Gejala */}
            <div className="flex justify-center mb-4">
              <img
                src={`https://api.pandusubekti.com/uploads/${questions[currentIndex].gejala.gambar}`}
                alt={questions[currentIndex].gejala.nama}
                className="w-full max-w-xs h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Pertanyaan */}
            <h2 className="mb-4 text-xl font-semibold text-gray-800 text-center">
              Apakah Anda mengalami gejala berikut:{" "}
              <span className="text-blue-500">
                {questions[currentIndex].gejala.nama}
              </span>
              ?
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
