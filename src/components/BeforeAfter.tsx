'use client';
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function BeforeAfter() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Escuchar el evento "ended" del video
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => {
        setIsPlaying(false); // Actualizar el estado cuando el video termine
      };
      video.addEventListener("ended", handleVideoEnd);

      // Limpiar el evento al desmontar el componente
      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <motion.div
      className="px-4 mt-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-8 text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-gray-100 font-playfair">
        Transformações Reais ✨
      </h3>

      <div className="mx-auto max-w-2xl">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-2xl overflow-hidden">
          <div className="p-6 bg-gradient-to-br rounded-2xl from-blue-900/20 via-purple-900/20 to-pink-900/20">
            {/* Contenedor del video */}
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden group">
              <video
                ref={videoRef}
                className="object-cover w-full h-full"
                onClick={handlePlayPause}
              >
                <source src="/videos/videopromo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              {/* Overlay con efecto de hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                  transition-opacity duration-300 flex items-center justify-center
                  ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                onClick={handlePlayPause}
              >
                <motion.button
                  className="p-4 rounded-full backdrop-blur-sm transition-colors bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <PauseIcon className="w-8 h-8 text-white" />
                  ) : (
                    <PlayIcon className="w-8 h-8 text-white" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Descripción del video */}
            <div className="mt-6 text-center">
              <p className="mb-2 text-lg font-montserrat text-white/90">
                Transformação Top
              </p>
              <p className="text-sm text-white/70">
               Realinhamento ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Iconos SVG
const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);