import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight, FiCheck, FiRefreshCw, FiShoppingCart, FiBriefcase, FiWifi, FiLink, FiBarChart2 } from 'react-icons/fi';

export default function Solutions() {
  const solutions = [
    {
      title: 'Digital Transformation',
      description: 'Complete digital overhaul of your business processes and systems.',
      iconComponent: FiRefreshCw,
      features: ['Process Automation', 'Cloud Migration', 'Legacy Modernization'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Build powerful online stores that drive sales and engagement.',
      iconComponent: FiShoppingCart,
      features: ['Web Store Setup', 'Payment Integration', 'Analytics Dashboard'],
    },
    {
      title: 'Enterprise Software',
      description: 'Custom enterprise solutions tailored to your business needs.',
      iconComponent: FiBriefcase,
      features: ['Custom Development', 'Integration Services', 'Maintenance & Support'],
    },
    {
      title: 'IoT Solutions',
      description: 'Connect devices and create smart ecosystems for your business.',
      iconComponent: FiWifi,
      features: ['Device Management', 'Real-time Monitoring', 'Analytics Platform'],
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure and transparent blockchain-based solutions.',
      iconComponent: FiLink,
      features: ['Smart Contracts', 'Security Audit', 'Integration Support'],
    },
    {
      title: 'Data & Analytics',
      description: 'Unlock insights from your data with advanced analytics.',
      iconComponent: FiBarChart2,
      features: ['Data Pipeline', 'BI Dashboard', 'Predictive Models'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - GTS Techs | Enterprise Technology Services</title>
        <meta name="description" content="Discover our innovative technology solutions for digital transformation, cloud, AI, IoT, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-600 rounded-full opacity-30"
              animate={{
                y: [0, -150, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-6">
              Our <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Innovative technology for every challenge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-100/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 transition h-full">
                  <div className="text-5xl mb-4 text-red-600">{React.createElement(solution.iconComponent)}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <FiCheck className="text-red-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-gray-900 text-center mb-16"
          >
            Why Choose Our <span className="text-red-500">Solutions</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                desc: 'Experienced professionals with deep industry knowledge',
              },
              {
                title: 'Proven Track Record',
                desc: '1000+ successful projects across multiple industries',
              },
              {
                title: 'Latest Technology',
                desc: 'Always using cutting-edge tools and frameworks',
              },
              {
                title: 'Custom Solutions',
                desc: 'Tailored approaches for unique business needs',
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock monitoring and support services',
              },
              {
                title: 'Cost Effective',
                desc: 'Maximum ROI with optimized resource utilization',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8 hover:border-red-200 transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-gray-900 text-center mb-16"
          >
            Technology <span className="text-red-500">Stack</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
              { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'Next.js'] },
              { category: 'Backend', items: ['Node.js', 'Python', 'Java', '.NET'] },
              { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'] },
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-200 transition"
              >
                <h3 className="text-lg font-bold text-red-600 mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <p className="text-xl text-red-100 mb-8">
            Let's find the perfect solution for your business challenges
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Request Consultation <FiArrowRight />
          </motion.button>
        </div>
      </section>
    </>
  );
}
