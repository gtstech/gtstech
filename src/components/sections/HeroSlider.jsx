import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'DATA MATURITY ASSESSMENT FOR AI',
      subtitle: 'Assess your Data Readiness for the AI Era',
      cta: 'BEGIN THE ASSESSMENT',
      bgClass: 'bg-gradient-to-br from-red-600 to-red-700',
      accent: 'red'
    },
    {
      id: 2,
      title: 'GTS TECHS 10-YEAR JOURNEY',
      subtitle: 'An Entirely Transformative Experience',
      cta: 'WATCH NOW',
      bgClass: 'bg-gradient-to-br from-amber-50 to-yellow-100',
      textColor: 'text-gray-800',
      accent: 'warm'
    },
    {
      id: 3,
      title: 'AI & DIGITAL WHITEPAPER',
      subtitle: 'Unlock Intelligent Enterprise Solutions',
      cta: 'DOWNLOAD NOW',
      bgClass: 'bg-gradient-to-br from-slate-800 to-slate-900',
      accent: 'cool'
    },
    {
      id: 4,
      title: 'INTELLIGENT ENTERPRISE SOLUTIONS',
      subtitle: 'Transform Your Business with AI',
      cta: 'KNOW MORE',
      bgClass: 'bg-gradient-to-br from-blue-900 to-indigo-900',
      accent: 'blue'
    },
  ];

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, idx) => (
          idx === current && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 ${slide.bgClass} flex items-center justify-center`}
            >
              {/* Animated decorative blobs */}
              {slide.accent === 'red' && (
                <>
                  <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-red-400"
                    animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ bottom: '10%', left: '10%' }}
                  />
                  <motion.div
                    className="absolute w-72 h-72 rounded-full blur-3xl opacity-15 bg-white"
                    animate={{ y: [30, 0, 30], x: [15, 0, 15] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    style={{ top: '20%', right: '15%' }}
                  />
                  {/* Black 4-pointed star shape */}
                  <div
                    className="absolute bottom-12 left-12 w-16 h-16 opacity-20"
                    style={{
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      backgroundColor: 'black'
                    }}
                  />
                </>
              )}

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative z-10 text-center max-w-3xl mx-auto px-6"
              >
                <h1 className={`text-5xl md:text-6xl font-black mb-4 leading-tight ${
                  slide.textColor ? slide.textColor : 'text-white'
                }`}>
                  {slide.title}
                </h1>
                <p className={`text-lg md:text-xl mb-8 ${
                  slide.textColor ? 'text-gray-700' : 'text-white/90'
                }`}>
                  {slide.subtitle}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 font-bold rounded-full transition-all ${
                    slide.accent === 'red' || slide.accent === 'blue' || slide.accent === 'cool'
                      ? 'bg-white text-red-600 hover:bg-gray-100'
                      : 'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {slide.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
      >
        <FiChevronLeft size={24} />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
      >
        <FiChevronRight size={24} />
      </motion.button>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
