'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Historia() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl text-center mb-16 font-playfair uppercase tracking-wide bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nossa História
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de imágenes */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Formada1.png"
                  alt="Karla Lelis em ação"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-2xl overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Formada2.png"
                  alt="Salão Lelis Beauty"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Columna de texto */}
          <motion.div
            className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-8 rounded-2xl">
              <motion.h3 
                className="text-2xl font-playfair mb-6 bg-gradient-to-r from-blue-200 to-pink-200 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                COMEÇOU EM 2020
              </motion.h3>
              
              <div className="space-y-4 font-montserrat text-white/90">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  No Lelis Beauty, a beleza encontra a excelência. Fundado por Karla Lelis, uma profissional altamente qualificada com mais de 3 anos de formação e múltiplos títulos em técnicas de beleza, nosso salão é sinônimo de cuidado, sofisticação e resultados incríveis. Como ela sempre diz: "Arrazo, aqui a gente faz mágica acontecer!" ✨
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Karla acredita que "A chave da felicidade é sonhar; a chave do sucesso é tornar os sonhos realidade." 👩‍🎓💇‍♀️🙌 E é com essa filosofia que ela transforma cada visita ao Lelis Beauty em uma experiência única, onde os sonhos de beleza se tornam realidade.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Oferecemos serviços capilares de alta qualidade, desde tratamentos avançados até penteados deslumbrantes para ocasiões especiais. Cada cliente é recebido com atenção personalizada em um ambiente acolhedor, onde a autoestima e o bem-estar são prioridades.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="italic"
                >
                  No Lelis Beauty, acreditamos que a beleza vai além da aparência: é uma experiência que começa no momento em que você entra pela porta. Venha nos conhecer e descubra por que Karla Lelis e sua equipe são a escolha certa para realçar sua beleza natural. Arrazo, você vai amar! 💖
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}