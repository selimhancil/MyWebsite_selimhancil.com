'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import AnimatedText from '@/components/AnimatedText';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Stats from '@/components/Stats';
import TechStack from '@/components/TechStack';
import ParticlesBackground from '@/components/ParticlesBackground';

import ProfilePhoto from '@/components/ProfilePhoto';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] gradient-mesh pt-20 relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh] gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedText delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Selimhan Çil
                </motion.h1>
              </motion.div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl font-light"
                >
                  <span className="inline-block mr-3">👨‍💻</span>
                  Yazılım Mühendisi
                  <span className="mx-3 text-purple-400">•</span>
                  <span className="inline-block mr-3">🚀</span>
                  Girişimci
                  <span className="mx-3 text-pink-400">•</span>
                  <span className="inline-block mr-3">✨</span>
                  İçerik Üreticisi
                </motion.p>
              </motion.div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <motion.p
                className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Teknoloji, girişimcilik ve yaratıcılık yolculuğumda beni takip eden
                interaktif bir hikaye kitabı.
              </motion.p>
            </AnimatedText>

            <AnimatedText delay={0.7}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/book">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] text-white rounded-full font-semibold overflow-hidden shadow-2xl shadow-purple-500/50 border border-purple-400/30"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 25px 50px rgba(147, 51, 234, 0.5)',
                      backgroundPosition: '100% center'
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      backgroundPosition: ['0% center', '200% center', '0% center'],
                    }}
                    transition={{
                      backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
                      scale: { type: 'spring', stiffness: 400 }
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        📖
                      </motion.span>
                      <span>Kitabı Aç</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-xl"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    className="group relative px-8 py-4 glass text-white rounded-full font-semibold border-2 border-white/20 hover:border-white/40 transition-all backdrop-blur-xl"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3 relative z-10">
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        💼
                      </motion.span>
                      <span>Projeleri Gör</span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </AnimatedText>
          </div>

          {/* Profile Photo */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center">
            <AnimatedText delay={0.2}>
              <ProfilePhoto src="/selimhan.jpg" />
            </AnimatedText>
          </div>
        </div>

        {/* Story Preview */}
        <div className="mt-32">
          <AnimatedText delay={1}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Hikaye Bölümleri
            </motion.h2>
          </AnimatedText>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Başlangıç', emoji: '🌱', gradient: 'from-purple-500/20 to-pink-500/20' },
              { id: 2, title: 'Vizyon', emoji: '✨', gradient: 'from-pink-500/20 to-blue-500/20' },
              { id: 3, title: 'Yolculuk', emoji: '🚀', gradient: 'from-blue-500/20 to-purple-500/20' },
            ].map((chapter, index) => (
              <AnimatedText key={chapter.id} delay={1.1 + index * 0.1}>
                <motion.div
                  className={`glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all group cursor-pointer relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{chapter.emoji}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Teknoloji ve inovasyon yolculuğunda yeni bir bölüm keşfedin.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </AnimatedText>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Skills Section */}
        <Skills />

        {/* Tech Stack */}
        <TechStack />

        {/* Timeline Section */}
        <Timeline />

        {/* Download CV Section */}
        <section className="py-20 px-6 text-center">
          <motion.div
            className="max-w-2xl mx-auto glass rounded-2xl p-12 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Birlikte Çalışmak İster misiniz?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Özgeçmişimi indirin veya bir sonraki projenizi tartışmak için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/cv.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] text-white rounded-full font-semibold shadow-2xl shadow-purple-500/50 border border-purple-400/30 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 25px 50px rgba(147, 51, 234, 0.5)',
                  backgroundPosition: '100% center'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    📄
                  </motion.span>
                  CV İndir
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <Link href="/contact">
                <motion.button
                  className="group relative px-8 py-4 glass text-white rounded-full font-semibold border-2 border-white/20 hover:border-white/40 backdrop-blur-xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      💬
                    </motion.span>
                    İletişime Geç
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
