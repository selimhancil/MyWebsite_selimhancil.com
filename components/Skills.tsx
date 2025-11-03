'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

const skills: Skill[] = [
  { name: 'React/Next.js', level: 95, icon: '⚛️' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'Python', level: 80, icon: '🐍' },
  { name: 'UI/UX Design', level: 85, icon: '🎨' },
  { name: 'AI/ML', level: 75, icon: '🤖' },
  { name: 'Cloud/AWS', level: 80, icon: '☁️' },
  { name: 'Entrepreneurship', level: 90, icon: '🚀' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Yetenekler & Uzmanlık
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Harika ürünler oluşturmak için kullandığım teknolojiler ve yetenekler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all hover-lift group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

