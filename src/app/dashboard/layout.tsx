import Navbar from "@/components/dashboard/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* Komponen GeminiChat dengan posisi fixed */}
      </body>
    </html>
  );
}
