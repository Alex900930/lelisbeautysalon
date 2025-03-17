"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí implementarías la lógica de envío
    console.log(formState);
  };

  return (
    <section className="relative py-20 px-4 md:px-8">
      {/* Fondo con gradiente más intenso para destacar */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-pink-900/60 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl text-center mb-16 font-playfair uppercase tracking-wide bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text"
        >
          Agende seu Horário
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-xl backdrop-blur-md"
        >
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary transition-colors text-white placeholder-white/60 font-montserrat"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary transition-colors text-white placeholder-white/60 font-montserrat"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary transition-colors text-white placeholder-white/60 font-montserrat"
                  value={formState.phone}
                  onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <select
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary transition-colors text-white placeholder-white/60 font-montserrat"
                  value={formState.service}
                  onChange={(e) => setFormState(prev => ({ ...prev, service: e.target.value }))}
                >
                  <option value="">Selecione o Serviço</option>
                  <option value="cabelo">Tratamento Capilar</option>
                  <option value="maquiagem">Maquiagem</option>
                  <option value="manicure">Manicure e Pedicure</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group md:col-span-2"
              >
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary transition-colors text-white placeholder-white/60 font-montserrat"
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="md:col-span-2 bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-secondary transition-colors mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensagem
              </motion.button>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4">Ou entre em contato via WhatsApp:</p>
              <motion.a
                href="https://wa.me/5511999999999"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar via WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
} 