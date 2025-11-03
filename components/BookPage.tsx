'use client';

import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface BookPageProps {
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  gradient: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export default function BookPage({
  title,
  subtitle,
  content,
  image,
  gradient,
  social,
}: BookPageProps) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} p-8 md:p-12 flex flex-col`}>
      <div className="flex-1 flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatedText delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              {subtitle}
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </AnimatedText>

          {/* Social links for contact page */}
          {social && (
            <AnimatedText delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-4">
                {social.twitter && (
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {social.email && (
                  <a
                    href={social.email}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    Email
                  </a>
                )}
              </div>
            </AnimatedText>
          )}
        </div>

        {/* Right side - Image */}
        {image && (
          <AnimatedText delay={0.4}>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-64 md:h-full rounded-lg bg-gray-200 overflow-hidden shadow-lg">
                {/* Placeholder for image - in production, use Next.js Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image: {title}</span>
                </div>
              </div>
            </div>
          </AnimatedText>
        )}
      </div>
    </div>
  );
}

