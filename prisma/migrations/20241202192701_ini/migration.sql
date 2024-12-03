/*
  Warnings:

  - You are about to drop the `GejalaPenyakit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GejalaPenyakit" DROP CONSTRAINT "GejalaPenyakit_kodeGejala_fkey";

-- DropForeignKey
ALTER TABLE "GejalaPenyakit" DROP CONSTRAINT "GejalaPenyakit_kodePenyakit_fkey";

-- DropTable
DROP TABLE "GejalaPenyakit";

-- CreateTable
CREATE TABLE "manuk" (
    "id" SERIAL NOT NULL,
    "kodePenyakit" TEXT NOT NULL,
    "kodeGejala" TEXT NOT NULL,

    CONSTRAINT "manuk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "manuk_kodePenyakit_kodeGejala_key" ON "manuk"("kodePenyakit", "kodeGejala");

-- AddForeignKey
ALTER TABLE "manuk" ADD CONSTRAINT "manuk_kodePenyakit_fkey" FOREIGN KEY ("kodePenyakit") REFERENCES "Penyakit"("kodePenyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manuk" ADD CONSTRAINT "manuk_kodeGejala_fkey" FOREIGN KEY ("kodeGejala") REFERENCES "Gejala"("kodeGejala") ON DELETE RESTRICT ON UPDATE CASCADE;
