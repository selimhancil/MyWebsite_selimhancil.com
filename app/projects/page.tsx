'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

const projects = [
  {
    id: 1,
    name: 'Artplus Global',
    description: 'Son teknoloji ve küresel bir bakış açısıyla sanat pazarını devrimleştirme.',
    tags: ['Pazar', 'E-ticaret', 'Sanat'],
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    name: 'Dijitalciler.net',
    description: 'Dijital içerik üreticilerini bir araya getirme ve inovasyon ve iş birliği topluluğu oluşturma.',
    tags: ['Topluluk', 'Ağ', 'Dijital'],
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 3,
    name: 'TrendCRM',
    description: 'Akıllı otomasyon ve analitik ile müşteri ilişkilerini kolaylaştırma.',
    tags: ['CRM', 'SaaS', 'Analitik'],
    gradient: 'from-orange-500 to-red-600',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] gradient-mesh pt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <AnimatedText delay={0.1}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projeler
          </motion.h1>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <motion.p
            className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Teknoloji ve girişimcilik yolculuğumu şekillendiren
            dönüştürücü projeler koleksiyonu.
          </motion.p>
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedText key={project.id} delay={0.3 + index * 0.1}>
              <motion.div
                className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-4xl mb-2">🚀</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 glass text-gray-300 text-xs rounded-full border border-white/10 hover:border-purple-400/50 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
      </main>
    </div>
  );
}

