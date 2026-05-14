import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function TopBar() {
  const topLinks = [
    { name: 'Deep in Digital', path: '/about-us/deep-in-digital' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press Releases', path: '/press-release-list' },
    { name: 'Events', path: '/events' },
    { name: 'Investors', path: '/about-us/investor-relations' },
    { name: 'Contact Us', path: '/get-in-touch' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-xs sm:text-sm">
        {/* Left Links */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
          {topLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 hover:text-red-600 transition whitespace-nowrap text-xs sm:text-sm"
            >
              {link.name}
              {idx < topLinks.length - 1 && <span className="hidden sm:inline text-gray-300 ml-2">•</span>}
            </Link>
          ))}
        </div>

        {/* Search Icon */}
        <button className="ml-4 p-1 text-gray-600 hover:text-red-600 transition">
          <FiSearch size={16} />
        </button>
      </div>
    </div>
  );
}
