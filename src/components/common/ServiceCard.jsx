import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 0, 0, 0.2)' }}
      className="bg-white border border-gray-200 rounded-2xl p-8 h-full cursor-pointer group hover:border-red-300 transition shadow-sm hover:shadow-md"
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:shadow-glow transition-all duration-300">
        {Icon && <Icon size={32} />}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {/* Arrow */}
      <div className="flex items-center mt-6 text-red-500 group-hover:translate-x-2 transition-transform duration-300">
        <span className="text-sm font-semibold">Learn More</span>
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}
