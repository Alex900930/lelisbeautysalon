"use client";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale/pt-BR'; // Importa la localización
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Horario {
  id: number;
  hora: string;
  disponible: boolean;
}

registerLocale('pt-BR', ptBR); // Registra la localización
setDefaultLocale('pt-BR');

export default function AdminHorarios() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [horarios, setHorarios] = useState<Horario[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

   // Bloquear múltiples horarios
const handleBloquear = async () => {
    if (!selectedDate || selectedIds.length === 0) return;
  
    try {
      await fetch('/api/citas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha: selectedDate.toISOString(),
          horarioIds: selectedIds,
        }),
      });

      // Bloquear horários
        toast.success(`✅ ${selectedIds.length} horários bloqueados com sucesso!`, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
        });
      
      // Actualizar lista
      handleDateChange(selectedDate);
      setSelectedIds([]);
    } catch (error) {
        console.log(error);
        toast.error(`❌ Erro ao bloquear horários`, {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
          });
    }
  };
  
  // Desbloquear múltiples horarios
  const handleDesbloquear = async () => {
    if (!selectedDate || selectedIds.length === 0) return;
  
    try {
      await fetch('/api/citas', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha: selectedDate.toISOString(),
          horarioIds: selectedIds,
        }),
      });

      // Desbloquear horários
toast.success(`🔓 ${selectedIds.length} horários desbloqueados com sucesso!`, {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  });
  
      // Actualizar lista
      handleDateChange(selectedDate);
      setSelectedIds([]);
    } catch (error) {
        console.log(error);
        toast.error(`❌ Erro ao desbloquear horários`, {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
          });
    }
  };

  // Cargar horarios cuando se selecciona una fecha
  const handleDateChange = async (date: Date | null) => {
    if (!date) return;
  
    try {
      const fechaUTC = new Date(date);
      fechaUTC.setUTCHours(0, 0, 0, 0); // Normalizar a UTC
      
      const response = await fetch(`/api/horarios?fecha=${fechaUTC.toISOString()}`);
      const data = await response.json();
      
      setHorarios(data);
      setSelectedDate(fechaUTC);
      setStep(2);
    } catch (error) {
        console.log(error);
      alert('Error al cargar horarios');
    }
  };
 

  // Manejar la selección de horarios
  const handleSelectHorario = (id: number) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]
    );
  };

  return (
    <section className="px-4 py-20 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="mx-auto max-w-4xl">
        {/* Botón para volver a la página de inicio usando Link */}
        <Link href="/">
          <button className="p-2 mb-4 text-white bg-gray-600 rounded-full transition-colors hover:bg-pink-500">
            ← Voltar para a página inicial
          </button>
        </Link>
        {/* Indicador de pasos */}
        <div className="flex justify-center mb-8">
          {[1, 2].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${
                step >= num ? 'bg-pink-500' : 'bg-gray-600'
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-800 rounded-xl shadow-xl">
          {/* Paso 1: Seleccionar fecha */}
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center text-white">
                Seleccione una Fecha
              </h2>
              <div className="flex justify-center">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                locale="pt-BR" // Usa la localización en portugués de Brasil
                inline
                className="p-4 text-white bg-gray-700 rounded-lg react-datepicker"
                wrapperClassName="w-full"
                dayClassName={(date) =>
                    date.getDay() === 0
                    ? 'text-red-500 hover:bg-red-600'
                    : 'text-white hover:bg-pink-500'
                }
                monthClassName={() => 'text-white'}
                weekDayClassName={() => 'text-gray-400'}
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div className="flex justify-between items-center px-2 py-2 bg-gray-400">
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        className="p-2 text-white rounded-full hover:bg-pink-500"
                    >
                        {'<'}
                    </button>
                    <span className="text-lg font-bold text-white">
                        {date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
                    </span>
                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        className="p-2 text-white rounded-full hover:bg-pink-500"
                    >
                        {'>'}
                    </button>
                    </div>
                )}
            />
              </div>
            </div>
          )}

          {/* Paso 2: Ver horarios */}
          {step === 2 && (
            <div>
               <h2 className="mb-6 text-2xl font-bold text-center text-white">
                 Horarios para {selectedDate?.toLocaleDateString('pt-BR')}
               </h2>

               {/* Botones de Acción */}
            <div className="flex gap-4 justify-center mb-4">
            <button
                onClick={() =>
                    setSelectedIds(prev =>
                    prev.length === horarios.length ? [] : horarios.map(h => h.id)
                    )
                }
                className="px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600"
                >
                {selectedIds.length === horarios.length ? 'Desmarcar todos': 'Marcar todos'}
              </button>
              <button
                onClick={handleBloquear}
                className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600"
              >
                Bloquear selecionados ({selectedIds.length})
              </button>
              <button
                onClick={handleDesbloquear}
                className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
              >
                Desbloquear selecionados ({selectedIds.length})
              </button>
            </div>

              {/* Lista de Horarios */}
            <div className="grid grid-cols-3 gap-4">
              {horarios.map((horario) => (
                <label
                  key={horario.id}
                  className={`p-3 text-center rounded-lg cursor-pointer transition-all ${
                    selectedIds.includes(horario.id)
                      ? 'border-2 border-yellow-400 scale-105'
                      : horario.disponible 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-red-500 hover:bg-red-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(horario.id)}
                    onChange={() => handleSelectHorario(horario.id)}
                    className="hidden"
                  />
                  <span className="font-bold">{horario.hora}</span>
                  <div className="mt-1 text-xs">
                    {horario.disponible ? 'Disponível' : 'Bloqueado'}
                  </div>
                </label>
              ))}
            </div>
             
            </div>
          )}
        </div>
      </div>
    </section>
  );
}