import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const industries = [
  {
    icon: '🏦',
    name: 'Banking & Financial Services',
    description: 'Core banking modernisation, KYC/AML automation, AI credit decisioning, and regulatory compliance solutions for banks and fintechs.',
    path: '/industries/banking-financial-services',
  },
  {
    icon: '🛡️',
    name: 'Insurance',
    description: 'AI underwriting, automated claims management, and policy administration solutions across P&C, life, health, and specialty lines.',
    path: '/industries/insurance',
  },
  {
    icon: '🏭',
    name: 'Manufacturing',
    description: 'Back-office digitisation, predictive analytics, and intelligent automation solutions for discrete and process manufacturers globally.',
    path: '/industries/manufacturing',
  },
  {
    icon: '🚚',
    name: 'Logistics',
    description: 'Shipment tracking, freight audit, customs document processing, and supply-chain visibility solutions for 3PLs and carriers.',
    path: '/industries/logistics',
  },
  {
    icon: '🏥',
    name: 'Healthcare',
    description: 'Revenue cycle management, medical claims automation, and clinical documentation solutions for providers and payers.',
    path: '/industries/healthcare',
  },
  {
    icon: '💻',
    name: 'Technology',
    description: 'Product engineering, QA automation, cloud operations, and customer success solutions for software and technology companies.',
    path: '/industries/technology',
  },
  {
    icon: '✈️',
    name: 'Travel & Hospitality',
    description: 'Automated fare collection, customer care, and loyalty operations solutions for airlines, hotels, and OTAs.',
    path: '/industries/travel-hospitality',
  },
  {
    icon: '📊',
    name: 'Credit Rating',
    description: 'Specialised data operations, research support, and rating analytics solutions for credit rating agencies and financial data providers.',
    path: '/industries/credit-rating',
  },
  {
    icon: '🌐',
    name: 'International Organisations',
    description: 'Data management, research analytics, and publication support services tailored to the unique requirements of intergovernmental bodies.',
    path: '/industries/international-organisations',
  },
  {
    icon: '🛍️',
    name: 'Retail',
    description: 'E-commerce operations, loyalty programme management, AP automation, and content services for omnichannel retailers.',
    path: '/industries/retail',
  },
  {
    icon: '🎓',
    name: 'Education',
    description: 'Digital proctoring, LMS integration, student support automation, and content digitisation solutions for EdTech and higher education.',
    path: '/industries/education',
  },
  {
    icon: '🔬',
    name: 'Market Research',
    description: 'Survey programming, data processing, and advanced analytics solutions for market research agencies and consumer insights teams.',
    path: '/industries/market-research',
  },
];

export default function Industries() {
  return (
    <div>
      <PageHeader
        title="Industries We Serve"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['All Industries']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Deep Industry Expertise</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          GTS Techs brings more than three decades of domain expertise across twelve industry verticals, enabling
          us to deliver solutions that are grounded in the operational realities, regulatory requirements, and
          competitive dynamics of each sector we serve. Our industry-aligned teams combine technology depth with
          business-process knowledge to produce outcomes that generalist technology firms simply cannot match.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          From highly regulated sectors like banking, insurance, and healthcare — where compliance and auditability
          are non-negotiable — to fast-moving verticals like retail, logistics, and technology — where agility and
          scale are paramount — GTS Techs configures its AI, automation, and data platforms to the precise needs
          of each industry rather than applying generic solutions to complex, specialised challenges.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-xl p-6 shadow border-l-4 border-[#dc2626] flex flex-col gap-3">
                <div className="text-3xl">{ind.icon}</div>
                <h3 className="font-bold text-[#dc2626] text-lg">{ind.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{ind.description}</p>
                <Link
                  to={ind.path}
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
        title="See How We Transform Banking and Financial Services"
        subtitle="Discover our solutions for core banking modernisation, regulatory compliance, and AI-powered credit decisioning."
        linkLabel="Explore Banking & Financial Services"
        linkTo="/industries/banking-financial-services"
      />
    </div>
  );
}
