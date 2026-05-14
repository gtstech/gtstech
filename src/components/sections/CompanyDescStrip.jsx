import { motion } from 'framer-motion';

export default function CompanyDescStrip() {
  return (
    <section className="relative w-full bg-gray-900 py-20 overflow-hidden">
      {/* Animated bokeh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Green bokeh circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-green-400"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ left: '5%', top: '10%' }}
        />

        {/* Red bokeh circles */}
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 bg-red-600"
          animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
          style={{ right: '10%', bottom: '15%' }}
        />

        {/* Blue bokeh circles */}
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 bg-blue-400"
          animate={{ x: [0, 30, -30, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, delay: 2 }}
          style={{ left: '50%', top: '20%' }}
        />

        {/* Purple bokeh circles */}
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-15 bg-purple-600"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          style={{ right: '20%', bottom: '20%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-xl md:text-2xl leading-relaxed mb-6">
            GTS Techs is a Digital Technologies, Operations, and Experiences company that enables hundreds of enterprises to go <strong>Deep in Digital</strong> to enhance their productivity and customer experience to create a sustainable competitive advantage.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
            Our Mission is to empower enterprises with intelligent systems to drive efficiency, agility, and exceptional customer experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
