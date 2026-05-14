import { motion } from 'framer-motion';

export default function ResourcesSection() {
  const resources = [
    {
      id: 1,
      title: 'How an AI service agent Transformed patient Experience for a specialty Healthcare center',
      category: 'Case Study',
      bgGradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Driving Efficiency: GTS Techs AI Streamlined SDS Retrieval in Logistics',
      category: 'Case Study',
      bgGradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 3,
      title: 'Revolutionizing Credit Analysis: AI Processes 15 Million Performance Reports Annually',
      category: 'Case Study',
      bgGradient: 'from-green-500 to-green-600'
    },
  ];

  const PDFIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor" />
      <path d="M16 18H8V16H16V18Z" fill="white" />
      <path d="M16 14H8V12H16V14Z" fill="white" />
    </svg>
  );

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-red-600 mb-4">
            Explore our Resources
          </h2>

          {/* Divider */}
          <div className="h-1 max-w-xs mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #CC0000, transparent)'
            }}
          />
        </motion.div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              {/* Image Placeholder */}
              <div className={`relative w-full h-48 bg-gradient-to-br ${resource.bgGradient} overflow-hidden`}>
                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center"
                >
                  {/* PDF Badge - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-red-600 text-white p-2 rounded-lg">
                    <PDFIcon />
                  </div>
                </motion.div>

                {/* Floating text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <p className="text-white/30 text-sm font-semibold text-center px-4">
                    {resource.category}
                  </p>
                </motion.div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="inline-block mb-3">
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 group-hover:text-red-600 transition-colors">
                  {resource.title}
                </h3>

                {/* Download Link */}
                <motion.a
                  href="#"
                  className="text-red-600 font-bold text-sm flex items-center gap-2 group/link hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Download Now
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
