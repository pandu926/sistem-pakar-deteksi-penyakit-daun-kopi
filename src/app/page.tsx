import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <header className="bg-white shadow px-2 md:px-20">
        <div className="flex">
          <div className=" w-3/4 md:w-4/5 flex">
            <Image
              src="/icon/KoCopLogo.png"
              width={100}
              height={100}
              alt="logo"
            />
            <h1 className="py-12 md:py-10 text-xl md:text-2xl font-bold">
              KoCop Bot
            </h1>
          </div>
          <div className="w-2/6 py-10  ">
            <div className=" flex justify-between   ">
              <Link
                href="#about "
                className="text-xl font-bold hidden md:block"
              >
                Tentang
              </Link>
              <Link href="#team " className="text-xl font-bold hidden md:block">
                Tim Kami
              </Link>
              <Link href="/login ">
                <div className="text-xl font-bold px-5 md:px-10 bg-black py-1 rounded-md text-white">
                  Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-10">
            <h1 className="text-4xl font-bold">
              Welcome
              <br />
              KoCop Bot
            </h1>
            <p className="mt-4 text-gray-600">
              Gunakan metode Kepastian Faktor untuk mendiagnosis penyakit
              tanaman kopi secara akurat.
            </p>
            <Link href="/login">
              <button className="mt-6 bg-black text-white px-6 py-2 rounded">
                DETEKSI!
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Image
              src="/assets/cop.png"
              width={400}
              height={200}
              alt="yayaya"
              className="ml-20"
            />
          </div>
        </div>

        <section className="mt-24 text-center " id="about">
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

        <section className="mt-16 text-center " id="team">
          <h2 className="text-3xl font-bold">Team Member</h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
            <div className="rounded-lg p-6 flex flex-col  items-center ">
              <Image
                alt="Team member photo"
                className="w-2/4 h-96 object-cover rounded "
                height={1000}
                src="/assets/bara.jpeg"
                quality={100} // Kualitas gambar
                priority
                width={1000}
              />
              <h3 className="mt-4 text-lg font-bold">M Filly Andi Barbara</h3>
            </div>
            <div className=" rounded-lg p-6 flex flex-col  items-center">
              <Image
                alt="Team member photo"
                className="w-2/4 h-96 object-cover rounded"
                height={1000}
                src="/assets/bily.jpeg"
                quality={100} // Kualitas gambar
                priority
                width={1000}
              />
              <h3 className="mt-4 text-lg font-bold">
                Maulana Billy Nur Syava
              </h3>
            </div>
            <div className=" rounded-lg p-6 flex flex-col  items-center">
              <Image
                alt="Team member photo"
                className="w-2/4 h-96 object-cover rounded"
                height={1000}
                src="/assets/ling.jpeg"
                quality={100} // Kualitas gambar
                priority
                width={1000}
              />
              <h3 className="mt-4 text-lg font-bold">Lingga Fajar Ramadhan</h3>
            </div>
            <div className=" rounded-lg p-6 flex flex-col  items-center">
              <Image
                alt="Team member photo"
                className="w-2/4 h-96 object-cover rounded"
                height={1000}
                src="/assets/pandu.jpeg"
                quality={100} // Kualitas gambar
                priority
                width={1000}
              />
              <h3 className="mt-4 text-lg font-bold">Ahmad Pandu Subekti</h3>
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
