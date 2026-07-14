import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = {
    technologies: [
      { name: 'AI & Automation', path: '#' },
      { name: 'Cloud Solutions', path: '#' },
      { name: 'Digital Transformation', path: '#' },
      { name: 'Enterprise Platforms', path: '#' },
    ],
    operations: [
      { name: 'Digital Finance', path: '#' },
      { name: 'Automation Services', path: '#' },
      { name: 'Back-Office Operations', path: '#' },
      { name: 'Process Optimization', path: '#' },
    ],
    experiences: [
      { name: 'Contact Center Transformation', path: '#' },
      { name: 'Digital Proctoring', path: '#' },
      { name: 'Research & Analytics', path: '#' },
      { name: 'Customer Experience', path: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {/* Left Column - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-black text-white mb-2">GTS TECHS</h2>
            <p className="text-sm font-semibold text-gray-400 mb-4">
              GTS Tech and Infra Solutions Limited
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              GTS Techs is a Digital Technologies, Operations, and Experiences company that enables enterprises to go Deep in Digital to boost their productivity, customer experience, and competitive advantage.
            </p>
          </motion.div>

          {/* Right Columns - Link Sections */}
          {[
            { title: 'TECHNOLOGIES', links: sections.technologies },
            { title: 'OPERATIONS', links: sections.operations },
            { title: 'EXPERIENCES', links: sections.experiences },
          ].map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              className="text-sm"
            >
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            Copyright © {currentYear} GTS Techs Global Services Limited. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            {[
              { label: 'Privacy Policy', to: '/legal/privacy' },
              { label: 'Terms of Use', to: '/legal/terms' },
              { label: 'Contact Us', to: '/contact' },
            ].map((link, idx, arr) => (
              <div key={link.label} className="flex items-center gap-4">
                <Link to={link.to} className="hover:text-red-400 transition">
                  {link.label}
                </Link>
                {idx < arr.length - 1 && <span className="text-gray-700">|</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
