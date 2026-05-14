import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const CloudSolutions = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'Cloud Solutions',
      subtitle: 'Migrate, Transform, and Outperform with Cloud-Native Solutions',
      description: 'AI-driven industry innovations and cloud-native architecture. Leverage our expertise to modernize your infrastructure and accelerate digital transformation.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Cloud Solutions',
        subtitle: 'End-to-end cloud transformation services',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            icon: '🎯',
            title: 'Cloud Strategy',
            description: 'Develop a comprehensive cloud strategy aligned with business goals'
          },
          {
            icon: '🚀',
            title: 'Cloud Migration',
            description: 'Seamless migration of workloads to cloud with minimal disruption'
          },
          {
            icon: '⚙️',
            title: 'Managed Services',
            description: 'Ongoing cloud management and optimization'
          },
          {
            icon: '🏗️',
            title: 'Cloud-Native Apps',
            description: 'Build modern, scalable cloud-native applications'
          }
        ]
      },
      {
        title: 'Cloud Accelerators',
        subtitle: 'AI-powered tools to accelerate cloud transformation',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
        content: [
          {
            icon: '⚡',
            title: 'KaiSDLC',
            description: 'Accelerated software development lifecycle'
          },
          {
            icon: '🔍',
            title: 'KaiCloud Optimizer',
            description: 'Cloud cost and performance optimization'
          },
          {
            icon: '📊',
            title: 'KaiCloud Analyzer',
            description: 'Intelligent cloud infrastructure analysis'
          },
          {
            icon: '🛡️',
            title: 'KaiDevSecOps',
            description: 'Secure and compliant cloud deployments'
          },
          {
            icon: '🔄',
            title: 'KaiMigrator',
            description: 'Intelligent workload migration automation'
          }
        ]
      },
      {
        title: 'Cloud Services Expertise',
        subtitle: 'Multi-cloud capabilities across major platforms',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '☁️',
            title: 'Amazon Web Services',
            description: 'Complete AWS ecosystem expertise including EC2, S3, Lambda, RDS'
          },
          {
            icon: '☁️',
            title: 'Microsoft Azure',
            description: 'Azure infrastructure, App Services, Cosmos DB, and Synapse'
          },
          {
            icon: '☁️',
            title: 'Google Cloud Platform',
            description: 'GCP compute, storage, BigQuery, and Kubernetes services'
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is hybrid vs multi-cloud?',
        answer: 'Hybrid cloud combines on-premises and public cloud infrastructure, while multi-cloud uses multiple cloud providers for enhanced flexibility and resilience.'
      },
      {
        question: 'How do we plan our cloud roadmap?',
        answer: 'We develop a phased migration strategy aligned with your business objectives, current infrastructure, and compliance requirements.'
      },
      {
        question: 'What are the benefits of cloud migration?',
        answer: 'Cost reduction, scalability, flexibility, improved disaster recovery, and faster time-to-market for new applications.'
      },
      {
        question: 'How does KaiCloud Optimizer work?',
        answer: 'It uses AI and machine learning to analyze your cloud usage, identify inefficiencies, and recommend cost and performance optimizations.'
      },
      {
        question: 'What is cloud-native architecture?',
        answer: 'Cloud-native architecture leverages containerization, microservices, and serverless computing for maximum scalability and efficiency.'
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

export default CloudSolutions;
