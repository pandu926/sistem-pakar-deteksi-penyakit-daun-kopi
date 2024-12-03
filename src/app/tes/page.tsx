import ProcessingAnimation from "@/components/Animasi";
import { Link } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center capitalize">
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <h1 className="font-bold text-xl">
          Sistem Pakar Deteksi Penyakit Tanaman Kopi
        </h1>
        <h1>Algoritma CNN dan CertaintyFactor</h1>

        <div className="flex w-full">
          <div className="w-2/4">
            <Link href="#">
              <div className="flex justify-center items-center min-h-screen">
                <div
                  className="w-2/5 mx-3 mt-5 bg-center bg-cover h-96 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundImage: 'url("/assets/CF.jpg")', // Gantilah dengan URL gambar yang sesuai
                  }}
                >
                  <div className="text-center text-black bg-white rounded-lg py-2 px-4">
                    <h1 className="font-bold text-sm">yayay</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-2/4">
            <Link href="#">
              <div className="flex justify-center items-center min-h-screen">
                <div
                  className="w-2/5 mx-3 mt-5 bg-center bg-cover h-96 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundImage: 'url("/assets/CNN.jpg")', // Gantilah dengan URL gambar yang sesuai
                  }}
                >
                  <div className="text-center text-black bg-white rounded-lg py-2 px-4">
                    <h1 className="font-bold text-sm">yayay</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
