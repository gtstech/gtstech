import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CTABanner({
  title = "Ready to Transform Your Business?",
  subtitle = "Join thousands of companies using our AI platform",
  buttonText = "Get Started Free",
  onButtonClick = () => {}
}) {
  return (
    <section className="bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm py-16 text-white text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 bg-red-400 rounded-full blur-3xl -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-red-600 rounded-full blur-3xl -bottom-20 -right-20" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-red-100 mb-8"
        >
          {subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
        >
          {buttonText} <FiArrowRight className="text-lg" />
        </motion.button>
      </div>
    </section>
  );
}
