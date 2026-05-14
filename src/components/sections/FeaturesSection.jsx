import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Expert Team',
      description: 'Our team consists of experienced professionals with deep expertise in various technologies.',
    },
    {
      title: 'Agile Methodology',
      description: 'We follow agile practices to ensure flexibility and rapid delivery of projects.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your business runs smoothly.',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs.',
    },
    {
      title: 'Security First',
      description: 'Industry-leading security practices to protect your data and assets.',
    },
    {
      title: 'Cost Effective',
      description: 'Flexible pricing models that deliver maximum value for your investment.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4">Why Choose Us</span>
          <h2 className="text-5xl font-black text-gray-900">Delivering <span className="text-red-600">Excellence</span></h2>
          <p className="text-gray-600 mt-4">
            We combine innovation, expertise, and dedication to transform your vision into reality
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-red-600 to-red-700 text-white">
                  <FiCheck size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
