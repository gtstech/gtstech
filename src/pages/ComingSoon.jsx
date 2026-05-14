import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { getPageConfig } from '../config/techPagesConfig';
import ScrollToTop from '../components/common/ScrollToTop';

export default function ComingSoon() {
  const location = useLocation();
  const pageConfig = getPageConfig(location.pathname);

  const getPageType = () => {
    if (location.pathname.includes('/technology/')) {
      return 'technology';
    }
    return 'general';
  };

  const pageType = getPageType();
  let subtitle = '';

  if (pageType === 'technology' && pageConfig) {
    subtitle = `We're preparing detailed information about ${pageConfig.title}. Check back soon!`;
  } else if (pageType === 'technology') {
    subtitle = 'We\'re preparing this technology page. Check back soon for comprehensive information and service offerings!';
  } else {
    subtitle = 'We\'re working hard to bring you something amazing. Stay tuned for updates!';
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 pt-26">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-7xl mb-8"
          >
            🚀
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Coming <span className="text-blue-600">Soon</span>
          </h1>

          {/* Brand */}
          <p className="text-sm font-semibold text-blue-600 mb-6">GTS TECH & INFRA SOLUTIONS</p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            {subtitle}
          </p>

          {/* Page Info (for tech pages) */}
          {pageType === 'technology' && pageConfig && (
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{pageConfig.category}</span> →{' '}
                <span className="font-semibold text-gray-900">{pageConfig.title}</span>
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-300 transition-all transform hover:scale-105"
            >
              <FiArrowLeft size={18} />
              Back to Home
            </Link>
          </div>

          {/* Contact CTA */}
          <p className="text-sm text-gray-500 mt-8">
            Want to learn more about this service?{' '}
            <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
              Get in touch with us
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}
