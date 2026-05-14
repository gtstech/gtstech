import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const AIServices = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'Artificial Intelligence Services',
      subtitle: 'Unleash the Power of AI Across Your Enterprise',
      description: 'AI-First approach with a centralized AI Center of Excellence. Transform your business with agentic AI, machine learning, and enterprise-scale AI solutions.',
      primaryCTA: {
        text: 'Explore AI Use Cases',
        href: '#contact'
      },
      backgroundImage: '/images/ai-hero.jpg'
    },
    sections: [
      {
        title: 'Key AI Service Offerings',
        subtitle: 'Comprehensive AI solutions for every stage of your journey',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        content: [
          {
            icon: '🤖',
            title: 'Agentic AI Services',
            description: 'Autonomous agents that learn, adapt, and improve over time',
            cta: 'Know More'
          },
          {
            icon: '📋',
            title: 'AI Strategy Consulting',
            description: 'Define your AI vision, roadmap, and implementation strategy',
            cta: 'Know More'
          },
          {
            icon: '🚀',
            title: 'AI Adoption Services',
            description: 'Change management and organizational readiness for AI',
            cta: 'Know More'
          },
          {
            icon: '⚙️',
            title: 'AI Development & Integration',
            description: 'Build and integrate AI solutions into your systems',
            cta: 'Know More'
          },
          {
            icon: '🔄',
            title: 'Model Lifecycle Management',
            description: 'Manage AI models from development to production and beyond',
            cta: 'Know More'
          },
          {
            icon: '🌐',
            title: 'AI Ecosystem Enablement',
            description: 'Enable AI across your entire organization',
            cta: 'Know More'
          },
          {
            icon: '🧠',
            title: 'ML Model Development',
            description: 'Custom machine learning models tailored to your needs',
            cta: 'Know More'
          },
          {
            icon: '📊',
            title: 'Enterprise Data',
            description: 'Data preparation and governance for AI initiatives',
            cta: 'Know More'
          },
          {
            icon: '✨',
            title: 'AI-Backed Design & Development',
            description: 'Leverage AI in product and software development',
            cta: 'Know More'
          }
        ]
      },
      {
        title: 'AI Adoption Journey',
        subtitle: 'Three phases to successful AI implementation',
        bgColor: 'bg-blue-50',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'Phase 1: Discovery',
            description: 'Assess, identify, and plan',
            bullets: [
              'AI readiness assessment',
              'Use case identification',
              'ROI modeling',
              'Roadmap development'
            ]
          },
          {
            title: 'Phase 2: Implementation',
            description: 'Build, integrate, and deploy',
            bullets: [
              'Solution architecture',
              'Model development',
              'Integration and testing',
              'Pilot deployment'
            ]
          },
          {
            title: 'Phase 3: Production Support',
            description: 'Monitor, optimize, and scale (AI Ops)',
            bullets: [
              'Performance monitoring',
              'Model optimization',
              'Continuous improvement',
              'Scale and expand'
            ]
          }
        ]
      },
      {
        title: 'Shared Services — AI Accelerators',
        subtitle: 'Pre-built AI solutions to accelerate your time-to-value',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            title: 'KaiTone',
            description: 'AI-powered customer tone analysis'
          },
          {
            title: 'KaiCloud Analyzer',
            description: 'Cloud cost optimization AI'
          },
          {
            title: 'KaiKnowledge Management',
            description: 'Intelligent knowledge discovery and management'
          },
          {
            title: 'KaiCloud Optimizer',
            description: 'Cloud resource optimization'
          }
        ]
      }
    ],
    featured: {
      items: [
        {
          type: 'Case Study',
          title: 'AI-Driven Process Automation',
          excerpt: 'How we helped reduce processing time by 80% with AI',
          image: '/images/featured-ai-1.jpg',
          link: '#'
        },
        {
          type: 'Webinar',
          title: 'Getting Started with Agentic AI',
          excerpt: 'An introduction to autonomous AI agents and their applications',
          image: '/images/featured-ai-2.jpg',
          link: '#'
        },
        {
          type: 'Whitepaper',
          title: 'Enterprise AI Governance Framework',
          excerpt: 'Best practices for responsible and compliant AI deployment',
          image: '/images/featured-ai-3.jpg',
          link: '#'
        }
      ]
    },
    faqs: [
      {
        question: 'What is Agentic AI and how is it different from traditional AI?',
        answer: 'Agentic AI systems can autonomously plan, execute, and adapt without continuous human intervention. Unlike traditional AI that responds to queries, agentic AI proactively works toward goals, making it ideal for complex business processes and decision-making.'
      },
      {
        question: 'How can AI help our business?',
        answer: 'AI can automate routine tasks, improve decision-making through data analysis, enhance customer experience, optimize operations, and unlock new revenue streams. The specific benefits depend on your industry, challenges, and opportunities.'
      },
      {
        question: 'What\'s required to implement AI in our organization?',
        answer: 'Success requires: quality data, clear use cases, executive support, skilled resources (or partnership), change management, and governance frameworks. We guide you through all these aspects from strategy to implementation.'
      },
      {
        question: 'How do you ensure AI solutions are ethical and compliant?',
        answer: 'We implement responsible AI practices including bias detection, explainability, data privacy, regulatory compliance, and governance frameworks. Our solutions are designed to be transparent, fair, and accountable.'
      },
      {
        question: 'What is the typical timeline for AI implementation?',
        answer: 'Timeline varies by complexity: simple automation projects may take 2-3 months, while comprehensive AI transformations can take 6-12 months. We use agile methodologies to deliver value incrementally.'
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

export default AIServices;
