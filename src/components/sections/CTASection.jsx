import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600/90 to-red-700/90 text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have partnered with GTS Techs for their digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
              Get Started Today
              <FiArrowRight />
            </Link>
            <Link to="/about" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
}
