-- CreateTable
CREATE TABLE "Cita" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "horarioId" INTEGER NOT NULL,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
