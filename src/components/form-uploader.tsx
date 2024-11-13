"use client";

import { formSchema } from "@/types/form.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useResponseStore from "@/lib/store";

export default function FormUploader() {
  const [preview, setPreview] = useState<string | null>(null); // State untuk preview gambar
  const [loading, setLoading] = useState(false); // State untuk loading
  const inputFileRef = useRef<HTMLInputElement | null>(null); // Ref untuk input file
  const router = useRouter();
  const { setResponseData } = useResponseStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: any) {
    if (values.file) {
      const formData = new FormData();
      formData.append("file", values.file);

      setLoading(true);

      fetch(`${process.env.NEXT_PUBLIC_BASE_API}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response:", data);
          setResponseData(data);
          setLoading(false);
          router.replace("/hasil-analisis");
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false); // Reset loading state jika terjadi error
          // Tangani error jika terjadi
        });
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      if (file.type.startsWith("image/")) {
        const filePreview = URL.createObjectURL(file);
        setPreview(filePreview);

        form.setValue("file", file);

        form.clearErrors("file");
      } else {
        setPreview(null);
        form.setValue("file", null);
        form.setError("file", { message: "File harus berupa gambar." });
      }
    }
  };

  const handleDeletePreview = () => {
    setPreview(null);
    form.setValue("file", null);

    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilih Gambar</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  ref={inputFileRef}
                  onChange={(e) => handleFileChange(e)}
                />
              </FormControl>
              <FormDescription>
                Pilih gambar dengan ekstensi jpg, jpeg, png, atau img.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {preview && (
          <div className="space-y-2">
            <div>
              <Image
                src={preview}
                alt="Preview"
                width={100}
                height={100}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <Button
              variant="destructive"
              className="w-full"
              onClick={handleDeletePreview}
            >
              Hapus
            </Button>
          </div>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading && <Loader className="animate-spin" />}
          {loading ? "Memproses" : "Kirim"}
        </Button>
      </form>
    </Form>
  );
}