-- DropIndex
DROP INDEX "Horario_hora_key";

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
