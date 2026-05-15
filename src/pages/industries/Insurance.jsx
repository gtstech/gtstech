import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'AI-Powered Underwriting',
    description:
      'Our TruAI Underwriting platform automates submission triage, risk scoring, and coverage recommendation across P&C, life, health, and specialty lines, enabling underwriters to process more submissions with greater consistency and improved loss-ratio outcomes. Explainable AI models meet regulatory model governance requirements in all major insurance markets.',
  },
  {
    title: 'Claims Automation',
    description:
      'End-to-end claims automation from first notice of loss through settlement combines intelligent document capture, fraud detection, reserve calculation, and payment processing to dramatically reduce claims cycle times and leakage while improving claimant satisfaction scores. Straight-through processing handles simple claims automatically while complex cases receive prioritised human attention.',
  },
  {
    title: 'Policy Administration',
    description:
      'Automation and AI solutions modernise policy administration processes including endorsement processing, renewal management, cancellation handling, and commission calculation — reducing manual effort by 60–80% and eliminating the errors that drive costly re-work and regulatory complaints. Integration with leading policy administration systems ensures seamless data flow across the insurance value chain.',
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Dedicated compliance automation solutions address Solvency II, IFRS 17, state insurance regulatory filings, and market conduct examination requirements, replacing manual spreadsheet processes with governed, auditable data pipelines that reduce reporting cycle times and compliance risk simultaneously. Our regulatory experts monitor regulatory developments and update solutions proactively to accommodate new requirements.',
  },
];

export default function Insurance() {
  return (
    <div>
      <PageHeader
        title="Insurance"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Insurance']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Expertise</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          GTS Techs serves insurance carriers across all major lines — property and casualty, life and annuity,
          health, and specialty — as well as reinsurers, managing general agents, and insurance brokers. Our
          insurance-specific AI, automation, and data solutions address the core operational challenges that
          constrain profitability and growth: slow underwriting cycles, high claims costs, complex regulatory
          reporting, and legacy technology debt.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          With dedicated insurance domain experts embedded in every delivery team, GTS Techs brings both
          technology excellence and deep understanding of actuarial concepts, policy structures, claims
          adjudication workflows, and insurance regulatory frameworks. This combination of domain depth and
          delivery capability is why leading carriers across the US, UK, Europe, and Asia-Pacific rely on
          GTS Techs for their most complex transformation programmes.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Insurance Carriers</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our insurance solutions span the full policy lifecycle from distribution and underwriting through
            policy servicing, claims, and analytics. Each solution is designed to integrate with your existing
            policy administration, billing, claims, and reinsurance platforms — delivering transformation
            value without requiring complete system replacement. Modular deployment allows carriers to start
            with highest-priority use cases and expand organically as ROI is demonstrated.
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
        title="Discover Our Manufacturing Solutions"
        subtitle="Back-office digitisation, predictive analytics, and intelligent automation for discrete and process manufacturers."
        linkLabel="Explore Manufacturing"
        linkTo="/industries/manufacturing"
      />
    </div>
  );
}
