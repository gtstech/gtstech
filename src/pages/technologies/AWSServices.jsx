import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const AWSServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Enterprise Platforms',
      title: 'Amazon Web Services (AWS)',
      subtitle: 'Democratize Innovation & Build Future-Ready Solutions',
      description: 'Advanced Tier Services Partner delivering cloud migration, AWS Aurora solutions, and GenAI on cloud. Transform your infrastructure from CapEx to OpEx with our expert guidance.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Service Offerings',
        subtitle: 'Comprehensive AWS solutions tailored to your needs',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '🎯',
            title: 'AWS Consulting',
            description: 'Strategic consulting to optimize your AWS architecture and cloud strategy',
            cta: 'Learn More'
          },
          {
            icon: '🚀',
            title: 'Cloud Migration',
            description: 'Seamless migration of workloads to AWS with minimal downtime',
            cta: 'Learn More'
          },
          {
            icon: '🏗️',
            title: 'Cloud Implementation',
            description: 'Application implementation and testing on AWS infrastructure',
            cta: 'Learn More'
          }
        ]
      },
      {
        title: 'Datamatics Advantages',
        subtitle: 'Why partner with GTS Tech for AWS',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            icon: '✅',
            title: 'AWS Certified Experts',
            description: 'Team of AWS-certified professionals'
          },
          {
            icon: '📊',
            title: 'Level 2/3 Support',
            description: 'Enterprise-grade support and SLAs'
          },
          {
            icon: '💾',
            title: 'Big Data Analytics',
            description: 'Advanced analytics and data processing capabilities'
          },
          {
            icon: '🔒',
            title: 'Security First',
            description: 'Enterprise security and compliance expertise'
          }
        ]
      },
      {
        title: 'AWS Key Services',
        subtitle: 'Core AWS capabilities we specialize in',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            title: 'IAM',
            description: 'Identity and Access Management solutions'
          },
          {
            title: 'Route 53',
            description: 'DNS and domain management'
          },
          {
            title: 'CloudFront',
            description: 'Content delivery and edge computing'
          },
          {
            title: 'Lambda',
            description: 'Serverless computing solutions'
          }
        ]
      },
      {
        title: 'AWS Managed Services',
        subtitle: 'Comprehensive managed service offerings',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            icon: '👁️',
            title: 'Cloud Monitoring',
            description: 'Real-time monitoring and observability',
            bullets: ['CloudWatch integration', 'Custom metrics', '24/7 monitoring']
          },
          {
            icon: '🚨',
            title: 'Alert Management',
            description: 'Intelligent alerting and incident response',
            bullets: ['Proactive alerts', 'Escalation policies', 'Alert automation']
          },
          {
            icon: '⚙️',
            title: 'Service Management',
            description: 'End-to-end service management',
            bullets: ['Ticket management', 'Change management', 'Asset tracking']
          },
          {
            icon: '💰',
            title: 'Cost Optimization',
            description: 'Reduce AWS costs and optimize spending',
            bullets: ['Resource optimization', 'Reserved instances', 'Spot utilization']
          },
          {
            icon: '🔐',
            title: 'Security Monitoring',
            description: 'Continuous security assessment',
            bullets: ['Threat detection', 'Compliance monitoring', 'Vulnerability scanning']
          },
          {
            icon: '🔍',
            title: 'Cloud Troubleshooting',
            description: 'Expert troubleshooting and resolution',
            bullets: ['Performance tuning', 'Issue resolution', 'Root cause analysis']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is AWS Cloud?',
        answer: 'AWS (Amazon Web Services) is a comprehensive cloud computing platform providing infrastructure, platform, and software services.'
      },
      {
        question: 'Who can use AWS?',
        answer: 'Organizations of all sizes, from startups to enterprises, can leverage AWS services to build scalable applications.'
      },
      {
        question: 'What are the benefits of AWS?',
        answer: 'AWS offers scalability, cost-effectiveness, global reach, security, and a comprehensive suite of services.'
      },
      {
        question: 'What is IaaS, PaaS, and SaaS?',
        answer: 'IaaS (Infrastructure as a Service) provides computing resources, PaaS (Platform as a Service) provides development platforms, and SaaS (Software as a Service) provides ready-to-use applications.'
      },
      {
        question: 'How does AWS IAM work?',
        answer: 'IAM allows you to manage users, roles, and permissions to securely control access to AWS services and resources.'
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

export default AWSServices;
