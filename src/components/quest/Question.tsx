"use client";

import { useState } from "react";

export default function QuestionPage() {
  const questions = [
    { id: 1, question: "Apa warna langit pada siang hari?", answer: "Biru" },
    { id: 2, question: "Berapa hasil dari 2 + 2?", answer: "4" },
    {
      id: 3,
      question: "Siapa presiden pertama Indonesia?",
      answer: "Soekarno",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setUserAnswer("");
    setIsCorrect(null);
  };

  const handleAnswer = () => {};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {currentIndex < questions.length ? (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              {questions[currentIndex].question}
            </h2>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jawaban Anda"
            />
            {isCorrect === false && (
              <p className="mb-4 text-red-500">Jawaban salah, coba lagi!</p>
            )}
            {isCorrect === true && (
              <p className="mb-4 text-green-500">Jawaban benar!</p>
            )}
            <div className="flex justify-end gap-4">
              {!isCorrect && (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Cek Jawaban
                </button>
              )}
              {isCorrect && (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                >
                  Pertanyaan Berikutnya
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Anda telah menyelesaikan semua pertanyaan!
            </h2>
            <button
              onClick={() => setCurrentIndex(0)}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Ulangi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
