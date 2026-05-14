import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight, FiUser } from 'react-icons/fi';

export default function About() {
  const team = [
    { name: 'Rajesh Kumar', role: 'CEO & Founder' },
    { name: 'Priya Singh', role: 'CTO' },
    { name: 'Amit Patel', role: 'Head of Operations' },
    { name: 'Sarah Johnson', role: 'Lead Designer' },
  ];

  const values = [
    { title: 'Innovation', desc: 'Cutting-edge solutions for modern challenges' },
    { title: 'Excellence', desc: 'Premium quality in every project' },
    { title: 'Reliability', desc: '24/7 support and guaranteed uptime' },
    { title: 'Integrity', desc: 'Transparent and honest partnerships' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - GTS Techs | Enterprise Digital Solutions</title>
        <meta name="description" content="Learn about GTS Techs, our mission, vision, and the team behind our success in enterprise digital transformation." />
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
              Enterprise Digital Excellence Partner
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
                  GTS Tech and Infra Solutions is a premier enterprise technology services partner specializing in digital transformation, cloud infrastructure, and intelligent automation. We are committed to delivering world-class technology solutions that drive business excellence.
                </p>
                <p>
                  Based in Chennai, we serve a diverse portfolio of enterprise clients across banking, finance, manufacturing, healthcare, and other critical industries. Our expertise spans cloud platforms, enterprise software, AI/ML solutions, and operational automation.
                </p>
                <p>
                  With our experienced team of technologists and enterprise consultants, we partner with organizations to modernize their IT infrastructure, optimize operations, and accelerate their digital journey.
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

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-gray-900 text-center mb-16"
          >
            Our <span className="text-red-500">Leadership</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-6 text-center hover:border-red-200 transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <FiUser className="text-4xl text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
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

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Get In Touch <FiArrowRight />
          </motion.button>
        </div>
      </section>
    </>
  );
}
