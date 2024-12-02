/*
  Warnings:

  - You are about to drop the column `gejalaId` on the `GejalaPenyakit` table. All the data in the column will be lost.
  - You are about to drop the column `penyakitId` on the `GejalaPenyakit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[kodePenyakit,kodeGejala]` on the table `GejalaPenyakit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kodeGejala` to the `GejalaPenyakit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kodePenyakit` to the `GejalaPenyakit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GejalaPenyakit" DROP CONSTRAINT "GejalaPenyakit_gejalaId_fkey";

-- DropForeignKey
ALTER TABLE "GejalaPenyakit" DROP CONSTRAINT "GejalaPenyakit_penyakitId_fkey";

-- DropIndex
DROP INDEX "GejalaPenyakit_penyakitId_gejalaId_key";

-- AlterTable
ALTER TABLE "Gejala" ALTER COLUMN "kodeGejala" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "GejalaPenyakit" DROP COLUMN "gejalaId",
DROP COLUMN "penyakitId",
ADD COLUMN     "kodeGejala" TEXT NOT NULL,
ADD COLUMN     "kodePenyakit" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GejalaPenyakit_kodePenyakit_kodeGejala_key" ON "GejalaPenyakit"("kodePenyakit", "kodeGejala");

-- AddForeignKey
ALTER TABLE "GejalaPenyakit" ADD CONSTRAINT "GejalaPenyakit_kodePenyakit_fkey" FOREIGN KEY ("kodePenyakit") REFERENCES "Penyakit"("kodePenyakit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GejalaPenyakit" ADD CONSTRAINT "GejalaPenyakit_kodeGejala_fkey" FOREIGN KEY ("kodeGejala") REFERENCES "Gejala"("kodeGejala") ON DELETE RESTRICT ON UPDATE CASCADE;
