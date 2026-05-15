import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiArrowRight } from 'react-icons/fi';

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 23 + 10) % 100}%`,
  duration: 6 + (i % 5),
  delay: (i * 0.4) % 4,
}));

/**
 * Reusable Coming Soon page.
 *
 * Props:
 *   title       — section name shown above the headline (e.g. "Press Releases")
 *   description — optional override for the body text
 *   icon        — optional emoji displayed above the headline
 *   backPath    — where the "Go Back" button links (default "/")
 *   backLabel   — label for the back button (default "Back to Home")
 */
export default function ComingSoon({
  title = 'This Section',
  description,
  icon = '🚀',
  backPath = '/',
  backLabel = 'Back to Home',
}) {
  const body =
    description ??
    `Something exciting is on the way. ${title} is currently under development and will be available soon. Stay tuned for updates.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/40 to-white flex flex-col items-center justify-center relative overflow-hidden px-4 pt-24 pb-20">
      {/* Floating background particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-red-500 opacity-20 pointer-events-none"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -120, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-2xl w-full"
      >
        {/* Animated icon */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl mb-6 select-none"
          aria-hidden="true"
        >
          {icon}
        </motion.div>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-xs font-bold tracking-widest uppercase text-red-500 mb-3"
        >
          {title}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
          className="text-5xl sm:text-6xl font-black text-gray-900 mb-5 leading-tight"
        >
          Coming <span className="text-red-600">Soon</span>
        </motion.h1>

        {/* Animated dots bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
          className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {body}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link
            to={backPath}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gray-100 text-gray-800 font-bold text-sm rounded-full hover:bg-gray-200 transition-all"
          >
            <FiArrowLeft size={15} />
            {backLabel}
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-red-600 text-white font-bold text-sm rounded-full hover:bg-red-700 transition-all"
          >
            <FiMail size={15} />
            Get in Touch
          </Link>
        </motion.div>

        {/* Subtle footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-400"
        >
          <span className="text-red-400 font-black italic">GTS</span>
          <span>·</span>
          <span>Deep in</span>
          <span className="font-black">Digital</span>
          <span>·</span>
          <Link
            to="/"
            className="hover:text-red-500 transition-colors inline-flex items-center gap-1 group"
          >
            Explore our solutions
            <FiArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
