import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const OutSystemsServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Enterprise Platforms',
      title: 'OutSystems Consulting',
      subtitle: 'Accelerate Domain-Specific Low-Code App Development',
      description: 'Expert OutSystems consulting services with hyperautomation capabilities. Our drag-and-drop visual development approach enables rapid application development with on-site, off-shore, and fusion team models.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Service Offerings',
        subtitle: 'Complete OutSystems development lifecycle',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
        content: [
          {
            icon: '📋',
            title: 'Consulting',
            description: 'Strategic OutSystems consulting and planning'
          },
          {
            icon: '🎨',
            title: 'User Experiences',
            description: 'Beautiful, intuitive UX design and development'
          },
          {
            icon: '💻',
            title: 'Development',
            description: 'Rapid low-code application development'
          },
          {
            icon: '🔗',
            title: 'Integration',
            description: 'Seamless integration with legacy systems'
          },
          {
            icon: '✅',
            title: 'Testing',
            description: 'Comprehensive QA and testing services'
          }
        ]
      },
      {
        title: 'Datamatics Advantages',
        subtitle: 'Why choose GTS Tech for OutSystems',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            icon: '🎯',
            title: 'LCNC Center of Excellence',
            description: 'Dedicated low-code/no-code expertise'
          },
          {
            icon: '🤝',
            title: 'Partnership Ecosystem',
            description: 'Strong OutSystems partner network'
          },
          {
            icon: '🤖',
            title: 'AI Integration Focus',
            description: 'AI-powered automation capabilities'
          },
          {
            icon: '🏢',
            title: 'Domain Expertise',
            description: 'Industry-specific domain knowledge'
          }
        ]
      },
      {
        title: 'Solution Accelerators',
        subtitle: 'Pre-built frameworks to accelerate your projects',
        gridCols: 'grid-cols-1 md:grid-cols-2',
        content: [
          {
            title: 'Insurance Underwriting Platform',
            description: 'Ready-to-use underwriting solution for insurance industry',
            bullets: ['Policy management', 'Claims processing', 'Risk assessment']
          },
          {
            title: 'Visa Processing Solution',
            description: 'Streamlined visa application and processing platform',
            bullets: ['Application tracking', 'Document management', 'Status notifications']
          }
        ]
      },
      {
        title: 'Support & Maintenance',
        subtitle: 'Ongoing support for your applications',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '🔧',
            title: 'Application Support',
            description: 'Dedicated support for your OutSystems applications'
          },
          {
            icon: '📈',
            title: 'Performance Optimization',
            description: 'Continuous performance monitoring and optimization'
          },
          {
            icon: '🚀',
            title: 'Enhancement Services',
            description: 'New features and capability enhancements'
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is Low-Code/No-Code (LCNC)?',
        answer: 'LCNC platforms like OutSystems enable rapid application development with minimal hand coding, using visual drag-and-drop interfaces.'
      },
      {
        question: 'How fast can we build with OutSystems?',
        answer: 'OutSystems typically reduces development time by 50-70% compared to traditional development, enabling faster time-to-market.'
      },
      {
        question: 'Can OutSystems integrate with legacy systems?',
        answer: 'Yes, OutSystems provides robust integration capabilities to connect with legacy systems and modern APIs.'
      },
      {
        question: 'What industries benefit most from OutSystems?',
        answer: 'Insurance, healthcare, banking, government, and manufacturing sectors benefit significantly from OutSystems solutions.'
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

export default OutSystemsServices;
