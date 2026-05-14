import { motion } from 'framer-motion';

export default function AgenticAISection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: AI Card with neon effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  boxShadow: ['inset 0 0 30px rgba(204, 0, 0, 0.3)', 'inset 0 0 60px rgba(204, 0, 0, 0.5)', 'inset 0 0 30px rgba(204, 0, 0, 0.3)'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Neon AI Text */}
              <div className="relative z-10 text-center">
                <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-4"
                  style={{
                    textShadow: '0 0 20px rgba(204, 0, 0, 0.8), 0 0 40px rgba(204, 0, 0, 0.6)',
                    filter: 'drop-shadow(0 0 10px rgba(204, 0, 0, 0.6))'
                  }}
                >
                  AI
                </h3>
                <p className="text-white/60 text-sm">Artificial Intelligence</p>
              </div>

              {/* Animated background circles */}
              <motion.div
                className="absolute w-64 h-64 rounded-full blur-2xl opacity-20 bg-red-600"
                animate={{ y: [0, 20, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all"
            >
              EXPLORE NOW
            </motion.button>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Top Agentic AI Use Cases
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Agentic AI is reshaping enterprise operations by moving beyond automation to systems that can reason, act, and learn autonomously. These real-world use cases show how organizations are deploying AI agents to accelerate execution, scale operations, and enable sharper, data-driven decisions across the business.
            </p>

            <p className="text-gray-600 font-bold mb-4">
              Agentic AI Use Cases By Industry —
            </p>

            <ul className="space-y-3">
              {[
                'Banking & Finance',
                'Insurance',
                'Manufacturing',
                'Logistics'
              ].map((industry, idx) => (
                <motion.li
                  key={industry}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-red-600 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  {industry}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
