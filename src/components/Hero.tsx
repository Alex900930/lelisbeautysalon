"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24">
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
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
            Realce sua
            <span className="block bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text">
              Beleza Natural
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-montserrat text-white/90 mb-8">
            Transforme seu visual com nossos serviços exclusivos de beleza
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-3 rounded-full font-montserrat text-lg shadow-lg hover:shadow-xl transition-shadow self-start"
          >
            Agende Agora
          </motion.button>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center py-8"
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
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -z-10 w-full h-full"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute top-1/4 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 