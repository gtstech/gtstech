import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiArrowRight, FiDownload, FiExternalLink, FiClipboard, FiUsers, FiBarChart2, FiTrendingUp, FiPhone, FiFileText, FiStar, FiUser, FiBell, FiCheck } from 'react-icons/fi';

export default function InvestorRelations() {
  const sections = [
    { iconComponent: FiClipboard, title: 'Corporate Governance', description: 'Board structure and governance policies' },
    { iconComponent: FiUsers, title: 'Board of Directors', description: 'Meet our leadership team' },
    { iconComponent: FiBarChart2, title: 'Financials', description: 'Financial statements and reports' },
    { iconComponent: FiTrendingUp, title: 'Investor Presentation', description: 'Company overview and strategy' },
    { iconComponent: FiPhone, title: 'Earnings Call', description: 'Latest earnings and performance' },
    { iconComponent: FiFileText, title: 'Shareholding Pattern', description: 'Shareholding structure' },
    { iconComponent: FiStar, title: 'Credit Rating', description: 'Credit ratings and assessments' },
    { iconComponent: FiUser, title: 'Shareholder Services', description: 'Investor support services' },
    { iconComponent: FiPhone, title: 'Investor Contact', description: 'Get in touch with IR team' },
    { iconComponent: FiBell, title: 'Announcements', description: 'Latest announcements' },
    { iconComponent: FiBarChart2, title: 'Analyst Presentation', description: 'Analyst briefings' },
    { iconComponent: FiCheck, title: 'Postal Ballot', description: 'Shareholder voting' },
  ];

  const additionalItems = [
    { title: 'Scheme of Arrangement – Demerger', description: 'Demerger arrangement details' },
    { title: 'Scheme of Arrangement – Merger', description: 'Merger arrangement details' },
    { title: 'Integrated Filing & Related Party Transactions', description: 'Regulatory filings' },
    { title: 'Memorandum & Articles of Association', description: 'Constitutional documents' },
  ];

  return (
    <>
      <Helmet>
        <title>Investor Relations | GTS Techs</title>
        <meta name="description" content="GTS Techs Investor Relations - Financial information, corporate governance, and shareholder resources." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-b from-white via-red-50 to-white flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-600 rounded-full opacity-30"
              animate={{ y: [0, -150, 0], opacity: [0.3, 0.6, 0.3] }}
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
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
              Investor <span className="text-red-500">Relations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Financial information and investor resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Link - SEBI Disclosures */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-red-100/50 to-transparent border-2 border-red-200 rounded-2xl p-8 hover:border-red-300 transition cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Disclosures under Regulation 46 of SEBI LODR</h3>
                <p className="text-gray-600">Access regulatory disclosures and compliance documents</p>
              </div>
              <FiExternalLink className="text-red-600 text-3xl group-hover:translate-x-2 transition" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Investor Resources
          </motion.h2>

          {/* Icon Grid - 4x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-200 transition cursor-pointer h-full">
                  <div className="text-5xl mb-4 text-red-600">{React.createElement(section.iconComponent)}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                  <div className="flex items-center gap-2 text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                    <FiArrowRight size={14} />
                    Explore
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Items Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-xl p-6 hover:border-red-200 transition cursor-pointer">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition flex items-center gap-2">
                      <FiDownload className="text-red-600" />
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Company Snapshot
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Customers Worldwide', value: '300+' },
              { label: 'Annual Revenue', value: '$181 MN' },
              { label: 'Global Delivery Centers', value: '4 Regions' },
              { label: 'Global Locations', value: '6 Countries' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-red-200 transition"
              >
                <div className="text-4xl font-black text-red-600 mb-3">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
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
            Let's Take Our Conversation Ahead
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2">
              GET IN TOUCH <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                question: 'How can I access investor reports?',
                answer: 'All investor reports are available in the Financials and Investor Presentation sections above. You can download them directly from those pages.'
              },
              {
                question: 'When are earnings calls scheduled?',
                answer: 'Earnings calls are typically scheduled quarterly. Visit the Earnings Call section for the latest schedule and to register.'
              },
              {
                question: 'How do I contact the investor relations team?',
                answer: 'You can reach our IR team through the Investor Contact section or by using the contact form below.'
              },
              {
                question: 'Where can I view shareholding details?',
                answer: 'Shareholding information is available in the Shareholding Pattern section with regular updates.'
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-200 transition"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Investor Relations Contact</h3>
            <p className="text-gray-600 mb-8">
              Have questions? Our investor relations team is ready to help.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
