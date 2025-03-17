'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

// Array de imágenes de la galería
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/1.png",
    title: "Transformação Capilar",
    description: "Coloração e tratamento"
  },
  {
    id: 2,
    src: "/images/gallery/2.png",
    title: "Penteado para Festa",
    description: "Penteado elegante"
  },
  {
    id: 3,
    src: "/images/gallery/3.png",
    title: "Maquiagem Social",
    description: "Make para eventos"
  },
  {
    id: 4,
    src: "/images/gallery/4.png",
    title: "Corte Moderno",
    description: "Corte e finalização"
  },
  {
    id: 5,
    src: "/images/gallery/5.png",
    title: "Nail Art",
    description: "Design de unhas"
  },
  {
    id: 6,
    src: "/images/gallery/6.png",
    title: "Mechas",
    description: "Mechas e hidratação"
  },
  {
    id: 8,
    src: "/images/gallery/8.png",
    title: "Make Noiva",
    description: "Maquiagem para noivas"
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
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