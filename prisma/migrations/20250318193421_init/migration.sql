-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "hora" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Horario_hora_key" ON "Horario"("hora");
