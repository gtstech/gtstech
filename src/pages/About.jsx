import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function About() {
  const values = [
    { title: 'Innovation', desc: 'Designing future-ready digital operations with AI and automation.' },
    { title: 'Collaboration', desc: 'Partnering closely with clients to solve the right problems.' },
    { title: 'Accountability', desc: 'Delivering predictable outcomes with disciplined execution.' },
    { title: 'Growth', desc: 'Enabling faster, safer, and more sustainable business transformation.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - GTS Techs | Enterprise Digital Solutions</title>
        <meta name="description" content="Discover GTS Techs' mission, purpose, and approach to enterprise digital transformation through automation, cloud, and AI-powered solutions." />
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
              About <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text">GTS Techs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Building resilient enterprise platforms that combine automation, intelligence, and operational clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Our <span className="text-red-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At GTS Techs, we architect and deliver digital solutions that help enterprises operate faster, safer, and with greater confidence. Our work is grounded in practical automation, cloud-native systems, and data-driven decision workflows.
                </p>
                <p>
                  From our Chennai innovation hub, we support customers across financial services, manufacturing, healthcare, logistics, and public sector delivery. We blend technology, process expertise, and domain knowledge to make digital change real.
                </p>
                <p>
                  We believe transformation succeeds when strategy, execution, and continuous improvement are aligned. That is why our teams focus on measurable value and sustainable operations, not just shiny technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '1000+', label: 'Projects Delivered' },
                { value: '50+', label: 'Team Members' },
                { value: '10+', label: 'Years of Excellence' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-6 text-center hover:border-red-200 transition"
                >
                  <p className="text-3xl font-black text-red-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-gray-900 text-center mb-16"
          >
            Our Core <span className="text-red-500">Values</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-100/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-gray-900 text-center mb-16"
          >
            How We <span className="text-red-500">Deliver</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-5">Delivery with Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We work with business leaders to translate enterprise goals into practical technology outcomes. Our engagements begin with the outcome, not the tool, so every solution is designed to improve efficiency, resilience, and customer experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-5">Built for Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines cloud-native architecture, automation, and analytics to create solutions that grow with the business. We focus on modular platforms, measurable KPIs, and a continuous improvement mindset.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-12"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-6">Our <span className="text-red-500">Mission</span></h3>
              <p className="text-gray-600 leading-relaxed">
                To empower enterprises with cutting-edge technology solutions that drive digital transformation, operational excellence, and sustainable business growth in an increasingly competitive global marketplace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-12"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-6">Our <span className="text-red-500">Vision</span></h3>
              <p className="text-gray-600 leading-relaxed">
                To be the trusted technology partner of choice for enterprises seeking innovation, reliability, and excellence in their digital transformation journey.
              </p>
            </motion.div>
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
            Ready to Transform?
          </motion.h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss how we can drive digital excellence in your organization
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mx-auto inline-block"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              Get In Touch <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
