"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Melhor salão que já frequentei! A Karla é uma profissional incrível e super atenciosa.",
    author: "Maria Silva",
    image: "/images/avatars/avatar1.png",
    rating: 5
  },
  {
    text: "Sempre saio do salão me sentindo mais bonita e confiante. Equipe maravilhosa!",
    author: "Ana Santos",
    image: "/images/avatars/avatar2.png",
    rating: 5
  },
  {
    text: "Ambiente acolhedor e profissionais muito competentes. Super recomendo!",
    author: "Carolina Oliveira",
    image: "/images/avatars/avatar3.png",
    rating: 5
  },
  {
    text: "Atendimento excepcional e resultados sempre perfeitos!",
    author: "Patricia Lima",
    image: "/images/avatars/avatar4.png",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/64";
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-4 md:px-8">
      {/* Fondo con gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl text-center mb-16 font-playfair uppercase tracking-wide bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text"
        >
          O que Dizem Nossos Clientes
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-xl backdrop-blur-md"
          >
            <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-[2px]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                      onError={handleImageError}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-montserrat font-medium bg-gradient-to-r from-blue-400 to-gray-300 text-transparent bg-clip-text">
                    {testimonials[currentIndex].author}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-gradient-to-r from-yellow-400 to-yellow-600">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg font-cormorant italic leading-relaxed mb-4 text-gray-700">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-[1px] rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <div className=" w-10 h-10 rounded-full flex items-center justify-center">
              ←
            </div>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-[1px] rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <div className=" w-10 h-10 rounded-full flex items-center justify-center">
              →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
} 