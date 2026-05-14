import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const SalesforceServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Enterprise Platforms',
      title: 'Salesforce Services',
      subtitle: 'Get Your Salesforce Right-First Time & On-Time',
      description: 'Platinum Summit Consulting & ISV Partner with 800+ certified experts delivering 600+ projects across Einstein AI, CPQ, Manufacturing Cloud, Health Cloud, Sales Cloud, MuleSoft, Service Cloud, and Revenue Cloud.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      },
      backgroundImage: '/images/salesforce-hero.jpg'
    },
    sections: [
      {
        title: 'Salesforce Expertise — Our Differentiators',
        subtitle: 'Why choose GTS Tech for your Salesforce journey',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            icon: '⭐',
            title: 'Platinum Partner',
            description: 'Salesforce Summit Consulting & ISV Partner status'
          },
          {
            icon: '📊',
            title: '4.9/5 Rating',
            description: 'Highly rated solutions on Salesforce AppExchange'
          },
          {
            icon: '👥',
            title: '800+ Certified Experts',
            description: 'Industry-leading team of Salesforce specialists'
          },
          {
            icon: '✅',
            title: '600+ Projects',
            description: 'Proven track record across all Salesforce clouds'
          }
        ]
      },
      {
        title: 'Our Salesforce Services',
        subtitle: 'Comprehensive solutions across the entire Salesforce ecosystem',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            icon: '🤖',
            title: 'Agentforce Consulting',
            description: 'Transform your customer interactions with AI-powered agents',
            cta: 'Know More'
          },
          {
            icon: '🚀',
            title: 'Implementation',
            description: 'End-to-end Salesforce implementation and deployment',
            cta: 'Know More'
          },
          {
            icon: '⚙️',
            title: 'Product Engineering',
            description: 'Custom development and product engineering services',
            cta: 'Know More'
          },
          {
            icon: '🔄',
            title: 'Modernization',
            description: 'Upgrade and modernize your existing Salesforce instances',
            cta: 'Know More'
          },
          {
            icon: '📈',
            title: 'Managed Services',
            description: '24/7 managed services and continuous optimization',
            cta: 'Know More'
          },
          {
            icon: '🔗',
            title: 'Integration & APIs',
            description: 'Seamless integration with your existing systems',
            cta: 'Know More'
          }
        ]
      },
      {
        title: 'Salesforce Accelerators & Solutions',
        subtitle: 'Pre-built solutions to accelerate your time-to-value',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'DXCPQ',
            description: 'Configure, Price, Quote acceleration framework',
            bullets: ['Faster quote generation', 'Improved accuracy', 'Reduced sales cycle']
          },
          {
            title: 'DXHealth+',
            description: 'Healthcare industry-specific accelerator',
            bullets: ['HIPAA compliance', 'Patient management', 'Claims processing']
          },
          {
            title: 'Sales Cloud Insights',
            description: 'AI-powered sales intelligence',
            bullets: ['Predictive analytics', 'Deal insights', 'Revenue forecasting']
          },
          {
            title: 'Einstein AI Services',
            description: 'Leverage AI across your Salesforce org',
            bullets: ['Generative AI', 'Predictive models', 'Automation']
          },
          {
            title: 'Financial Forecasting',
            description: 'Advanced revenue and financial forecasting',
            bullets: ['Accurate projections', 'Scenario planning', 'Deal analytics']
          },
          {
            title: 'Customer Experience',
            description: 'Omnichannel customer engagement',
            bullets: ['Service Cloud', 'Experience Cloud', 'Community building']
          }
        ]
      }
    ],
    featured: {
      items: [
        {
          type: 'Case Study',
          title: 'Global Financial Services Transformation',
          excerpt: 'How we helped a Fortune 500 company streamline their sales process with Salesforce',
          image: '/images/featured-salesforce-1.jpg',
          link: '#'
        },
        {
          type: 'Whitepaper',
          title: 'Salesforce Implementation Best Practices',
          excerpt: 'A comprehensive guide to successful Salesforce deployments',
          image: '/images/featured-salesforce-2.jpg',
          link: '#'
        },
        {
          type: 'Blog Post',
          title: 'The Future of CRM with Salesforce Einstein',
          excerpt: 'How AI is transforming customer relationship management',
          image: '/images/featured-salesforce-3.jpg',
          link: '#'
        }
      ]
    },
    faqs: [
      {
        question: 'Why is Salesforce the #1 CRM in the market?',
        answer: 'Salesforce leads the CRM market due to its comprehensive feature set, ecosystem of integrations, AI capabilities, and commitment to customer success. With constant innovation and a thriving marketplace, Salesforce empowers organizations to deliver exceptional customer experiences.'
      },
      {
        question: 'What are the key business benefits of Salesforce?',
        answer: 'Key benefits include increased sales productivity, improved customer satisfaction, better data-driven decision making, enhanced collaboration, and measurable ROI. Our customers typically see 30-40% improvements in sales efficiency within the first year.'
      },
      {
        question: 'How long does a typical Salesforce implementation take?',
        answer: 'Implementation timelines vary based on complexity and scope. A standard Sales Cloud implementation typically takes 3-6 months, while more complex multi-cloud implementations may take 6-12 months. We use proven methodologies to accelerate deployments without compromising quality.'
      },
      {
        question: 'Does Salesforce offer cloud advantages?',
        answer: 'Yes. As a cloud-native platform, Salesforce provides automatic updates, scalability, security, accessibility from anywhere, and significant cost savings compared to on-premise solutions. There\'s no infrastructure to maintain, allowing your team to focus on strategic initiatives.'
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

export default SalesforceServices;
