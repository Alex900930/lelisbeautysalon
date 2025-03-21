import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // 1. Tipar los parámetros de entrada
    const { 
      fecha, 
      horarioId, 
      horarioIds 
    }: {
      fecha?: string;
      horarioId?: number;
      horarioIds?: number[];
    } = await request.json();

    // 2. Validar entrada con tipos correctos
    if (!fecha || (horarioId === undefined && !horarioIds?.length)) {
      return NextResponse.json(
        { error: "Se requiere 'horarioId' o 'horarioIds'" },
        { status: 400 }
      );
    }

    // 3. Convertir a array de números explícitamente
    const ids: number[] = horarioIds 
      ? horarioIds.map(id => Number(id)) 
      : horarioId !== undefined 
        ? [Number(horarioId)] 
        : [];

    // 4. Validar fecha
    const fechaUTC = new Date(fecha);
    fechaUTC.setUTCHours(0, 0, 0, 0);
    
    if (isNaN(fechaUTC.getTime())) {
      return NextResponse.json(
        { error: "Formato de fecha inválido" },
        { status: 400 }
      );
    }

    // 5. Eliminar verificación redundante (createMany con skipDuplicates ya lo maneja)
    
    // 6. Crear citas con tipo explícito
    const citasCreadas = await prisma.cita.createMany({
      data: ids.map((id: number) => ({
        fecha: fechaUTC,
        horarioId: id, // Ya convertido a número
      })),
      skipDuplicates: true,
    });

    // 7. Respuesta tipada
    return NextResponse.json(
      {
        message: horarioId !== undefined 
          ? "Cita agendada exitosamente" 
          : `${citasCreadas.count} horarios bloqueados`,
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}