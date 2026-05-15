import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';

// ─── Unified navigation data ────────────────────────────────────────────────
const NAV = [
  {
    name: 'Technologies',
    id: 'technologies',
    cols: 3,
    categories: [
      {
        title: 'GTS Techs.AI',
        items: [],
        link: '/technologies/datamatics-ai',
        badge: 'Direct',
      },
      {
        title: 'Enterprise Platforms',
        items: [
          { label: 'Salesforce', path: '/technologies/salesforce' },
          { label: 'Microsoft', path: '/technologies/microsoft' },
          { label: 'Amazon Web Services (AWS)', path: '/technologies/aws' },
          { label: 'OutSystems', path: '/technologies/outsystems' },
        ],
        link: '/technologies/enterprise-platforms',
      },
      {
        title: 'Digital Transformation',
        items: [
          { label: 'Artificial Intelligence', path: '/technologies/artificial-intelligence' },
          { label: 'Data & Analytics', path: '/technologies/data-analytics' },
          { label: 'Cloud', path: '/technologies/cloud' },
          { label: 'Applications', path: '/technologies/applications' },
          { label: 'Hyper-Automation', path: '/technologies/hyper-automation' },
          { label: 'Product Engineering', path: '/technologies/product-engineering' },
          { label: 'CRM', path: '/technologies/crm' },
          { label: 'Enterprise Content Management', path: '/technologies/ecm' },
          { label: 'Professional Services', path: '/technologies/professional-services' },
        ],
        link: '/technologies/digital-transformation',
      },
      {
        title: 'Digital Assurance',
        items: [
          { label: 'Managed Services', path: '/technologies/managed-services' },
          { label: 'Testing & QA', path: '/technologies/testing' },
        ],
        link: '/technologies/digital-assurance',
      },
      {
        title: 'Automatic Fare Collection',
        items: [],
        link: '/technologies/automatic-fare-collection',
        badge: 'Direct',
      },
    ],
    footer: {
      icon: '🚀',
      text: 'Start Your AI Journey with Top Agentic AI Use Cases',
      path: '/technologies/datamatics-ai',
    },
  },
  {
    name: 'Operations',
    id: 'operations',
    cols: 2,
    categories: [
      {
        title: 'Digital Finance',
        items: [
          { label: 'Finance & Accounting', path: '/operations/finance-accounting' },
          { label: 'Banking Process Management', path: '/operations/banking-process' },
          { label: 'Insurance Process Management', path: '/operations/insurance-process' },
          { label: 'Healthcare Process Management', path: '/operations/healthcare-process' },
        ],
        link: '/operations/digital-finance',
      },
      {
        title: 'Automation',
        items: [
          { label: 'Intelligent Automation Platform', path: '/operations/intelligent-automation' },
          { label: 'TruBot – RPA Solution', path: '/products/trubot' },
          { label: 'TruCap+ – IDP Solution', path: '/products/trucap' },
          { label: 'TruAgent – AI Agents', path: '/products/truagent' },
        ],
        link: '/operations/automation',
      },
      {
        title: 'GTS FINATO',
        subtitle: 'AI-powered Finance Transformation',
        items: [
          { label: 'Procure-to-Pay (P2P)', path: '/operations/procure-to-pay' },
          { label: 'Order-to-Cash (O2C)', path: '/operations/order-to-cash' },
          { label: 'Record-to-Report (R2R)', path: '/operations/record-to-report' },
          { label: 'Financial Planning & Analysis (FP&A)', path: '/operations/fpa' },
        ],
        link: '/operations/finato',
      },
      {
        title: 'Digital Content',
        items: [],
        link: '/operations/digital-content',
        badge: 'Direct',
      },
    ],
    footer: {
      icon: '⭐',
      text: 'Consistently Ranked Among Top 10 Global Vendors for Finance & Accounting Transformation',
      path: '/operations/digital-finance',
    },
  },
  {
    name: 'Experiences',
    id: 'experiences',
    cols: 2,
    categories: [
      {
        title: 'Contact Center Transformation',
        items: [
          { label: 'Customer Care', path: '/experiences/customer-care' },
          { label: 'Customer Loyalty Management', path: '/experiences/customer-loyalty' },
          { label: 'Trust and Safety', path: '/experiences/trust-and-safety' },
          { label: 'Customer Analytics', path: '/experiences/customer-analytics' },
          { label: 'Customer Management Consulting', path: '/experiences/customer-consulting' },
        ],
        link: '/experiences/contact-center',
      },
      {
        title: 'Digital Proctoring',
        items: [],
        link: '/experiences/digital-proctoring',
        badge: 'Direct',
      },
      {
        title: 'Research & Analytics',
        items: [
          { label: 'XM Consulting', path: '/experiences/xm-consulting' },
          { label: 'GCC for Market Research', path: '/experiences/gcc' },
          { label: 'Research Technology', path: '/experiences/research-technology' },
        ],
        link: '/experiences/research-analytics',
      },
      {
        title: 'SuperCX Platform',
        items: [],
        link: '/products/supercx',
        badge: 'Direct',
      },
    ],
    footer: {
      icon: '🤖',
      text: 'GTS SuperCX — AI-Powered Agents for Omni-channel Control Centers',
      path: '/products/supercx',
    },
  },
  {
    name: 'Products',
    id: 'products',
    cols: 2,
    categories: [
      {
        title: 'RPA & Intelligent Automation',
        items: [
          { label: 'TruBot — Robotic Process Automation', path: '/products/trubot' },
          { label: 'TruCap+ — Intelligent Document Processing', path: '/products/trucap' },
          { label: 'TruAgent — AI Agents', path: '/products/truagent' },
        ],
        link: '/products',
      },
      {
        title: 'Analytics & Intelligence',
        items: [
          { label: 'TruBI — Business Intelligence', path: '/products/trubi' },
          { label: 'TruAI Underwriting', path: '/products/truai-underwriting' },
          { label: 'TruDiscovery', path: '/products/trudiscovery' },
        ],
        link: '/products',
      },
      {
        title: 'Customer Experience',
        items: [
          { label: 'SuperCX — Omnichannel CX Platform', path: '/products/supercx' },
        ],
        link: '/products/supercx',
        badge: 'Direct',
      },
      {
        title: 'Finance Transformation',
        items: [
          { label: 'FINATO — CFO Backoffice Platform', path: '/products/finato' },
        ],
        link: '/products/finato',
        badge: 'Direct',
      },
    ],
    footer: {
      icon: '✨',
      text: 'Explore Our Complete Product Portfolio',
      path: '/products',
    },
  },
  {
    name: 'Industries',
    id: 'industries',
    cols: 4,
    categories: [
      {
        title: 'Banking & Finance',
        items: [
          { label: 'Banking & Financial Services', path: '/industries/banking-financial-services' },
          { label: 'Insurance', path: '/industries/insurance' },
          { label: 'Credit Rating', path: '/industries/credit-rating' },
        ],
        link: '/industries/banking-financial-services',
      },
      {
        title: 'Enterprise & Industrial',
        items: [
          { label: 'Manufacturing', path: '/industries/manufacturing' },
          { label: 'Logistics', path: '/industries/logistics' },
          { label: 'Technology', path: '/industries/technology' },
        ],
        link: '/industries/manufacturing',
      },
      {
        title: 'Healthcare & Public Sector',
        items: [
          { label: 'Healthcare', path: '/industries/healthcare' },
          { label: 'International Organisations', path: '/industries/international-organisations' },
          { label: 'Education', path: '/industries/education' },
        ],
        link: '/industries/healthcare',
      },
      {
        title: 'Commerce & Research',
        items: [
          { label: 'Travel & Hospitality', path: '/industries/travel-hospitality' },
          { label: 'Retail', path: '/industries/retail' },
          { label: 'Market Research', path: '/industries/market-research' },
        ],
        link: '/industries/travel-hospitality',
      },
    ],
    footer: {
      icon: '🌍',
      text: 'Industry-Specific Digital Transformation — Explore All Industries',
      path: '/industries',
    },
  },
  {
    name: 'Resources',
    id: 'resources',
    cols: 4,
    categories: [
      {
        title: 'Topics',
        items: [
          { label: 'Artificial Intelligence', path: '/resources/topics/ai' },
          { label: 'Digital Finance & Accounting', path: '/resources/topics/digital-finance' },
          { label: 'Intelligent Automation', path: '/resources/topics/intelligent-automation' },
          { label: 'Enterprise Content Management', path: '/resources/topics/ecm' },
          { label: 'Robotic Process Automation', path: '/resources/topics/rpa' },
          { label: 'Automatic Fare Collection', path: '/resources/topics/afc' },
        ],
        link: '/resources',
      },
      {
        title: 'More Topics',
        items: [
          { label: 'Big Data & Analytics', path: '/resources/topics/big-data' },
          { label: 'Salesforce', path: '/resources/topics/salesforce' },
          { label: 'Product Engineering', path: '/resources/topics/product-engineering' },
          { label: 'Customer Experience', path: '/resources/topics/cx' },
          { label: 'Research & Analytics', path: '/resources/topics/research-analytics' },
        ],
        link: '/resources',
      },
      {
        title: 'Content Types',
        items: [
          { label: 'Case Studies', path: '/resources/case-studies' },
          { label: 'White Papers', path: '/resources/whitepapers' },
          { label: 'Webinars', path: '/resources/webinars' },
          { label: 'Analyst Reports', path: '/resources/analyst-reports' },
          { label: 'Thoughtcast', path: '/resources/thoughtcast' },
        ],
        link: '/resources',
      },
      {
        title: 'More Content',
        items: [
          { label: 'Blogs', path: '/resources/blogs' },
          { label: 'Demos', path: '/resources/demos' },
          { label: 'Brochures', path: '/resources/brochures' },
          { label: 'Infographics', path: '/resources/infographics' },
          { label: 'Newsletters', path: '/resources/newsletters' },
        ],
        link: '/resources',
      },
    ],
    footer: {
      icon: '🚀',
      text: 'Explore Agentic AI Use Cases and Research',
      path: '/resources/topics/ai',
    },
  },
  {
    name: 'About Us',
    id: 'aboutus',
    cols: 3,
    categories: [
      {
        title: 'Company',
        items: [
          { label: 'Company Overview', path: '/about/company-overview' },
          { label: 'Deep In Digital', path: '/about/deep-in-digital' },
          { label: 'Corporate Social Responsibility', path: '/about/csr' },
          { label: 'Environmental Social Governance (ESG)', path: '/about/esg' },
        ],
        link: '/about',
      },
      {
        title: 'People & Culture',
        items: [
          { label: 'Leadership', path: '/about/leadership' },
          { label: 'DataLabs', path: '/about/datalabs' },
          { label: 'Awards and Recognition', path: '/about/awards' },
          { label: 'Alliances', path: '/about/alliances' },
          { label: 'Careers', path: '/careers' },
        ],
        link: '/about/leadership',
      },
      {
        title: 'Global Presence',
        items: [
          { label: 'Our Offices', path: '/about/offices' },
          { label: 'Customer Testimonials', path: '/about/testimonials' },
          { label: 'Media', path: '/resources/media' },
          { label: 'Contact Us', path: '/contact' },
        ],
        link: '/about/offices',
      },
    ],
    footer: {
      icon: '🎉',
      text: 'GTS Techs 50-Year Journey — An Entirely AI-Generated Experience',
      path: '/about',
    },
  },
];

// ─── Framer Motion variants ──────────────────────────────────────────────────
const panelVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: 'easeOut', staggerChildren: 0.05, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.12 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

// ─── Helper: grid column class ───────────────────────────────────────────────
function gridClass(cols) {
  const map = {
    2: 'grid-cols-2 lg:grid-cols-2',
    3: 'grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  };
  return map[cols] ?? 'grid-cols-2 lg:grid-cols-3';
}

// ─── Main Header component ───────────────────────────────────────────────────
export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeNav = NAV.find((n) => n.id === openDropdown) ?? null;
  const close = () => setOpenDropdown(null);

  return (
    <>
      {/* ── Main Header + Mega Menu (single fixed block) ────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
          isSticky ? 'shadow-md' : ''
        }`}
        onMouseLeave={close}
      >
        {/* Nav bar row */}
        <div className="h-16 border-b border-gray-100">
          <nav className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="font-black text-2xl text-red-600 hover:opacity-80 transition whitespace-nowrap"
            >
              GTS Tech and Infra Solutions
            </Link>

            {/* Desktop nav buttons */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setOpenDropdown(item.id)}
                  className={`px-3 py-2 text-xs font-bold rounded-md flex items-center gap-1 transition-all ${
                    openDropdown === item.id
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50/50'
                  }`}
                >
                  {item.name}
                  <FiChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
                <Link
                  to="/contact"
                  className="px-5 py-2 bg-red-600 text-white font-bold text-xs rounded-full hover:bg-red-700 transition-all"
                >
                  SALES ENQUIRY
                </Link>
              </motion.div>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-red-600 hover:bg-red-50"
              >
                {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </nav>
        </div>

        {/* ── Desktop Full-Screen Mega Menu Panel ─────────────────────── */}
        <AnimatePresence mode="wait">
          {openDropdown && activeNav && (
            <motion.div
              key={openDropdown}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl overflow-hidden hidden lg:block"
            >
              {/* Categories grid */}
              <div className="max-w-7xl mx-auto px-8 py-8">
                <div className={`grid ${gridClass(activeNav.cols)} gap-x-8 gap-y-6`}>
                  {activeNav.categories.map((cat) => (
                    <motion.div key={cat.title} variants={colVariants} className="group">
                      {/* Category title */}
                      <h3 className="text-gray-900 font-bold text-sm mb-3 flex items-center gap-2">
                        {cat.title}
                        {cat.badge && (
                          <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">
                            {cat.badge}
                          </span>
                        )}
                      </h3>

                      {/* Optional subtitle */}
                      {cat.subtitle && (
                        <p className="text-xs text-gray-500 -mt-2 mb-2">{cat.subtitle}</p>
                      )}

                      {/* Items list */}
                      {cat.items.length > 0 && (
                        <ul className="space-y-1.5 mb-3">
                          {cat.items.map((link) => (
                            <li key={link.path}>
                              <Link
                                to={link.path}
                                onClick={close}
                                className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors group/item"
                              >
                                <span className="w-0 group-hover/item:w-2 h-0.5 bg-red-600 transition-all mr-0 group-hover/item:mr-1.5 rounded" />
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Learn More link */}
                      <Link
                        to={cat.link}
                        onClick={close}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-700 hover:gap-2 transition-all"
                      >
                        Learn More <FiArrowRight size={12} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer promo strip */}
              {activeNav.footer && (
                <div className="bg-gradient-to-r from-red-50 to-transparent border-t border-gray-100 px-8 py-4">
                  <Link
                    to={activeNav.footer.path}
                    onClick={close}
                    className="text-sm text-gray-700 hover:text-red-600 transition flex items-center gap-2 group max-w-7xl mx-auto"
                  >
                    <span className="text-red-500 text-base">{activeNav.footer.icon}</span>
                    {activeNav.footer.text}
                    <FiArrowRight
                      size={14}
                      className="ml-auto group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile Menu ─────────────────────────────────────────────── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="max-h-[calc(100vh-104px)] overflow-y-auto divide-y divide-gray-100">
                {NAV.map((item) => (
                  <MobileSection
                    key={item.id}
                    item={item}
                    onClose={() => setIsMobileOpen(false)}
                  />
                ))}
                <div className="p-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="block w-full text-center px-5 py-2.5 bg-red-600 text-white font-bold text-sm rounded-full hover:bg-red-700 transition-all"
                  >
                    SALES ENQUIRY
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Page overlay (dims content behind open mega menu) ───────────── */}
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 top-16 bg-black/10 z-30 hidden lg:block"
            onClick={close}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Mobile accordion section ────────────────────────────────────────────────
function MobileSection({ item, onClose }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-gray-700 hover:text-red-600 hover:bg-red-50/40 transition-all text-sm font-bold"
      >
        {item.name}
        <FiChevronDown
          size={14}
          className={`transition-transform duration-200 ${expanded ? 'rotate-180 text-red-600' : ''}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 bg-gray-50/60 border-l-2 border-red-200 ml-4 space-y-4">
              {item.categories.map((cat) => (
                <div key={cat.title} className="pt-3">
                  <h4 className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">
                    {cat.title}
                  </h4>

                  {cat.items.length > 0 && (
                    <ul className="space-y-2 mb-2">
                      {cat.items.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            onClick={onClose}
                            className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-0.5"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to={cat.link}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-700 transition-colors"
                  >
                    View All <FiArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
