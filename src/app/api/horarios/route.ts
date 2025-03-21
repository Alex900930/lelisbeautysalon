import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fechaParam = searchParams.get('fecha');

  if (!fechaParam) {
    return NextResponse.json({ error: 'Fecha requerida' }, { status: 400 });
  }

  try {
    // Validar formato de fecha ISO
    const fechaISO = new Date(fechaParam);
    if (isNaN(fechaISO.getTime())) {
      return NextResponse.json({ error: 'Formato de fecha inválido' }, { status: 400 });
    }

    // Convertir a fecha UTC para evitar problemas de zona horaria
    const fechaUTC = new Date(
      Date.UTC(
        fechaISO.getUTCFullYear(),
        fechaISO.getUTCMonth(),
        fechaISO.getUTCDate()
      )
    );

    // Obtener todos los horarios
    const todosHorarios = await prisma.horario.findMany();

    // Verificar disponibilidad usando Cita
    const horariosDisponibles = await Promise.all(
      todosHorarios.map(async (horario) => {
        const cita = await prisma.cita.findFirst({
          where: {
            fecha: fechaUTC,
            horarioId: horario.id,
          },
        });
        return {
          ...horario,
          disponible: !cita,
        };
      })
    );

    // Filtrar horarios disponibles
    const disponibles = horariosDisponibles.filter((h) => h.disponible);

    return NextResponse.json(disponibles);
  } catch (error) {
    console.error('Error al obtener los horarios:', error);
    return NextResponse.json(
      { error: 'Error al obtener los horarios' },
      { status: 500 }
    );
  }
}

