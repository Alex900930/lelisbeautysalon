import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  const { fecha, horarioId } = await request.json();

  try {
    // Crear una nueva cita
    const nuevaCita = await prisma.cita.create({
      data: {
        fecha: new Date(fecha),
        horarioId: parseInt(horarioId),
      },
    });

    return NextResponse.json(nuevaCita, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear la cita' },
      { status: 500 }
    );
  }
}