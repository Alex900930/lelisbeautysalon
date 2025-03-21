/*
  Warnings:

  - You are about to drop the column `disponible` on the `Horario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Horario" DROP COLUMN "disponible",
ALTER COLUMN "fecha" DROP NOT NULL,
ALTER COLUMN "fecha" DROP DEFAULT;
