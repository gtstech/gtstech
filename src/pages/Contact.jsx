import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiArrowRight, FiMapPin, FiMail, FiPhone, FiBriefcase, FiFileText, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import Logo from '../assets/logo (1).svg';

export default function Contact() {

  const contactCategories = [
    { iconComponent: FiBriefcase, title: 'Solutions Inquiry', description: 'Ask about our solutions', cta: 'CLICK HERE' },
    { iconComponent: FiFileText, title: 'Media & Analyst', description: 'Press and analyst inquiries', cta: 'KNOW MORE' },
    { iconComponent: FiUsers, title: 'Careers', description: 'Join our team', cta: 'KNOW MORE' },
    { iconComponent: FiTrendingUp, title: 'Investors', description: 'Investor relations', cta: 'KNOW MORE' },
    { iconComponent: FiAward, title: 'Partner', description: 'Partnership opportunities', cta: 'CLICK HERE' },
  ];

  const offices = {
    india: [
      {
        city: 'Chennai',
        address: 'GTS Tech and Infra Solutions, 2nd Floor, 214, Tirupur Kumaran Street, Majestic Colony, Valasaravakkam, Chennai – 600087',
      },
    ],
  };

  const tabs = [
    { id: 'india', label: 'India' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact us | Get in Touch | GTS Techs Global Offices & Addresses</title>
        <meta name="description" content="Contact GTS Techs. Find our global office locations, phone numbers, and contact information." />
      </Helmet>

      {/* Header Logo Section */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={Logo}
            alt="GTS Techs Logo"
            className="h-12 w-auto"
          />
        </div>
      </section>

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
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us for any inquiries or partnership opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Category Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-200 transition h-full flex flex-col">
                  <div className="text-5xl mb-4 text-red-600">{React.createElement(category.iconComponent)}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{category.description}</p>
                  <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2 transition">
                    {category.cta} <FiArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Our <span className="text-red-500">Office</span>
          </motion.h2>

          {/* Office Listings */}
          <motion.div
            key="india"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {offices['india']?.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8 hover:border-red-200 transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <FiMapPin className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2 transition mt-4">
                  View Map <FiArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </motion.div>
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
            Ready to Connect?
          </motion.h2>
          <p className="text-xl text-red-100 mb-12">
            Get in touch with our team directly
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <a
              href="mailto:contact@gtstechs.com"
              className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 transition-all group"
            >
              <FiMail className="text-4xl mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-red-100 break-all">contact@gtstechs.com</p>
            </a>

            <a
              href="tel:+91-44-1234-5678"
              className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 transition-all group"
            >
              <FiPhone className="text-4xl mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-red-100">+91-44-1234-5678</p>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
