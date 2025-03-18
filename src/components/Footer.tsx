"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-lg" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="relative flex justify-center mb-12">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 opacity-20 blur-md" />
          <Image
            src="/preview.svg"
            alt="Lelis Beauty Logo"
            width={300}
            height={100}
            className="relative z-10 drop-shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_6px_20px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:scale-105"
          />
        </div>

        {/* Grid de información */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Horário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl tracking-wide text-transparent uppercase font-playfair bg-gradient-to-r from-blue-200 to-gray-200 bg-clip-text">
              Horário de Funcionamento
            </h3>
            <div className="space-y-2">
              <p className="font-montserrat text-white/90">Segunda a Sábado</p>
              <p className="font-montserrat text-white/90">9:00 - 19:00</p>
              <p className="font-montserrat text-white/90">Domingo: Fechado</p>
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-xl text-transparent font-playfair bg-gradient-to-r from-blue-200 to-gray-200 bg-clip-text">
              Contato
            </h3>
            <div className="space-y-2">
              <Link 
                href="tel:+558592769337"
                className="block transition-colors text-white/90 hover:text-white"
              >
                +55 85 9276-9337
              </Link>
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://www.instagram.com/lelis_beautyyy?igsh=MTF5anMzeDhlOGZkcQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-transform rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-110"
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1A19hjik3B/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-transform rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-110"
                >
                  <FacebookIcon className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Endereço */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="mb-4 text-xl text-transparent font-playfair bg-gradient-to-r from-blue-200 to-gray-200 bg-clip-text">
              Endereço
            </h3>
            <p className="text-white/90">R. Paulino Barroso, 1381 - Centro, Canindé - CE, 62700-000</p>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1"
          >
            <Link 
              href="https://www.google.com/maps/place/R.+Paulino+Barroso,+1381+-+Centro,+Canind%C3%A9+-+CE,+62700-000/@-4.3527202,-39.3122899,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/mapImage.png"
                alt="Localização Lelis Beauty"
                width={300}
                height={200}
                className="rounded-xl w-full h-[150px] object-cover"
              />
            </Link>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 text-sm text-center text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <p>© 2025 Karla Lelis Salão de Beleza. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}

// Iconos de redes sociales
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
); 