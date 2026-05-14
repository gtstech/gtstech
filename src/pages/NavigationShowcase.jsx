import { motion } from 'framer-motion';

export default function NavigationShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
          Navigation Structure
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Complete navigation system with mega menus, dropdowns, and responsive mobile navigation
        </p>
      </motion.div>

      {/* Navigation Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-200 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔝</span> Top Utility Bar
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Deep in Digital (logo/tagline)</li>
            <li>✓ Careers</li>
            <li>✓ Press Releases</li>
            <li>✓ Events</li>
            <li>✓ Investors</li>
            <li>✓ Contact Us</li>
            <li>✓ Search Icon</li>
          </ul>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-200 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🏠</span> Logo Section
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ GTS TECHS Logo</li>
            <li>✓ Links to homepage</li>
            <li>✓ Hover effects with shadow</li>
            <li>✓ Responsive scaling</li>
          </ul>
        </motion.div>
      </div>

      {/* Main Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-200 rounded-xl p-8 mb-16"
      >
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-3xl">📌</span> Main Navigation (7 Mega Menus)
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Menu Items */}
          {[
            {
              title: '1️⃣ Technologies',
              count: '5 categories + 15 sub-items',
              items: ['GTS Techs.AI', 'Enterprise Platforms', 'Digital Transformation', 'Digital Assurance', 'Automatic Fare Collection'],
            },
            {
              title: '2️⃣ Operations',
              count: '4 categories + 13 sub-items',
              items: ['Digital Finance', 'Automation', 'GTS FINATO', 'Digital Content'],
            },
            {
              title: '3️⃣ Experiences',
              count: '4 categories + 9 sub-items',
              items: ['Contact Center Transformation', 'Customer Care', 'Digital Proctoring', 'Research & Analytics'],
            },
            {
              title: '4️⃣ Products',
              count: '7 products',
              items: ['TruBot', 'TruCap+', 'TruBI', 'TruAI Underwriting', 'TruDiscovery', 'FINATO', 'TruAgent'],
            },
            {
              title: '5️⃣ Industries',
              count: '12 industries',
              items: ['Banking & Financial Services', 'Insurance', 'Manufacturing', 'Healthcare', 'Technology', 'Retail'],
            },
            {
              title: '6️⃣ Resources',
              count: '11 topics + 11 categories',
              items: ['Case Studies', 'White Papers', 'Blogs', 'Webinars', 'Analyst Reports', 'Customer Testimonials'],
            },
            {
              title: '7️⃣ About Us',
              count: '11 items',
              items: ['Company Overview', 'Awards and Recognition', 'Alliances', 'Deep In Digital', 'Our Offices', 'Media'],
            },
          ].map((menu, idx) => (
            <motion.div
              key={menu.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-300 transition"
            >
              <h4 className="text-lg font-bold text-red-400 mb-2">{menu.title}</h4>
              <p className="text-xs text-gray-600 mb-4">{menu.count}</p>
              <ul className="space-y-2">
                {menu.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Button Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-200 rounded-xl p-8 mb-16"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🔴</span> CTA Button
        </h3>
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all">
            Sales Enquiry
          </button>
          <p className="text-gray-600">Prominent call-to-action linking to sales enquiry page</p>
        </div>
      </motion.div>

      {/* Responsive Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-200 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-3xl">📱</span> Responsive Features
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-4">Desktop Experience</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Hover-triggered mega menus</li>
              <li>✓ Smooth animations with Framer Motion</li>
              <li>✓ Multi-column grid layouts</li>
              <li>✓ Promo banners in dropdowns</li>
              <li>✓ Icon-based navigation</li>
              <li>✓ Search functionality</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-4">Mobile Experience</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Hamburger menu toggle</li>
              <li>✓ Expandable sub-menus</li>
              <li>✓ Touch-friendly interactions</li>
              <li>✓ Responsive grid layouts</li>
              <li>✓ Scrollable overflow handling</li>
              <li>✓ Simplified navigation hierarchy</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Top Links', value: '6' },
          { label: 'Main Menus', value: '7' },
          { label: 'Sub-categories', value: '25+' },
          { label: 'Total Items', value: '90+' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
            className="bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/30 rounded-lg p-6 text-center"
          >
            <div className="text-3xl font-black text-red-500 mb-2">{stat.value}</div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
