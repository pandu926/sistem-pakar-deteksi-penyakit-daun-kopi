"use client";

import { z } from "zod";

// Fungsi untuk memvalidasi ekstensi file
const validateFileExtension = (file: File) => {
  const allowedExtensions = ["jpg", "jpeg", "png", "img"];
  const fileExtension = file.name.split(".").pop()?.toLowerCase();

  // Cek apakah ekstensi file ada dan valid
  return allowedExtensions.includes(fileExtension || "");
};

// Fungsi untuk memvalidasi ukuran file (opsional)
const validateFileSize = (file: File) => {
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  return file.size <= MAX_SIZE;
};

export const formSchema = z
  .object({
    file: z
      .instanceof(File, {
        message: "Gambar tidak boleh kosong!",
      }) // Pastikan inputnya adalah sebuah File
      .refine((file) => validateFileExtension(file), {
        message: "File harus memiliki ekstensi jpg, jpeg, png, atau img.",
      })
      .refine((file) => validateFileSize(file), {
        message: "Ukuran file tidak boleh lebih dari 5MB.",
      }),
  })
  .refine((data) => !!data.file, {
    message: "File harus dipilih.",
  });
