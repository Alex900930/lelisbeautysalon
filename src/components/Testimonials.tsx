import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Melhor salão que já frequentei! A Karla é uma profissional incrível e super atenciosa.",
    author: "Maria Silva",
    image: "/testimonials/maria.jpg",
    rating: 5
  },
  {
    text: "Sempre saio do salão me sentindo mais bonita e confiante. Equipe maravilhosa!",
    author: "Ana Santos",
    image: "/testimonials/ana.jpg",
    rating: 5
  },
  {
    text: "Ambiente acolhedor e profissionais muito competentes. Super recomendo!",
    author: "Carolina Oliveira",
    image: "/testimonials/carolina.jpg",
    rating: 5
  },
  {
    text: "Atendimento excepcional e resultados sempre perfeitos!",
    author: "Patricia Lima",
    image: "/testimonials/patricia.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#FDF8F5]">
      <motion.h2 
        className="text-3xl text-center mb-16 font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        O que Dizem Nossos Clientes
      </motion.h2>
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg"
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold font-lora">{testimonials[currentIndex].author}</p>
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg italic mb-4">{testimonials[currentIndex].text}</p>
        </motion.div>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          →
        </button>
      </div>
    </section>
  );
} 