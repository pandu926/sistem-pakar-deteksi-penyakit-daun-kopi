import { create } from "zustand";

interface ResponseState {
  responseData: any | null;
  setResponseData: (data: any) => void;
  clearResponseData: () => void;
}

// Membuat store Zustand
const useResponseStore = create<ResponseState>((set) => ({
  responseData: null, // Nilai awal
  setResponseData: (data) => set({ responseData: data }),
  clearResponseData: () => set({ responseData: null }),
}));

export default useResponseStore;
