import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fecha = searchParams.get('fecha'); // Obtener la fecha desde la URL

  try {
    // Obtener horarios disponibles que no estén reservados para la fecha dada
    const horariosDisponibles = await prisma.horario.findMany({
      where: {
        disponible: true,
        citas: {
          none: {
            fecha: new Date(fecha), // Filtrar por fecha
          },
        },
      },
    });

    // Ordenar los horarios por id de forma ascendente
    const horariosOrdenados = horariosDisponibles.sort((a, b) => a.id - b.id);

    return NextResponse.json(horariosOrdenados, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      console.log(error),
      { error: 'Error al obtener los horarios' },
      { status: 500 }
    );
  }
}