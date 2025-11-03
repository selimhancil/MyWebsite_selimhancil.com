'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/book', label: 'Hikaye' },
    { href: '/projects', label: 'Projeler' },
    { href: '/contact', label: 'İletişim' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark border-b border-white/20 shadow-2xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative flex items-center gap-3">
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <img 
                src="/selimhan.jpg" 
                alt="Selimhan Çil" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </motion.div>
            <motion.span
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Selimhan Çil
            </motion.span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border border-white/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {pathname === item.href && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md -z-10"
                        layoutId="activeTabBg"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.slice(0, 2).map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`text-xs font-medium px-4 py-2 rounded-full transition-all ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

