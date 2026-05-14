import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const ECMSolutions = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'Enterprise Content Management (ECM)',
      subtitle: 'Unlock The Value Of Your Enterprise Data Through An Integrated Approach',
      description: 'Comprehensive ECM solutions to manage, organize, and secure your enterprise content. Our ECM expertise ensures smooth migration, implementation, and ongoing optimization.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'ECM Solutions',
        subtitle: 'Complete enterprise content management services',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            icon: '📋',
            title: 'ECM Consulting',
            description: 'Strategic ECM planning and architecture',
            bullets: ['Current state assessment', 'Future state design', 'Best practices']
          },
          {
            icon: '🏢',
            title: 'Digital Workplace',
            description: 'Modern digital workplace solutions',
            bullets: ['Collaboration tools', 'Document management', 'Employee productivity']
          },
          {
            icon: '🚀',
            title: 'ECM Implementation',
            description: 'Full ECM platform implementation',
            bullets: ['Installation', 'Configuration', 'Customization', 'Integration']
          },
          {
            icon: '📄',
            title: 'Document Management',
            description: 'Enterprise document and records management',
            bullets: ['Capture & digitization', 'Storage', 'Retrieval', 'Retention']
          },
          {
            icon: '📑',
            title: 'Case Management',
            description: 'Intelligent case management solutions',
            bullets: ['Case tracking', 'Workflow automation', 'Resolution']
          },
          {
            icon: '🔄',
            title: 'Content Migration',
            description: 'eContent Migrator for legacy systems',
            bullets: ['Data extraction', 'Transformation', 'Validation', 'Migration']
          }
        ]
      },
      {
        title: 'Datamatics Advantage',
        subtitle: 'Why choose GTS Tech for ECM',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '📊',
            title: '200M+ Documents',
            description: 'Successfully migrated over 200 million documents',
            bullets: ['Large-scale migrations', 'Data integrity', 'Zero data loss']
          },
          {
            icon: '💾',
            title: '12+ TB Content',
            description: 'Managed migrations of 12+ terabytes of content',
            bullets: ['Complex environments', 'Proven methodology', 'Risk mitigation']
          },
          {
            icon: '🎯',
            title: '150+ Projects',
            description: 'Delivered via dedicated ECM Center of Excellence',
            bullets: ['Industry expertise', 'Best practices', 'Quality assurance']
          }
        ]
      },
      {
        title: 'ECM Platform Expertise',
        subtitle: 'We support migration from legacy to modern platforms',
        gridCols: 'grid-cols-1 md:grid-cols-2',
        content: [
          {
            title: 'Legacy Platforms',
            description: 'Migration from established ECM systems',
            bullets: ['FileNet', 'Documentum', 'SharePoint', 'OnBase', 'Interwoven', 'OpenText HummingBird']
          },
          {
            title: 'Modern Platforms',
            description: 'Implementation on next-generation ECM',
            bullets: ['IBM CP4BA', 'OpenText', 'Microsoft 365', 'Cloud-based solutions']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is Enterprise Content Management (ECM)?',
        answer: 'ECM is a comprehensive system for managing documents, records, and content across an organization to improve efficiency, compliance, and decision-making.'
      },
      {
        question: 'Why migrate from legacy ECM systems?',
        answer: 'Modern ECM systems offer better integration, cloud capabilities, AI features, improved user experience, and lower total cost of ownership.'
      },
      {
        question: 'How long does ECM migration take?',
        answer: 'Migration timeline depends on content volume and complexity, typically ranging from 3-12 months for large-scale migrations.'
      },
      {
        question: 'What is the risk in content migration?',
        answer: 'We mitigate risks through comprehensive planning, data validation, phased migration, and robust testing before full cutover.'
      },
      {
        question: 'Can ECM improve compliance?',
        answer: 'Yes, ECM systems help maintain records retention policies, audit trails, access controls, and regulatory compliance requirements.'
      },
      {
        question: 'What is the eContent Migrator?',
        answer: 'eContent Migrator is our proprietary tool that automates content migration, transformation, and validation across platforms.'
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

export default ECMSolutions;
