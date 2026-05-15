import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function InsuranceProcess() {
  const capabilities = [
    "Policy Administration",
    "Claims Processing & Adjudication",
    "Underwriting Support",
    "Premium Billing & Collections",
    "Reinsurance Administration",
    "Regulatory Filings",
    "Fraud Detection & Investigation",
    "Loss Run Analysis",
  ];

  return (
    <div>
      <PageHeader
        title="Insurance Process Management"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Insurance Process Management"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Policy, Claims, and Underwriting Operations at Scale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Insurance Process Management services cover the full insurance value chain,
              enabling carriers, managing general agents, and third-party administrators to operate
              more efficiently and cost-effectively. We manage policy issuance, endorsements, renewals,
              claims intake, adjudication, settlement, and complex underwriting support workflows across
              property and casualty, life, health, and specialty lines of business.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our insurance operations teams hold deep domain expertise and work within carrier-specific
              systems of record, including Guidewire, Duck Creek, and Majesco platforms. We implement
              robust governance overlays with clearly defined KPIs around claims cycle time, policy
              accuracy rates, and customer satisfaction scores, ensuring our delivery consistently
              outperforms industry benchmarks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Automation in Insurance Operations</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Intelligent automation is transforming insurance operations by eliminating paper-heavy
            processes, accelerating claims decision-making, and enabling straight-through processing
            for high-volume, low-complexity transactions. GTS Techs deploys RPA bots, natural language
            processing engines, and computer vision models to extract data from unstructured documents
            such as loss notices, medical records, and repair estimates, feeding downstream adjudication
            workflows with clean, validated data. Clients across property and casualty and health insurance
            segments report 35–60 percent reductions in claims handling time and measurable improvements
            in fraud detection rates after implementing our automation-augmented operating model.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Optimize Your Insurance Operations"
        subtitle="Explore how our Healthcare Process Management capabilities bring operational excellence to the healthcare sector."
        linkLabel="Explore Healthcare Process Management"
        linkTo="/operations/healthcare-process"
      />
    </div>
  );
}
