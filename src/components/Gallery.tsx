'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

// Array de imágenes de la galería
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/1.png",
    title: "ILUMINADO ✨",
    description: "Coloração personalizada com tratamento intensivo para brilho e saúde dos fios."
  },
  {
    id: 2,
    src: "/images/gallery/2.png",
    title: "REALINHAMENTO ✨",
    description: "Realinhamento capilar para fios lisos e sedosos, com acabamento perfeito."
  },
  {
    id: 3,
    src: "/images/gallery/3.png",
    title: "MODELADO ✨",
    description: "Modelagem profissional para eventos especiais, com cortes e penteados exclusivos."
  },
  {
    id: 4,
    src: "/images/gallery/4.png",
    title: "BOTOX CAPILAR ✨",
    description: "Tratamento com Botox Capilar para hidratação profunda e reparação dos fios."
  },
  {
    id: 5,
    src: "/images/gallery/5.png",
    title: "LOIRO LONGO ✨",
    description: "Loiro dos sonhos com mechas cuidadosamente aplicadas para um efeito natural e radiante."
  },
  {
    id: 6,
    src: "/images/gallery/6.png",
    title: "VERMELHO CEREJA ✨",
    description: "Vermelho cereja vibrante, com tonalidade intensa e duradoura."
  },
  {
    id: 7,
    src: "/images/gallery/7.png",
    title: "PLATINADO ✨",
    description: "Platinado moderno com reflexos brilhantes e cuidados especiais para fios saudáveis."
  },
  {
    id: 8,
    src: "/images/gallery/8.png",
    title: "LOIRO CORTO ✨",
    description: "Loiro curto e sofisticado, com cortes modernos e textura definida."
  },
  {
    id: 9,
    src: "/images/gallery/9.png",
    title: "TRATAMENTO SMOOTHING ✨",
    description: "Smoothing para fios alinhados, sem volume e com brilho intenso."
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
    <>
      <section className="relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-pink-900/50 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl text-center mb-16 font-playfair uppercase tracking-wide bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nossa Galeria
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative aspect-square cursor-pointer group bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Indicador para móviles */}
                <div className="absolute inset-0 flex items-center justify-center md:hidden">
                  <div className="bg-black/50 rounded-full p-2">
                    <span className="text-white text-sm">Clique para ver mais</span>
                  </div>
                </div>
                {/* Overlay para desktop */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hidden md:flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-montserrat uppercase tracking-wider mb-2 bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text">
                      {image.title}
                    </h3>
                    <p className="text-sm font-cormorant text-white/90">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-1 rounded-xl">
            <div className="relative aspect-[4/3] w-full bg-white rounded-t-lg">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-white/90 backdrop-blur-sm rounded-b-lg">
              <h3 className="text-xl font-playfair bg-gradient-to-r from-blue-400 to-gray-300 text-transparent bg-clip-text mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}