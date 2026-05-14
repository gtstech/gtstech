import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const DataAnalyticsServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'Data & Analytics Services',
      subtitle: 'Modernize. Mobilize. Monetize Data',
      description: 'Transform your data into actionable insights. Our comprehensive data & analytics services help you build AI-ready data foundations and unlock business value.',
      primaryCTA: {
        text: 'Get a Free Data Readiness Assessment',
        href: '#contact'
      },
      secondaryCTA: {
        text: 'Explore Solutions',
        href: '#solutions'
      },
      backgroundImage: '/images/data-analytics-hero.jpg'
    },
    sections: [
      {
        title: 'Data & Analytics Offerings',
        subtitle: 'Three pillars of data transformation',
        gridCols: 'grid-cols-1 lg:grid-cols-3',
        bgColor: 'bg-gray-50',
        content: [
          {
            icon: '🔄',
            title: 'Modernize',
            description: 'Transform your data infrastructure and platforms',
            bullets: [
              'Data Engineering & Integration',
              'Data Platforms (Warehouse, Lakehouse, Lakes)',
              'Data Quality & Observability',
              'Governance, Privacy & Security',
              'Migration & Modernization'
            ]
          },
          {
            icon: '📊',
            title: 'Mobilize',
            description: 'Make data discoverable and accessible',
            bullets: [
              'Data Catalog & Discovery',
              'Data Lineage & Governance',
              'Semantic Layer',
              'Data Virtualization',
              'Federated Access'
            ]
          },
          {
            icon: '💰',
            title: 'Monetize',
            description: 'Derive business value from your data',
            bullets: [
              'BI & Visualization',
              'Advanced Analytics',
              'Data Science & ML',
              'AI Solutions',
              'Revenue Optimization'
            ]
          }
        ]
      },
      {
        title: 'Our Data & Analytics Capabilities',
        subtitle: 'End-to-end expertise across the data lifecycle',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            title: 'Data Engineering',
            description: 'Build scalable data pipelines and infrastructure'
          },
          {
            title: 'Cloud Data Platforms',
            description: 'AWS Redshift, Azure Synapse, Google BigQuery'
          },
          {
            title: 'Data Governance',
            description: 'Ensure quality, compliance, and security'
          },
          {
            title: 'Advanced Analytics',
            description: 'Predictive modeling and statistical analysis'
          },
          {
            title: 'Machine Learning',
            description: 'Custom ML models for your business'
          },
          {
            title: 'BI & Visualization',
            description: 'Power BI, Tableau, Looker dashboards'
          },
          {
            title: 'Data Migration',
            description: 'Safe, efficient data platform transitions'
          },
          {
            title: 'AI Integration',
            description: 'Generative AI and LLM applications'
          }
        ]
      },
      {
        title: 'GTS Tech Data Accelerators',
        subtitle: 'Pre-built solutions to accelerate your ROI',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        bgColor: 'bg-blue-50',
        content: [
          {
            title: 'KaiDATA',
            description: 'Intelligent data management platform',
            bullets: [
              'Automated data quality',
              'Self-healing pipelines',
              'Metadata intelligence'
            ]
          },
          {
            title: 'KaiAssist',
            description: 'AI-powered analytics assistant',
            bullets: [
              'Natural language queries',
              'Automated insights',
              'Anomaly detection'
            ]
          },
          {
            title: 'Talk-to-Data',
            description: 'Conversational data exploration',
            bullets: [
              'LLM-powered interface',
              'No SQL required',
              'Self-service analytics'
            ]
          },
          {
            title: 'KaiCustomer Insights',
            description: 'Customer analytics platform',
            bullets: [
              'Behavior analysis',
              'Churn prediction',
              'Personalization engine'
            ]
          },
          {
            title: 'Dynamic Pricing',
            description: 'AI-driven pricing optimization',
            bullets: [
              'Market intelligence',
              'Demand forecasting',
              'Revenue optimization'
            ]
          },
          {
            title: 'KaiSDLC',
            description: 'Data science lifecycle management',
            bullets: [
              'Model development',
              'Deployment automation',
              'Performance monitoring'
            ]
          }
        ]
      },
      {
        title: 'Industry Solutions',
        subtitle: 'Data & analytics solutions by industry',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'Financial Services',
            description: 'Risk analytics, fraud detection, compliance reporting'
          },
          {
            title: 'Retail & E-commerce',
            description: 'Customer insights, inventory optimization, pricing'
          },
          {
            title: 'Manufacturing',
            description: 'Predictive maintenance, quality analytics, supply chain'
          },
          {
            title: 'Healthcare',
            description: 'Patient analytics, clinical insights, operational efficiency'
          },
          {
            title: 'Telecommunications',
            description: 'Churn prediction, network analytics, customer segmentation'
          },
          {
            title: 'Media & Entertainment',
            description: 'Content analytics, audience insights, recommendation engines'
          }
        ]
      }
    ],
    featured: {
      items: [
        {
          type: 'Case Study',
          title: 'Retail Giant Implements Data Warehouse',
          excerpt: 'How we helped a major retailer consolidate data and improve inventory decisions',
          image: '/images/featured-data-1.jpg',
          link: '#'
        },
        {
          type: 'Whitepaper',
          title: 'Building AI-Ready Data Foundations',
          excerpt: 'A comprehensive guide to modern data architecture for enterprise AI',
          image: '/images/featured-data-2.jpg',
          link: '#'
        },
        {
          type: 'Blog',
          title: 'The M3 Model: Modernize, Mobilize, Monetize',
          excerpt: 'GTS Tech\'s framework for maximum data value',
          image: '/images/featured-data-3.jpg',
          link: '#'
        }
      ]
    },
    faqs: [
      {
        question: 'What is a modern data platform and why do I need one?',
        answer: 'A modern data platform is cloud-native, scalable, and designed for both data analytics and AI workloads. It provides the foundation for real-time insights, faster decision-making, and competitive advantage. Legacy systems can\'t keep pace with today\'s data volumes and analytical demands.'
      },
      {
        question: 'How long does a data warehouse migration typically take?',
        answer: 'Migration timelines vary based on data complexity and volume. A typical migration takes 3-6 months for SMBs and 6-12+ months for enterprises. We use proven methodologies, parallel runs, and incremental cutovers to minimize risk and business impact.'
      },
      {
        question: 'What\'s the difference between a data warehouse, data lake, and lakehouse?',
        answer: 'A data warehouse is optimized for structured analytics with high-quality data. A data lake stores raw data at scale for flexibility. A lakehouse combines both - offering the schema and reliability of warehouses with the flexibility and scale of lakes. Each serves different use cases.'
      },
      {
        question: 'How can AI and machine learning improve our analytics?',
        answer: 'ML models can discover patterns humans would miss, automate insights, predict future outcomes, detect anomalies, and personalize experiences. We help identify high-impact use cases and build reliable, production-grade ML solutions.'
      },
      {
        question: 'What governance and compliance measures do you implement?',
        answer: 'We implement data governance frameworks covering data quality, lineage, cataloging, privacy (GDPR, CCPA), security, and compliance with industry regulations. Proper governance ensures data reliability and regulatory adherence.'
      },
      {
        question: 'How do you ensure data quality in large-scale environments?',
        answer: 'We implement multi-layered data quality frameworks including validation rules, automated monitoring, anomaly detection, and remediation workflows. Continuous data quality ensures trustworthy insights and model performance.'
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

export default DataAnalyticsServices;
