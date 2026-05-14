// Technology Pages Routing Configuration
// This file defines all technology/services pages for easy management

import SalesforceServices from '../pages/technologies/SalesforceServices';
import MicrosoftServices from '../pages/technologies/MicrosoftServices';
import AIServices from '../pages/technologies/AIServices';
import DataAnalyticsServices from '../pages/technologies/DataAnalyticsServices';
import ComingSoon from '../pages/ComingSoon';

export const techPagesConfig = [
  // ENTERPRISE PLATFORMS
  {
    path: '/technology/enterprise-platforms/salesforce',
    component: SalesforceServices,
    category: 'Enterprise Platforms',
    title: 'Salesforce Services'
  },
  {
    path: '/technology/enterprise-platforms/microsoft',
    component: MicrosoftServices,
    category: 'Enterprise Platforms',
    title: 'Microsoft Services'
  },
  {
    path: '/technology/enterprise-platforms/aws',
    component: ComingSoon,
    category: 'Enterprise Platforms',
    title: 'AWS Services'
  },
  {
    path: '/technology/enterprise-platforms/outsystems',
    component: ComingSoon,
    category: 'Enterprise Platforms',
    title: 'OutSystems Services'
  },

  // DIGITAL TRANSFORMATION
  {
    path: '/technology/digital-transformation/ai',
    component: AIServices,
    category: 'Digital Transformation',
    title: 'Artificial Intelligence'
  },
  {
    path: '/technology/digital-transformation/data-analytics',
    component: DataAnalyticsServices,
    category: 'Digital Transformation',
    title: 'Data & Analytics'
  },
  {
    path: '/technology/digital-transformation/cloud',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'Cloud Solutions'
  },
  {
    path: '/technology/digital-transformation/hyper-automation',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'Hyper-Automation'
  },
  {
    path: '/technology/digital-transformation/applications',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'Applications'
  },
  {
    path: '/technology/digital-transformation/product-engineering',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'Product Engineering'
  },
  {
    path: '/technology/digital-transformation/crm',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'CRM Solutions'
  },
  {
    path: '/technology/digital-transformation/ecm',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'Enterprise Content Management'
  },
  {
    path: '/technology/digital-transformation/professional-services',
    component: ComingSoon,
    category: 'Digital Transformation',
    title: 'Professional Services'
  },

  // DIGITAL ASSURANCE
  {
    path: '/technology/digital-assurance',
    component: ComingSoon,
    category: 'Digital Assurance',
    title: 'Digital Assurance Services'
  },
  {
    path: '/technology/digital-assurance/managed-services',
    component: ComingSoon,
    category: 'Digital Assurance',
    title: 'Managed Services'
  },
  {
    path: '/technology/digital-assurance/testing',
    component: ComingSoon,
    category: 'Digital Assurance',
    title: 'Testing & QA Services'
  },

  // INFRASTRUCTURE & SPECIAL SERVICES
  {
    path: '/technology/automatic-fare-collection',
    component: ComingSoon,
    category: 'Infrastructure',
    title: 'Automatic Fare Collection'
  }
];

// Helper function to get page config by path
export const getPageConfig = (path) => {
  return techPagesConfig.find(page => page.path === path);
};

// Helper function to get all pages by category
export const getPagesByCategory = (category) => {
  return techPagesConfig.filter(page => page.category === category);
};

// Get all categories
export const getAllCategories = () => {
  const categories = new Set(techPagesConfig.map(page => page.category));
  return Array.from(categories);
};
