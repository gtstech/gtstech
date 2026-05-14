import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const MicrosoftServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Enterprise Platforms',
      title: 'Microsoft Technology Solutions',
      subtitle: 'Digital Transformation with Microsoft',
      description: 'With 15+ years of partnership, we deliver cutting-edge solutions using Copilot, Azure AI, Azure Data Services, Fabric, Synapse, Power BI, OpenAI, and Dynamics 365.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      },
      backgroundImage: '/images/microsoft-hero.jpg'
    },
    sections: [
      {
        title: 'Practice by Numbers',
        subtitle: 'Our proven expertise across the Microsoft ecosystem',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
        content: [
          {
            title: '1000+',
            description: 'Microsoft projects completed',
            icon: '📊'
          },
          {
            title: '1000+',
            description: 'System integrations delivered',
            icon: '🔗'
          },
          {
            title: '550+',
            description: 'Microsoft developers',
            icon: '👨‍💻'
          },
          {
            title: '100+',
            description: 'Certified professionals',
            icon: '🎓'
          },
          {
            title: '40+',
            description: 'Proprietary IPs',
            icon: '💡'
          }
        ]
      },
      {
        title: 'Why Datamatics for Microsoft Services',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            title: 'Right-Size Solutions',
            description: 'Custom-built solutions that fit your exact needs',
            bullets: ['Tailored approach', 'Cost-effective', 'Scalable architecture']
          },
          {
            title: 'CoE-Led Delivery',
            description: 'Center of Excellence driven execution',
            bullets: ['Best practices', 'Consistent quality', 'Knowledge transfer']
          },
          {
            title: 'Microsoft EDCs',
            description: 'Access to Microsoft Enterprise Design Centers',
            bullets: ['Advanced architecture', 'Strategic guidance', 'Innovation labs']
          },
          {
            title: 'Ecosystem Excellence',
            description: 'Deep integration with Microsoft ecosystem',
            bullets: ['Partner network', 'Latest technologies', 'Continuous innovation']
          }
        ]
      },
      {
        title: 'Datamatics IPs Built on Microsoft Stack',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'TruBot',
            description: 'Intelligent automation and RPA platform',
            bullets: ['Bot development', 'Process automation', 'Analytics']
          },
          {
            title: 'TruCap+',
            description: 'Advanced data capture and digitization',
            bullets: ['Document processing', 'Data extraction', 'ML-powered accuracy']
          },
          {
            title: 'TruAI',
            description: 'AI and machine learning solutions',
            bullets: ['Predictive analytics', 'NLP capabilities', 'Custom models']
          },
          {
            title: 'TruBI',
            description: 'Business intelligence and analytics',
            bullets: ['Data visualization', 'Real-time dashboards', 'Advanced analytics']
          },
          {
            title: 'Finato',
            description: 'Financial services automation',
            bullets: ['Processing automation', 'Compliance', 'Reporting']
          },
          {
            title: 'TruFare',
            description: 'Transportation and logistics optimization',
            bullets: ['Route optimization', 'Fleet management', 'Cost reduction']
          }
        ]
      },
      {
        title: 'Service Offerings',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '💼',
            title: 'Business Apps',
            description: 'Dynamics 365, Power Platform, and custom applications',
            cta: 'Know More'
          },
          {
            icon: '☁️',
            title: 'Infrastructure (Azure)',
            description: 'Cloud migration, infrastructure design, and management',
            cta: 'Know More'
          },
          {
            icon: '📈',
            title: 'Data & AI',
            description: 'Advanced analytics, machine learning, and AI solutions',
            cta: 'Know More'
          },
          {
            icon: '🎨',
            title: 'Digital & App Innovation',
            description: 'Modern app development and digital transformation',
            cta: 'Know More'
          },
          {
            icon: '🤝',
            title: 'Modern Work',
            description: 'Collaboration tools and workplace transformation',
            cta: 'Know More'
          },
          {
            icon: '🔒',
            title: 'Security & Compliance',
            description: 'Enterprise security and regulatory compliance',
            cta: 'Know More'
          }
        ]
      }
    ],
    featured: {
      items: [
        {
          type: 'Case Study',
          title: 'Enterprise Digital Transformation with Azure',
          excerpt: 'How we migrated a global organization to Azure cloud infrastructure',
          image: '/images/featured-microsoft-1.jpg',
          link: '#'
        },
        {
          type: 'Whitepaper',
          title: 'Microsoft AI Strategy & Implementation',
          excerpt: 'A roadmap for leveraging AI across your Microsoft environment',
          image: '/images/featured-microsoft-2.jpg',
          link: '#'
        },
        {
          type: 'Blog',
          title: 'Copilot Integration Best Practices',
          excerpt: 'Getting the most from Microsoft Copilot in your organization',
          image: '/images/featured-microsoft-3.jpg',
          link: '#'
        }
      ]
    },
    faqs: [
      {
        question: 'What is Azure and why should we migrate to it?',
        answer: 'Azure is Microsoft\'s cloud computing platform offering scalability, security, and cost efficiency. Migration enables you to reduce IT infrastructure costs, improve disaster recovery, enable remote work, and access cutting-edge AI and analytics capabilities.'
      },
      {
        question: 'How long does a Microsoft cloud migration typically take?',
        answer: 'Migration timelines depend on complexity and workload volume. Simple migrations can take weeks, while comprehensive multi-workload migrations typically take 3-8 months. We provide detailed planning and accelerated methodologies to minimize disruption.'
      },
      {
        question: 'What is Power BI and how can it help our business?',
        answer: 'Power BI is Microsoft\'s business analytics and visualization tool. It helps you transform raw data into actionable insights through interactive dashboards and reports, enabling data-driven decision making across your organization.'
      },
      {
        question: 'How does Copilot integrate with our Microsoft Stack?',
        answer: 'Microsoft Copilot integrates across Office 365, Dynamics 365, Power Platform, and Azure services. We help you identify use cases, implement responsible AI practices, and ensure proper governance and compliance.'
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

export default MicrosoftServices;
