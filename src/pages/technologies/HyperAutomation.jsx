import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const HyperAutomation = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'Hyperautomation Services',
      subtitle: 'AI-Based Hyper Automation, Optimization & Transformation of Business Processes',
      description: 'Combine RPA, AI, BPM, IDP, and LCNC technologies with partnerships from OutSystems and Microsoft Power Apps to automate complex business processes at scale.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Hyperautomation Services',
        subtitle: 'Comprehensive automation solutions',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
        content: [
          {
            icon: '📋',
            title: 'Consulting',
            description: 'Strategic process automation consulting'
          },
          {
            icon: '🔄',
            title: 'Enterprise Integration',
            description: 'BPM and system integration'
          },
          {
            icon: '🚀',
            title: 'Implementation',
            description: 'Rapid deployment of automation solutions'
          },
          {
            icon: '⚙️',
            title: 'Sustenance',
            description: 'Ongoing support and optimization'
          },
          {
            icon: '⚡',
            title: 'Low-Code Services',
            description: 'LCNC platform implementations'
          }
        ]
      },
      {
        title: 'Key Technologies',
        subtitle: 'Our hyperautomation technology stack',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            icon: '🤖',
            title: 'Robotic Process Automation',
            description: 'Automate repetitive, rule-based tasks'
          },
          {
            icon: '🧠',
            title: 'AI & Machine Learning',
            description: 'Intelligent decision-making and optimization'
          },
          {
            icon: '📊',
            title: 'Business Process Management',
            description: 'Process optimization and workflow automation'
          },
          {
            icon: '📄',
            title: 'Intelligent Document Processing',
            description: 'Extract and process data from documents'
          }
        ]
      },
      {
        title: 'Solution Accelerators',
        subtitle: 'Pre-built automation templates and frameworks',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '⚡',
            title: 'Process Discovery & Analytics',
            description: 'Identify automation opportunities and ROI',
            bullets: ['Process mapping', 'Bottleneck analysis', 'Savings calculation']
          },
          {
            icon: '🚀',
            title: 'Rapid Deployment Frameworks',
            description: 'Accelerate time-to-value with pre-built templates',
            bullets: ['Industry templates', 'Best practices', 'Quick deployment']
          },
          {
            icon: '📈',
            title: 'Continuous Optimization',
            description: 'Monitor and improve automation over time',
            bullets: ['Performance monitoring', 'Process refinement', 'ROI tracking']
          }
        ]
      },
      {
        title: 'Industry-Specific Expertise',
        subtitle: 'Proven automation solutions across industries',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'BFSI',
            description: 'Banking, Finance, and Insurance automation',
            bullets: ['Claims processing', 'KYC automation', 'Loan processing']
          },
          {
            title: 'Manufacturing',
            description: 'Production and supply chain automation',
            bullets: ['Inventory management', 'Order processing', 'Quality control']
          },
          {
            title: 'Logistics & Healthcare',
            description: 'Healthcare and logistics process automation',
            bullets: ['Patient records', 'Shipping automation', 'Healthcare claims']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is hyperautomation?',
        answer: 'Hyperautomation combines RPA, AI, and other automation technologies to automate complex business processes end-to-end.'
      },
      {
        question: 'How does RPA with AI differ from traditional RPA?',
        answer: 'RPA with AI can handle unstructured data, make intelligent decisions, and adapt to process variations, offering far greater capabilities.'
      },
      {
        question: 'Which industries benefit most from hyperautomation?',
        answer: 'Banking, insurance, manufacturing, healthcare, logistics, and retail organizations see the highest ROI from hyperautomation initiatives.'
      },
      {
        question: 'What is the typical ROI timeline?',
        answer: 'Most organizations achieve ROI within 6-12 months, with cost savings ranging from 20-50% depending on the processes automated.'
      },
      {
        question: 'How do we identify automation opportunities?',
        answer: 'We conduct a process discovery and analysis to identify high-impact, low-complexity processes suitable for automation.'
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

export default HyperAutomation;
