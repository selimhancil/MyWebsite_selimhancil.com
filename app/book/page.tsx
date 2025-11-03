'use client';

import dynamic from 'next/dynamic';

const Book = dynamic(() => import('@/components/Book'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#0a0a0a] gradient-mesh flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-400">Kitap yükleniyor...</p>
      </div>
    </div>
  ),
});

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] gradient-mesh">
      <Book />
    </div>
  );
}

