import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

export default function PressReleases() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const releases = [
    {
      id: 1,
      title: 'GTS Techs Expands Client Relationship with a Fast-Growing Global Enterprise to Drive AI-Led Digital Transformation',
      category: 'AI SOLUTIONS',
      date: 'Apr 29, 2026',
      readTime: '2 min',
      tags: ['AI', 'Automation', 'Digital Technologies', 'Enterprise Solutions'],
      featured: true,
    },
    {
      id: 2,
      title: 'GTS Techs Launches AI Automation Platform for Enterprise Operations',
      category: 'AUTOMATION',
      date: 'Apr 15, 2026',
      readTime: '1 min',
      tags: ['AI', 'Automation'],
    },
    {
      id: 3,
      title: 'GTS Techs Introduces TruAI Solutions for Intelligent Automation',
      category: 'AI SOLUTIONS',
      date: 'Apr 9, 2026',
      readTime: '2 min',
      tags: ['AI', 'Solutions'],
    },
    {
      id: 4,
      title: 'GTS Techs Q3FY26 Revenue up 19.9% YoY',
      category: 'INVESTOR RELATIONS',
      date: 'Jan 28, 2026',
      readTime: '5 min',
      tags: ['Finance', 'Investor Relations'],
    },
    {
      id: 5,
      title: 'CEO Honored for Excellence in Digital Innovation',
      category: 'CORPORATE',
      date: 'Dec 9, 2025',
      readTime: '2 min',
      tags: ['Corporate', 'Leadership'],
    },
    {
      id: 6,
      title: 'GTS Techs Partners with Global AI Firms for Enterprise Transformation',
      category: 'PARTNERSHIP',
      date: 'Nov 5, 2025',
      readTime: '2 min',
      tags: ['Partnership', 'AI', 'Enterprise'],
    },
    {
      id: 7,
      title: 'GTS Techs Recognized in Global Finance Transformation Assessment 2025',
      category: 'FINANCE & ACCOUNTING',
      date: 'Sep 23, 2025',
      readTime: '3 min',
      tags: ['Finance', 'Recognition'],
    },
  ];

  const categories = [
    'all',
    'AUTOMATION',
    'AI SOLUTIONS',
    'INVESTOR RELATIONS',
    'CORPORATE',
    'PARTNERSHIP',
    'FINANCE & ACCOUNTING',
  ];

  const filteredReleases = selectedCategory === 'all'
    ? releases
    : releases.filter(r => r.category === selectedCategory);

  const featured = releases.find(r => r.featured);
  const nonFeatured = filteredReleases.filter(r => !r.featured);

  return (
    <>
      <Helmet>
        <title>Press Releases | GTS Techs Global Services</title>
        <meta name="description" content="Latest press releases from GTS Techs. News on AI, automation, digital transformation, and enterprise solutions." />
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
              Press <span className="text-red-500">Releases</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news and announcements from GTS Techs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Release */}
      {featured && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8 md:p-12 hover:border-red-200 transition group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-red-100 border border-red-200 rounded-full text-red-600 text-sm font-semibold">
                      FEATURED
                    </span>
                    <span className="text-gray-600 text-sm">📅 {featured.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-red-600 transition">
                    {featured.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-red-100 border border-red-200 rounded-full text-red-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">⏱️ {featured.readTime} read</span>
                    <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition">
                      READ MORE <FiArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter and Search */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">All Press Releases</h3>
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search releases..."
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-red-200'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases List */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {nonFeatured.length > 0 ? (
              nonFeatured.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl hover:border-red-200 transition cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                          {release.category}
                        </span>
                        <span className="text-gray-500 text-sm">📅 {release.date}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                        {release.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600 text-sm">⏱️ {release.readTime} read</span>
                        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition text-sm">
                          READ MORE <FiArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiArrowRight className="text-gray-300 group-hover:text-red-600 transition mt-1" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No press releases found in this category</p>
              </div>
            )}
          </div>

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition">
              SEE MORE RELEASES
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sidebar Section - Email Subscription */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-2 bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Updates</h3>
              <p className="text-gray-600 mb-6">Get the latest press releases delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition">
                  Subscribe
                </button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Media Inquiries', 'Analyst Relations', 'Events', 'Careers'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 hover:text-red-600 transition flex items-center gap-2">
                      <FiArrowRight size={14} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
