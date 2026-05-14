import React, { useState } from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ResourcesSection from './sections/ResourcesSection';
import ContactForm from './common/ContactForm';
import CTABanner from './common/CTABanner';

const TechPageTemplate = ({
  hero,
  sections = [],
  faqs = [],
  featured = null,
  pageTitle = ''
}) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        primaryCTA={hero.primaryCTA}
        secondaryCTA={hero.secondaryCTA}
        backgroundImage={hero.backgroundImage}
        heroSlider={hero.heroSlider}
      />

      {/* Main Content Sections */}
      {sections.map((section, idx) => (
        <section key={idx} className={`py-16 px-6 lg:px-12 ${section.bgColor || 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            {section.title && (
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{section.subtitle}</p>
                )}
              </div>
            )}

            {/* Content Grid */}
            {section.content && (
              <div className={`grid gap-8 ${section.gridCols || 'grid-cols-1 md:grid-cols-3'}`}>
                {section.content.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    {item.icon && (
                      <div className="mb-4 text-4xl">{item.icon}</div>
                    )}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {item.bullets && (
                      <ul className="space-y-2 mb-4">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-gray-600 flex items-start">
                            <span className="mr-3 text-blue-600 font-bold">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.cta && (
                      <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                        {item.cta}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Full-width Content */}
            {section.fullWidth && (
              <div className="prose prose-lg max-w-4xl mx-auto">
                {section.fullWidth}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Featured Content Section */}
      {featured && (
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Content</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featured.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <a href={item.link} className="text-blue-600 font-semibold hover:text-blue-800">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                    <span className={`text-2xl text-blue-600 transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedFAQ === idx && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-600 text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Request for Service Form */}
      <section className="py-16 px-6 lg:px-12 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Request For Service</h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
            Let us know how we can help you. Our team will get back to you within 24 hours.
          </p>
          <ContactForm theme="dark" />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Business?"
        description="Connect with our experts to discuss your specific needs and requirements."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default TechPageTemplate;
