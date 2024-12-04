import { create } from "zustand";

interface AnalysisState {
  penyakit: string;
  akurasi: number;
  setResponseData: (data: { penyakit: string; akurasi: number }) => void;
  clearResponseData: () => void;
}

const useResponseStore = create<AnalysisState>((set) => ({
  penyakit: "", // Nilai awal untuk penyakit
  akurasi: 0, // Nilai awal untuk akurasi
  setResponseData: ({ penyakit, akurasi }) => set({ penyakit, akurasi }),
  clearResponseData: () => set({ penyakit: "", akurasi: 0 }),
}));

export default useResponseStore;
