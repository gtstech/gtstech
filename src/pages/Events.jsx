import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiMapPin, FiClock, FiArrowRight, FiTarget, FiBarChart2, FiGlobe } from 'react-icons/fi';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI + Human Agents: Transforming Customer Experience in Digital Banking',
      date: '21st May 2026',
      time: '9:30 PM IST | 12:00 PM EST | 4:30 PM GMT',
      location: 'Zoom | Virtual, Global',
      type: 'Webinar',
      description: 'Learn how businesses can combine AI precision with human expertise to improve customer interactions, automate workflows, and deliver seamless digital experiences.',
      iconComponent: FiTarget,
    },
    {
      id: 2,
      title: 'Is Your Finance Function Ready for 2027?',
      date: '26th May 2026',
      time: '11:00 AM ET | 8:30 PM IST',
      location: 'Zoom | Virtual, Global',
      type: 'Webinar',
      description: 'Explore future AI and automation trends, high-impact use cases, intelligent workflows, and measure ROI of digital transformation.',
      keyInsights: [
        'Future AI and automation trends',
        'High-impact automation use cases',
        'Building intelligent finance workflows',
        'Measuring ROI of digital transformation',
      ],
      iconComponent: FiBarChart2,
    },
    {
      id: 3,
      title: 'Global AI & Digital Transformation Summit 2026',
      date: '27 – 29 May, 2026',
      time: 'Full Day Event',
      location: 'Chennai Trade Center, Chennai',
      type: 'Summit',
      description: 'Meet the GTS Techs leadership team and explore AI-powered solutions, automation technologies, enterprise modernization, and customer experience innovations.',
      iconComponent: FiGlobe,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Digital Transformation in Healthcare',
      date: 'April 2026',
      location: 'Virtual',
      type: 'Webinar',
    },
    {
      id: 5,
      title: 'Cloud Migration Best Practices',
      date: 'March 2026',
      location: 'New York, USA',
      type: 'Workshop',
    },
    {
      id: 6,
      title: 'AI Solutions for Manufacturing',
      date: 'February 2026',
      location: 'Virtual',
      type: 'Webinar',
    },
    {
      id: 7,
      title: 'Enterprise Security Summit',
      date: 'January 2026',
      location: 'San Francisco, USA',
      type: 'Conference',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Events & Webinars | GTS Techs - AI & Digital Transformation</title>
        <meta name="description" content="Join GTS Techs for upcoming webinars and events on AI, automation, and digital transformation. Register now for our latest events." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-b from-white via-red-50 to-white flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-600 rounded-full opacity-30"
              animate={{ y: [0, -150, 0], opacity: [0.3, 0.6, 0.3] }}
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
              Events &amp; <span className="text-red-500">Webinars</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              GTS Techs Events and Webinars on AI, Automation &amp; Digital Transformation
            </p>
            <p className="text-lg text-gray-600">
              Follow us on social media to stay updated with our events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6 border-b border-gray-200">
            {[
              { id: 'upcoming', label: 'UPCOMING EVENTS' },
              { id: 'past', label: 'PAST EVENTS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-bold text-lg transition ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === 'upcoming' && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-red-100/50 to-transparent border border-gray-300 rounded-2xl p-8 hover:border-red-200 transition">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Event Icon/Image */}
                      <div className="flex-shrink-0">
                        <div className="text-6xl md:text-7xl text-red-300/50">
                          {React.createElement(event.iconComponent)}
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="px-3 py-1 bg-red-100 border border-red-200 rounded-full text-red-600 text-xs font-semibold">
                                {event.type}
                              </span>
                              <span className="text-gray-600 text-sm">{event.date}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition">
                              {event.title}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-gray-600">
                            <FiClock className="text-red-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <FiMapPin className="text-red-600" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6">
                          {event.description}
                        </p>

                        {event.keyInsights && (
                          <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-3">Key Insights Covered:</h4>
                            <ul className="space-y-2">
                              {event.keyInsights.map((insight, i) => (
                                <li key={i} className="text-gray-600 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                                  {insight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition">
                          REGISTER NOW <FiArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {activeTab === 'past' && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                To watch recordings of past events click <a href="#" className="text-red-600 hover:text-red-700 font-semibold">here</a>
              </p>

              <div className="flex gap-4 mb-8">
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-lg hover:border-red-200 transition">
                  Filter by Country
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-200 transition cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-red-100 border border-red-200 rounded-full text-red-600 text-xs font-semibold">
                        {event.type}
                      </span>
                      <span className="text-gray-600 text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <FiMapPin size={16} className="text-red-600" />
                      {event.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-semibold transition ${
                    page === 1
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-red-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Don't Miss Our Events
          </motion.h2>
          <p className="text-xl text-red-100 mb-8">
            Stay updated with the latest insights on AI, automation, and digital transformation
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
              Subscribe to Updates
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Follow on Social
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
