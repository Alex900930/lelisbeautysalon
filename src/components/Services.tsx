import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    image: "/imagenCabelo.png",
    title: "Tratamento Capilar",
    description: "Cortes, coloração, hidratação e mais"
  },
  {
    image: "/imagenMackup.png",
    title: "Maquiagem",
    description: "Maquiagem social e para eventos"
  },
  {
    image: "/imagenManicure.png",
    title: "Manicure e Pedicure",
    description: "Cuidados completos para suas mãos e pés"
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-8">
      <motion.h2 
        className="text-3xl text-center mb-16 font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nossos Serviços
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div 
              className="relative h-64 mb-4 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <h3 className="text-xl mb-2 font-lora">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 