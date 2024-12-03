// Assuming this is in a file where Gejala is defined
import { create } from "zustand";
interface Gejala {
  id: number;
  nama: string;
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
  gejala: Gejala;
}

// Example Zustand store with the `Gejala` type in use

interface GejalaState {
  selectedGejala: Record<string, Gejala[]>;
  setSelectedGejala: (gejala: Record<string, Gejala[]>) => void;
}

const useGejalaStore = create<GejalaState>((set) => ({
  selectedGejala: {},
  setSelectedGejala: (gejala) => set({ selectedGejala: gejala }),
}));

export default useGejalaStore;
