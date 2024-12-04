import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              alt="KoCop Bot Logo"
              className="h-10 w-10"
              height={40}
              src="https://storage.googleapis.com/a1aa/image/0BPJ44FEwD6SO54ZKIyrmPpNMVLSvf6EeGWl5PfUBZPfPrdPB.jpg"
              width={40}
            />
            <span className="ml-2 text-xl font-bold">KoCop Bot</span>
          </div>
          <nav className="space-x-4 hidden md:flex">
            <a className="text-gray-700" href="#">
              Deteksi
            </a>
            <a className="text-gray-700" href="#">
              About
            </a>
            <Link
              className="bg-black text-white px-4 py-2 rounded"
              href="/login"
            >
              LOGIN
            </Link>
          </nav>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-gray-700">☰</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-14">
            <h1 className="text-4xl font-bold">
              Welcome
              <br />
              KoCop Bot
            </h1>
            <p className="mt-4 text-gray-600">
              Gunakan metode Kepastian Faktor untuk mendiagnosis penyakit
              tanaman kopi secara akurat.
            </p>
            <button className="mt-6 bg-black text-white px-6 py-2 rounded">
              DETEKSI!
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img
              alt="Illustration of diagnostic tools and charts"
              className="mx-auto"
              height={300}
              src="/assets/cop.png"
              width={400}
            />
          </div>
        </div>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold">Kenali Tanaman Kopimu</h2>
          <p className="mt-2 text-gray-600">
            Jelajahi solusi efektif untuk penyakit tanaman
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
              <i className="fas fa-search text-4xl text-black"></i>
              <h3 className="mt-4 text-xl font-bold">Diagnosa Penyakit</h3>
              <p className="mt-2 text-gray-600">
                Diagnosa cepat dan akurat untuk berbagai penyakit tanaman kopi.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
              <i className="fas fa-info-circle text-4xl text-black"></i>
              <h3 className="mt-4 text-xl font-bold">Informasi Penyakit</h3>
              <p className="mt-2 text-gray-600">
                Pelajari tentang berbagai penyakit yang dapat menyerang tanaman
                kopi.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold">Team Member</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                alt="Team member photo"
                className="w-full h-40 object-cover rounded"
                height={150}
                src="https://storage.googleapis.com/a1aa/image/iKElVYnBKsZ3J5JpXspeTICALC0B6SX3Qqf2Mbax4Uaen1unA.jpg"
                width={150}
              />
              <h3 className="mt-4 text-lg font-bold">Ahmad Pandu Subekti</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                alt="Team member photo"
                className="w-full h-40 object-cover rounded"
                height={150}
                src="https://storage.googleapis.com/a1aa/image/iKElVYnBKsZ3J5JpXspeTICALC0B6SX3Qqf2Mbax4Uaen1unA.jpg"
                width={150}
              />
              <h3 className="mt-4 text-lg font-bold">
                Maulana Billy Nur Syava
              </h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                alt="Team member photo"
                className="w-full h-40 object-cover rounded"
                height={150}
                src="https://storage.googleapis.com/a1aa/image/iKElVYnBKsZ3J5JpXspeTICALC0B6SX3Qqf2Mbax4Uaen1unA.jpg"
                width={150}
              />
              <h3 className="mt-4 text-lg font-bold">Lingga Fajar Ramadhan</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                alt="Team member photo"
                className="w-full h-40 object-cover rounded"
                height={150}
                src="https://storage.googleapis.com/a1aa/image/iKElVYnBKsZ3J5JpXspeTICALC0B6SX3Qqf2Mbax4Uaen1unA.jpg"
                width={150}
              />
              <h3 className="mt-4 text-lg font-bold">M Filly Andi Barbara</h3>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-4">
        <div className="container mx-auto text-center text-gray-600">
          Copyright © 2024 KoCop Bot
        </div>
      </footer>
    </div>
  );
}
