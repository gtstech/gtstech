import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function OperationsDropdown({ isMobile = false, onClose = () => {} }) {
  const categories = [
    {
      title: 'Digital Finance',
      items: [
        { label: 'Finance & Accounting', path: '/operations/finance-accounting' },
        { label: 'Banking Process Management', path: '/operations/banking-process' },
        { label: 'Insurance Process Management', path: '/operations/insurance-process' },
        { label: 'Healthcare Process Management', path: '/operations/healthcare-process' },
      ],
      link: '/operations/digital-finance',
    },
    {
      title: 'Automation',
      items: [
        { label: 'Intelligent Automation Platform', path: '/operations/intelligent-automation' },
        { label: 'TruBot – RPA Solution', path: '/products/trubot' },
        { label: 'TruCap+ – IDP Solution', path: '/products/trucap' },
        { label: 'TruAgent', path: '/products/truagent' },
      ],
      link: '/operations/automation',
    },
    {
      title: 'GTS FINATO',
      subtitle: 'AI-powered Finance Transformation',
      items: [
        { label: 'Procure-to-Pay (P2P)', path: '/operations/procure-to-pay' },
        { label: 'Order-to-Cash (O2C)', path: '/operations/order-to-cash' },
        { label: 'Record-to-Report (R2R)', path: '/operations/record-to-report' },
        { label: 'Financial Planning & Analysis (FP&A)', path: '/operations/fpa' },
      ],
      link: '/operations/finato',
    },
    {
      title: 'Digital Content',
      items: [],
      link: '/operations/digital-content',
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
            <h4 className="text-red-400 font-semibold mb-1">{cat.title}</h4>
            {cat.subtitle && <p className="text-xs text-gray-400 mb-2">{cat.subtitle}</p>}
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
      className="absolute top-full left-0 mt-0 w-screen max-w-5xl bg-white border border-gray-200 rounded-xl shadow-2xl shadow-gray-200/20 overflow-hidden"
    >
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 p-8">
        {categories.map((cat) => (
          <motion.div key={cat.title} variants={itemVariants} className="group">
            <div className="mb-4">
              <h3 className="text-gray-900 font-bold text-base mb-1 group-hover:text-red-600 transition flex items-center gap-2">
                {cat.title}
                {cat.promo && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Direct Link</span>}
              </h3>
              {cat.subtitle && <p className="text-xs text-gray-600 mb-3">{cat.subtitle}</p>}
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
          to="/operations/finance-vendors"
          onClick={onClose}
          className="text-sm text-gray-600 hover:text-red-600 transition flex items-center gap-2 group"
        >
          <span className="text-red-500">⭐</span>
          Consistently Ranked Among Top 10 Global Vendors for Finance & Accounting Transformation — Gartner, Everest Group, IDC, HFS Research, ISG
          <FiArrowRight size={14} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.div>
  );
}
