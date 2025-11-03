'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  { name: 'React', color: 'from-blue-400 to-cyan-400' },
  { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
  { name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
  { name: 'Node.js', color: 'from-green-400 to-green-600' },
  { name: 'Python', color: 'from-yellow-400 to-blue-500' },
  { name: 'AWS', color: 'from-orange-400 to-orange-600' },
  { name: 'TailwindCSS', color: 'from-cyan-400 to-blue-500' },
  { name: 'Three.js', color: 'from-purple-400 to-pink-400' },
  { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
  { name: 'Docker', color: 'from-blue-400 to-cyan-500' },
  { name: 'Git', color: 'from-orange-500 to-red-500' },
  { name: 'Figma', color: 'from-purple-400 to-pink-500' },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Teknoloji Yığını
          </h2>
          <p className="text-gray-400 text-lg">
            Fikirleri hayata geçirmek için kullandığım teknolojiler
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className={`px-6 py-3 rounded-full glass border border-white/10 hover:border-white/30 transition-all cursor-pointer relative overflow-hidden group`}>
                <span className={`relative z-10 text-white font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-full`}
                  initial={false}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

