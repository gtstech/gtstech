import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const ProfessionalServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Professional Services',
      title: 'Professional Staffing Services',
      subtitle: 'Strategic Partner For Your Contingent Workforce',
      description: 'Global staffing solutions across IT, engineering, and professional services. Access top talent with our extensive network and rigorous vetting process.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Datamatics Advantages',
        subtitle: 'Why choose GTS Tech for staffing',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            icon: '🌍',
            title: 'Global Footprint',
            description: 'Presence across multiple continents',
            bullets: ['Multiple regions', 'Local expertise', 'Time zone coverage']
          },
          {
            icon: '💰',
            title: 'Value',
            description: 'Cost-effective staffing solutions',
            bullets: ['Competitive pricing', 'No setup fees', 'Flexible terms']
          },
          {
            icon: '📦',
            title: 'Delivery',
            description: 'Reliable and consistent delivery',
            bullets: ['On-time placement', 'Quality assurance', 'Replacement guarantee']
          },
          {
            icon: '🔒',
            title: 'Security',
            description: 'Secure and compliant workforce',
            bullets: ['Background checks', 'Compliance training', 'Data security']
          },
          {
            icon: '🎯',
            title: 'Skill-Set Focused',
            description: 'Specialized talent across domains',
            bullets: ['IT specialists', 'Engineers', 'Domain experts', 'Senior resources']
          },
          {
            icon: '🤝',
            title: 'Dedicated Support',
            description: 'Comprehensive staffing support',
            bullets: ['Resource management', 'Performance tracking', 'Escalation handling']
          }
        ]
      },
      {
        title: 'Staffing Categories',
        subtitle: 'Diverse staffing solutions across skill levels',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'IT Staffing',
            description: 'Software engineers, developers, and IT specialists',
            bullets: ['Full-stack developers', 'Cloud architects', 'DBAs', 'Infrastructure experts']
          },
          {
            title: 'Engineering Staffing',
            description: 'Hardware and mechanical engineering talent',
            bullets: ['Hardware engineers', 'Systems engineers', 'QA engineers', 'Technical leads']
          },
          {
            title: 'Professional Services',
            description: 'Experienced consultants and advisors',
            bullets: ['Business analysts', 'Project managers', 'Solutions architects', 'Consultants']
          }
        ]
      },
      {
        title: 'Industry Focus',
        subtitle: 'Deep expertise across key industries',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            title: 'Aerospace & Defense',
            description: 'Specialized staffing for aerospace sector'
          },
          {
            title: 'Manufacturing',
            description: 'Manufacturing and industrial expertise'
          },
          {
            title: 'Automotive & Transit',
            description: 'Automotive and transportation specialists'
          },
          {
            title: 'Banking & Finance',
            description: 'FinTech and financial services talent'
          },
          {
            title: 'Pharmaceuticals',
            description: 'Pharma and life sciences expertise'
          },
          {
            title: 'Healthcare IT',
            description: 'Healthcare technology specialists'
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is professional staffing vs managed services?',
        answer: 'Professional staffing provides individual resources for specific projects, while managed services are end-to-end project delivery with full responsibility.'
      },
      {
        question: 'How quickly can you fill positions?',
        answer: 'We typically fill positions within 1-2 weeks through our extensive candidate network and rigorous screening process.'
      },
      {
        question: 'What is your replacement guarantee?',
        answer: 'If a resource is not meeting expectations, we replace them at no additional cost within the first 30 days.'
      },
      {
        question: 'Do you provide remote staffing?',
        answer: 'Yes, we provide both on-site and remote staffing solutions based on your requirements and location needs.'
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

export default ProfessionalServices;
