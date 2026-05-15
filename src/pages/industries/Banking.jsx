import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Core Banking Modernisation',
    description:
      'We partner with banks to modernise legacy core banking infrastructure through phased API-first migration strategies that preserve operational continuity while unlocking the agility needed to compete with digital challengers. Our teams bring deep experience with leading core banking platforms including Temenos, Finacle, and FIS Systematics.',
  },
  {
    title: 'KYC and AML Automation',
    description:
      'AI-powered KYC onboarding and AML transaction monitoring solutions reduce false-positive rates, compress investigation timelines, and strengthen compliance posture across retail, corporate, and correspondent banking operations. Our solutions integrate with leading RegTech platforms and support FATF, FinCEN, and EU AML directive requirements.',
  },
  {
    title: 'AI Credit Decisioning',
    description:
      'Machine learning credit models ingest traditional and alternative data sources to produce more accurate, faster, and more inclusive credit decisions for retail loans, SME credit, and trade finance facilities. Explainability frameworks ensure decisions meet Fair Lending and model risk management regulatory expectations.',
  },
  {
    title: 'Regulatory Reporting Automation',
    description:
      'End-to-end regulatory reporting automation covers Basel IV, IFRS 9, CCAR, DFAST, and local central bank reporting requirements, replacing fragile spreadsheet-based processes with governed, auditable data pipelines that reduce reporting cycle times by 50% or more. Change management capabilities accommodate regulatory amendments without costly re-engineering.',
  },
];

export default function Banking() {
  return (
    <div>
      <PageHeader
        title="Banking & Financial Services"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Banking & Financial Services']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Context</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Banking and financial services institutions face simultaneous pressure from digital challenger banks
          that operate at a fraction of the cost, from regulators demanding ever-more granular reporting and
          robust compliance controls, and from customers whose expectations for frictionless digital experiences
          are set by the technology platforms they use every day. Navigating this environment requires
          modernisation investments that deliver both near-term efficiency gains and long-term strategic agility.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs has served banks, capital markets firms, payment processors, and fintechs for over two
          decades, deploying automation, AI, and data solutions that reduce operational cost, accelerate
          regulatory compliance, and improve the customer and employee experience across the front, middle,
          and back office. Our deep regulatory knowledge, combined with proven delivery methodology, makes
          us the trusted partner for financial institutions undertaking complex transformation programmes.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our banking and financial services solutions span the front-to-back office value chain, addressing
            the specific operational and regulatory challenges that consume disproportionate management attention
            and resource across the industry. Each solution is built on the GTS Techs product platform and
            configured by domain specialists who understand the nuances of your business line, regulatory
            jurisdiction, and technology environment.
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
        title="Explore Our Insurance Industry Solutions"
        subtitle="AI underwriting, automated claims processing, and policy administration solutions purpose-built for insurance carriers."
        linkLabel="Explore Insurance"
        linkTo="/industries/insurance"
      />
    </div>
  );
}
