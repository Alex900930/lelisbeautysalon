'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
  { name: 'Admin', href: '/login' }, // Nuevo enlace de administración
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-gradient-to-r shadow-lg backdrop-blur-sm from-blue-900/80 via-purple-900/80 to-pink-900/80">
      <div className="absolute inset-0 bg-gradient-to-b to-transparent from-black/50"></div>
      <nav className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          
          {/* Logo Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-36 h-12 sm:w-44 md:w-48 sm:h-16 md:h-20 group"
          >
            <Link href="/" className="block relative w-full h-full">
              <div className="absolute inset-0 rounded-xl blur-xl transition-transform duration-500 transform bg-white/5 group-hover:scale-110"></div>
              <Image
                src="/preview.svg"
                alt="Karla Lelis Salão"
                fill
                className="object-contain relative z-10 
                  drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]
                  filter brightness-110 contrast-125
                  transform group-hover:scale-105 transition-all duration-300"
                priority
                sizes="(max-width: 640px) 9rem, (max-width: 768px) 11rem, 12rem"
              />
              <div className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-0 transition-opacity duration-300 from-white/0 via-white/10 to-white/0 group-hover:opacity-100"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`font-montserrat text-base lg:text-lg text-white/90 hover:text-white 
                    transition-all px-3 py-2 rounded-md hover:bg-white/10
                    relative after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                    after:w-0 hover:after:w-full after:bg-white after:transition-all
                    ${item.name === 'Admin' ? 'border border-white/30 hover:border-white/50' : ''}`} // Estilo especial para Admin
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 rounded-md transition-colors md:hidden hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-6 h-0.5 bg-gray-100 mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-gray-100 mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-gray-100 transition-all"></div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMounted && isMenuOpen && (
          <motion.div
            className="absolute right-0 left-0 top-full py-2 bg-gradient-to-r shadow-lg backdrop-blur-sm md:hidden from-blue-900/95 via-purple-900/95 to-pink-900/95"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 font-montserrat text-white/90 hover:text-white hover:bg-white/10 transition-all
                  ${item.name === 'Admin' ? 'border-t border-white/20' : ''}`} // Estilo especial para Admin
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}