"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

const testimonials = [
  {
    text: "Melhor salão que já frequentei! A Karla é uma profissional incrível e super atenciosa.",
    author: "Maria Silva",
    image: "/images/avatars/avatar1.png",
    resultImage: "/images/results/result1.png",
    rating: 5
  },
  {
    text: "Sempre saio do salão me sentindo mais bonita e confiante. Equipe maravilhosa!",
    author: "Ana Santos",
    image: "/images/avatars/avatar2.png",
    resultImage: "/images/results/result2.png",
    rating: 5
  },
  {
    text: "Ambiente acolhedor e profissionais muito competentes. Super recomendo!",
    author: "Carolina Oliveira",
    image: "/images/avatars/avatar3.png",
    resultImage: "/images/results/result3.png",
    rating: 5
  },
  {
    text: "Atendimento excepcional e resultados sempre perfeitos!",
    author: "Patricia Lima",
    image: "/images/avatars/avatar4.png",
    resultImage: "/images/results/result4.png",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/559x88";
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative px-4 py-20 md:px-8">
      {/* Fondo con gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-[2px]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2 
          className="mb-8 text-3xl tracking-wide text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-200 to-gray-100 md:text-4xl font-playfair"
        >
          O que Dizem Nossos Clientes
        </motion.h2>
        
        <div className="max-w-full md:max-w-[574px] mx-auto px-4">
          <motion.div 
            className="overflow-hidden bg-white rounded-lg shadow-xl"
          >
            {/* Contenedor de la imagen con dimensiones fijas */}
            <div className="relative w-full h-[88px]" style={{ width: '559px', maxWidth: '100%', margin: '0 auto' }}>
              <Image
                src={`/images/results/result${currentIndex + 1}.png`}
                alt={`Testimonio de ${testimonials[currentIndex].author}`}
                width={559}
                height={88}
                className="object-cover"
                onError={handleImageError}
                priority
              />
            </div>

            {/* Contenido del testimonio */}
            <div className="p-4 bg-white">
              <div className="flex gap-1 mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-pink-500">★</span>
                ))}
              </div>
              
              <p className="text-sm text-gray-900 md:text-base">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </motion.div>

          {/* Botones de navegación */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-gradient-to-r from-blue-600 to-pink-500 p-[1px] rounded-full hover:scale-105 transition-transform"
            >
              <div className="flex justify-center items-center w-10 h-10 text-white bg-black rounded-full">
                ←
              </div>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gradient-to-r from-blue-600 to-pink-500 p-[1px] rounded-full hover:scale-105 transition-transform"
            >
              <div className="flex justify-center items-center w-10 h-10 text-white bg-black rounded-full">
                →
              </div>
            </button>
          </div>
        </div>

        {/* Indicadores de página */}
        <div className="flex gap-2 justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-pink-500 w-4' 
                  : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link 
            href="/agendar" 
            className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-pink-500 rounded-full transition-all hover:scale-105"
          >
            Agendar Agora
          </Link>
        </div>
      </div>
    </section>
  );
}