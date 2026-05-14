import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';
import ScrollToTop from '../../components/common/ScrollToTop';

const ProductEngineering = () => {
  const pageData = {
    hero: {
      eyebrow: 'Digital Transformation',
      title: 'Product Engineering Services',
      subtitle: 'Turn Business Ideas Into Tangible Realities',
      description: 'From concept to market, we deliver end-to-end product engineering services. Our design-led approach and agile methodology ensure successful product launches.',
      primaryCTA: {
        text: 'Submit an Inquiry',
        href: '#contact'
      }
    },
    sections: [
      {
        title: 'Product Engineering Services',
        subtitle: 'Complete product lifecycle management',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            icon: '💡',
            title: 'Product Management',
            description: 'Strategic product planning and roadmap development',
            bullets: ['Vision & strategy', 'Roadmap planning', 'Go-to-market strategy']
          },
          {
            icon: '🚀',
            title: 'Product Development',
            description: 'Full-cycle product development and delivery',
            bullets: ['Agile development', 'MVP creation', 'Feature engineering']
          },
          {
            icon: '🔄',
            title: 'Software Lifecycle',
            description: 'Complete software product lifecycle management',
            bullets: ['Maintenance & support', 'Version management', 'Scaling & optimization']
          }
        ]
      },
      {
        title: 'Design & Development Services',
        subtitle: 'Comprehensive development across all platforms',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
        content: [
          {
            icon: '🌐',
            title: 'Web Development',
            description: 'Modern web applications and platforms'
          },
          {
            icon: '📱',
            title: 'Mobile Development',
            description: 'iOS and Android application development'
          },
          {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive user interfaces'
          },
          {
            icon: '🥽',
            title: 'AR/VR',
            description: 'Immersive augmented and virtual reality experiences'
          },
          {
            icon: '⌚',
            title: 'Wearables',
            description: 'Wearable device application development'
          }
        ]
      },
      {
        title: 'Technology Stack',
        subtitle: 'Modern technologies and frameworks',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        content: [
          {
            title: 'Frontend',
            description: 'React, Angular, Vue.js, Next.js',
            bullets: ['Angular', 'React', 'Vue.js', 'TypeScript']
          },
          {
            title: 'Backend',
            description: 'Node.js, Spring Boot, .NET Core',
            bullets: ['Node.js', 'Spring Boot', '.NET Core', 'Python']
          },
          {
            title: 'Database & Cloud',
            description: 'AWS, Azure, GCP, MongoDB, PostgreSQL',
            bullets: ['AWS & Azure', 'MongoDB', 'PostgreSQL', 'Docker & K8s']
          }
        ]
      },
      {
        title: 'Why Choose GTS Tech',
        subtitle: 'Our product engineering advantages',
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        content: [
          {
            icon: '📊',
            title: '200+ Products',
            description: 'Delivered across diverse industries'
          },
          {
            icon: '🎨',
            title: 'Design-Led',
            description: 'User-centric design approach'
          },
          {
            icon: '⚡',
            title: 'Accelerators',
            description: 'Pre-built frameworks and tools'
          },
          {
            icon: '📈',
            title: 'Lean & Agile',
            description: 'MVP-first, iterative approach'
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What is product engineering?',
        answer: 'Product engineering combines product management, software development, and design to deliver successful products from conception to market.'
      },
      {
        question: 'How long does it take to build a product?',
        answer: 'MVP development typically takes 3-6 months. Time depends on complexity, features, and testing requirements.'
      },
      {
        question: 'What is the MVP approach?',
        answer: 'MVP (Minimum Viable Product) allows you to launch with core features quickly, gather user feedback, and iterate.'
      },
      {
        question: 'Do you handle post-launch support?',
        answer: 'Yes, we provide comprehensive post-launch support, maintenance, and ongoing optimization services.'
      },
      {
        question: 'What platforms do you develop for?',
        answer: 'We develop for web, iOS, Android, wearables, AR/VR, and emerging platforms with modern technology stacks.'
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

export default ProductEngineering;
