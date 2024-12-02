/*
  Warnings:

  - Added the required column `CF` to the `Gejala` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gejala" ADD COLUMN     "CF" INTEGER NOT NULL;
