import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function Contact() {
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

      {/* --- Ready to Connect (moved to top) --- */}
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
            className="grid grid-cols-1 gap-6 justify-items-center"
          >
            {offices['india']?.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full max-w-xl bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8 hover:border-red-200 transition"
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

    </>
  );
}
