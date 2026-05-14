// Template for Enterprise Platform pages
// Usage: Create individual pages (Salesforce.jsx, Microsoft.jsx, etc.) extending this

import React from 'react';
import TechPageTemplate from '../../components/TechPageTemplate';

const EnterprisePageTemplate = ({ pageData }) => {
  return <TechPageTemplate {...pageData} />;
};

export default EnterprisePageTemplate;
