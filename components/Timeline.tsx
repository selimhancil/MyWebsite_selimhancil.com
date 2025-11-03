'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Dijital İnovasyona Öncülük',
    description: 'AI entegrasyonu ve no-code çözümlerle son teknoloji projeler üzerinde çalışıyorum',
    icon: '🚀',
  },
  {
    year: '2023',
    title: 'TrendCRM Lansmanı',
    description: 'İşletmeler için kapsamlı bir CRM çözümü geliştirdim ve hayata geçirdim',
    icon: '💼',
  },
  {
    year: '2022',
    title: 'Dijitalciler.net Kuruluşu',
    description: 'Dijital içerik üreticilerini bir araya getiren ve iş birliğini destekleyen bir platform oluşturdum',
    icon: '🌐',
  },
  {
    year: '2021',
    title: 'Artplus Global',
    description: 'Yenilikçi teknoloji çözümleriyle sanat pazarını devrimleştirdim',
    icon: '🎨',
  },
  {
    year: '2020',
    title: 'Teknoloji Yolculuğu Başlangıcı',
    description: 'Yazılım mühendisliği ve girişimcilik kariyerime başladım',
    icon: '👨‍💻',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Yolculuk Zaman Çizelgesi
          </h2>
          <p className="text-gray-400 text-lg">
            Profesyonel yolculuğumdaki önemli kilometre taşları
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0a0a0a] z-10 shadow-lg"></div>
                </div>
                <div className="flex-1">
                  <div className="glass rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-purple-400 font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

