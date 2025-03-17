"use client"
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-lg" />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl mb-4 font-playfair uppercase tracking-wide bg-gradient-to-r from-blue-200 to-gray-200 text-transparent bg-clip-text">
            Horário de Funcionamento
          </h3>
          <p className="font-montserrat text-white/90 mb-2">Segunda a Sexta: 9h às 20h</p>
          <p className="font-montserrat text-white/90 mb-2">Sábado: 9h às 18h</p>
          <p className="font-montserrat text-white/90">Domingo: Fechado</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl mb-4 font-playfair bg-gradient-to-r from-blue-200 to-gray-200 text-transparent bg-clip-text">
            Contato
          </h3>
          <p className="mb-2 text-white/90">Tel: (11) 99999-9999</p>
          <p className="mb-4 text-white/90">Email: contato@karlalelis.com.br</p>
          <div className="flex gap-4">
            <motion.a
              href="https://instagram.com/karlalelis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://facebook.com/karlalelis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl mb-4 font-playfair bg-gradient-to-r from-blue-200 to-gray-200 text-transparent bg-clip-text">
            Endereço
          </h3>
          <p className="mb-2 text-white/90">Rua dos Andradas, 123</p>
          <p className="mb-2 text-white/90">Centro - São Paulo, SP</p>
          <p className="text-white/90">CEP: 01234-567</p>
        </motion.div>
      </div>
      
      <motion.div
      className="text-center mt-12 text-sm text-white/80"
      initial={{ opacity: 0 }} // Estado inicial: invisible
      animate={{ opacity: 1 }} // Estado final: visible
      transition={{ delay: 0.6, duration: 1 }} // Retraso y duración de la animación
    >
      <p>© 2025 Karla Lelis Salão de Beleza. Todos os direitos reservados.</p>
    </motion.div>
    </footer>
  );
} 