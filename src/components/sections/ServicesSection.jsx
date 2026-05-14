import { motion } from 'framer-motion';
import {
  FiCode,
  FiSmartphone,
  FiCloud,
  FiZap,
  FiBarChart,
  FiEdit3,
  FiRefreshCw,
  FiBriefcase,
} from 'react-icons/fi';
import ServiceCard from '../common/ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Modern, responsive, and scalable web applications built with the latest technologies.',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions that engage your users.',
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure and migration services.',
    },
    {
      icon: FiZap,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
    },
    {
      icon: FiBarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for business growth.',
    },
    {
      icon: FiEdit3,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences that delight your customers.',
    },
    {
      icon: FiRefreshCw,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge digital solutions.',
    },
    {
      icon: FiBriefcase,
      title: 'IT Consulting',
      description: 'Strategic guidance to align technology with your business goals.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Our Services</span>
          <h2 className="section-title">Comprehensive IT Solutions</h2>
          <p className="section-subtitle">
            We offer a wide range of services to meet your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
