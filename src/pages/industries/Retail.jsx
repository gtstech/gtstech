import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'E-commerce Operations',
    description:
      'GTS Techs provides scalable e-commerce operations support covering order management, product catalogue maintenance, customer query handling, returns processing, and seller support for marketplace operators and direct-to-consumer retailers. AI-powered triage, chatbot self-service, and intelligent routing ensure e-commerce operations scale efficiently with peak demand without proportional headcount increases.',
  },
  {
    title: 'Loyalty Programme Management',
    description:
      'End-to-end loyalty operations services manage point accrual and redemption processing, tier management, partner integrations, member communications, and fraud monitoring for retail loyalty programmes at any scale. Our loyalty operations teams and automation platforms keep member satisfaction high while controlling the per-member cost of programme administration.',
  },
  {
    title: 'Accounts Payable Automation',
    description:
      'AI-powered AP automation solutions handle the high-volume, complex supplier invoice processing that characterises retail operations — managing multi-location PO matching, promotional allowance deductions, vendor compliance deductions, and payment term optimisation to maximise working capital efficiency. Integration with leading retail ERP and merchandise management systems ensures seamless data flow.',
  },
  {
    title: 'Product Content Services',
    description:
      'Comprehensive product content services cover product data enrichment, attribute standardisation, image processing, localisation, and publication-ready content production for retail catalogues, e-commerce platforms, and print channels. AI-assisted content generation and quality validation accelerate catalogue time-to-market for new product launches and seasonal range updates.',
  },
];

export default function Retail() {
  return (
    <div>
      <PageHeader
        title="Retail"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Retail']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Retail Challenges</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          The retail industry is navigating one of the most profound structural shifts in its history, as
          consumer behaviour continues to migrate to digital channels, competitive pressure from pure-play
          e-commerce intensifies, and the operational complexity of managing omnichannel fulfilment, loyalty
          engagement, and supplier relationships simultaneously reaches new heights. Physical and digital retail
          operations must now work as a seamless whole — demanding technology and operational capabilities
          that most traditional retailers have yet to fully develop.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs serves grocery chains, department stores, specialty retailers, fashion brands, marketplace
          operators, and consumer goods companies with AI, automation, and business process solutions that
          address the specific operational challenges of modern retail at scale. Our retail domain experts
          combine knowledge of retail technology platforms — SAP Retail, Oracle Retail, Salesforce Commerce,
          and leading marketplace APIs — with deep operational experience in the functions that drive retail
          profitability and customer loyalty.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Retailers</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our retail solutions focus on the four operational domains that most directly affect retail
            competitiveness and profitability: e-commerce operations, loyalty programme management, financial
            process efficiency, and product content quality. Each solution is designed for the high-volume,
            time-sensitive nature of retail operations, with scalable delivery models that flex with seasonal
            peaks and the rapid SKU-level changes that characterise fast-moving retail environments.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow border-l-4 border-[#dc2626]">
                <h3 className="font-bold text-[#dc2626] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Transforming Education with Digital Technology"
        subtitle="Digital proctoring, LMS integration, student support automation, and content digitisation for EdTech and higher education."
        linkLabel="Explore Education"
        linkTo="/industries/education"
      />
    </div>
  );
}
