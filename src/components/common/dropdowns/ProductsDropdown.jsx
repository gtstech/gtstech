import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function ProductsDropdown({ isMobile = false, onClose = () => {} }) {
  const products = [
    {
      name: 'TruBot',
      description: 'Robotic Process Automation',
      icon: '🤖',
      link: '/products/trubot',
    },
    {
      name: 'TruCap+',
      description: 'Data Capture with AI/ML',
      icon: '📄',
      link: '/products/trucap',
    },
    {
      name: 'TruBI',
      description: 'Business Intelligence & Data Visualization',
      icon: '📊',
      link: '/products/trubi',
    },
    {
      name: 'TruAI Underwriting',
      description: 'Intelligent Financial and Medical Underwriting Automation',
      icon: '⚖️',
      link: '/products/truai-underwriting',
    },
    {
      name: 'TruDiscovery',
      description: 'Search effortlessly across data sources',
      icon: '🔍',
      link: '/products/trudiscovery',
    },
    {
      name: 'FINATO',
      description: 'CFO Backoffice Transformation',
      icon: '💰',
      link: '/products/finato',
    },
    {
      name: 'TruAgent',
      description: 'Go beyond rule-based automation with AI Agents',
      icon: '✨',
      link: '/products/truagent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  if (isMobile) {
    return (
      <div className="space-y-3">
        {products.map((product) => (
          <Link
            key={product.name}
            to={product.link}
            onClick={onClose}
            className="block p-3 rounded-lg bg-red-600/5 hover:bg-red-600/10 border border-red-600/10 hover:border-red-600/30 transition group"
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">{product.icon}</span>
              <div className="flex-1">
                <h4 className="text-red-400 font-semibold group-hover:text-red-300 transition">{product.name}</h4>
                <p className="text-xs text-gray-400">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute top-full left-0 mt-0 w-screen max-w-5xl bg-white border border-gray-200 rounded-xl shadow-2xl shadow-gray-200/20 overflow-hidden"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {products.map((product) => (
          <motion.div key={product.name} variants={itemVariants}>
            <Link
              to={product.link}
              onClick={onClose}
              className="group block p-4 rounded-lg bg-gradient-to-br from-red-100/50 to-transparent hover:from-red-100 hover:to-red-100/50 border border-gray-200 hover:border-gray-300 transition-all h-full"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{product.icon}</div>
              <h4 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-red-600 transition">
                {product.name}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">{product.description}</p>
              <div className="flex items-center gap-1 text-red-500 text-xs opacity-0 group-hover:opacity-100 transition">
                Explore <FiArrowRight size={12} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
