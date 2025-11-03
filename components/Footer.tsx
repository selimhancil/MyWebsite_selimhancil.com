'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-dark border-t border-white/10 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {currentYear} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Selimhan Çil</span>. <span className="text-gray-300">Next.js</span>, <span className="text-gray-300">TailwindCSS</span> ve{' '}
          <span className="text-gray-300">Framer Motion</span> ile oluşturuldu.
        </motion.p>
      </div>
    </footer>
  );
}

