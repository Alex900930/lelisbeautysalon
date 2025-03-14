import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <motion.h2 
        className="text-3xl text-center mb-16 font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nossos Trabalhos
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6, 8].map((i) => (
          <motion.div
            key={i}
            className="relative aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={`/images/gallery/${i}.png`}
              alt={`Trabalho ${i}`}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 