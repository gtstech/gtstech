import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
  ];

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
    products: [
      { name: 'TruBot', path: '#' },
      { name: 'TruCap+', path: '#' },
      { name: 'TruBI', path: '#' },
      { name: 'TruAI Underwriting', path: '#' },
      { name: 'TruDiscovery', path: '#' },
    ],
    resources: [
      { name: 'Case Studies', path: '#' },
      { name: 'White Papers', path: '#' },
      { name: 'Product Demos', path: '#' },
      { name: 'Blog', path: '#' },
      { name: 'Webinars', path: '#' },
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

            {/* Stay Updated Section */}
            <p className="text-gray-300 text-sm font-bold mb-3">Stay updated with GTS Techs</p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-red-600 transition-all"
                  whileHover={{ scale: 1.1 }}
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* E-waste Policy Link */}
            <Link to="#" className="text-xs text-gray-500 hover:text-red-400 transition">
              GTS Techs e-waste management policy
            </Link>
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

        {/* Second Row - Products & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 ml-0 lg:ml-[calc(66.666% + 3rem)]">
          {[
            { title: 'PRODUCTS', links: sections.products },
            { title: 'RESOURCES', links: sections.resources },
          ].map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + 0.1 * idx }}
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
            {['Data Protection Policy', 'Privacy Policy', 'Terms of Use', 'Media', 'Contact Us'].map((link, idx, arr) => (
              <div key={link} className="flex items-center gap-4">
                <Link to="#" className="hover:text-red-400 transition">
                  {link}
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
