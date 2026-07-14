// src/data/content.js — single source of truth for all site content

export const company = {
  name: "GTS Tech and Infra Solutions",
  tagline: "Powering the Future with Technology & Infrastructure",
  blurb:
    "A Digital Technologies, Operations, and Experiences company delivering cutting-edge IT infrastructure, AI-driven automation, and enterprise digital solutions that accelerate business growth.",
  stats: [
    { metric: "200+", label: "Clients Served" },
    { metric: "15+", label: "Years of Experience" },
    { metric: "4 Regions", label: "Global Delivery Centers" },
    { metric: "1,000+", label: "Professionals" },
  ],
};

export const offices = [
  {
    region: "India (Headquarters)",
    city: "Mumbai",
    country: "India",
    address: "Knowledge Park, MIDC, Andheri (East), Mumbai – 400 093",
    email: "info.india@gtstechs.com",
    phone: "+91 22 6102 6100",
  },
  {
    region: "Americas",
    city: "Piscataway, New Jersey",
    country: "USA",
    address: "30 Knightsbridge Rd, Suite 525, Piscataway, NJ 08854",
    email: "info.americas@gtstechs.com",
    phone: "+1 732 465 9494",
  },
  {
    region: "Europe",
    city: "London",
    country: "UK",
    address: "1 King Street, London EC2V 8AU",
    email: "info.europe@gtstechs.com",
    phone: "+44 20 7397 8100",
  },
  {
    region: "APAC",
    city: "Singapore",
    country: "Singapore",
    address: "6 Raffles Quay #11-07, Singapore 048580",
    email: "info.apac@gtstechs.com",
    phone: "+65 6225 7700",
  },
];

export const topLinks = [
  { label: "Careers", to: "/careers" },
  { label: "Press Releases", to: "/press-releases" },
  { label: "Events", to: "/events" },
  { label: "Investors", to: "/investors" },
  { label: "Contact Us", to: "/contact" },
];

export const navTree = [
  {
    label: "Technologies",
    to: "/technologies",
    children: [
      { label: "GTS Techs.AI", to: "/technologies/datamatics-ai" },
      {
        label: "Enterprise Platforms",
        to: "/technologies/enterprise-platforms",
        children: [
          { label: "Salesforce", to: "/technologies/salesforce" },
          { label: "Microsoft", to: "/technologies/microsoft" },
          { label: "Amazon Web Services", to: "/technologies/aws" },
          { label: "OutSystems", to: "/technologies/outsystems" },
        ],
      },
      {
        label: "Digital Transformation",
        to: "/technologies/digital-transformation",
        children: [
          { label: "Artificial Intelligence", to: "/technologies/artificial-intelligence" },
          { label: "Data & Analytics", to: "/technologies/data-analytics" },
          { label: "Cloud", to: "/technologies/cloud" },
          { label: "Applications", to: "/technologies/applications" },
          { label: "Hyper-Automation", to: "/technologies/hyper-automation" },
          { label: "Product Engineering", to: "/technologies/product-engineering" },
          { label: "CRM", to: "/technologies/crm" },
          { label: "Enterprise Content Management", to: "/technologies/ecm" },
          { label: "Professional Services", to: "/technologies/professional-services" },
        ],
      },
      {
        label: "Digital Assurance",
        to: "/technologies/digital-assurance",
        children: [
          { label: "Managed Services", to: "/technologies/managed-services" },
          { label: "Testing", to: "/technologies/testing" },
        ],
      },
      { label: "Automatic Fare Collection", to: "/technologies/automatic-fare-collection" },
    ],
  },
  {
    label: "Operations",
    to: "/operations",
    children: [
      {
        label: "Digital Finance",
        to: "/operations/digital-finance",
        children: [
          { label: "Finance & Accounting", to: "/operations/finance-accounting" },
          { label: "Banking Process Management", to: "/operations/banking-process" },
          { label: "Insurance Process Management", to: "/operations/insurance-process" },
          { label: "Healthcare Process Management", to: "/operations/healthcare-process" },
        ],
      },
      {
        label: "Automation",
        to: "/operations/automation",
        children: [
          { label: "Intelligent Automation Platform", to: "/operations/intelligent-automation" },
          { label: "TruBot – RPA", to: "/products/trubot" },
          { label: "TruCap+ – IDP", to: "/products/trucap" },
          { label: "TruAgent", to: "/products/truagent" },
        ],
      },
      {
        label: "GTS Techs FINATO",
        to: "/operations/finato",
        children: [
          { label: "Procure-to-Pay", to: "/operations/procure-to-pay" },
          { label: "Order-to-Cash", to: "/operations/order-to-cash" },
          { label: "Record-to-Report", to: "/operations/record-to-report" },
          { label: "Financial Planning & Analysis", to: "/operations/fpa" },
        ],
      },
      { label: "Digital Content", to: "/operations/digital-content" },
    ],
  },
  {
    label: "Experiences",
    to: "/experiences",
    children: [
      {
        label: "Contact Center Transformation",
        to: "/experiences/contact-center",
        children: [
          { label: "Customer Care", to: "/experiences/customer-care" },
          { label: "Customer Loyalty Management", to: "/experiences/customer-loyalty" },
          { label: "Trust and Safety", to: "/experiences/trust-and-safety" },
          { label: "Customer Analytics", to: "/experiences/customer-analytics" },
          { label: "Customer Management Consulting", to: "/experiences/customer-consulting" },
        ],
      },
      { label: "Digital Proctoring", to: "/experiences/digital-proctoring" },
      {
        label: "Research & Analytics",
        to: "/experiences/research-analytics",
        children: [
          { label: "XM Consulting", to: "/experiences/xm-consulting" },
          { label: "GCC for Market Research", to: "/experiences/gcc" },
          { label: "Research Technology", to: "/experiences/research-technology" },
        ],
      },
    ],
  },
  {
    label: "Products",
    to: "/coming-soon",
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      { label: "Banking & Financial Services", to: "/industries/banking-financial-services" },
      { label: "Insurance", to: "/industries/insurance" },
      { label: "Manufacturing", to: "/industries/manufacturing" },
      { label: "Logistics", to: "/industries/logistics" },
      { label: "Healthcare", to: "/industries/healthcare" },
      { label: "Technology", to: "/industries/technology" },
      { label: "Travel & Transportation", to: "/industries/travel-hospitality" },
      { label: "Credit Rating", to: "/industries/credit-rating" },
      { label: "International Organisations", to: "/industries/international-organisations" },
      { label: "Retail", to: "/industries/retail" },
      { label: "Education", to: "/industries/education" },
      { label: "Market Research", to: "/industries/market-research" },
    ],
  },
  {
    label: "Resources",
    to: "/coming-soon",
  },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Company Overview", to: "/about/company-overview" },
      { label: "Leadership Team", to: "/coming-soon" },
      { label: "Customer Testimonials", to: "/coming-soon" },
      { label: "Deep In Digital", to: "/about/deep-in-digital" },
      { label: "Corporate Social Responsibility", to: "/about/csr" },
      { label: "DataLabs", to: "/coming-soon" },
      { label: "Awards and Recognition", to: "/coming-soon" },
      { label: "Alliances", to: "/coming-soon" },
      { label: "Our Offices", to: "/about/offices" },
      { label: "ESG", to: "/about/esg" },
    ],
  },
];

export const footerLinks = {
  technologies: [
    { label: "GTS Techs.AI", to: "/technologies/datamatics-ai" },
    { label: "Artificial Intelligence", to: "/technologies/artificial-intelligence" },
    { label: "Cloud", to: "/technologies/cloud" },
    { label: "Data & Analytics", to: "/technologies/data-analytics" },
    { label: "Hyper-Automation", to: "/technologies/hyper-automation" },
    { label: "Digital Assurance", to: "/technologies/digital-assurance" },
    { label: "Automatic Fare Collection", to: "/technologies/automatic-fare-collection" },
  ],
  operations: [
    { label: "Digital Finance", to: "/operations/digital-finance" },
    { label: "Finance & Accounting", to: "/operations/finance-accounting" },
    { label: "Intelligent Automation", to: "/operations/intelligent-automation" },
    { label: "FINATO Platform", to: "/operations/finato" },
    { label: "Digital Content", to: "/operations/digital-content" },
  ],
  experiences: [
    { label: "Contact Center CX", to: "/experiences/contact-center" },
    { label: "Customer Care", to: "/experiences/customer-care" },
    { label: "Digital Proctoring", to: "/experiences/digital-proctoring" },
    { label: "Research & Analytics", to: "/experiences/research-analytics" },
    { label: "XM Consulting", to: "/experiences/xm-consulting" },
  ],
  products: [
    { label: "SuperCX", to: "/products/supercx" },
    { label: "TruBot", to: "/products/trubot" },
    { label: "TruCap+", to: "/products/trucap" },
    { label: "TruBI", to: "/products/trubi" },
    { label: "TruAI Underwriting", to: "/products/truai-underwriting" },
    { label: "TruDiscovery", to: "/products/trudiscovery" },
    { label: "TruAgent", to: "/products/truagent" },
  ],
};

export const legalLinks = [
  { label: "Data Protection Policy", to: "/legal/data-protection" },
  { label: "Privacy Policy", to: "/legal/privacy" },
  { label: "Terms of Use", to: "/legal/terms" },
  { label: "Media", to: "/resources/media" },
  { label: "Contact Us", to: "/contact" },
];

export const testimonials = [
  { client: "ECU Worldwide", quote: "Highly efficient team — confident recommendation when AI or advanced technologies are involved.", role: "Head of Digital Transformation" },
  { client: "Incora", quote: "Intuitive system with a fresh look. Strong involvement from the GTS Techs team.", role: "VP Operations" },
  { client: "Monument Bank", quote: "Approachable, solution-oriented, and genuinely invested. Feels like an extension of our own team.", role: "CTO" },
  { client: "OneTouch Direct", quote: "Connected on a personal level and took time to understand our business deeply.", role: "CEO" },
  { client: "Harris Teeter", quote: "Agile and proactive — worked as an extended team for our digital transformation journey.", role: "Director of IT" },
  { client: "Ingram Micro", quote: "Transformational partner for our accounts payable operations across Europe.", role: "CFO, Europe" },
];

export const homeHeroSlides = [
  {
    tag: "GTS Techs.AI",
    title: "Unleash the Power of Agentic AI Across Your Enterprise",
    subtitle: "AI-first solutions that move beyond experimentation to measurable outcomes.",
    cta: { label: "Explore GTS Techs.AI", to: "/technologies/datamatics-ai" },
    bg: "from-brand to-brand-dark",
  },
  {
    tag: "Digital Operations",
    title: "Resilient Operations Powered by Intelligence",
    subtitle: "Transform finance, automation, and process management with AI-driven platforms.",
    cta: { label: "Explore Operations", to: "/operations" },
    bg: "from-brand-dark to-brand",
  },
  {
    tag: "Customer Experience",
    title: "Every Interaction is a Strategic Asset",
    subtitle: "Contact center transformation, digital proctoring, and research analytics at scale.",
    cta: { label: "Explore Experiences", to: "/experiences" },
    bg: "from-brand to-brand-light",
  },
];

// ============================================================
// Page content — keyed by route path slug
// ============================================================
export const pages = {

  // ---- HOME ----
  home: {
    title: "Powering the Future",
    tagline: "GTS Tech and Infra Solutions",
    intro: "A Digital Technologies, Operations, and Experiences company empowering enterprises worldwide.",
    solutions: [
      { icon: "🤖", title: "Technologies", desc: "AI-first platforms: cloud, data, automation, and enterprise software.", to: "/technologies" },
      { icon: "⚙️", title: "Operations", desc: "Intelligent BPM across finance, insurance, healthcare, and content.", to: "/operations" },
      { icon: "💡", title: "Experiences", desc: "Contact centers, digital proctoring, and research analytics.", to: "/experiences" },
      { icon: "📦", title: "Products", desc: "TruBot, TruCap+, TruBI, SuperCX, FINATO, and more.", to: "/products" },
    ],
    industries: [
      { name: "Banking & Financial Services", to: "/industries/banking-financial-services", icon: "🏦" },
      { name: "Insurance", to: "/industries/insurance", icon: "🛡️" },
      { name: "Healthcare", to: "/industries/healthcare", icon: "🏥" },
      { name: "Manufacturing", to: "/industries/manufacturing", icon: "🏭" },
      { name: "Logistics", to: "/industries/logistics", icon: "🚚" },
      { name: "Technology", to: "/industries/technology", icon: "💻" },
    ],
  },

  // ---- ABOUT ----
  about: {
    title: "About GTS Techs",
    intro: "For over four decades, GTS Techs has been at the forefront of digital innovation, helping enterprises harness technology to improve efficiency and customer experience.",
    sections: [
      { heading: "Our Story", body: "Founded in 1975, GTS Techs has grown from a small data processing firm into a global digital services leader spanning four continents. Our journey reflects a relentless pursuit of innovation, always placing the customer at the center of every solution we build. Today we serve 300+ customers across 50+ countries with a team of 6,500+ professionals." },
      { heading: "Our Philosophy", body: "We believe digital transformation is not a destination but a continuous journey. Our 'Powering the Future' philosophy means we embed technology at the core of every engagement, using AI, automation, and analytics to drive outcomes that matter — reduced costs, faster processes, and superior customer experiences." },
      { heading: "Global Footprint", body: "With headquarters in Mumbai and offices across the Americas, Europe, and APAC, we deliver seamlessly across time zones. Our global delivery model combines onshore consulting with offshore and nearshore execution excellence." },
    ],
  },
  "company-overview": {
    title: "Company Overview",
    breadcrumb: ["About", "/about"],
    intro: "GTS Techs is a global digital services and solutions company enabling enterprises to go Powering the Future.",
    sections: [
      { heading: "Who We Are", body: "Established in 1975, GTS Techs has built a reputation for reliability, innovation, and measurable impact. We operate at the intersection of technology and business outcomes, delivering AI-led transformation programs for Fortune 500 companies and mid-market enterprises alike. Our multi-domain expertise spans finance, insurance, healthcare, retail, and technology verticals." },
      { heading: "Our Capabilities", body: "From strategy to execution, our capabilities cover the full digital transformation lifecycle. We combine proprietary AI accelerators, deep industry knowledge, and global delivery scale to help clients modernize legacy systems, automate complex processes, and create differentiated customer experiences." },
      { heading: "Financial Strength", body: "With annual revenues exceeding $181 million and a consistent track record of profitable growth, GTS Techs is a financially stable partner for long-term enterprise engagements. Our balance-sheet strength enables sustained investment in R&D and talent development." },
    ],
  },
  leadership: {
    title: "Leadership Team",
    breadcrumb: ["About", "/about"],
    intro: "Our leadership team brings together decades of industry expertise across technology, finance, and digital services.",
    sections: [
      { heading: "Executive Leadership", body: "GTS Techs is guided by a senior leadership team with deep domain expertise and a proven track record of driving enterprise-scale digital transformation. Each leader combines strategic vision with hands-on operational experience, ensuring that client commitments translate into measurable outcomes." },
      { heading: "Board of Directors", body: "Our Board provides strategic oversight and governance with independent directors drawn from diverse industry backgrounds. The Board's composition reflects our commitment to transparency, ethical governance, and long-term value creation for all stakeholders." },
      { heading: "Global Delivery Leadership", body: "Regional delivery leaders across India, Americas, Europe, and APAC ensure that our global engagements are managed with local sensitivity and operational rigour. This structure enables consistent service quality across geographies while adapting to regional regulatory and cultural requirements." },
    ],
  },
  testimonials: {
    title: "Customer Testimonials",
    breadcrumb: ["About", "/about"],
    intro: "Hear directly from the enterprises that trust GTS Techs to power their digital transformation.",
    sections: [
      { heading: "What Our Clients Say", body: "GTS Techs partners with organizations ranging from global multinationals to fast-growing mid-market companies. Our clients consistently highlight the depth of our domain expertise, the reliability of our delivery, and the genuine commitment our teams bring to every engagement." },
      { heading: "Measurable Impact", body: "Beyond satisfaction scores, our clients report tangible business outcomes: reduced processing cycle times, lower operational costs, improved customer satisfaction scores, and accelerated time-to-market for digital initiatives. These outcomes validate our outcomes-first engagement model." },
    ],
  },
  "deep-in-digital": {
    title: "Powering the Future",
    breadcrumb: ["About", "/about"],
    intro: "Our philosophy of being 'Powering the Future' defines how we think, build, and deliver.",
    sections: [
      { heading: "The Philosophy", body: "Being Powering the Future means more than adopting technology — it means embedding digital intelligence into every layer of business operations. We help enterprises reimagine their processes, products, and customer interactions through the lens of AI, automation, and data-driven decision-making." },
      { heading: "AI at the Core", body: "Every solution we build starts with AI as a foundational layer, not an afterthought. Our GTS Techs.AI practice brings together machine learning, generative AI, and cognitive automation to create systems that learn, adapt, and improve continuously — driving compounding value over time." },
      { heading: "Digital Culture", body: "True digital transformation requires a cultural shift as much as a technology shift. We partner with our clients to build digital-first cultures by upskilling teams, redesigning workflows around automation, and establishing AI governance frameworks that enable responsible innovation at scale." },
    ],
  },
  csr: {
    title: "Corporate Social Responsibility",
    breadcrumb: ["About", "/about"],
    intro: "We believe in creating value not just for shareholders, but for society at large.",
    sections: [
      { heading: "Education Initiatives", body: "GTS Techs Foundation runs extensive education programs across rural India, providing digital literacy training, scholarships, and infrastructure support to underserved communities. We have directly benefited over 50,000 students through these initiatives over the past decade." },
      { heading: "Environmental Sustainability", body: "Our sustainability agenda includes carbon footprint reduction targets, green building certifications across our campuses, and responsible e-waste disposal programs. We publish annual ESG reports detailing our progress against these commitments." },
      { heading: "Community Development", body: "Through skill development programs, women empowerment initiatives, and healthcare camps, we invest in the communities where we operate. Our CSR spend exceeds regulatory requirements as we believe in going beyond compliance to drive genuine social impact." },
    ],
  },
  datalabs: {
    title: "DataLabs",
    breadcrumb: ["About", "/about"],
    intro: "GTS Techs DataLabs is our innovation engine — where future digital solutions are conceived, prototyped, and validated.",
    sections: [
      { heading: "Innovation at Scale", body: "DataLabs brings together data scientists, AI researchers, and domain experts to develop next-generation solutions for enterprise challenges. Our structured innovation methodology takes ideas from concept to proof-of-concept in weeks, with a clear pathway to production deployment." },
      { heading: "Research Focus Areas", body: "Current research themes include generative AI for enterprise automation, multimodal AI models for document understanding, explainable AI for regulated industries, and quantum computing readiness for financial services. Each theme is tied to real client problems we are solving today." },
      { heading: "Open Innovation", body: "DataLabs collaborates with leading universities, research institutions, and technology partners to stay at the cutting edge. This ecosystem approach ensures we have access to the latest academic research while maintaining the practical focus needed to deliver production-ready solutions." },
    ],
  },
  awards: {
    title: "Awards & Recognition",
    breadcrumb: ["About", "/about"],
    intro: "Our work has been recognised by leading industry analysts, associations, and clients worldwide.",
    sections: [
      { heading: "Industry Analyst Recognition", body: "GTS Techs has been recognized by Gartner, Everest Group, Nelson Hall, and ISG as a notable or leading provider across multiple service categories including intelligent automation, finance and accounting outsourcing, and contact center services." },
      { heading: "Technology Awards", body: "Our AI and automation products have received recognition from prestigious bodies including the AI Excellence Award, the Stevie Award for Technology Innovation, and the NASSCOM Enterprise Digital Award. These accolades validate our commitment to building world-class technology." },
      { heading: "Employer Recognition", body: "GTS Techs has consistently been recognized as a Great Place to Work, reflecting our investment in employee development, inclusive culture, and progressive HR practices. A motivated and skilled workforce is the foundation of the exceptional service we deliver to clients." },
    ],
  },
  alliances: {
    title: "Alliances & Partnerships",
    breadcrumb: ["About", "/about"],
    intro: "Strategic partnerships that amplify our delivery capabilities and client value.",
    sections: [
      { heading: "Technology Alliances", body: "Our alliances with Microsoft, Salesforce, AWS, and OutSystems give clients access to certified expertise across the world's leading cloud and enterprise platforms. These partnerships are backed by deep technical certifications and co-innovation programs that keep us at the forefront of platform evolution." },
      { heading: "Ecosystem Partners", body: "Beyond the hyperscalers, our ecosystem includes specialist AI partners, RegTech firms, and niche technology providers. This broad partner network allows us to assemble best-of-breed solution stacks tailored to specific industry and functional requirements." },
      { heading: "Academic Alliances", body: "Collaborations with IIT Mumbai, BITS Pilani, and international universities fuel our research pipeline through joint projects, talent pipelines, and access to cutting-edge research. These academic ties ensure that applied innovation remains central to our service evolution." },
    ],
  },
  offices: {
    title: "Our Offices",
    breadcrumb: ["About", "/about"],
    intro: "Serving clients across four continents with strategically located delivery centers.",
    sections: [
      { heading: "India — Headquarters", body: "Our global headquarters is in Mumbai, India's financial capital. From here we coordinate global delivery operations, host our DataLabs innovation center, and manage corporate functions including finance, HR, and legal. Additional delivery centers operate in Nashik, Pune, and Hyderabad." },
      { heading: "Americas", body: "Our North American headquarters is in Piscataway, New Jersey, serving clients across the US and Canada. The Americas team specializes in financial services, healthcare, and technology sector engagements, combining onshore client-facing roles with offshore delivery coordination." },
      { heading: "Europe", body: "Operating from London with additional coverage across continental Europe, our European team serves clients in the UK, Germany, France, and the Nordics. Deep regulatory knowledge across GDPR, PSD2, and Solvency II makes our European team uniquely positioned for financial services mandates." },
      { heading: "APAC", body: "Singapore serves as our APAC hub, with coverage extending to Australia, Japan, and Southeast Asia. The APAC team brings specialist expertise in digital banking, insurance innovation, and government digitization programs across the region." },
    ],
  },
  esg: {
    title: "Environmental, Social & Governance",
    breadcrumb: ["About", "/about"],
    intro: "Our ESG framework guides responsible business practices across environmental stewardship, social impact, and governance excellence.",
    sections: [
      { heading: "Environmental Commitments", body: "GTS Techs is committed to achieving net-zero carbon emissions by 2040. Our roadmap includes renewable energy adoption across all owned facilities, a 50% reduction in Scope 2 emissions by 2028, and carbon-neutral data center operations. We publish detailed environmental metrics in our annual sustainability report." },
      { heading: "Social Responsibility", body: "We measure our social impact through employment generated, communities supported, and digital skills imparted. Our initiatives span employee wellness programs, diversity and inclusion targets, supply chain ethics standards, and community development investments that together touch millions of lives annually." },
      { heading: "Governance Standards", body: "Strong governance underpins every aspect of our operations. Our Board Audit Committee, Risk Management Committee, and CSR Committee provide rigorous oversight of financial reporting, enterprise risk, and stakeholder responsibilities. We adhere to the highest standards of transparency and ethical conduct in all markets." },
    ],
  },

  // ---- TECHNOLOGIES ----
  technologies: {
    title: "Digital Technologies",
    intro: "AI-first enterprise technology services that transform how businesses operate and compete.",
    sections: [
      { heading: "Our Technology Pillars", body: "GTS Techs delivers technology transformation across five strategic pillars: GTS Techs.AI, Enterprise Platforms, Digital Transformation, Digital Assurance, and Automatic Fare Collection. Each pillar is staffed by certified domain experts and backed by proprietary accelerators that compress delivery timelines and reduce risk." },
      { heading: "AI at the Center", body: "Artificial intelligence is the connective tissue across every service we offer. Whether modernizing a legacy ERP, building a cloud-native application, or implementing a contact center transformation, our teams embed AI capabilities from day one — enabling solutions that are intelligent by design rather than retrofitted." },
    ],
  },
  "datamatics-ai": {
    title: "GTS Techs.AI",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Unleash AI across the enterprise value chain with a centralized AI Center of Excellence.",
    sections: [
      { heading: "AI Services Portfolio", body: "Our GTS Techs.AI practice offers end-to-end AI services from strategy to deployment. We provide AI strategy consulting, adoption roadmaps, model development, deployment at scale, and ongoing AI operations management. Our teams have delivered 200+ AI use cases across industries including banking, insurance, healthcare, and manufacturing." },
      { heading: "AI Accelerators", body: "Our proprietary accelerator suite — KaiTone, KaiCloud Analyzer, KaiKnowledge Management, and KaiCloud Optimizer — reduces implementation time by up to 40%. These pre-built frameworks include industry-specific training data, validated model architectures, and integration templates for major enterprise platforms." },
      { heading: "AI Adoption Journey", body: "We structure every AI engagement across three phases: Discovery and Business Alignment, Implementation (Build-Test-Deploy), and Production Support and AI Operations. This structured methodology ensures that AI investments are tied to measurable business outcomes and managed responsibly throughout their lifecycle." },
      { heading: "Generative AI Solutions", body: "Our generative AI solutions include Agent Assist for contact centers, KaiAssist for enterprise knowledge management, KaiUW Assist for underwriting automation, Data Request Copilot for self-service analytics, and intelligent virtual assistants for customer-facing channels. Each solution is customized to the client's domain and governance requirements." },
    ],
  },
  "enterprise-platforms": {
    title: "Enterprise Platform Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Mission-critical platform services across Salesforce, Microsoft, AWS, and OutSystems.",
    sections: [
      { heading: "Platform Expertise", body: "Enterprise platforms form the backbone of modern digital operations. Our teams hold hundreds of certifications across the world's leading platforms, enabling us to deliver complex implementations, deep customizations, and seamless integrations that align platform capabilities with specific business requirements." },
      { heading: "Managed Evolution", body: "Our platform engagements do not end at go-live. We provide ongoing managed services, platform upgrades, and continuous optimization to ensure clients derive maximum value from their platform investments over time. This lifecycle approach reduces total cost of ownership while accelerating business agility." },
    ],
  },
  salesforce: {
    title: "Salesforce Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Certified Salesforce consulting, implementation, and managed services for enterprise transformation.",
    sections: [
      { heading: "Salesforce Implementation", body: "Our Salesforce practice covers the full platform portfolio: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Financial Services Cloud, and Health Cloud. With certified Solution Architects and Technical Architects, we design and deliver implementations that are configured for business performance, not just technical compliance." },
      { heading: "Integration & Customization", body: "No Salesforce deployment exists in isolation. Our integration specialists connect Salesforce with ERP systems, data warehouses, and legacy applications using MuleSoft, custom APIs, and Salesforce Connect. Custom Apex development and Lightning component builds allow us to extend the platform to meet unique business requirements." },
      { heading: "AI & Einstein Capabilities", body: "We help clients leverage Salesforce Einstein and the new Agentforce platform to embed AI directly into their CRM workflows. From predictive lead scoring to automated case routing and AI-generated service summaries, our teams design Einstein configurations that tangibly improve sales and service productivity." },
    ],
  },
  microsoft: {
    title: "Microsoft Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Microsoft 365, Azure, Dynamics 365, Power Platform, and Copilot solutions for enterprise scale.",
    sections: [
      { heading: "Microsoft 365 & Collaboration", body: "We design and deploy Microsoft 365 environments that maximize productivity, security, and collaboration. Our services include tenant architecture design, migration from legacy platforms, Teams governance frameworks, SharePoint intranet solutions, and ongoing user adoption programs that ensure investment realization." },
      { heading: "Azure Cloud Services", body: "As a Microsoft Azure partner, we deliver cloud migration, modernization, and managed services on Azure. Our Azure practice covers infrastructure, data platforms (Azure Synapse, Data Factory), AI services (Azure OpenAI), DevOps pipelines, and FinOps optimization — helping clients build secure, scalable cloud environments." },
      { heading: "Dynamics 365 & Copilot", body: "Our Dynamics 365 team implements Finance, Supply Chain, Customer Service, and Sales modules for mid-market and enterprise clients. We specialize in Microsoft Copilot integration, embedding AI-powered capabilities into ERP and CRM workflows that reduce manual effort and improve decision-making quality." },
    ],
  },
  aws: {
    title: "Amazon Web Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "AWS migration, modernization, data platforms, and managed cloud services.",
    sections: [
      { heading: "Cloud Migration & Modernization", body: "Our AWS practice guides enterprises through the complete cloud adoption journey: from initial cloud readiness assessments and workload portfolio analysis through migration execution and post-migration optimization. We follow the AWS Migration Acceleration Program methodology, ensuring migrations are completed on schedule and within budget." },
      { heading: "Data & Analytics on AWS", body: "Modern data platforms built on AWS — including Amazon Redshift, EMR, Glue, Kinesis, and SageMaker — form the backbone of many of our data transformation engagements. We design architectures that make data accessible, reliable, and analytically powerful at any scale." },
      { heading: "Managed Cloud Operations", body: "Our AWS managed services provide 24x7 monitoring, incident management, patch management, and cost optimization for client environments. Proactive operations, supported by our cloud operations platform and SRE practices, ensure high availability and predictable cloud costs." },
    ],
  },
  outsystems: {
    title: "OutSystems Low-Code Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Rapid enterprise application development on the OutSystems low-code platform.",
    sections: [
      { heading: "Low-Code Development", body: "OutSystems enables enterprise-grade application development at a fraction of the time of traditional coding. Our certified OutSystems developers build complex, integration-heavy applications covering employee portals, customer-facing digital channels, operational dashboards, and process automation workflows — all without sacrificing performance or scalability." },
      { heading: "Modernization with Low-Code", body: "Many enterprises carry a significant legacy application debt. OutSystems provides an accelerated pathway to modernization by allowing gradual migration of legacy functionality into cloud-native, mobile-responsive applications. Our experience managing these transitions reduces business risk and maintains continuity throughout the transformation." },
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Consulting-led digital transformation across people, process, and technology.",
    sections: [
      { heading: "Transformation Strategy", body: "Successful digital transformation begins with clarity of purpose. Our transformation strategy practice helps organizations define their digital north star, assess current capabilities, and build a prioritized roadmap that balances quick wins with structural change. We bring industry benchmarks, operating model frameworks, and AI-readiness assessments to every engagement." },
      { heading: "Technology Modernization", body: "Legacy technology is the most common bottleneck to digital agility. Our modernization services cover application re-platforming, microservices decomposition, API-first architecture adoption, and cloud migration — executed through a proven factory model that delivers at scale without disrupting ongoing business operations." },
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Applied AI and Generative AI for enterprise-grade automation and intelligence.",
    sections: [
      { heading: "AI Development & Integration", body: "We build and deploy custom AI models trained on proprietary client data. Our capabilities span supervised and unsupervised learning, natural language processing, computer vision, time-series forecasting, and large language model fine-tuning. Every model is designed with explainability, fairness, and operational maintainability as core requirements." },
      { heading: "Generative AI", body: "Generative AI is reshaping how enterprises create, process, and analyze content. Our generative AI services include enterprise LLM deployment on private infrastructure, RAG-based knowledge systems, AI-powered document generation, and multimodal models that process text, images, and structured data simultaneously." },
      { heading: "AI Ethics & Governance", body: "Responsible AI deployment requires robust governance. We help clients establish AI governance frameworks that address model risk, bias monitoring, data privacy compliance, and regulatory requirements. Our AI Ethics Review Board process ensures that every AI solution we build adheres to ethical principles and industry standards." },
    ],
  },
  "data-analytics": {
    title: "Data & Analytics",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Modern data platforms, business intelligence, and advanced analytics for data-driven enterprises.",
    sections: [
      { heading: "Data Platform Engineering", body: "We design and build modern data platforms on cloud infrastructure, covering data ingestion, transformation, storage, and serving layers. Our architectures follow data mesh, data lakehouse, and medallion patterns depending on organizational scale and data complexity, ensuring platforms that grow with the business." },
      { heading: "Business Intelligence & Visualization", body: "Self-service analytics empowers business users to access insights without depending on IT queues. We build BI solutions on Power BI, Tableau, and Qlik that combine enterprise-grade data models with intuitive visualizations. Governance frameworks ensure that metrics are consistent, trusted, and aligned with business definitions." },
      { heading: "Advanced Analytics & ML", body: "Beyond descriptive analytics, we help clients build predictive and prescriptive capabilities using machine learning. Use cases include demand forecasting, customer churn prediction, fraud detection, supply chain optimization, and risk scoring — all deployed with monitoring frameworks that catch model drift before it impacts decisions." },
    ],
  },
  cloud: {
    title: "Cloud Solutions",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Cloud strategy, migration, modernization, and managed cloud operations.",
    sections: [
      { heading: "Cloud Strategy & Advisory", body: "We help enterprises move from cloud curiosity to cloud conviction. Our cloud strategy engagements assess workload suitability, estimate total cost of ownership, evaluate multi-cloud and hybrid scenarios, and produce migration roadmaps that are realistic, sequenced, and tied to business value. We bring vendor-neutral advisory backed by deep technical expertise." },
      { heading: "Cloud Migration", body: "Our migration factory executes cloud migrations at scale using proven tooling, automated discovery, and a structured wave-planning methodology. We handle lift-and-shift migrations for speed, re-platforming for cloud optimization, and re-architecting for full cloud-native agility depending on application criticality and business timelines." },
    ],
  },
  applications: {
    title: "Application Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Full-cycle application development, modernization, and management.",
    sections: [
      { heading: "Custom Application Development", body: "We build custom enterprise applications using modern technology stacks including React, Node.js, Java Spring Boot, Python, and .NET. Our agile delivery model, supported by DevOps automation and CI/CD pipelines, ensures rapid delivery of high-quality applications that are built for performance, security, and maintainability from the ground up." },
      { heading: "Application Modernization", body: "Aging applications constrain digital ambition. Our modernization services cover user interface modernization, database migration, API enablement of legacy systems, containerization, and progressive migration to microservices architectures. Each modernization is executed with a business-continuity-first mindset." },
    ],
  },
  "hyper-automation": {
    title: "Hyper-Automation",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Combine RPA, AI, process intelligence, and agentic AI for end-to-end enterprise automation.",
    sections: [
      { heading: "Automation Architecture", body: "Hyper-automation moves beyond single-tool RPA to orchestrate multiple automation technologies — robotic process automation, intelligent document processing, process mining, conversational AI, and AI agents — into cohesive, end-to-end automated workflows. Our architects design these multi-layer automation stacks to maximize throughput while minimizing human exception handling." },
      { heading: "Process Discovery & Mining", body: "Effective automation begins with accurate process intelligence. We use process mining tools to analyze event logs from ERP and CRM systems, identify process variants, quantify automation potential, and prioritize candidates by ROI. This data-driven approach eliminates guesswork from automation planning and accelerates time-to-value." },
      { heading: "Agentic AI Automation", body: "The next frontier of automation is agentic AI — autonomous AI systems that plan, execute, and adapt multi-step tasks without constant human supervision. Our TruAgent platform brings agentic AI capabilities to enterprise operations, enabling complex, judgment-intensive processes to be automated with unprecedented accuracy and flexibility." },
    ],
  },
  "product-engineering": {
    title: "Product Engineering",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Full-cycle product engineering for SaaS and enterprise software products.",
    sections: [
      { heading: "Product Strategy & Design", body: "We help ISVs and enterprises conceptualize, validate, and design digital products. Our product strategy services include market research synthesis, user research, product roadmap definition, and UX/UI design — creating the blueprint for products that resonate with users and succeed commercially." },
      { heading: "Engineering & DevOps", body: "Our engineering teams build scalable, secure, cloud-native software products using modern architectures and best-in-class tooling. We implement automated testing, continuous integration, and continuous deployment pipelines that maintain high release velocity while ensuring product quality at every stage." },
    ],
  },
  crm: {
    title: "CRM Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "CRM strategy, implementation, and managed services across Salesforce and Microsoft Dynamics.",
    sections: [
      { heading: "CRM Transformation", body: "Modern CRM goes far beyond a contact database — it is the intelligence layer for every customer-facing function. We help enterprises reimagine their CRM strategy, select the right platform, and implement solutions that unify sales, marketing, and service data to create a true 360-degree customer view that drives revenue and retention." },
      { heading: "Integration & Automation", body: "CRM value is maximized when it is connected seamlessly to surrounding systems: ERP, marketing automation, data warehouses, and customer communication platforms. Our integration architects design CRM integration architectures that ensure data flows accurately and in real time, eliminating duplicate entry and enabling automated workflows across the customer lifecycle." },
    ],
  },
  ecm: {
    title: "Enterprise Content Management",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Intelligent ECM solutions for the complete content lifecycle.",
    sections: [
      { heading: "Document & Records Management", body: "Organizations generate enormous volumes of documents, contracts, correspondence, and records that must be captured, classified, stored, and retrieved efficiently. Our ECM implementations — built on platforms including OpenText, Microsoft SharePoint, and Hyland OnBase — create structured environments where content is findable, secure, and audit-ready at all times." },
      { heading: "Workflow Automation & Compliance", body: "Content management is most powerful when paired with workflow automation. We configure approval workflows, review cycles, and compliance controls that route content through the right hands at the right time. Regulatory compliance frameworks including ISO 15489, GDPR, and industry-specific standards are embedded into content architecture from day one." },
    ],
  },
  "professional-services": {
    title: "Professional Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Consulting, implementation, and managed services across the digital technology stack.",
    sections: [
      { heading: "Advisory & Consulting", body: "Our professional services practice provides senior advisory support across digital strategy, enterprise architecture, technology selection, and vendor management. We help CIOs and CTOs navigate the complex technology landscape with clarity, combining independent counsel with deep technical expertise across cloud, AI, data, and enterprise platforms." },
      { heading: "Implementation & Integration", body: "From small focused implementations to large-scale, multi-country rollouts, our project delivery teams execute with disciplined program management, rigorous quality assurance, and proactive stakeholder communication. Our certified project managers hold PMP, PRINCE2, and Agile certifications, ensuring structured delivery regardless of project scale or complexity." },
    ],
  },
  "digital-assurance": {
    title: "Digital Assurance Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Comprehensive quality engineering and testing services for digital platforms.",
    sections: [
      { heading: "AI-Led Quality Engineering", body: "Our digital assurance practice leverages AI to transform testing from a manual, time-intensive activity into a continuous, intelligent quality monitoring capability. AI-powered test generation, autonomous regression execution, and predictive defect analysis reduce testing cycles while dramatically increasing coverage and reliability." },
      { heading: "Test Automation", body: "Manual testing cannot keep pace with modern agile release cycles. Our test automation engineers build resilient automation frameworks using Selenium, Playwright, Cypress, and Appium that integrate natively into CI/CD pipelines. These frameworks execute thousands of regression scenarios on every build, catching regressions before they reach production." },
      { heading: "Specialized Testing", body: "Beyond functional testing, we provide performance engineering, security testing (SAST, DAST, penetration testing), accessibility testing (WCAG 2.1), API testing, and cloud-native testing capabilities. Each specialization is staffed by certified practitioners with domain-specific tooling expertise." },
    ],
  },
  "managed-services": {
    title: "Managed Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "24x7 application and infrastructure managed services for continuous business performance.",
    sections: [
      { heading: "Application Managed Services", body: "Our AMS practice provides ongoing support, maintenance, and enhancement of enterprise applications post-go-live. Structured service tiers — covering break-fix, corrective maintenance, adaptive changes, and continuous improvement — ensure that applications remain current, performant, and aligned with evolving business needs." },
      { heading: "Infrastructure & Cloud Operations", body: "Our NOC and cloud operations teams provide round-the-clock monitoring, alerting, and incident response for hybrid IT environments. SLA-backed response times, proactive health checks, capacity management, and security patching keep client infrastructure stable and secure without requiring clients to build large internal operations teams." },
    ],
  },
  testing: {
    title: "Testing Services",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Automation-first testing services for web, mobile, API, and cloud applications.",
    sections: [
      { heading: "Functional & Regression Testing", body: "Our testing teams provide thorough functional validation across all application layers — UI, API, and database — ensuring that every release meets specification and that no regressions escape to production. Our risk-based testing approach prioritizes test coverage where business impact is greatest." },
      { heading: "Performance & Security Testing", body: "Load testing, stress testing, and performance benchmarking ensure applications can handle peak traffic without degradation. Our security testing services — including vulnerability assessments and penetration testing conducted by certified ethical hackers — identify and remediate security weaknesses before they become exploitable vulnerabilities." },
    ],
  },
  "automatic-fare-collection": {
    title: "Automatic Fare Collection",
    breadcrumb: ["Technologies", "/technologies"],
    intro: "Smart mobility and transit ticketing systems for metros, buses, parking, and public transport.",
    sections: [
      { heading: "AFC Systems & Integration", body: "GTS Techs brings multi-decade expertise in designing, deploying, and maintaining automatic fare collection systems for public transport operators worldwide. Our AFC solutions span gate hardware integration, ticketing server architecture, back-office settlement systems, and passenger-facing mobile ticketing applications — all built on open, interoperable standards." },
      { heading: "Account-Based Ticketing", body: "Account-based ticketing represents the modern standard for urban mobility: passengers tap their contactless bank card or mobile device, and the system calculates the optimal fare in the back office. We have delivered ABT systems across multiple transit networks, enabling seamless multi-modal travel without dedicated smart cards." },
      { heading: "Open-Loop & NFC Payments", body: "Our open-loop payment implementations allow commuters to use any contactless EMV card or NFC-enabled device across the transit network. This removes barriers to adoption and reduces the cost of card distribution, while integration with transport management systems enables dynamic pricing and demand management capabilities." },
    ],
  },

  // ---- OPERATIONS ----
  operations: {
    title: "Digital Operations",
    intro: "Intelligent BPM services that transform finance, insurance, healthcare, and content operations.",
    sections: [
      { heading: "Operations Pillars", body: "Our digital operations practice spans four core areas: Digital Finance, Automation, the FINATO platform, and Digital Content services. Across each area, we combine deep domain expertise with AI-powered tools and global delivery scale to deliver measurable operational improvement for our clients." },
    ],
  },
  "digital-finance": {
    title: "Digital Finance",
    breadcrumb: ["Operations", "/operations"],
    intro: "Transform CFO back-office operations with AI-driven finance process management.",
    sections: [
      { heading: "Finance BPM Services", body: "Our digital finance services cover the full range of CFO-managed processes: finance and accounting outsourcing, banking operations, insurance process management, and healthcare back-office functions. Each service line combines domain specialists, AI automation, and analytics to reduce cost, increase accuracy, and improve process cycle times." },
      { heading: "AI-Powered Finance", body: "AI is fundamentally changing finance operations. Invoice processing automation, intelligent exception handling, predictive cash flow modeling, and AI-assisted account reconciliation are among the capabilities we embed in every finance operations engagement. The result is a finance function that operates with greater speed, accuracy, and insight than traditional models allow." },
    ],
  },
  "finance-accounting": {
    title: "Finance & Accounting Outsourcing",
    breadcrumb: ["Operations", "/operations"],
    intro: "End-to-end F&A services powered by AI, automation, and global delivery expertise.",
    sections: [
      { heading: "F&A Service Scope", body: "Our finance and accounting outsourcing covers procure-to-pay, order-to-cash, record-to-report, and financial planning and analysis. Clients benefit from a combination of skilled F&A professionals, AI-powered processing tools, and robust quality management frameworks that deliver accuracy rates exceeding 99.5% across all transaction types." },
      { heading: "Continuous Improvement", body: "Unlike traditional outsourcing models that deliver static cost savings, our F&A engagements are structured around continuous improvement. Regular process reviews, automation opportunity assessments, and benchmarking against industry best practices ensure that operational performance improves continuously over the life of the engagement." },
    ],
  },
  "banking-process": {
    title: "Banking Process Management",
    breadcrumb: ["Operations", "/operations"],
    intro: "Operations support for retail, commercial, and digital banking institutions.",
    sections: [
      { heading: "Banking BPM Services", body: "Our banking operations team provides KYC and AML processing, loan origination and servicing support, card operations management, payment reconciliation, and regulatory reporting assistance. Each function is staffed by banking domain specialists with deep knowledge of regulatory requirements across jurisdictions." },
      { heading: "Digital Banking Support", body: "As banks accelerate digital transformation, new operational models are required. We support digital banking operations including digital onboarding processing, dispute management, digital payment operations, and customer query handling — helping banks scale their digital channels without proportionally scaling headcount." },
    ],
  },
  "insurance-process": {
    title: "Insurance Process Management",
    breadcrumb: ["Operations", "/operations"],
    intro: "Policy administration, claims processing, and underwriting support for insurance carriers.",
    sections: [
      { heading: "Insurance Operations", body: "We provide end-to-end insurance process services across personal lines, commercial lines, specialty insurance, and reinsurance. Our insurance operations team handles policy issuance, endorsement processing, renewal management, claims first notification of loss, claims assessment support, and reinsurance bordereau processing with high accuracy and regulatory compliance." },
      { heading: "Automation in Insurance", body: "AI and automation are transforming insurance operations. Our intelligent document processing solutions extract data from complex insurance forms, policy documents, and claim submissions with high accuracy. Automated straight-through processing routes simple cases without human intervention, reserving adjuster time for complex and high-value claims." },
    ],
  },
  "healthcare-process": {
    title: "Healthcare Process Management",
    breadcrumb: ["Operations", "/operations"],
    intro: "Clinical and administrative operations for healthcare providers, payers, and life sciences.",
    sections: [
      { heading: "Healthcare BPO Services", body: "Our healthcare operations practice delivers revenue cycle management, medical billing and coding, claims adjudication, provider data management, and prior authorization processing. Every team member is trained in HIPAA compliance, ICD-10 coding standards, and payer-specific claim requirements to ensure accurate and compliant processing." },
      { heading: "AI in Healthcare Operations", body: "AI is dramatically improving the efficiency of healthcare operations. Automated prior authorization, AI-assisted medical coding review, predictive denial management, and intelligent claims routing reduce administrative burden on clinical staff while improving revenue capture rates for providers and reducing operational costs for payers." },
    ],
  },
  automation: {
    title: "Intelligent Automation",
    breadcrumb: ["Operations", "/operations"],
    intro: "Generative AI–powered automation across enterprise operations.",
    sections: [
      { heading: "Automation Platform", body: "Our intelligent automation platform combines robotic process automation (TruBot), intelligent document processing (TruCap+), and agentic AI (TruAgent) into a unified orchestration layer. This integrated architecture enables end-to-end process automation from document ingestion through decision-making and output delivery without human intervention for eligible transactions." },
    ],
  },
  "intelligent-automation": {
    title: "Intelligent Automation Platform",
    breadcrumb: ["Operations", "/operations"],
    intro: "A unified platform combining RPA, IDP, and Agentic AI, available on Microsoft Azure Marketplace.",
    sections: [
      { heading: "Platform Capabilities", body: "The GTS Techs Intelligent Automation Platform orchestrates multiple automation technologies through a single management interface. Process designers, data scientists, and operations managers can configure, monitor, and optimize automation workflows without deep coding expertise, accelerating the time required to deploy new automation use cases." },
      { heading: "Business Benefits", body: "Enterprises deploying our intelligent automation platform report 60-70% reduction in processing costs, 80%+ straight-through processing rates for eligible transactions, and 40% improvement in employee satisfaction as repetitive work is eliminated. Our platform comes with 30+ pre-built use cases and industry-specific templates that further reduce time-to-value." },
    ],
  },
  finato: {
    title: "GTS Techs FINATO",
    breadcrumb: ["Operations", "/operations"],
    intro: "AI-powered Finance & Accounting platform for end-to-end digital finance operations.",
    sections: [
      { heading: "FINATO Platform", body: "FINATO is GTS Techs' proprietary AI-powered finance operations platform designed for mid-market and enterprise clients. Built on a modular architecture, FINATO handles the complete F&A lifecycle from invoice receipt through payment execution, reconciliation, and financial reporting — all within a single, integrated environment that eliminates manual data transfer between systems." },
      { heading: "AI-Powered Modules", body: "Each FINATO module embeds AI capabilities specific to its function: intelligent invoice capture and validation, anomaly detection in payment processing, automated reconciliation matching, and AI-generated management reports. These capabilities deliver measurable improvements in accuracy, speed, and compliance across all finance operations." },
    ],
  },
  "procure-to-pay": {
    title: "Procure-to-Pay",
    breadcrumb: ["Operations", "/operations"],
    intro: "Automate the full P2P cycle from purchase requisition to supplier payment.",
    sections: [
      { heading: "P2P Process Coverage", body: "Our P2P services cover every step of the procurement and payables cycle: purchase requisition management, purchase order processing, goods receipt matching, invoice capture and validation, three-way matching, approval routing, and payment execution. AI automation handles routine invoices straight-through, with exceptions routed to specialists for efficient resolution." },
      { heading: "Supplier Management", body: "Effective P2P requires active supplier relationship management. We manage vendor master data, handle supplier onboarding and offboarding, process supplier queries, and provide supplier performance reporting. Accurate, well-maintained vendor data is fundamental to P2P efficiency and fraud prevention." },
    ],
  },
  "order-to-cash": {
    title: "Order-to-Cash",
    breadcrumb: ["Operations", "/operations"],
    intro: "Streamline the complete O2C cycle from order entry to cash application.",
    sections: [
      { heading: "O2C Service Coverage", body: "Our order-to-cash services span order management, credit management, billing and invoicing, collections management, dispute resolution, and cash application. We serve B2B businesses with complex billing arrangements and high transaction volumes, applying AI to accelerate cash application and identify collection risks before they become bad debts." },
      { heading: "Cash Flow Optimization", body: "Effective O2C management directly impacts cash flow. Our services reduce days sales outstanding (DSO), increase on-time payment rates, and minimize unapplied cash. Predictive analytics identify customers at risk of late payment early enough for proactive intervention, improving working capital without damaging customer relationships." },
    ],
  },
  "record-to-report": {
    title: "Record-to-Report",
    breadcrumb: ["Operations", "/operations"],
    intro: "Faster, more accurate accounting close and financial reporting cycles.",
    sections: [
      { heading: "Close Process Excellence", body: "Month-end and year-end close are perennial pain points for finance teams. Our R2R services systematically reduce close cycle times by automating journal entries, reconciliations, and accruals. Our close acceleration methodology — combining process redesign, automation, and skilled accounting professionals — typically reduces close timelines by 30-50%." },
      { heading: "Financial Reporting", body: "Accurate, timely financial reporting is a non-negotiable for public companies and highly regulated enterprises. Our R2R team produces statutory accounts, management accounts, board packs, and regulatory filings in accordance with IFRS, GAAP, and local accounting standards, supported by thorough quality review processes." },
    ],
  },
  fpa: {
    title: "Financial Planning & Analysis",
    breadcrumb: ["Operations", "/operations"],
    intro: "FP&A services to support budgeting, forecasting, and strategic financial decision-making.",
    sections: [
      { heading: "Budgeting & Forecasting", body: "Accurate budgeting and rolling forecasts are the foundation of effective financial management. Our FP&A team builds and maintains budget models, coordinates the annual planning cycle across business units, produces driver-based forecasts, and delivers variance analysis that helps management understand financial performance drivers quickly and accurately." },
      { heading: "Decision Support Analytics", body: "Beyond budgets and forecasts, our FP&A services provide scenario modeling, sensitivity analysis, capital allocation analysis, and financial due diligence support. These analytical capabilities transform the finance function from a backward-looking reporting engine into a genuine business partnering resource." },
    ],
  },
  "digital-content": {
    title: "Digital Content Services",
    breadcrumb: ["Operations", "/operations"],
    intro: "Content creation, management, digitization, and localization at enterprise scale.",
    sections: [
      { heading: "Content Production & Editorial", body: "We provide editorial and content production services for publishers, media companies, e-commerce businesses, and corporate communications teams. Our content operations capabilities span writing, editing, fact-checking, SEO optimization, and content calendar management, supported by AI-powered content tools that increase production efficiency without sacrificing quality." },
      { heading: "Digitization & Localization", body: "Large-scale document digitization, data extraction, and localization services enable clients to unlock value from physical archives and reach global audiences. Our digitization operations combine high-resolution scanning, AI-powered OCR, quality verification, and structured data export — converting millions of documents into searchable, accessible digital assets." },
    ],
  },

  // ---- EXPERIENCES ----
  experiences: {
    title: "Digital Experiences",
    intro: "Data-driven intelligence embedded in every customer touchpoint.",
    sections: [
      { heading: "CX Pillars", body: "Our digital experiences practice spans three strategic pillars: contact center transformation, digital proctoring, and research and analytics. Together, these capabilities help enterprises design, deliver, and continuously improve customer experiences that drive loyalty, retention, and competitive differentiation." },
    ],
  },
  "contact-center": {
    title: "Contact Center CX Services",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Transform your contact center with AI-augmented human expertise for superior customer outcomes.",
    sections: [
      { heading: "Contact Center Transformation", body: "Modern contact centers must balance efficiency, quality, and employee experience simultaneously. We help enterprises transform their contact center operations through a combination of AI-powered agent assist tools, optimized workforce management, omnichannel platform implementation, and continuous quality management programs." },
      { heading: "Technology & Analytics", body: "Our contact center technology stack includes conversational AI for deflection and automation, speech analytics for quality monitoring and compliance, workforce management platforms for schedule optimization, and real-time agent guidance tools. Analytics from these systems feed a continuous improvement cycle that progressively improves first-contact resolution and customer satisfaction." },
    ],
  },
  "customer-care": {
    title: "Customer Care",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Omnichannel customer care services with AI-augmented agents for consistent, high-quality interactions.",
    sections: [
      { heading: "Omnichannel Delivery", body: "Customers expect consistent service regardless of whether they engage by voice, chat, email, social media, or messaging platforms. Our customer care services are designed for true omnichannel consistency — with unified agent desktops, shared interaction history, and consistent quality standards across every channel." },
      { heading: "AI-Augmented Agents", body: "AI augmentation transforms agent productivity and quality. Our agent assist tools surface relevant knowledge, suggest responses, summarize interaction history, and flag compliance requirements in real time during customer interactions. This support allows agents to handle more complex queries, resolve issues faster, and maintain higher satisfaction scores." },
    ],
  },
  "customer-loyalty": {
    title: "Customer Loyalty Management",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Loyalty program design, operations, and analytics to maximize customer retention.",
    sections: [
      { heading: "Loyalty Program Operations", body: "We manage end-to-end loyalty program operations for retail, hospitality, financial services, and telecommunications clients. Services include points accounting, reward fulfillment, member communications, campaign execution, partner management, and dispute resolution — all delivered with the accuracy and timeliness that loyalty program members expect." },
      { heading: "Retention Analytics", body: "Data science applied to loyalty data surfaces powerful retention insights. Our analytics team builds churn prediction models, identifies at-risk member segments, designs targeted re-engagement campaigns, and measures the incrementality of loyalty benefits. These insights enable clients to allocate retention investment where it generates the highest return." },
    ],
  },
  "trust-and-safety": {
    title: "Trust and Safety",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Content moderation and platform trust services to protect users and brand reputation.",
    sections: [
      { heading: "Content Moderation", body: "User-generated content requires active moderation to ensure platforms remain safe, compliant, and brand-appropriate. Our content moderation teams — supported by AI-powered pre-screening tools — review text, image, audio, and video content at scale, applying client-specific community guidelines and regulatory requirements across multiple languages and cultural contexts." },
      { heading: "Fraud & Abuse Prevention", body: "Platform trust requires active defense against fraud, fake accounts, spam, and coordinated inauthentic behaviour. We provide account integrity operations, review queue management for suspicious activity, appeals handling, and fraud pattern analysis — working alongside client trust and safety engineering teams to continuously raise the quality bar." },
    ],
  },
  "customer-analytics": {
    title: "Customer Analytics",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Deep insights from voice, text, and interaction data to optimize customer experience.",
    sections: [
      { heading: "Speech & Text Analytics", body: "Our speech analytics capabilities process 100% of recorded contact center interactions to extract quality scores, compliance flags, customer sentiment, and topic trends. Unlike manual quality sampling, full-population analytics ensures that issues are identified and addressed before they affect large customer volumes." },
      { heading: "Customer Journey Analytics", body: "Understanding the complete customer journey — across digital and human channels — reveals friction points, drop-off moments, and experience gaps that would be invisible when analyzing individual channels in isolation. Our journey analytics capabilities map end-to-end customer flows and quantify the business impact of each touchpoint improvement." },
    ],
  },
  "customer-consulting": {
    title: "Customer Management Consulting",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "CX strategy, operating model design, and technology selection for enterprise CX transformation.",
    sections: [
      { heading: "CX Strategy", body: "A coherent CX strategy aligns customer experience investments with business outcomes. Our CX consulting practice helps enterprises define their customer experience vision, map current-state capabilities against best practice, prioritize transformation initiatives, and build the business case for CX investment that resonates with the CFO and Board." },
      { heading: "Operating Model Design", body: "The right CX operating model determines whether a transformation delivers its promised benefits. We design target operating models that clearly define roles, responsibilities, governance structures, and performance management frameworks for CX functions — ensuring that organizational design supports, rather than constrains, the desired customer experience." },
    ],
  },
  "digital-proctoring": {
    title: "Digital Proctoring Services",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "AI-augmented remote proctoring for secure, scalable online assessments.",
    sections: [
      { heading: "Proctoring Services", body: "GTS Techs delivers live, recorded, and AI-powered remote proctoring services for professional certification bodies, academic institutions, and corporate training programs. Our proctors are trained in assessment security, exam incident management, and accessible proctoring protocols — ensuring a consistent and fair experience for all test-takers." },
      { heading: "AI Proctoring Technology", body: "Our AI proctoring engine monitors exam sessions for suspicious behaviors including identity verification, eye movement analysis, audio detection, and screen monitoring — without collecting biometric data that would create compliance risk. AI flags are reviewed by trained human reviewers before any academic integrity actions are taken." },
      { heading: "Scalability & Compliance", body: "Our proctoring infrastructure is designed for peak exam periods, scaling to tens of thousands of simultaneous sessions without service degradation. Data handling, video storage, and incident reporting are managed in compliance with FERPA, GDPR, and institution-specific data governance requirements." },
    ],
  },
  "research-analytics": {
    title: "Research & Analytics",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Consumer research and analytics services for global brands, agencies, and research firms.",
    sections: [
      { heading: "Market Research Operations", body: "We provide end-to-end market research operations support including survey programming, data collection, coding and categorization, data processing, and statistical analysis. Our research operations teams combine domain knowledge with advanced tools to deliver high-quality data on demanding timelines for global research programs." },
      { heading: "Advanced Analytics", body: "Beyond basic reporting, our analytics team applies advanced statistical and machine learning techniques to research data: conjoint analysis, MaxDiff, cluster analysis, driver analysis, and text analytics. These capabilities convert raw research data into strategic insights that inform product development, marketing strategy, and customer experience decisions." },
    ],
  },
  "xm-consulting": {
    title: "Experience Management Consulting",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Build and operationalize experience management programs that drive measurable business value.",
    sections: [
      { heading: "XM Program Design", body: "Experience management programs — encompassing customer experience, employee experience, and product experience — require careful design to generate actionable insights. We help organizations select and configure XM platforms, design measurement frameworks, establish feedback collection programs, and build closed-loop action management processes." },
      { heading: "Program Operationalization", body: "Design alone does not create XM value — operationalization does. We support clients through the implementation of XM programs, training of program managers and action owners, integration of XM data with operational systems, and development of executive dashboards that make experience data accessible to decision-makers." },
    ],
  },
  gcc: {
    title: "GCC for Market Research",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "A dedicated Global Capability Center delivery model for market research operations.",
    sections: [
      { heading: "GCC Model for Research", body: "Global research agencies and corporate research functions increasingly benefit from dedicated capability centers that provide scale, consistency, and cost efficiency unavailable from traditional project-based outsourcing. Our GCC model for market research provides embedded teams of research specialists who work as a seamless extension of the client's research organization." },
      { heading: "Capabilities & Talent", body: "Our research GCC teams cover quantitative and qualitative research operations, survey programming across major platforms, data processing, coding, analysis, visualization, and reporting. Team members hold research certifications and are trained in client-specific methodologies, quality standards, and project management protocols." },
    ],
  },
  "research-technology": {
    title: "Research Technology",
    breadcrumb: ["Experiences", "/experiences"],
    intro: "Modern research technology platforms, tools, and pipelines for high-velocity research operations.",
    sections: [
      { heading: "Survey Platform Engineering", body: "We design and build custom survey platforms and questionnaire engines tailored to complex research requirements including adaptive questioning logic, multi-language support, offline data collection, and integration with panel platforms. Our engineering team works with Decipher, Confirmit, Qualtrics, and proprietary platforms." },
      { heading: "Data Pipeline & Analytics", body: "Research data pipelines — from raw collection through cleaning, weighting, tabulation, and visualization — require robust engineering to operate reliably at scale. We build and maintain automated data pipelines that eliminate manual processing steps, reduce errors, and accelerate data delivery from collection closure to final deliverable." },
    ],
  },

  // ---- PRODUCTS ----
  products: {
    title: "GTS Techs Products",
    intro: "An award-winning portfolio of AI, automation, BI, and CX products built for enterprise scale.",
    sections: [
      { heading: "Product Portfolio", body: "Our product portfolio addresses the full spectrum of enterprise digital needs: intelligent automation with TruBot and TruCap+, business intelligence with TruBI, contact center transformation with SuperCX, underwriting automation with TruAI, discovery acceleration with TruDiscovery, finance operations with FINATO, and agentic AI with TruAgent." },
    ],
  },
  supercx: {
    title: "SuperCX",
    breadcrumb: ["Products", "/products"],
    intro: "An omnichannel digital transformation platform for modern contact centers.",
    sections: [
      { heading: "Platform Capabilities", body: "SuperCX delivers a unified platform for contact center operations combining omnichannel routing, conversational AI, workforce management, quality monitoring, analytics, and agent performance management in a single, integrated environment. The platform is cloud-native, API-first, and designed for rapid deployment in complex enterprise environments." },
      { heading: "AI-Powered Experience", body: "AI is embedded throughout the SuperCX platform: intelligent routing that considers agent skills, customer history, and predicted interaction complexity; AI-powered agent assist that surfaces knowledge and suggests responses in real time; automated post-interaction summarization that eliminates after-call work; and conversational AI that resolves routine inquiries without agent involvement." },
    ],
  },
  trubot: {
    title: "TruBot — RPA Platform",
    breadcrumb: ["Products", "/products"],
    intro: "Enterprise-grade robotic process automation for end-to-end business process automation.",
    sections: [
      { heading: "RPA at Scale", body: "TruBot is GTS Techs' enterprise RPA platform, designed for large-scale deployment across complex, multi-system environments. The platform provides a visual process designer, centralized bot management, real-time performance monitoring, and built-in exception handling — everything needed to build, deploy, and govern hundreds of automation bots reliably." },
      { heading: "Integration Ecosystem", body: "TruBot integrates natively with SAP, Oracle, Salesforce, ServiceNow, and all major web and desktop applications. Pre-built connectors and an API integration framework allow rapid automation of processes spanning multiple systems without complex custom development." },
    ],
  },
  trucap: {
    title: "TruCap+ — Intelligent Document Processing",
    breadcrumb: ["Products", "/products"],
    intro: "AI-powered intelligent document processing for unstructured document automation.",
    sections: [
      { heading: "Document Intelligence", body: "TruCap+ applies AI and machine learning to extract structured data from unstructured documents including invoices, contracts, identity documents, forms, medical records, and correspondence. Pre-trained models for common document types deliver immediate accuracy without extensive training data, while self-learning capabilities continuously improve extraction accuracy over time." },
      { heading: "Processing at Scale", body: "TruCap+ is designed for high-volume, production-grade document processing. The platform handles millions of documents monthly with high throughput, parallel processing, and automated quality validation. Configurable exception routing ensures that low-confidence extractions are reviewed by human operators before downstream processing." },
    ],
  },
  trubi: {
    title: "TruBI — Business Intelligence Platform",
    breadcrumb: ["Products", "/products"],
    intro: "Self-service business intelligence and analytics for data-driven decision-making.",
    sections: [
      { heading: "BI Platform Capabilities", body: "TruBI provides a comprehensive BI and analytics environment combining self-service data exploration, interactive dashboards, scheduled reporting, and embedded analytics. The platform connects to all major data sources and warehouses, providing a single analytics layer that serves diverse user populations from executives to data analysts." },
      { heading: "AI-Augmented Analytics", body: "TruBI embeds natural language querying, AI-generated insights, and automated anomaly detection that make analytics accessible to non-technical users. Business users can ask questions in plain English, receive instant visualizations, and receive proactive alerts when KPIs deviate from expected patterns — without requiring assistance from data teams." },
    ],
  },
  "truai-underwriting": {
    title: "TruAI Underwriting",
    breadcrumb: ["Products", "/products"],
    intro: "AI-powered underwriting automation for faster, more consistent risk decisions.",
    sections: [
      { heading: "Underwriting Automation", body: "TruAI Underwriting applies machine learning and rules-based automation to streamline the underwriting decision process for personal and commercial lines insurers. The platform ingests application data, third-party enrichment sources, and historical loss data to generate risk scores, coverage recommendations, and pricing guidance — dramatically reducing the time underwriters spend on routine submissions." },
      { heading: "Decision Support", body: "For complex risks requiring human judgment, TruAI Underwriting functions as an intelligent decision support tool, surfacing relevant risk factors, comparable accounts, portfolio exposure metrics, and reinsurance guidelines. This support improves underwriting consistency while allowing experienced underwriters to focus on the strategic and relationship aspects of the role." },
    ],
  },
  trudiscovery: {
    title: "TruDiscovery",
    breadcrumb: ["Products", "/products"],
    intro: "AI-powered eDiscovery and legal document review acceleration.",
    sections: [
      { heading: "eDiscovery Automation", body: "TruDiscovery applies AI to dramatically accelerate the document review phase of legal proceedings and regulatory investigations. The platform uses predictive coding, concept clustering, and email threading to prioritize relevant documents, reducing the volume requiring human review by 70-80% compared to linear review approaches." },
      { heading: "Compliance & Audit", body: "Beyond litigation support, TruDiscovery serves compliance investigation and internal audit use cases where rapid document review is essential. The platform maintains a complete audit trail of review decisions, supports custodian hold management, and provides defensible documentation of the review process for regulatory proceedings." },
    ],
  },
  "finato-product": {
    title: "FINATO — Finance Operations Platform",
    breadcrumb: ["Products", "/products"],
    intro: "AI-powered, cloud-native finance and accounting operations platform.",
    sections: [
      { heading: "FINATO Product Features", body: "FINATO is a purpose-built finance operations platform that combines AI-powered document processing, intelligent workflow automation, real-time analytics, and seamless ERP integration into a single solution. Modular design allows clients to deploy individual components — AP automation, AR management, reconciliation, or reporting — and expand over time as needs evolve." },
      { heading: "ROI & Business Case", body: "FINATO clients typically achieve 50-70% reduction in invoice processing costs, 90%+ straight-through processing rates for standard invoices, and significant reductions in processing cycle time and exception rates. The platform typically pays back implementation investment within 12-18 months through direct cost savings and working capital improvement." },
    ],
  },
  truagent: {
    title: "TruAgent — Agentic AI Platform",
    breadcrumb: ["Products", "/products"],
    intro: "Next-generation agentic AI for autonomous multi-step enterprise process execution.",
    sections: [
      { heading: "Agentic AI Capabilities", body: "TruAgent represents the next evolution of enterprise automation: AI agents that plan, execute, monitor, and adapt complex multi-step processes autonomously. Unlike traditional RPA which follows rigid scripts, TruAgent uses large language models and tool-use capabilities to navigate dynamic processes, handle exceptions intelligently, and collaborate with human workers when needed." },
      { heading: "Enterprise Deployment", body: "TruAgent is built for enterprise deployment with full support for access control, audit logging, human-in-the-loop oversight, and integration with existing enterprise systems. Governance frameworks allow organizations to define the boundaries of autonomous AI action, ensuring that agents operate safely within approved parameters while delivering the efficiency benefits of autonomous operation." },
    ],
  },

  // ---- INDUSTRIES ----
  industries: {
    title: "Industries",
    intro: "Deep domain expertise across twelve major industry verticals.",
    sections: [
      { heading: "Industry-Specific Solutions", body: "Generic technology solutions rarely deliver maximum value in complex industry contexts. GTS Techs brings deep domain expertise across twelve major verticals, enabling us to design solutions that address industry-specific regulatory requirements, operating model constraints, and competitive dynamics — not just generic technology best practices." },
    ],
  },
  banking: {
    title: "Banking & Financial Services",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital transformation, operations, and AI solutions for banks and financial institutions.",
    sections: [
      { heading: "Industry Context", body: "Banking and financial services are undergoing profound transformation driven by digital challenger banks, evolving customer expectations, regulatory complexity, and the growing potential of AI. GTS Techs has served financial institutions for over four decades, building deep knowledge of banking operations, regulatory frameworks, and technology landscapes across retail, commercial, and investment banking." },
      { heading: "Our Solutions", body: "We provide end-to-end digital services for banks: core banking modernization advisory, digital channel transformation, AI-powered credit decisioning, KYC/AML operations, payment processing support, and financial crime analytics. Our solutions are designed with regulatory compliance — Basel III, PSD2, Open Banking, DORA — embedded from inception." },
    ],
  },
  insurance: {
    title: "Insurance",
    breadcrumb: ["Industries", "/industries"],
    intro: "Technology, operations, and AI services for P&C, life, health, and specialty insurers.",
    sections: [
      { heading: "Insurance Expertise", body: "Insurance is one of our deepest areas of domain expertise. We serve global carriers, regional insurers, MGAs, and reinsurers across personal lines, commercial lines, specialty, and life and health. Our insurance specialists understand actuarial concepts, underwriting workflows, claims economics, and the regulatory requirements of major markets including Lloyd's, EU Solvency II, and US state-by-state frameworks." },
      { heading: "Solutions", body: "Our insurance solutions span AI-powered underwriting, intelligent claims processing, digital policy administration, fraud analytics, customer self-service transformation, and reinsurance operations. We help insurers reduce combined ratios, accelerate policy issuance, and improve customer satisfaction simultaneously." },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital operations and technology solutions for discrete and process manufacturers.",
    sections: [
      { heading: "Manufacturing Challenges", body: "Manufacturers face a unique combination of operational complexity, supply chain volatility, workforce transition, and sustainability pressure. Digital transformation in manufacturing requires solutions that integrate with OT systems, address shop floor realities, and deliver ROI in environments where margins are thin and operational continuity is critical." },
      { heading: "Our Approach", body: "We help manufacturers digitize back-office operations — finance, procurement, HR, customer service — freeing operational management to focus on production excellence. Our AI and analytics capabilities bring predictive insights to supply chain planning, quality management, and asset performance, enabling data-driven decisions at every level of the manufacturing organization." },
    ],
  },
  logistics: {
    title: "Logistics",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital solutions for freight, warehousing, and supply chain visibility.",
    sections: [
      { heading: "Logistics Transformation", body: "The logistics industry is being reshaped by e-commerce growth, real-time visibility demands, autonomous vehicle technology, and sustainability requirements. We help logistics providers modernize back-office operations, build customer-facing digital capabilities, and apply AI to route optimization, demand forecasting, and predictive maintenance." },
      { heading: "Our Solutions", body: "Our logistics technology solutions include shipment tracking and visibility platforms, freight audit and pay automation, digital customs documentation processing, warehouse management system support, and customer care services for last-mile delivery operations. We combine technology implementation with managed operations to provide a complete solution." },
    ],
  },
  healthcare: {
    title: "Healthcare",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital solutions for healthcare providers, payers, and life sciences organizations.",
    sections: [
      { heading: "Healthcare Focus", body: "Healthcare organizations face a dual mandate: delivering better patient outcomes while controlling costs in an environment of intense regulatory scrutiny. Our healthcare solutions address both dimensions — streamlining administrative operations to reduce cost and burden on clinical staff, while applying AI and analytics to support better clinical and operational decisions." },
      { heading: "Our Solutions", body: "We serve hospitals, health systems, insurance payers, and life sciences companies with services spanning revenue cycle management, claims processing, clinical documentation improvement, regulatory submission support, pharmacovigilance operations, and patient engagement technology. HIPAA compliance and clinical data security are non-negotiable foundations of every engagement." },
    ],
  },
  technology: {
    title: "Technology",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital services and solutions for software companies, ISVs, and technology enterprises.",
    sections: [
      { heading: "Serving Technology Companies", body: "Technology companies have unique needs: rapid scaling, global operations, sophisticated technical buyers, and the expectation that every partner operates at the cutting edge. We serve software companies, platform businesses, semiconductor firms, and IT services companies with services designed to match their pace and technical sophistication." },
      { heading: "Our Solutions", body: "Services for the technology sector include product engineering partnerships, QA and testing as a service, cloud operations, customer success operations, technical support delivery, content operations, and finance operations — all delivered by teams with the technical depth required to work seamlessly alongside engineering organizations." },
    ],
  },
  "travel-hospitality": {
    title: "Travel & Hospitality",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital transformation for airlines, hotels, travel management companies, and transit operators.",
    sections: [
      { heading: "Travel Industry Dynamics", body: "Travel and hospitality companies must balance operational efficiency with exceptional customer experience in an industry where margins are thin and customer expectations are exceptionally high. Digital transformation in this sector must address both the complexity of global operations and the personal nature of travel experiences." },
      { heading: "Our Solutions", body: "Our travel and hospitality solutions include automatic fare collection systems for transit operators, customer care services for airlines and hotels, loyalty program operations, back-office finance operations, and digital content management. We help travel companies operate more efficiently while delivering the personalized experiences that build customer loyalty." },
    ],
  },
  "credit-rating": {
    title: "Credit Rating",
    breadcrumb: ["Industries", "/industries"],
    intro: "Specialized data operations and analytics services for credit rating agencies.",
    sections: [
      { heading: "Rating Agency Support", body: "Credit rating agencies require specialized operational support for data collection, financial analysis, surveillance monitoring, and research publication. We provide dedicated teams trained in financial analysis, rating methodologies, and the regulatory requirements governing rating agency operations in major markets." },
      { heading: "Data Operations", body: "Accurate, timely data is the foundation of the rating process. Our data operations teams collect, validate, and structure financial data from issuers, markets, and third-party data providers — ensuring that analysts have reliable, current information available when they need it to support rating committee preparations and surveillance reviews." },
    ],
  },
  "international-organisations": {
    title: "International Organisations",
    breadcrumb: ["Industries", "/industries"],
    intro: "Specialized operations and technology support for international organizations and NGOs.",
    sections: [
      { heading: "Unique Requirements", body: "International organizations — including UN agencies, multilateral development banks, and international NGOs — operate across unique regulatory environments, procurement frameworks, and cultural contexts. Our experience serving international organizations gives us deep familiarity with the governance structures, procurement rules, and stakeholder dynamics that distinguish these institutions from commercial enterprises." },
      { heading: "Our Services", body: "We provide data management, research analytics, publication services, and back-office operations support tailored to the specific requirements of international organizations. Our teams include specialists in development economics, public health data, environmental reporting, and the program monitoring frameworks used by major aid and development institutions." },
    ],
  },
  retail: {
    title: "Retail",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital commerce, operations, and analytics solutions for retail and e-commerce businesses.",
    sections: [
      { heading: "Retail Challenges", body: "Retailers operate in an environment of compressed margins, omnichannel complexity, supply chain volatility, and rapidly evolving consumer expectations. Digital transformation in retail must deliver tangible results across customer experience, inventory management, and operational efficiency simultaneously." },
      { heading: "Our Solutions", body: "Our retail solutions include e-commerce operations support, customer service delivery, loyalty program management, finance and accounts payable automation, digital content production, and customer analytics. We help retailers operate their digital and physical channels more efficiently while building the customer data capabilities needed to compete effectively." },
    ],
  },
  education: {
    title: "Education",
    breadcrumb: ["Industries", "/industries"],
    intro: "Digital solutions for higher education institutions, edtech companies, and certification bodies.",
    sections: [
      { heading: "Education Technology", body: "Education is being transformed by digital learning platforms, assessment innovation, and the growing demand for lifelong learning. We serve universities, professional certification bodies, edtech companies, and corporate learning functions with services that support the delivery of high-quality educational experiences at scale." },
      { heading: "Our Solutions", body: "Our education solutions include remote digital proctoring services, research and analytics support for academic institutions, learning management platform implementation, student support operations, and content production and localization. We help educational institutions maintain academic integrity while expanding access and improving learner experience." },
    ],
  },
  "market-research": {
    title: "Market Research",
    breadcrumb: ["Industries", "/industries"],
    intro: "Operations and technology services for market research agencies and corporate insights functions.",
    sections: [
      { heading: "Research Industry Expertise", body: "Market research is a data-intensive industry that rewards operational excellence and analytical depth. We serve global research agencies, boutique specialists, and corporate insights teams with end-to-end research operations support that combines domain expertise with advanced technology to improve speed, quality, and insight depth." },
      { heading: "Our Services", body: "Our market research services include survey programming, data collection management, coding and categorization, data processing and cleaning, statistical analysis, visualization, and reporting — across quantitative, qualitative, and mixed-methods research designs. We support all major research methodologies and platforms." },
    ],
  },

  // ---- RESOURCES ----
  resources: {
    title: "Resources",
    intro: "Insights, research, and tools to inform your digital transformation journey.",
    sections: [
      { heading: "Knowledge Library", body: "Our resources library contains hundreds of case studies, white papers, analyst reports, webinars, and blogs covering the latest developments in AI, automation, digital finance, customer experience, and industry-specific transformation. All content is produced by GTS Techs subject matter experts and reflects real-world experience from our client engagements." },
    ],
  },

  // ---- STANDALONE ----
  careers: {
    title: "Careers at GTS Techs",
    intro: "Join a team of 6,500+ digital innovators across four continents.",
    sections: [
      { heading: "Why GTS Techs", body: "GTS Techs is consistently recognized as a great place to work. We invest in continuous learning, provide opportunities for international exposure, and build a culture where innovation is encouraged at every level. Our teams work on complex, meaningful problems for marquee clients across the world's most dynamic industries." },
      { heading: "Open Positions", body: "We have opportunities across technology, data science, business process management, client delivery, and corporate functions. Our hiring focuses on problem-solvers, continuous learners, and professionals who combine domain expertise with genuine curiosity about technology's potential to transform business." },
    ],
    cta: { label: "View Open Positions", href: "https://careers.gtstechs.com", external: true },
  },
  "press-releases": {
    title: "Press Releases",
    intro: "Latest announcements from GTS Tech and Infra Solutions.",
    sections: [
      { heading: "Recent News", body: "Stay informed about GTS Techs' latest partnerships, product launches, industry recognitions, financial results, and corporate milestones. Our press releases provide official information for media, investors, and stakeholders." },
    ],
  },
  events: {
    title: "Events",
    intro: "GTS Techs conferences, webinars, and industry event participations.",
    sections: [
      { heading: "Upcoming Events", body: "GTS Techs participates in and hosts industry conferences, executive roundtables, product webinars, and innovation showcases throughout the year. These events provide opportunities to explore emerging technologies, exchange best practices with industry peers, and learn from GTS Techs subject matter experts." },
    ],
  },
  investors: {
    title: "Investor Relations",
    intro: "Financial information and corporate governance for investors in GTS Tech and Infra Solutions.",
    sections: [
      { heading: "Financial Information", body: "GTS Techs is listed on the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE) of India. Our investor relations section provides access to quarterly and annual financial results, analyst briefings, annual reports, and corporate governance documents for existing and prospective investors." },
      { heading: "Corporate Governance", body: "Good governance is fundamental to long-term value creation. GTS Techs adheres to the highest standards of corporate governance including independent board oversight, transparent financial reporting, robust internal controls, and proactive stakeholder engagement. Our governance policies and disclosures are available to all stakeholders." },
    ],
  },
  contact: {
    title: "Contact Us",
    intro: "Connect with GTS Techs across our global offices.",
    sections: [],
  },
};

// Resource sub-pages (all follow same minimal pattern)
export const resourceTopics = [
  { slug: "ai", title: "AI Resources", related: "/technologies/artificial-intelligence" },
  { slug: "digital-finance", title: "Digital Finance Resources", related: "/operations/digital-finance" },
  { slug: "intelligent-automation", title: "Intelligent Automation Resources", related: "/operations/intelligent-automation" },
  { slug: "ecm", title: "ECM Resources", related: "/technologies/ecm" },
  { slug: "rpa", title: "RPA Resources", related: "/products/trubot" },
  { slug: "afc", title: "Automatic Fare Collection Resources", related: "/technologies/automatic-fare-collection" },
  { slug: "big-data", title: "Big Data Resources", related: "/technologies/data-analytics" },
  { slug: "salesforce", title: "Salesforce Resources", related: "/technologies/salesforce" },
  { slug: "product-engineering", title: "Product Engineering Resources", related: "/technologies/product-engineering" },
  { slug: "cx", title: "Customer Experience Resources", related: "/experiences/contact-center" },
  { slug: "research-analytics", title: "Research & Analytics Resources", related: "/experiences/research-analytics" },
];

export const resourceTypes = [
  { slug: "testimonials", title: "Client Testimonials" },
  { slug: "case-studies", title: "Case Studies" },
  { slug: "demos", title: "Product Demos" },
  { slug: "analyst-reports", title: "Analyst Reports" },
  { slug: "whitepapers", title: "White Papers" },
  { slug: "brochures", title: "Brochures" },
  { slug: "thoughtcast", title: "Thoughtcast" },
  { slug: "webinars", title: "Webinars" },
  { slug: "infographics", title: "Infographics" },
  { slug: "blogs", title: "Blogs" },
  { slug: "newsletters", title: "Newsletters" },
  { slug: "media", title: "Media Coverage" },
];
