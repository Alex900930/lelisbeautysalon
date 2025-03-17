'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import BeforeAfter from "./BeforeAfter";

const services = [
  {
    image: "/imagenCabelo.png",
    title: "Realinhamento 💇✨",
    description: "Cortes, coloração, hidratação e mais"
  },
  {
    image: "/imagenMackup.png",
    title: "Botoxx ✨",
    description: "Botoxx ✨ para eventos"
  },
  {
    image: "/imagenManicure.png",
    title: "Glow Upp de hoje ✨",
    description: "Glow Upp"
  }
];

export default function Services() {
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
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md p-[1px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-6 rounded-xl h-full">
                <motion.div 
                  className="relative h-64 mb-4 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <h3 className="text-xl mb-2 font-playfair bg-gradient-to-r from-blue-300 to-gray-200 text-transparent bg-clip-text">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-montserrat">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
} 