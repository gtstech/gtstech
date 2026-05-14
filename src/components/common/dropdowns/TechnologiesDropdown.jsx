import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function TechnologiesDropdown({ isMobile = false, onClose = () => {} }) {
  const categories = [
    {
      title: 'GTS Techs.AI',
      items: [],
      link: '/technology/digital-transformation/ai',
      promo: true,
    },
    {
      title: 'Enterprise Platforms',
      items: [
        { label: 'Salesforce', path: '/technology/enterprise-platforms/salesforce' },
        { label: 'Microsoft', path: '/technology/enterprise-platforms/microsoft' },
        { label: 'Amazon Web Services (AWS)', path: '/technology/enterprise-platforms/aws' },
        { label: 'OutSystems', path: '/technology/enterprise-platforms/outsystems' },
      ],
      link: '/technology/enterprise-platforms/salesforce',
    },
    {
      title: 'Digital Transformation',
      items: [
        { label: 'Artificial Intelligence', path: '/technology/digital-transformation/ai' },
        { label: 'Data & Analytics', path: '/technology/digital-transformation/data-analytics' },
        { label: 'Cloud', path: '/technology/digital-transformation/cloud' },
        { label: 'Applications', path: '/technology/digital-transformation/applications' },
        { label: 'Hyper-Automation', path: '/technology/digital-transformation/hyper-automation' },
        { label: 'Product Engineering', path: '/technology/digital-transformation/product-engineering' },
        { label: 'CRM', path: '/technology/digital-transformation/crm' },
        { label: 'Enterprise Content Management', path: '/technology/digital-transformation/ecm' },
        { label: 'Professional Services', path: '/technology/digital-transformation/professional-services' },
      ],
      link: '/technology/digital-transformation/ai',
    },
    {
      title: 'Digital Assurance',
      items: [
        { label: 'Managed Services', path: '/technology/digital-assurance/managed-services' },
        { label: 'Testing', path: '/technology/digital-assurance/testing' },
      ],
      link: '/technology/digital-assurance',
    },
    {
      title: 'Automatic Fare Collection',
      items: [],
      link: '/technology/automatic-fare-collection',
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
            <h4 className="text-red-600 font-semibold mb-2">{cat.title}</h4>
            {cat.items.length > 0 && (
              <ul className="space-y-1 ml-4">
                {cat.items.map((item) => (
                  <li key={item.label || item}>
                    <Link
                      to={item.path || '#'}
                      onClick={onClose}
                      className="text-gray-700 hover:text-red-600 text-sm transition"
                    >
                      {item.label || item}
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
      className="absolute top-full left-0 mt-0 w-screen max-w-6xl bg-white border border-gray-200 rounded-xl shadow-2xl shadow-gray-200/20 overflow-hidden"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {categories.map((cat) => (
          <motion.div key={cat.title} variants={itemVariants} className="group">
            <div className="mb-4">
              <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-red-600 transition flex items-center gap-2">
                {cat.title}
                {cat.promo && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Direct Link</span>}
              </h3>
              {cat.items.length > 0 && (
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.label || item}>
                      <Link
                        to={item.path || '#'}
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-600 text-sm transition flex items-center group/item"
                      >
                        <span className="w-0 group-hover/item:w-2 h-0.5 bg-red-600 transition-all mr-0 group-hover/item:mr-2" />
                        {item.label || item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to={cat.link}
                className="text-red-500 hover:text-red-400 text-xs font-semibold flex items-center gap-1 mt-3 group-hover:gap-2 transition"
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
          to="/ai-use-cases"
          onClick={onClose}
          className="text-sm text-gray-700 hover:text-red-600 transition flex items-center gap-2 group"
        >
          <span className="text-red-500">🚀</span>
          Start Your AI Journey with Top Agentic AI Use Cases
          <FiArrowRight size={14} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.div>
  );
}
