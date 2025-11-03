'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (typeof window === 'undefined' || window.innerWidth < 768) {
      return;
    }

    let animationFrameId: number;
    
    const moveCursor = (e: MouseEvent) => {
      // Cancel previous frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Use requestAnimationFrame for smooth updates
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX - 16, y: e.clientY - 16 });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

      return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 25, mass: 0.3 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-[#0a0a0a]"
            animate={{
              scale: isClicking ? 1.5 : isHovering ? 0.5 : 1,
            }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      </div>

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.8 : 0.3,
          }}
          transition={{ type: 'spring', stiffness: 600, damping: 25, mass: 0.5 }}
        />
      </div>
    </>
  );
}

