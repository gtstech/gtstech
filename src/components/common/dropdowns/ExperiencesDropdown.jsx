import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function ExperiencesDropdown({ isMobile = false, onClose = () => {} }) {
  const categories = [
    {
      title: 'Contact Center Transformation',
      items: [
        { label: 'Customer Care', path: '/experiences/customer-care' },
        { label: 'Customer Loyalty Management', path: '/experiences/customer-loyalty' },
        { label: 'Trust and Safety', path: '/experiences/trust-and-safety' },
        { label: 'Customer Analytics', path: '/experiences/customer-analytics' },
        { label: 'Customer Management Consulting', path: '/experiences/customer-consulting' },
      ],
      link: '/experiences/contact-center',
    },
    {
      title: 'Digital Proctoring',
      items: [],
      link: '/experiences/digital-proctoring',
      promo: true,
    },
    {
      title: 'Research & Analytics',
      items: [
        { label: 'XM Consulting', path: '/experiences/xm-consulting' },
        { label: 'GCC for Market Research', path: '/experiences/gcc' },
        { label: 'Research Technology', path: '/experiences/research-technology' },
      ],
      link: '/experiences/research-analytics',
    },
    {
      title: 'SuperCX Platform',
      items: [],
      link: '/products/supercx',
      promo: true,
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
      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h4 className="text-red-400 font-semibold mb-2">{cat.title}</h4>
            {cat.items.length > 0 && (
              <ul className="space-y-1 ml-4">
                {cat.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} onClick={onClose} className="text-gray-400 hover:text-red-400 text-sm transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              to={cat.link}
              onClick={onClose}
              className="text-red-500 hover:text-red-400 text-sm flex items-center gap-1 mt-2"
            >
              Learn More <FiArrowRight size={14} />
            </Link>
          </div>
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
      <div className="grid grid-cols-2 gap-6 p-8">
        {categories.map((cat) => (
          <motion.div key={cat.title} variants={itemVariants} className="group">
            <div className="mb-4">
              <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-red-600 transition flex items-center gap-2">
                {cat.title}
                {cat.promo && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Direct Link</span>}
              </h3>
              {cat.items.length > 0 && (
                <ul className="space-y-2 mb-3">
                  {cat.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-600 text-sm transition flex items-center group/item"
                      >
                        <span className="w-0 group-hover/item:w-2 h-0.5 bg-red-600 transition-all mr-0 group-hover/item:mr-2" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to={cat.link}
                className="text-red-500 hover:text-red-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition"
              >
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-red-100/50 to-transparent border-t border-gray-200 px-8 py-6">
        <Link
          to="/products/supercx"
          className="text-sm text-gray-600 hover:text-red-600 transition flex items-center gap-2 group"
        >
          <span className="text-red-500">🤖</span>
          GTS SuperCX — AI-Powered Agents for Omni-channel Control Centers
          <FiArrowRight size={14} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.div>
  );
}
