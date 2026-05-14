import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight, FiActivity, FiDollarSign, FiShoppingBag, FiZap, FiBookOpen, FiMap, FiPackage, FiHome } from 'react-icons/fi';

export default function Industries() {
  const industries = [
    { name: 'Healthcare', iconComponent: FiActivity, description: 'HIPAA-compliant solutions for modern healthcare' },
    { name: 'Finance', iconComponent: FiDollarSign, description: 'Secure banking and fintech solutions' },
    { name: 'Retail', iconComponent: FiShoppingBag, description: 'Omnichannel retail platforms' },
    { name: 'Manufacturing', iconComponent: FiZap, description: 'IoT and automation for factories' },
    { name: 'Education', iconComponent: FiBookOpen, description: 'Learning management systems' },
    { name: 'Hospitality', iconComponent: FiMap, description: 'Guest experience management systems' },
    { name: 'Logistics', iconComponent: FiPackage, description: 'Supply chain optimization' },
    { name: 'Real Estate', iconComponent: FiHome, description: 'Property management platforms' },
  ];

  return (
    <>
      <Helmet>
        <title>Industries - GTS Techs | Sector-Specific Solutions</title>
        <meta name="description" content="GTS Techs serves various industries with specialized technology solutions." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-600 rounded-full opacity-30"
              animate={{ y: [0, -150, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8 + i * 0.5, repeat: Infinity, delay: i * 0.1 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
            Industries We <span className="text-red-500">Serve</span>
          </motion.h1>
          <p className="text-xl text-gray-600">Specialized solutions for every sector</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8 text-center hover:border-red-200 transition"
              >
                <div className="text-5xl mb-4 text-red-600 flex justify-center">{React.createElement(industry.iconComponent)}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600/90 to-red-700/90">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Your Industry, Our Expertise</h2>
          <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto">
            Get Industry Solution <FiArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}
