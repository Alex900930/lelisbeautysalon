'use client';
import { motion } from "framer-motion";
import { useState, useRef } from "react";

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

  return (
    <motion.div
      className="mt-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl text-center mb-8 font-playfair bg-gradient-to-r from-blue-200 to-gray-100 text-transparent bg-clip-text">
        Transformações Reais ✨
      </h3>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-6 rounded-2xl">
            {/* Contenedor del video */}
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/thumbnail-antes-depois.jpg"
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
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors"
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
              <p className="text-lg font-montserrat text-white/90 mb-2">
                Transformação Top
              </p>
              <p className="text-sm text-white/70">
                 Liso belíssimo ✨
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