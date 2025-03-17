'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <motion.svg
        width="160"
        height="48"
        viewBox="0 0 160 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
      >
        <motion.path
          d="M20 12C20 18.6274 14.6274 24 8 24C1.37258 24 -4 18.6274 -4 12C-4 5.37258 1.37258 0 8 0C14.6274 0 20 5.37258 20 12Z"
          fill="url(#glowGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <text
          x="32"
          y="28"
          className="font-playfair"
          fill="white"
          fontSize="32"
          filter="url(#glow)"
        >
          Lelis
        </text>
        <text
          x="32"
          y="44"
          className="font-montserrat"
          fill="rgba(255,255,255,0.9)"
          fontSize="14"
          letterSpacing="0.2em"
        >
          BEAUTY
        </text>
        <defs>
          <radialGradient
            id="glowGradient"
            cx="8"
            cy="12"
            r="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </radialGradient>
          
          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>
      </motion.svg>
    </Link>
  );
} 