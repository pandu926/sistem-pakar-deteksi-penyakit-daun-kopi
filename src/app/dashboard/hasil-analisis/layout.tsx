import GeminiChat from "@/components/GeminiPrompt";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full px-20">
        {children}
        {/* Komponen GeminiChat dengan posisi fixed */}
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <GeminiChat />
        </div>
      </body>
    </html>
  );
}
