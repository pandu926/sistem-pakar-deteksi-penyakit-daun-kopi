import FormUploader from "@/components/form-uploader";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-5">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="mb-5 text-2xl font-bold">Upload Gambar Daun Kopi</h1>
          <FormUploader />
        </div>
      </div>
    </section>
  );
}
