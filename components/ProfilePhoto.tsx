'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePhoto({ src = '/selimhan.jpg' }: { src?: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full h-[500px] md:h-[600px] relative flex items-center justify-center">
      <motion.div
        className="relative group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Outer glow rings */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-2xl -z-10"></div>
        
        {/* Main photo container */}
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-500"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {!imageError ? (
            <Image
              src={src}
              alt="Selimhan Çil - Software Engineer, Entrepreneur, Content Creator"
              fill
              className="object-cover"
              priority
              quality={95}
              sizes="(max-width: 768px) 288px, 384px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-sm">Fotoğraf yükleniyor...</div>
              </div>
            </div>
          )}
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
        
        {/* Professional badge */}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass px-6 py-2 rounded-full border border-white/20 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-xs md:text-sm text-white font-medium">Professional Portrait</span>
        </motion.div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400/60 rounded-full"
              style={{
                left: `${15 + i * 25}%`,
                top: `${8 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

