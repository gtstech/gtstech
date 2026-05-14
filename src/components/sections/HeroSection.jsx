import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  showBackgroundAnimation = true
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-red-50 to-white overflow-hidden pt-20">
      {/* Animated Background Elements */}
      {showBackgroundAnimation && (
        <>
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"
            animate={{ y: [30, 0, 30] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-gray-900">
            <motion.div
              variants={itemVariants}
              className="inline-block badge-dark mb-6"
            >
              Welcome to GTS Techs
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {title || 'Transforming Businesses with Smart Digital Solutions'}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              {subtitle || 'We deliver cutting-edge technology solutions that empower your business to thrive in the digital era.'}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={ctaLink} className="btn-primary inline-flex items-center justify-center gap-2">
                {ctaText}
                <FiArrowRight />
              </Link>
              <Link to="/about" className="btn-outline inline-flex items-center justify-center">
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-300"
            >
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '100+', label: 'Projects Delivered' },
                { number: '50+', label: 'Team Members' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold text-red-500">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-red-700/20 rounded-3xl backdrop-blur"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-48 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl opacity-30 blur-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-900"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">Scroll to explore</p>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
