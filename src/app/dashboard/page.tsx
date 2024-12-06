import Link from "next/link";
import React from "react";
import { signOut, auth } from "@/auth";

export default async function Page() {
  return (
    <div className="flex justify-center capitalize px-4">
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <h1 className="font-bold text-xl text-center mb-5">
          Sistem Pakar Deteksi Penyakit Tanaman Kopi
        </h1>
        <h1 className="text-center ">Algoritma CNN dan Certainty Factor</h1>

        <div className="md:flex block w-full mt-10 md:mt-52 gap-4">
          {/* Card 1 */}
          <div className="w-full md:w-2/4 flex justify-center pb-10">
            <Link
              href="/dashboard/cf"
              className="w-3/4 md:w-3/5 mx-3 bg-center bg-cover h-52 md:h-96 rounded-2xl flex items-center justify-center"
              style={{
                backgroundImage: 'url("/assets/CF.jpg")', // Gantilah dengan URL gambar yang sesuai
              }}
            >
              <div className="text-center text-black bg-white bg-opacity-90 rounded-lg py-2 px-4">
                <h1 className="font-bold text-lg md:text-2xl">
                  Certainty Factor
                </h1>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-2/4 flex justify-center">
            <Link
              href="/dashboard/cnn"
              className="w-3/4 md:w-3/5 mx-3 bg-center bg-cover h-52 md:h-96 rounded-2xl flex items-center justify-center"
              style={{
                backgroundImage: 'url("/assets/CNN.jpg")', // Gantilah dengan URL gambar yang sesuai
              }}
            >
              <div className="text-center text-black bg-white bg-opacity-90 rounded-lg py-2 px-4">
                <h1 className="font-bold text-lg md:text-2xl">
                  Convolutional Neural Network (testing)
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
