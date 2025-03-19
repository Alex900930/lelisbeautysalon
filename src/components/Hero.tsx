"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90" />

      <div className="relative z-10 min-h-[calc(100vh-6rem)] grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {/* Text Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center py-8"
        >
          <h1 className="mb-6 text-5xl text-white md:text-7xl font-playfair">
            Realce sua
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-gray-100">
              Beleza Natural
            </span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl font-montserrat text-white/90">
            Transforme seu visual com nossos serviços exclusivos de beleza
          </p>
          
          <Link 
          href="/agendar"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-8 py-3 text-lg text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg transition-shadow font-montserrat hover:shadow-xl"
          >
            Agende Agora
          </motion.button>
        </Link>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex relative justify-center items-center py-8"
        >
          <div className="relative w-full max-w-md mx-auto h-auto aspect-[3/4]">
            <Image
              src="/herokarlaLelys.png"
              alt="Karla Lelis"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay for image */}
            <div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-blue-600/20 via-purple-600/10" />
          </div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute w-full h-full -z-10"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute -right-8 top-1/4 w-32 h-32 rounded-full blur-xl bg-blue-500/20" />
            <div className="absolute -left-8 bottom-1/4 w-32 h-32 rounded-full blur-xl bg-purple-500/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex justify-center w-6 h-10 rounded-full border-2 border-white/50">
          <div className="mt-2 w-1 h-3 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
} 