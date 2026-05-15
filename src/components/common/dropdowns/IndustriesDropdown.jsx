import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function IndustriesDropdown({ isMobile = false, onClose = () => {} }) {
  const industries = [
    { name: 'Banking & Financial Services', icon: '🏦', link: '/industries/banking-financial-services' },
    { name: 'Insurance', icon: '🛡️', link: '/industries/insurance' },
    { name: 'Manufacturing', icon: '🏭', link: '/industries/manufacturing' },
    { name: 'Logistics', icon: '📦', link: '/industries/logistics' },
    { name: 'Healthcare', icon: '🏥', link: '/industries/healthcare' },
    { name: 'Technology', icon: '💻', link: '/industries/technology' },
    { name: 'Travel & Transportation', icon: '✈️', link: '/industries/travel-hospitality' },
    { name: 'Credit Rating', icon: '⭐', link: '/industries/credit-rating' },
    { name: 'International Organisations', icon: '🌍', link: '/industries/international-organisations' },
    { name: 'Retail', icon: '🛍️', link: '/industries/retail' },
    { name: 'Education', icon: '🎓', link: '/industries/education' },
    { name: 'Market Research', icon: '📈', link: '/industries/market-research' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {industries.map((industry) => (
          <Link
            key={industry.name}
            to={industry.link}
            onClick={onClose}
            className="p-2 rounded-lg bg-red-600/5 hover:bg-red-600/10 border border-red-600/10 hover:border-red-600/30 transition text-center"
          >
            <div className="text-lg mb-1">{industry.icon}</div>
            <p className="text-xs text-gray-400 hover:text-red-400 transition">{industry.name}</p>
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
      className="absolute top-full left-0 mt-0 w-screen max-w-4xl bg-white border border-gray-200 rounded-xl shadow-2xl shadow-gray-200/20 overflow-hidden"
    >
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-8">
        {industries.map((industry) => (
          <motion.div key={industry.name} variants={itemVariants}>
            <Link
              to={industry.link}
              className="group block p-4 rounded-lg bg-gradient-to-br from-red-100/50 to-transparent hover:from-red-100 hover:to-red-100/50 border border-gray-200 hover:border-gray-300 transition-all text-center h-full flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h4 className="text-gray-900 font-semibold text-sm group-hover:text-red-600 transition">
                {industry.name}
              </h4>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
