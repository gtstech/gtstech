import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

export default function VideoTestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: 'ECU Worldwide',
      quote: 'Datamatics has been phenomenal in supporting us at every step of our digital transformation journey. Their expertise and dedication have truly made a difference.',
      author: 'John Smith',
      role: 'CEO'
    },
    {
      id: 2,
      company: 'Incora',
      quote: 'The solutions provided have significantly improved our operational efficiency. We\'ve seen remarkable improvements in our processes and customer satisfaction.',
      author: 'Sarah Johnson',
      role: 'Operations Director'
    },
    {
      id: 3,
      company: 'Monument Bank',
      quote: 'Working with GTS Techs transformed how we approach digital banking. Their AI-powered solutions have set us apart in a competitive market.',
      author: 'Michael Chen',
      role: 'IT Director'
    },
    {
      id: 4,
      company: 'OneTouch Direct',
      quote: 'The team demonstrated exceptional technical knowledge and commitment to our success. Our digital strategy is now miles ahead.',
      author: 'Emma Davis',
      role: 'Business Manager'
    },
    {
      id: 5,
      company: 'Harris Teeter',
      quote: 'From implementation to ongoing support, the experience has been outstanding. We\'ve achieved our business objectives ahead of schedule.',
      author: 'Robert Wilson',
      role: 'Digital Officer'
    },
    {
      id: 6,
      company: 'Ingram Micro',
      quote: 'GTS Techs delivered exactly what we needed. Their innovative approach has driven real value across our entire organization.',
      author: 'Lisa Anderson',
      role: 'VP Technology'
    },
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16"
        >
          Happy Customers Make Us Happy
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="flex flex-col items-center gap-8">
          {/* Video Thumbnail with Play Button */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden"
            >
              {/* Thumbnail Background */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #CC0000 25%, transparent 25%, transparent 75%, #CC0000 75%, #CC0000), linear-gradient(45deg, #CC0000 25%, transparent 25%, transparent 75%, #CC0000 75%, #CC0000)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: '0 0, 20px 20px',
                  }}
                />

                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors"
                >
                  <FiPlay size={32} className="text-white ml-1" fill="white" />
                </motion.div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6">
                  <div className="text-white">
                    <h4 className="text-lg font-bold">{testimonials[current].company}</h4>
                    <p className="text-sm text-gray-300">{testimonials[current].author}, {testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`quote-${testimonials[current].id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-2xl"
            >
              <p className="text-lg text-gray-700 italic mb-4">
                "{testimonials[current].quote}"
              </p>
              <p className="text-gray-600 font-semibold">
                {testimonials[current].author} • {testimonials[current].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot Navigation */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
