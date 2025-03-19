"use client";
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Importar useRouter para redirigir

interface FormData {
  nome: string;
  telefone: string;
}

interface Horario {
  id: number;
  hora: string;
  disponible: boolean;
}

export default function Agendar() {
  const router = useRouter(); // Usar useRouter para redirigir
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
  });
  const [horarios, setHorarios] = useState<Horario[]>([]);

  const handleDateChange = async (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      try {
        const response = await fetch(`/api/horarios?fecha=${date.toISOString()}`);
        if (!response.ok) {
          throw new Error('Erro ao cargar os horários');
        }
        const data = await response.json();
        console.log("Data del Backend", data);
        setHorarios(data);
        setStep(2);
      } catch (error) {
        console.error('Error al cargar los horarios:', error);
        alert('Erro ao cargar os horários. Tente novamente mais tarde.');
      }
    }
  };

  const handleTimeSelect = async (time: string) => {
    if (selectedDate) {
      try {
        const horarioSeleccionado = horarios.find((h) => h.hora === time);
        if (horarioSeleccionado) {
          const response = await fetch(`/api/horarios?fecha=${selectedDate.toISOString()}`);
          const horariosDisponibles = await response.json();
          const horarioDisponible = horariosDisponibles.find((h: Horario) => h.id === horarioSeleccionado.id);

          if (!horarioDisponible) {
            alert('Este horário já foi reservado. Por favor, escolha outro.');
            return;
          }

          await fetch('/api/citas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fecha: selectedDate.toISOString(),
              horarioId: horarioSeleccionado.id,
            }),
          });

          setSelectedTime(time);
          setStep(3);
        }
      } catch (error) {
        console.error('Error al guardar la cita:', error);
        alert('Erro ao reservar o horário. Tente novamente mais tarde.');
      }
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    if (!validatePhone(formData.telefone)) {
      alert('Por favor, insira um telefone válido no formato +5585989329627.');
      return;
    }

    const formattedDate = formatDate(selectedDate);
    const message = encodeURIComponent(
      `Olá Karla! Meu nome é ${formData.nome} e gostaria de agendar um horário para o dia ${formattedDate} às ${selectedTime}h.`
    );
    const phoneNumber = formData.telefone;

    // Mensaje de confirmación con advertencia sobre el bloqueador de ventanas emergentes
    const confirmMessage = `
      Serás redirigido a WhatsApp en una nueva pestaña para completar tu reserva. 
      ¿Deseas continuar?

      Nota: Si tienes un bloqueador de ventanas emergentes activado, 
      es posible que esto no funcione. 
      Por favor, desactívalo temporalmente para continuar.
    `;

    if (window.confirm(confirmMessage)) {
      const newWindow = window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

      // Verificar si la ventana emergente fue bloqueada
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert(
          'Parece que el bloqueador de ventanas emergentes está activado. ' +
          'Por favor, desactívalo temporalmente y vuelve a intentarlo.'
        );
      } else {
        // Si la ventana se abrió correctamente, avanzar al paso 4
        setStep(4);
      }
    }
  };

  const validatePhone = (phone: string) => {
    const regex = /^\+55\d{11}$/;
    return regex.test(phone);
  };

  // Redirigir automáticamente después de 5 segundos en el paso 4
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        router.push('/'); // Redirigir a la página inicial
      }, 5000); // 5 segundos
      return () => clearTimeout(timer);
    }
  }, [step, router]);

  return (
    <section className="px-4 py-20 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-center mb-8">
          {[1, 2, 3, 4].map((num) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-800 rounded-xl shadow-xl"
        >
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center text-white">
                Selecione uma Data
              </h2>
              <div className="flex justify-center">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  locale="pt-BR"
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
                    <div className="flex justify-between items-center px-2 py-2">
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

          {step === 2 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center text-white">
                Escolha o Horário
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {horarios.map((horario) => (
                  <button
                    key={horario.id}
                    onClick={() => handleTimeSelect(horario.hora)}
                    className="p-3 text-center bg-gray-700 rounded-lg transition-colors hover:bg-pink-500 hover:text-white"
                  >
                    {horario.hora}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center text-white">
                Seus Dados
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-gray-300">Nome Completo</label>
                  <input
                    type="text"
                    required
                    className="p-3 w-full text-white bg-gray-700 rounded-lg border"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">
                    Telefone (+5585989329627)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+5585989329627"
                    className="p-3 w-full text-white bg-gray-700 rounded-lg border"
                    value={formData.telefone}
                    onChange={(e) => {
                      const value = e.target.value;
                      const cleanedValue = value.replace(/[^\d+]/g, '');
                      if (cleanedValue.startsWith('+55')) {
                        setFormData({ ...formData, telefone: cleanedValue });
                      } else if (cleanedValue.startsWith('+')) {
                        setFormData({ ...formData, telefone: `+55${cleanedValue.slice(1)}` });
                      } else {
                        setFormData({ ...formData, telefone: `+55${cleanedValue}` });
                      }
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="mb-4 text-white">
                    Data selecionada: {selectedDate ? formatDate(selectedDate) : ''} às{' '}
                    {selectedTime}h
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 text-white bg-pink-500 rounded-full transition-colors hover:bg-pink-600"
                  >
                    Agendar via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="mb-6 text-2xl font-bold text-center text-white">
                Consulta Agendada!
              </h2>
              <p className="mb-4 text-white">
                Obrigado por agendar conosco. Você será redirecionado para a página inicial em 5 segundos.
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-block p-6 bg-pink-500 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}