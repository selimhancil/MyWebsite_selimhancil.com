'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Main toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] text-white shadow-2xl shadow-purple-500/50 flex items-center justify-center text-2xl border-2 border-purple-400/30 overflow-hidden"
        whileHover={{ 
          scale: 1.1, 
          rotate: 90,
          boxShadow: '0 20px 40px rgba(147, 51, 234, 0.6)',
          backgroundPosition: '100% center'
        }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 45 : 0,
          backgroundPosition: ['0% center', '200% center', '0% center'],
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
      >
        <span className="relative z-10">{isOpen ? '✕' : '⚡'}</span>
        <motion.div
          className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl"
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Floating action buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative w-14 h-14 rounded-full glass border-2 border-white/20 text-white shadow-xl flex items-center justify-center text-xl mb-2 overflow-hidden backdrop-blur-xl"
                  whileHover={{ scale: 1.15, y: -5, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  title="İletişim"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💬
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/book">
                <motion.button
                  className="group relative w-14 h-14 rounded-full glass border-2 border-white/20 text-white shadow-xl flex items-center justify-center text-xl mb-2 overflow-hidden backdrop-blur-xl"
                  whileHover={{ scale: 1.15, y: -5, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  title="Hikayeyi Oku"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📖
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group relative w-14 h-14 rounded-full glass border-2 border-white/20 text-white shadow-xl flex items-center justify-center text-xl overflow-hidden backdrop-blur-xl"
                whileHover={{ scale: 1.15, y: -5, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                whileTap={{ scale: 0.9 }}
                title="Yukarı Çık"
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ⬆️
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

