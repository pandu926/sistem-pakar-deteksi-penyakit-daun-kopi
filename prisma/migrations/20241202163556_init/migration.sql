-- CreateTable
CREATE TABLE "Penyakit" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "kodePenyakit" INTEGER NOT NULL,
    "solusi" TEXT NOT NULL,

    CONSTRAINT "Penyakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gejala" (
    "id" SERIAL NOT NULL,
    "kodeGejala" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "gambar" TEXT,

    CONSTRAINT "Gejala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GejalaPenyakit" (
    "id" SERIAL NOT NULL,
    "penyakitId" INTEGER NOT NULL,
    "gejalaId" INTEGER NOT NULL,

    CONSTRAINT "GejalaPenyakit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Penyakit_kodePenyakit_key" ON "Penyakit"("kodePenyakit");

-- CreateIndex
CREATE UNIQUE INDEX "Gejala_kodeGejala_key" ON "Gejala"("kodeGejala");

-- CreateIndex
CREATE UNIQUE INDEX "GejalaPenyakit_penyakitId_gejalaId_key" ON "GejalaPenyakit"("penyakitId", "gejalaId");

-- AddForeignKey
ALTER TABLE "GejalaPenyakit" ADD CONSTRAINT "GejalaPenyakit_penyakitId_fkey" FOREIGN KEY ("penyakitId") REFERENCES "Penyakit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GejalaPenyakit" ADD CONSTRAINT "GejalaPenyakit_gejalaId_fkey" FOREIGN KEY ("gejalaId") REFERENCES "Gejala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
