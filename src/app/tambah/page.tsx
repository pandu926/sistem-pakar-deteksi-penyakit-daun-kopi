"use client";
import axios from "axios";
import { useState, useEffect } from "react";

// Tipe untuk data penyakit
interface Penyakit {
  id: number;
  nama: string;
  kodePenyakit: string;
}

const GejalaForm = () => {
  const [nama, setNama] = useState<string>("");
  const [kodeGejala, setKodeGejala] = useState<string>("");
  const [cf, setCf] = useState<string>("");
  const [gambar, setGambar] = useState<File | null>(null); // Untuk menyimpan file gambar
  const [penyakitOptions, setPenyakitOptions] = useState<Penyakit[]>([]);
  const [selectedPenyakit, setSelectedPenyakit] = useState<string>("");

  // Fetch penyakit options saat komponen dimuat
  useEffect(() => {
    const fetchPenyakit = async () => {
      const res = await fetch("/api/penyakit");
      const data = await res.json();
      setPenyakitOptions(data); // Mengisi pilihan penyakit
    };

    fetchPenyakit();
  }, []);

  // Fungsi untuk mengunggah gambar dan mengirimkan form
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      if (file.type.startsWith("image/")) {
        setGambar(file); // Simpan file yang dipilih
      } else {
        alert("File harus berupa gambar.");
        setGambar(null); // Reset jika file bukan gambar
      }
    }
  };

  // Fungsi untuk mengirimkan form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!gambar) {
        alert("Silakan pilih gambar sebelum mengirim.");
        return; // Hentikan eksekusi jika gambar belum dipilih
      }

      const imageData = new FormData();
      imageData.append("image", gambar); // Tambahkan file gambar

      const response = await axios.post(
        "https://api.pandusubekti.com/upload",
        imageData
      );

      handleGejala(response.data.fileName);

      // const response = await axios.post(
      //   "https://api.pandusubekti.com/upload",
      //   formData
      // );
    } catch (error) {
      console.log(error);
    }
  };
  const handleGejala = async (gam: string) => {
    const CF = cf;
    const response = await axios.post("http://localhost:3000/api/gejala", {
      nama,
      kodeGejala,
      gambar: gam,
      CF,
    });
    handleManuk();
  };

  const handleManuk = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/gejalapenyakit",
      {
        kodePenyakit: selectedPenyakit,
        kodeGejala,
      }
    );

    alert("sukses");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Form Gejala Tanaman
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="nama" className="text-gray-700">
            Nama Gejala:
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="kodeGejala" className="text-gray-700">
            Kode Gejala:
          </label>
          <input
            type="text"
            id="kodeGejala"
            value={kodeGejala}
            onChange={(e) => setKodeGejala(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="solusi" className="text-gray-700">
            CF:
          </label>
          <input
            type="number"
            id="CF"
            value={cf}
            onChange={(e) => setCf(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gambar" className="text-gray-700">
            Gambar (opsional):
          </label>
          <input
            type="file"
            id="gambar"
            onChange={handleImageUpload}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="penyakit" className="text-gray-700">
            Pilih Penyakit:
          </label>
          <select
            id="penyakit"
            value={selectedPenyakit}
            onChange={(e) => setSelectedPenyakit(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Penyakit</option>
            {penyakitOptions.map((penyakit) => (
              <option key={penyakit.kodePenyakit} value={penyakit.kodePenyakit}>
                {penyakit.nama}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default GejalaForm;
