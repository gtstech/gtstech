import { motion } from 'framer-motion';

export default function ConnectBannerSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Dark Background with City Nightscape Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900" />

      {/* Animated light bokeh effects (city lights) */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 bg-blue-500"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{ left: '10%', top: '20%' }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-500"
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        style={{ right: '15%', bottom: '15%' }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full blur-2xl opacity-25 bg-red-600"
        animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        style={{ left: '50%', bottom: '25%' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-40"
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          Connect with Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/80 mb-10"
        >
          Do you have any specific challenge, or just want to get in touch with us?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-600/50"
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
