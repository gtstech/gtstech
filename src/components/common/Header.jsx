import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';
import TechnologiesDropdown from './dropdowns/TechnologiesDropdown';
import OperationsDropdown from './dropdowns/OperationsDropdown';
import ExperiencesDropdown from './dropdowns/ExperiencesDropdown';
import ProductsDropdown from './dropdowns/ProductsDropdown';
import IndustriesDropdown from './dropdowns/IndustriesDropdown';
import ResourcesDropdown from './dropdowns/ResourcesDropdown';
import AboutUsDropdown from './dropdowns/AboutUsDropdown';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavigation = [
    { name: 'Technologies', id: 'technologies', component: TechnologiesDropdown },
    { name: 'Operations', id: 'operations', component: OperationsDropdown },
    { name: 'Experiences', id: 'experiences', component: ExperiencesDropdown },
    { name: 'Products', id: 'products', component: ProductsDropdown },
    { name: 'Industries', id: 'industries', component: IndustriesDropdown },
    { name: 'Resources', id: 'resources', component: ResourcesDropdown },
    { name: 'About Us', id: 'aboutus', component: AboutUsDropdown },
  ];

  return (
    <>
      {/* SECTION 1 - Top Utility Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-10">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 text-xs">
          {/* Left: Deep in Digital */}
          <span className="hidden sm:inline text-red-600 italic font-bold">
            Deep in <span className="font-black">Digital</span>
          </span>

          {/* Center: Links with pipes */}
          <div className="flex-1 flex justify-center gap-2 text-gray-600 hidden md:flex">
            {[
              { name: 'Careers', path: '/careers' },
              { name: 'Press Releases', path: '/coming-soon' },
              { name: 'Events', path: '/coming-soon' },
              { name: 'Investors', path: '/coming-soon' },
              { name: 'Contact Us', path: '/contact' }
            ].map((link, i, arr) => (
              <div key={link.name} className="flex items-center gap-2">
                <Link to={link.path} className="hover:text-red-600 transition">
                  {link.name}
                </Link>
                {i < arr.length - 1 && <span className="text-gray-300">|</span>}
              </div>
            ))}
          </div>

          {/* Right: Search icon */}
          <button className="text-gray-600 hover:text-red-600 transition">
            <FiSearch size={14} />
          </button>
        </div>
      </div>

      {/* SECTION 2 - Main Navigation Bar */}
      <header
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 h-16 ${
          isSticky
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
          {/* Logo - GTS Tech and Infra Solutions in Red */}
          <Link to="/" className="font-black text-2xl text-red-600 hover:opacity-80 transition whitespace-nowrap">
           GTS Tech and Infra Solutions
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {mainNavigation.map((item) => {
              const DropdownComponent = item.component;
              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-3 py-2 text-xs font-bold text-gray-700 hover:text-red-600 transition-all flex items-center gap-1">
                    {item.name}
                    <FiChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.id && (
                      <DropdownComponent onClose={() => setOpenDropdown(null)} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
              <Link
                to="/contact"
                className="px-5 py-2 bg-red-600 text-white font-bold text-xs rounded-full hover:bg-red-700 transition-all"
              >
                SALES ENQUIRY
              </Link>
            </motion.div>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-red-600 hover:bg-red-50"
            >
              {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                {mainNavigation.map((item) => (
                  <MobileNavItem key={item.id} item={item} onClose={() => setIsMobileOpen(false)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function MobileNavItem({ item, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const DropdownComponent = item.component;

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-red-600 rounded-lg transition-all text-sm"
      >
        <span className="font-bold">{item.name}</span>
        <FiChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 border-l-2 border-red-300 ml-3"
          >
            <div className="p-3">
              <DropdownComponent isMobile onClose={onClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
