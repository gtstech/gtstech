import { motion } from 'framer-motion';

export default function CoreSolutionsSection() {
  const solutions = [
    {
      title: 'Technology',
      description: 'We architect the high-speed, enterprise-grade digital platforms you need to win. By embedding AI at the core and leveraging advanced accelerators to drive innovation across your business.',
      links: [
        { text: 'Datamatics.AI', href: '#' },
        { text: 'Enterprise Platforms', href: '#' },
        { text: 'Digital Transformation', href: '#' },
        { text: 'Digital Assurance', href: '#' },
        { text: 'Automatic Fare Collection', href: '#' },
      ],
      icon: '⚙️',
    },
    {
      title: 'Operations',
      description: 'Back-office operations are not just cost centers; they are the engine for enterprise agility and growth. We optimize every process with automation and AI.',
      links: [
        { text: 'Digital Finance', href: '#' },
        { text: 'Automation', href: '#' },
        { text: 'FINATO AI-powered Platform', href: '#' },
        { text: 'Process Optimization', href: '#' },
      ],
      icon: '🔧',
    },
    {
      title: 'Experiences',
      description: 'Every customer interaction is more than a transaction; it\'s a strategic asset in the making. Transform how customers engage with your brand.',
      links: [
        { text: 'Contact Center Transformation', href: '#' },
        { text: 'Research & Analytics', href: '#' },
        { text: 'Digital Proctoring', href: '#' },
        { text: 'Customer Experience Design', href: '#' },
      ],
      icon: '💡',
    },
  ];

  // Icon as SVG
  const TechIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" stroke="#CC0000" strokeWidth="2"/>
      <path d="M15 15H25V25H15V15Z" stroke="#CC0000" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="20" r="4" fill="#CC0000"/>
    </svg>
  );

  const OpsIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" stroke="#CC0000" strokeWidth="2"/>
      <circle cx="14" cy="14" r="3" fill="#CC0000"/>
      <circle cx="26" cy="14" r="3" fill="#CC0000"/>
      <circle cx="14" cy="26" r="3" fill="#CC0000"/>
      <circle cx="26" cy="26" r="3" fill="#CC0000"/>
      <path d="M14 14L26 26M26 14L14 26" stroke="#CC0000" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );

  const ExpIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" stroke="#CC0000" strokeWidth="2"/>
      <path d="M20 12V28M12 20H28" stroke="#CC0000" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="6" fill="none" stroke="#CC0000" strokeWidth="1.5"/>
    </svg>
  );

  const icons = [TechIcon, OpsIcon, ExpIcon];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Drive Your Business Forward with Our Core Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We empower enterprises to go Deep in Digital, driving growth and efficiency through our comprehensive Technology, Operations, and Experiences offerings.
          </p>
        </motion.div>

        {/* Three Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((solution, idx) => {
            const IconComponent = icons[idx];
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-300 hover:shadow-lg transition-all">
                  {/* Icon */}
                  <div className="mb-6">
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Links */}
                  <ul className="space-y-3">
                    {solution.links.map((link, linkIdx) => (
                      <motion.li
                        key={linkIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + linkIdx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <a href={link.href} className="text-red-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all group/link">
                          {link.text}
                          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
