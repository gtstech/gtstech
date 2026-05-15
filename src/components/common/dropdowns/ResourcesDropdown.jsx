import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function ResourcesDropdown({ isMobile = false, onClose = () => {} }) {
  const topics = [
    { name: 'Artificial Intelligence', icon: '🤖', link: '/resources/topics/ai' },
    { name: 'Digital Finance and Accounting', icon: '💼', link: '/resources/topics/digital-finance' },
    { name: 'Intelligent Automation', icon: '⚙️', link: '/resources/topics/intelligent-automation' },
    { name: 'Enterprise Content Management', icon: '📁', link: '/resources/topics/ecm' },
    { name: 'Robotic Process Automation', icon: '🦾', link: '/resources/topics/rpa' },
    { name: 'Automatic Fare Collection', icon: '🚌', link: '/resources/topics/afc' },
    { name: 'Big Data and Analytics', icon: '📊', link: '/resources/topics/big-data' },
    { name: 'Salesforce', icon: '☁️', link: '/resources/topics/salesforce' },
    { name: 'Product Engineering', icon: '🔧', link: '/resources/topics/product-engineering' },
    { name: 'Customer Experience', icon: '😊', link: '/resources/topics/cx' },
    { name: 'Consumer Research & Analytics', icon: '🔍', link: '/resources/topics/research-analytics' },
  ];

  const categories = [
    { name: 'Customer Testimonials', icon: '💬', link: '/resources/testimonials' },
    { name: 'Case Studies', icon: '📋', link: '/resources/case-studies' },
    { name: 'Product Demos', icon: '🎥', link: '/resources/demos' },
    { name: 'Analyst Reports', icon: '📈', link: '/resources/analyst-reports' },
    { name: 'White Papers', icon: '📄', link: '/resources/whitepapers' },
    { name: 'Brochures', icon: '📑', link: '/resources/brochures' },
    { name: 'Thoughtcast', icon: '🎙️', link: '/resources/thoughtcast' },
    { name: 'Webinars', icon: '🎤', link: '/resources/webinars' },
    { name: 'Infographics', icon: '📸', link: '/resources/infographics' },
    { name: 'Blogs', icon: '📝', link: '/resources/blogs' },
    { name: 'Newsletters', icon: '📧', link: '/resources/newsletters' },
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
      <div className="space-y-6">
        <div>
          <h4 className="text-red-400 font-semibold mb-3">Topics</h4>
          <div className="grid grid-cols-2 gap-2">
            {topics.map((topic) => (
              <Link
                key={topic.name}
                to={topic.link}
                onClick={onClose}
                className="p-2 rounded-lg bg-red-600/5 hover:bg-red-600/10 border border-red-600/10 transition text-center"
              >
                <div className="text-lg mb-1">{topic.icon}</div>
                <p className="text-xs text-gray-400 hover:text-red-400 line-clamp-2">{topic.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-red-400 font-semibold mb-3">Categories</h4>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.link}
                onClick={onClose}
                className="p-2 rounded-lg bg-red-600/5 hover:bg-red-600/10 border border-red-600/10 transition text-center"
              >
                <div className="text-lg mb-1">{cat.icon}</div>
                <p className="text-xs text-gray-400 hover:text-red-400 line-clamp-2">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
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
      <div className="p-8">
        {/* Topics Section */}
        <div className="mb-8">
          <h3 className="text-gray-900 font-bold text-lg mb-4">Topics</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <motion.div key={topic.name} variants={itemVariants}>
                <Link
                  to={topic.link}
                  onClick={onClose}
                  className="group block p-3 rounded-lg bg-gradient-to-br from-red-100/50 to-transparent hover:from-red-100 hover:to-red-100/50 border border-gray-200 hover:border-gray-300 transition-all text-center"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{topic.icon}</div>
                  <p className="text-gray-600 group-hover:text-red-600 text-xs font-medium transition">{topic.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Categories Section */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-4">Categories</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <motion.div key={cat.name} variants={itemVariants}>
                <Link
                  to={cat.link}
                  onClick={onClose}
                  className="group block p-3 rounded-lg bg-gradient-to-br from-red-100/50 to-transparent hover:from-red-100 hover:to-red-100/50 border border-gray-200 hover:border-gray-300 transition-all text-center"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <p className="text-gray-600 group-hover:text-red-600 text-xs font-medium transition">{cat.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-red-100/50 to-transparent border-t border-gray-200 px-8 py-6">
        <Link
          to="/resources/ai-use-cases"
          onClick={onClose}
          className="text-sm text-gray-600 hover:text-red-600 transition flex items-center gap-2 group"
        >
          <span className="text-red-500">🚀</span>
          Top Agentic AI Use Cases
          <FiArrowRight size={14} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.div>
  );
}
