import { motion } from 'framer-motion';

export default function LogoCarousel() {
  const logos = [
    'GateGourmet',
    'Excite Credit',
    'Edelweiss',
    'ECU Worldwide',
    'Dubai Bank',
    'Donegal Insurance',
    'DHL',
    'Danube Group',
    'ChainIQ',
    'Global Tech',
    'Digital First',
    'Enterprise Solutions',
    'Cloud Innovations',
    'Data Analytics',
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted by 300+ Global Enterprises
          </h2>

          {/* Divider line with fade effect */}
          <div className="h-1 max-w-xs mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #1a1a2e, transparent)'
            }}
          />
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% / 2)); }
            }
            .logo-carousel {
              display: flex;
              animation: scroll-left 30s linear infinite;
            }
            .logo-carousel:hover {
              animation-play-state: paused;
            }
            .logo-item {
              flex-shrink: 0;
              width: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>

          <div className="overflow-hidden">
            <div className="logo-carousel">
              {/* First set */}
              {logos.map((logo, idx) => (
                <div key={idx} className="logo-item">
                  <div className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:border-red-600 hover:bg-red-50 transition-all text-center cursor-pointer">
                    <span className="text-sm font-bold text-gray-700 hover:text-red-600 transition">
                      {logo}
                    </span>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {logos.map((logo, idx) => (
                <div key={`dup-${idx}`} className="logo-item">
                  <div className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:border-red-600 hover:bg-red-50 transition-all text-center cursor-pointer">
                    <span className="text-sm font-bold text-gray-700 hover:text-red-600 transition">
                      {logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
