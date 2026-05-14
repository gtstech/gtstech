import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiStar, FiCpu, FiRefreshCw, FiSmartphone, FiSettings, FiZap } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ContactForm from '../components/common/ContactForm'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'

const CustomerCare = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const capabilities = [
    {
      iconComponent: FiStar,
      title: 'VIP & Concierge Support',
      description: 'Deliver high-touch, personalized support for premium customer experiences'
    },
    {
      iconComponent: FiCpu,
      title: 'AI-Enabled Chatbots & Virtual Agents',
      description: 'Automate high-volume interactions while assisting agents in real time'
    },
    {
      iconComponent: FiRefreshCw,
      title: 'Omnichannel Customer Support',
      description: 'Enable seamless interactions across voice, chat, email, social, and messaging'
    },
    {
      iconComponent: FiSmartphone,
      title: 'Social Media Engagement & Response Management',
      description: 'Monitor and respond to customer interactions across digital platforms'
    },
    {
      iconComponent: FiSettings,
      title: 'Tier 1–Tier 4 Technical Support & Helpdesk',
      description: 'Provide structured, multi-level technical assistance and issue resolution'
    }
  ]

  const resources = [
    {
      type: 'Case Study',
      title: 'A Premier International Airfare Travel Platform in North America Improves Customer Experience and NPS Through Omnichannel Transformation',
      link: '#'
    },
    {
      type: 'Whitepaper',
      title: 'Transform into an AI-at-the-Core Contact Center and unlock CXM value',
      link: '#'
    },
    {
      type: 'Webinar',
      title: 'Humanizing the Digital – The AI driven contact centers of the future',
      link: '#',
      video: true,
      duration: '1:05:55'
    },
    {
      type: 'Case Study',
      title: 'A Leading Global Software Provider Increased First Call Resolution to 88% with Omnichannel Support',
      link: '#'
    },
    {
      type: 'Blog',
      title: 'Build Customer Management Practices with Empathy and Responsible AI at the Core',
      link: '#'
    }
  ]

  const faqs = [
    {
      question: 'What are outsourced omnichannel customer care CX services?',
      answer: 'Outsourced omnichannel customer care CX services provide unified customer support across multiple channels including voice, chat, email, social media, and messaging. These services blend human agents with AI-powered automation to deliver consistent, responsive, and personalized customer experiences at scale.'
    },
    {
      question: 'How do outsourced omnichannel contact center solutions improve customer experience?',
      answer: 'Omnichannel solutions ensure seamless transitions between communication channels, reduce wait times, provide personalized interactions based on customer history, and enable faster issue resolution through integrated workflows.'
    },
    {
      question: 'What role do AI-powered agents play in outsourced omnichannel services?',
      answer: 'AI-powered virtual agents handle high-volume routine inquiries instantly, assist human agents with real-time recommendations, provide 24/7 availability, and continuously learn to improve response quality.'
    },
    {
      question: 'Why is outsourced omnichannel customer experience management important?',
      answer: 'It enables organizations to scale customer support efficiently, reduce operational costs, improve customer satisfaction scores, maintain consistent brand experience, and free internal resources to focus on core business activities.'
    },
    {
      question: 'How do outsourced omnichannel services support IT helpdesk and system operations?',
      answer: 'Technical support teams are structured across multiple tiers to handle everything from password resets to complex system issues. AI-enabled ticketing, knowledge bases, and escalation workflows ensure efficient issue resolution.'
    },
    {
      question: 'What is AI-driven outsourced omnichannel customer care?',
      answer: 'AI-driven care uses machine learning to understand customer intent, predict needs, automate responses, and provide agents with real-time insights to deliver more effective and personalized support.'
    },
    {
      question: 'How do social media services fit into outsourced omnichannel customer experience management?',
      answer: 'Social media services include monitoring brand mentions, responding to customer inquiries and complaints, managing reputation, and engaging with customers across platforms like Twitter, Facebook, Instagram, and LinkedIn.'
    },
    {
      question: 'How does data improve outsourced omnichannel services?',
      answer: 'Data analytics provide visibility into customer behavior, identify trends, measure service quality metrics, enable predictive insights, and help optimize operations for better resource allocation.'
    },
    {
      question: 'Who should consider outsourcing omnichannel customer experience management?',
      answer: 'Organizations of all sizes seeking to scale customer support, reduce costs, improve service quality, access specialized expertise, or maintain 24/7 operations should consider outsourced omnichannel services.'
    },
    {
      question: 'How do analytics improve outsourced omnichannel services performance?',
      answer: 'Analytics track key metrics like customer satisfaction, first-contact resolution, average handle time, and sentiment analysis. These insights drive continuous improvement in service delivery and operational efficiency.'
    },
    {
      question: 'What security measures are used in outsourced omnichannel customer care?',
      answer: 'Enterprise-grade security includes end-to-end encryption, PCI-DSS compliance, GDPR adherence, regular security audits, data isolation, access controls, and secure communication protocols.'
    },
    {
      question: 'Why should businesses outsource omnichannel services for customer care?',
      answer: 'Outsourcing provides cost efficiency, access to specialized talent, scalability, advanced technology platforms, compliance expertise, and allows businesses to focus on strategic initiatives while maintaining superior customer support.'
    }
  ]

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Customer Care CX Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Omnichannel Customer Support powered by Super Agents and an AI-driven workforce
            </p>
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl flex items-center justify-center">
              <FiZap className="text-8xl text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-8 leading-relaxed">
              In an always-on, digital-first world, customer expectations extend beyond speed to trust, relevance, and seamless resolution. Datamatics delivers AI-enabled customer care that blends human empathy with intelligent automation to create responsive and consistent support experiences.
            </p>
            <p className="text-base mb-8 leading-relaxed opacity-95">
              Their approach combines omnichannel engagement, virtual agents, and real-time insights to ensure every interaction is efficient, contextual, and personalized — helping organizations improve satisfaction, reduce effort, and scale operations effectively.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              SUBMIT AN INQUIRY
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Care Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Elevate Customer Care with Our Comprehensive CX Management Services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 text-red-600">{React.createElement(capability.iconComponent)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-16 text-center"
          >
            Resources
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                    {resource.type}
                  </span>
                  {resource.video && (
                    <span className="text-xs text-gray-500">
                      {resource.duration}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {resource.title}
                </h3>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={resource.link}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {resource.video ? 'Watch Now →' : 'Read More →'}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <FiChevronUp className="flex-shrink-0 ml-4" />
                  ) : (
                    <FiChevronDown className="flex-shrink-0 ml-4" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white border-t border-gray-200"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request for Service Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Request For Service
            </h2>
            <p className="text-lg text-gray-600">
              Request Customized Customer Care CXM Services for Your Business Today
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Job Function*
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select Job Function</option>
                    <option>C-Suite</option>
                    <option>Finance & Accounting</option>
                    <option>HR</option>
                    <option>Legal</option>
                    <option>Sales & Marketing</option>
                    <option>Supply Chain</option>
                    <option>Technology</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Country*
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select Country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message*
                </label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  By submitting this form, you agree to receive marketing communications from Datamatics. For more information, please see our <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                SUBMIT REQUEST
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CustomerCare
