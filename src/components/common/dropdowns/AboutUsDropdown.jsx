import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function AboutUsDropdown({ isMobile = false, onClose = () => {} }) {
  const menuItems = [
    { name: 'Company Overview', icon: '🏢', link: '/about-us/overview' },
    { name: 'DataLabs', icon: '🔬', link: '/about-us/datalabs' },
    { name: 'Board of Directors & Senior Management', icon: '👔', link: '/about-us/management' },
    { name: 'Awards and Recognition', icon: '🏆', link: '/about-us/awards' },
    { name: 'Customer Testimonials', icon: '⭐', link: '/about-us/testimonials' },
    { name: 'Alliances', icon: '🤝', link: '/about-us/alliances' },
    { name: 'Deep In Digital', icon: '🚀', link: '/about-us/deep-in-digital' },
    { name: 'Our Offices', icon: '📍', link: '/about-us/offices' },
    { name: 'Corporate Social Responsibility', icon: '❤️', link: '/about-us/csr' },
    { name: 'Environmental Social Governance (ESG)', icon: '🌱', link: '/about-us/esg' },
    { name: 'Media', icon: '📰', link: '/about-us/media' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            onClick={onClose}
            className="p-3 rounded-lg bg-red-600/5 hover:bg-red-600/10 border border-red-600/10 hover:border-red-600/30 transition text-center group"
          >
            <div className="text-lg mb-1 group-hover:scale-110 transition-transform">{item.icon}</div>
            <p className="text-xs text-gray-400 hover:text-red-400 line-clamp-2">{item.name}</p>
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
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-8">
        {menuItems.map((item) => (
          <motion.div key={item.name} variants={itemVariants}>
            <Link
              to={item.link}
              className="group block p-4 rounded-lg bg-gradient-to-br from-red-100/50 to-transparent hover:from-red-100 hover:to-red-100/50 border border-gray-200 hover:border-gray-300 transition-all text-center h-full flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-gray-900 font-semibold text-sm group-hover:text-red-600 transition">
                {item.name}
              </h4>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-red-100/50 to-transparent border-t border-gray-200 px-8 py-6">
        <Link
          to="/about-us/50-year-journey"
          onClick={onClose}
          className="text-sm text-gray-600 hover:text-red-600 transition flex items-center gap-2 group"
        >
          <span className="text-red-500">🎉</span>
          GTS Techs 50-Year Journey — An Entirely AI-Generated Experience
          <FiArrowRight size={14} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.div>
  );
}
