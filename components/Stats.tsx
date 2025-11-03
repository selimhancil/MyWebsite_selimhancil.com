'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  icon: string;
}

const stats: Stat[] = [
  { value: '50', label: 'Tamamlanan Proje', suffix: '+', icon: '🚀' },
  { value: '1000', label: 'Kod Saati', suffix: '+', icon: '💻' },
  { value: '10', label: 'Uzmanlaşılan Teknoloji', suffix: '+', icon: '⚡' },
  { value: '5', label: 'Yıl Deneyim', suffix: '+', icon: '⭐' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <CounterCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ stat, index, isInView }: { stat: Stat; index: number; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(stat.value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <motion.div
      className="glass rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="text-4xl mb-4">{stat.icon}</div>
      <motion.div
        className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
      >
        {count}{stat.suffix}
      </motion.div>
      <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
}

