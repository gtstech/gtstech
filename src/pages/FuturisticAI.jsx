import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ScrollToTop from '../components/common/ScrollToTop';
import { Helmet } from 'react-helmet';

// Hero Section
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white relative overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: Math.sin(i) * 50,
              opacity: [0.3, 0.6, 0.3],
            }}
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

      {/* Radial Glow */}
      <div
        className="absolute w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-red-600 bg-red-100 backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)' }}
          >
            <span className="text-red-600 text-sm font-semibold">The Future of AI is Now</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-gray-900 leading-tight"
          >
            Next-Generation
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text">
              AI Platform
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience cutting-edge artificial intelligence with a futuristic interface designed for the next era of technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 0, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-shadow"
            >
              Get Started <FiArrowRight className="text-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-red-600 text-red-400 font-bold rounded-lg flex items-center justify-center gap-2 bg-red-600/5 backdrop-blur-sm hover:bg-red-600/10 transition-all"
            >
              <FiPlay className="text-lg" /> Watch Demo
            </motion.button>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="bg-gradient-to-b from-red-100/50 to-transparent border border-red-200 rounded-2xl p-2 backdrop-blur-sm overflow-hidden group">
              <div className="bg-white rounded-lg p-6 md:p-12">
                {/* Simulated Dashboard */}
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600/60"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600/30"></div>
                  </div>
                  <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-2 bg-gradient-to-r from-red-600/30 to-transparent rounded"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect behind mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400/30 to-red-300/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: 'Neural Intelligence',
      description: 'Advanced AI algorithms trained on cutting-edge neural networks',
      icon: '🧠',
    },
    {
      title: 'Real-time Analytics',
      description: 'Instant insights with live data processing and visualization',
      icon: '📊',
    },
    {
      title: 'Automation Engine',
      description: 'Automate complex workflows with intelligent task management',
      icon: '⚙️',
    },
    {
      title: 'Predictive Models',
      description: 'Forecast trends and outcomes with machine learning precision',
      icon: '🔮',
    },
    {
      title: 'Smart Security',
      description: 'Enterprise-grade security with AI-powered threat detection',
      icon: '🛡️',
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with existing enterprise systems',
      icon: '🔗',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a0000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Powerful <span className="text-red-500">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build the future with advanced AI capabilities
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-100/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 transition-all duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Image Showcase Section
const ImageShowcaseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Product <span className="text-red-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">Explore our cutting-edge AI interface</p>
        </motion.div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-red-100/50 to-red-50/50 border border-red-200 flex items-center justify-center">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">
                      {i % 2 === 0 ? '🖼️' : '📸'}
                    </div>
                    <p className="text-gray-600">Screenshot Placeholder {i + 1}</p>
                    <p className="text-xs text-gray-500 mt-2">1200 x 675px</p>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400/0 via-red-400/20 to-red-400/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden border border-red-200"
          >
            <div className="w-full h-full bg-gradient-to-br from-red-100/50 to-red-50/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">🎨</div>
                <p className="text-gray-600">AI Dashboard</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden border border-red-200"
          >
            <div className="w-full h-full bg-gradient-to-br from-red-100/50 to-red-50/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">📊</div>
                <p className="text-gray-600">Analytics Hub</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Statistics Section
const StatisticsSection = () => {
  const stats = [
    { label: 'Active Users', value: 250, suffix: 'K+' },
    { label: 'AI Models', value: 150, suffix: '+' },
    { label: 'Processing Speed', value: 99, suffix: '%' },
    { label: 'Uptime', value: 99, suffix: '.9%' },
  ];

  const CounterValue = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const timer = setInterval(() => {
        start += target / 50;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }, [target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a0000] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">
                <CounterValue target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechVenture',
      content: 'This platform transformed our AI capabilities. The interface is stunning and the results speak for themselves.',
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO, InnovateLabs',
      content: 'The best AI SaaS platform we\'ve used. Seamless integration and incredible performance metrics.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Director, FutureTech',
      content: 'Revolutionary approach to AI. The futuristic design matches the cutting-edge technology underneath.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-gray-900 text-center mb-16"
        >
          Trusted by <span className="text-red-500">Industry Leaders</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white border-2 border-red-200 rounded-2xl p-8 hover:border-red-300 transition-all duration-300 backdrop-blur-sm">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-gray-600 mb-6 text-lg">{testimonial.content}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-red-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-300/20 to-red-200/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for getting started',
      features: ['Up to 10K API calls', 'Basic AI models', 'Email support', 'Dashboard access'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$99',
      description: 'For growing teams',
      features: ['Up to 100K API calls', 'Advanced AI models', 'Priority support', 'Custom integrations', 'Analytics'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large scale',
      features: ['Unlimited API calls', 'All AI models', '24/7 support', 'Dedicated account', 'SLA guarantee'],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a0000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Simple <span className="text-red-500">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">Choose the plan that fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative ${plan.popular ? 'md:scale-105' : ''}`}
            >
              <div className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-red-100/50 to-red-50/50 border-2 border-red-600'
                  : 'bg-white border border-gray-200 hover:border-red-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-sm font-bold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-red-600">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                      : 'border border-red-600 text-red-400 hover:bg-red-600/10'
                  }`}
                >
                  Get Started
                </motion.button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="text-red-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400/30 to-red-300/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              <span className="text-red-600">AI</span>Future
            </h3>
            <p className="text-gray-600">The next generation of AI technology</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-gray-900 font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition">Features</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Security</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-gray-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition">About</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Blog</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Careers</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-gray-900 font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Terms</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500">© 2026 AIFuture. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { Icon: FaGithub, label: 'GitHub' },
              { Icon: FaTwitter, label: 'Twitter' },
              { Icon: FaLinkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, color: '#dc2626' }}
                className="text-gray-600 hover:text-red-600 transition text-2xl"
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Gradient Line */}
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  );
};

// Main Page
export default function FuturisticAI() {
  return (
    <>
      <Helmet>
        <title>AIFuture - Next-Generation AI Platform | Premium SaaS</title>
        <meta name="description" content="Experience cutting-edge artificial intelligence with a futuristic interface designed for the next era of technology." />
        <meta name="theme-color" content="#0a0a0a" />
        <html style={{ scrollBehavior: 'smooth' }} />
      </Helmet>
      <div className="overflow-hidden bg-white">
        <HeroSection />
        <FeaturesSection />
        <ImageShowcaseSection />
        <StatisticsSection />
        <TestimonialsSection />
        <PricingSection />
        <FooterSection />
        <ScrollToTop />
      </div>
    </>
  );
}
