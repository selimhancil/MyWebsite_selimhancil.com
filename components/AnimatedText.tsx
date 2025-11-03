'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedText({ 
  children, 
  delay = 0, 
  className = '' 
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

