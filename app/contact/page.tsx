'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/selimhancil',
    icon: '𝕏',
    gradient: 'from-blue-400 to-cyan-400',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/selimhancil',
    icon: '💼',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/selimhancil',
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Email',
    href: 'mailto:hello@selimhancil.com',
    icon: '✉️',
    gradient: 'from-pink-500 to-red-500',
    bgGradient: 'from-pink-500/20 to-red-500/20',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] gradient-mesh pt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText delay={0.1}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              İletişime Geçelim
            </motion.h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hikayemi keşfettiğiniz için teşekkürler. İş birliği yapmak,
              bir proje paylaşmak veya sadece iletişime geçmek istiyorsanız,
              haberlerinizi almak isterim.
            </motion.p>
          </AnimatedText>
        </div>

        <motion.div
          className="glass rounded-2xl p-8 md:p-12 mb-12 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedText delay={0.4}>
            <h2 className="text-3xl font-bold text-white mb-6">
              İletişime Geçin
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Bir sorunuz varsa, bir proje hakkında konuşmak istiyorsanız veya
              sadece merhaba demek istiyorsanız, bu kanallardan herhangi biri üzerinden bana ulaşabilirsiniz.
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <AnimatedText key={link.name} delay={0.6 + index * 0.1}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group relative glass rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <motion.span
                      className="text-4xl"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {link.icon}
                    </motion.span>
                    <div>
                      <span className={`text-xl font-bold bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent block`}>
                        {link.name}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        Bağlanmak için tıklayın
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${link.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </AnimatedText>
            ))}
          </div>
        </motion.div>

        <AnimatedText delay={1}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-xl text-gray-400">
              Sizinle iletişime geçmek için sabırsızlanıyorum! <span className="inline-block animate-bounce">🚀</span>
            </p>
          </motion.div>
        </AnimatedText>
      </main>
    </div>
  );
}

