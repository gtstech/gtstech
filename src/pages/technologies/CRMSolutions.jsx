import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const CRMSolutions = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'CRM Consulting & Implementation',
      subtitle: 'Transform Your Customer Relationships',
      description: 'Expert CRM solutions powered by Salesforce and Microsoft Dynamics 365. Build stronger customer relationships with our comprehensive consulting and implementation services.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Datamatics Advantages',
        subtitle: 'Why partner with GTS Tech for CRM',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            icon: '🎓',
            title: 'CRM Expertise',
            description: 'Deep expertise across leading CRM platforms',
            bullets: ['Salesforce certified', 'Dynamics 365 experts', 'Industry best practices']
          },
          {
            icon: '⚙️',
            title: 'Customization',
            description: 'Flexible customization tailored to your needs',
            bullets: ['Custom workflows', 'Integrated extensions', 'Scalable solutions']
          },
          {
            icon: '📊',
            title: 'Project Management',
            description: 'Proven delivery methodologies',
            bullets: ['Agile approach', 'Transparent communication', 'On-time delivery']
          },
          {
            icon: '🔗',
            title: 'Integration',
            description: 'Seamless integration with your ecosystem',
            bullets: ['Legacy systems', 'Modern APIs', 'Data synchronization']
          },
          {
            icon: '📚',
            title: 'Training & Support',
            description: 'Comprehensive training and ongoing support',
            bullets: ['User training', 'Admin training', 'Continuous support']
          },
          {
            icon: '🏢',
            title: 'Industry Expertise',
            description: 'Domain knowledge across multiple industries',
            bullets: ['BFSI', 'Healthcare', 'Manufacturing', 'Retail']
          }
        ]
      },
      {
        title: 'Our CRM Partners',
        subtitle: 'Leading CRM platforms we specialize in',
        gridCols: 'grid-cols-1 md:grid-cols-2',
        content: [
          {
            icon: '☁️',
            title: 'Salesforce',
            description: 'Comprehensive Salesforce consulting and implementation',
            bullets: ['Sales Cloud', 'Service Cloud', 'Commerce Cloud', 'Einstein AI', 'Custom development']
          },
          {
            icon: '⚙️',
            title: 'Microsoft Dynamics 365',
            description: 'Complete Dynamics 365 solutions',
            bullets: ['Sales', 'Customer Service', 'Field Service', 'Marketing', 'Integration']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is CRM and why is it important?',
        answer: 'CRM (Customer Relationship Management) systems help organizations manage customer interactions, improve relationships, and drive sales growth through better data management and insights.'
      },
      {
        question: 'How long does CRM implementation take?',
        answer: 'Typical CRM implementations range from 3-12 months depending on complexity, customization needs, and organizational size.'
      },
      {
        question: 'What are the benefits of CRM implementation?',
        answer: 'Improved customer relationships, increased sales productivity, better data insights, enhanced customer service, and increased operational efficiency.'
      }
    ]
  };

  return (
    <>
      <ScrollToTop />
      <TechPageTemplate {...pageData} />
    </>
  );
};

export default CRMSolutions;
