import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <header ref={ref} className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <Image
          src="/imagenHero.png"
          alt="Karla Lelis Salão de Beleza"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-light mb-4 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Karla Lelis
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl mb-8 font-lora"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Salão de Beleza
        </motion.p>
        <motion.a
          href="#agendar"
          className="bg-[#D4AF37] text-white px-8 py-3 rounded-full text-lg hover:bg-[#B4941F] transition-all hover:scale-105"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Agende seu Horário
        </motion.a>
      </motion.div>
    </header>
  );
} 