"use client";

import { useEffect, useState } from "react";

export default function ProcessingAnimatio() {
  const [isProcessing, setIsProcessing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulasi proses selama 5 detik
    const processingTimer = setTimeout(() => {
      setIsProcessing(false);

      // Hapus elemen setelah 1 detik selesai proses
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(hideTimer); // Cleanup jika komponen di-unmount
    }, 5000);

    return () => clearTimeout(processingTimer); // Cleanup jika komponen di-unmount
  }, []);

  if (!isVisible) {
    return null; // Tidak menampilkan apa-apa jika elemen sudah dihapus
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white -top-10 ">
      <div className="text-center">
        {isProcessing ? (
          <div>
            {/* Animasi Loading */}
            <div className="relative w-20 h-20 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
            <p className="mt-4 text-lg font-semibold ">
              Memproses data, mohon tunggu...
            </p>
          </div>
        ) : (
          <div>
            {/* Animasi Selesai */}
            <div className="w-20 h-20 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="mt-4 text-lg font-semibold text-green-400">
              Pemrosesan selesai!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
