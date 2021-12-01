/*
  Warnings:

  - You are about to drop the `LANGUAGES` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LANGUAGES";

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,
    "spoken" TEXT,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_language_key" ON "Language"("language");
