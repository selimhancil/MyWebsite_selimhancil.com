'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import BookPage from './BookPage';
import storyData from '@/data/story.json';

const HTMLFlipBook = dynamic(
  () => import('react-pageflip'),
  { ssr: false }
);

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipBook, setFlipBook] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const goToPrevPage = () => {
    if (flipBook) {
      flipBook.pageFlip().flipPrev();
    }
  };

  const goToNextPage = () => {
    if (flipBook) {
      flipBook.pageFlip().flipNext();
    }
  };

  // Create pages (each chapter is a spread - 2 pages)
  const pages: React.ReactNode[] = [];
  storyData.chapters.forEach((chapter) => {
    // Left page (blank or decorative)
    pages.push(
      <div key={`left-${chapter.id}`} className="w-full h-full bg-white flex items-center justify-center">
        <div className="text-gray-400 text-sm">Chapter {chapter.id}</div>
      </div>
    );
    // Right page (content)
    pages.push(
      <BookPage
        key={`right-${chapter.id}`}
        title={chapter.title}
        subtitle={chapter.subtitle}
        content={chapter.content}
        image={chapter.image}
        gradient={chapter.gradient}
        social={chapter.social}
      />
    );
  });

  if (!mounted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">Hikayem</h1>
        <p className="text-gray-400">Keşfetmek için sayfaları çevirin</p>
      </div>

      <div className="relative w-full flex justify-center">
        {/* Navigation buttons - hidden on mobile, shown on desktop */}
        <div className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 z-10">
          <motion.button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className={`group relative px-6 py-3 rounded-full glass text-white shadow-xl border-2 border-white/20 backdrop-blur-xl transition-all ${
              currentPage === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:border-white/40 hover:bg-white/10'
            }`}
            whileHover={currentPage !== 0 ? { scale: 1.1, x: -5 } : {}}
            whileTap={currentPage !== 0 ? { scale: 0.95 } : {}}
            aria-label="Previous page"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              <motion.span
                animate={currentPage !== 0 ? { x: [-3, 0, -3] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
              Önceki
            </span>
            {currentPage !== 0 && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </div>

        <div className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 z-10">
          <motion.button
            onClick={goToNextPage}
            disabled={currentPage >= pages.length - 1}
            className={`group relative px-6 py-3 rounded-full glass text-white shadow-xl border-2 border-white/20 backdrop-blur-xl transition-all ${
              currentPage >= pages.length - 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:border-white/40 hover:bg-white/10'
            }`}
            whileHover={currentPage < pages.length - 1 ? { scale: 1.1, x: 5 } : {}}
            whileTap={currentPage < pages.length - 1 ? { scale: 0.95 } : {}}
            aria-label="Next page"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Sonraki
              <motion.span
                animate={currentPage < pages.length - 1 ? { x: [0, 3, 0] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            {currentPage < pages.length - 1 && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-md"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </div>

        {/* Flip Book */}
        <div className="shadow-2xl">
          {mounted && HTMLFlipBook && (
            <HTMLFlipBook
            width={isMobile ? 300 : 550}
            height={isMobile ? 400 : 700}
            minWidth={300}
            maxWidth={550}
            minHeight={400}
            maxHeight={700}
            size="stretch"
            maxShadowOpacity={0.5}
            showCover={false}
            flippingTime={1000}
            usePortrait={true}
            startPage={0}
            drawShadow={true}
            startZIndex={0}
            autoSize={false}
            mobileScrollSupport={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            clickEventForward={true}
            onFlip={handleFlip}
            onChangeState={(state: any) => {
              if (state === 'flip') {
                // Page is flipping
              }
            }}
            className="book-container"
            style={{}}
            ref={(el) => setFlipBook(el)}
          >
            {pages.map((page, index) => (
              <div key={index} className="page">
                {page}
              </div>
            ))}
            </HTMLFlipBook>
          )}
        </div>
      </div>

      {/* Mobile navigation buttons */}
      <div className="md:hidden flex gap-4 mt-8">
        <motion.button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`group relative px-6 py-3 rounded-full glass text-white shadow-xl border-2 border-white/20 backdrop-blur-xl font-semibold ${
            currentPage === 0 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:border-white/40 hover:bg-white/10'
          }`}
          whileHover={currentPage !== 0 ? { scale: 1.05 } : {}}
          whileTap={currentPage !== 0 ? { scale: 0.95 } : {}}
          aria-label="Previous page"
        >
          <span className="relative z-10 flex items-center gap-2">
            ← Önceki
          </span>
          {currentPage !== 0 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-md"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
        <motion.button
          onClick={goToNextPage}
          disabled={currentPage >= pages.length - 1}
          className={`group relative px-6 py-3 rounded-full glass text-white shadow-xl border-2 border-white/20 backdrop-blur-xl font-semibold ${
            currentPage >= pages.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:border-white/40 hover:bg-white/10'
          }`}
          whileHover={currentPage < pages.length - 1 ? { scale: 1.05 } : {}}
          whileTap={currentPage < pages.length - 1 ? { scale: 0.95 } : {}}
          aria-label="Next page"
        >
          <span className="relative z-10 flex items-center gap-2">
            Sonraki →
          </span>
          {currentPage < pages.length - 1 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-md"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      </div>

      {/* Page indicator */}
      <div className="mt-8 text-center">
        <motion.div
          className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-white/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <p className="text-sm text-gray-300">
              Sayfa <span className="text-purple-400 font-bold">{currentPage + 1}</span> / <span className="text-purple-400 font-bold">{pages.length}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

