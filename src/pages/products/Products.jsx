import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const products = [
  {
    name: 'SuperCX',
    tagline: 'Omnichannel CX Platform',
    description: 'Unified contact-centre platform with AI-powered routing, conversational agents, and workforce management built for enterprise scale.',
    path: '/products/supercx',
  },
  {
    name: 'TruBot',
    tagline: 'RPA Platform',
    description: 'Enterprise-grade robotic process automation platform with a visual designer, centralised bot management, and real-time monitoring dashboards.',
    path: '/products/trubot',
  },
  {
    name: 'TruCap+',
    tagline: 'Intelligent Document Processing',
    description: 'AI-driven document intelligence that captures, classifies, and extracts structured data from any document type at high volume with self-learning accuracy.',
    path: '/products/trucap',
  },
  {
    name: 'TruBI',
    tagline: 'Business Intelligence Platform',
    description: 'Self-service analytics and interactive dashboards powered by natural language querying and embedded anomaly detection for faster, confident decisions.',
    path: '/products/trubi',
  },
  {
    name: 'TruAI Underwriting',
    tagline: 'AI-Powered Underwriting',
    description: 'Automated underwriting decisioning that applies risk scoring, coverage recommendations, and pricing guidance to accelerate policy issuance.',
    path: '/products/truai-underwriting',
  },
  {
    name: 'TruDiscovery',
    tagline: 'eDiscovery Platform',
    description: 'End-to-end eDiscovery automation with predictive coding, concept clustering, and a comprehensive audit trail to meet the most demanding compliance requirements.',
    path: '/products/trudiscovery',
  },
  {
    name: 'FINATO',
    tagline: 'Finance Operations Platform',
    description: 'AI-first finance operations platform that automates document processing, intelligent workflows, and real-time analytics across the entire finance function.',
    path: '/products/finato',
  },
  {
    name: 'TruAgent',
    tagline: 'Agentic AI Platform',
    description: 'Next-generation agentic AI platform that autonomously plans and executes multi-step enterprise workflows with human-in-the-loop controls and full audit logging.',
    path: '/products/truagent',
  },
];

export default function Products() {
  return (
    <div>
      <PageHeader
        title="GTS Techs Products"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['All Products']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Product Portfolio</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          GTS Techs builds enterprise software that fuses artificial intelligence, automation, business intelligence,
          and customer experience into a coherent product portfolio. Each product is designed to solve a specific
          operational challenge while integrating seamlessly with the broader GTS Techs ecosystem and third-party
          enterprise systems your teams already rely on.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          From robotic process automation and intelligent document processing to omnichannel CX and agentic AI,
          our products are deployed by leading enterprises across banking, insurance, manufacturing, logistics,
          and beyond. Every product ships with enterprise-grade security, audit controls, and the scalability
          to grow from a departmental pilot to organisation-wide deployment.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-6 shadow border-l-4 border-[#dc2626] flex flex-col gap-3">
                <div>
                  <h3 className="font-bold text-[#dc2626] text-xl mb-1">{p.name}</h3>
                  <span className="text-sm font-medium text-[#dc2626]">{p.tagline}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.description}</p>
                <Link
                  to={p.path}
                  className="inline-block text-sm font-semibold text-[#dc2626] hover:text-[#dc2626] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Automate Your Operations?"
        subtitle="Discover how TruBot RPA can eliminate repetitive work and free your teams for higher-value tasks."
        linkLabel="Explore TruBot"
        linkTo="/products/trubot"
      />
    </div>
  );
}
