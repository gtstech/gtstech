import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Back-Office Digitisation',
    description:
      'GTS Techs automates the high-volume, document-intensive back-office processes that consume significant manufacturing administrative capacity — including purchase order processing, goods receipt matching, invoice verification, and supplier statement reconciliation. AI document capture and RPA-driven workflow automation reduce processing costs by 50–70% while improving accuracy and audit-readiness.',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Advanced analytics platforms connect manufacturing execution, ERP, IoT sensor, and supply-chain data to deliver predictive insights across quality, equipment reliability, demand forecasting, and inventory positioning. Machine learning models surface maintenance requirements before breakdowns occur, reducing unplanned downtime and optimising maintenance scheduling.',
  },
  {
    title: 'Supply Chain Visibility',
    description:
      'End-to-end supply chain dashboards aggregate data from supplier systems, logistics platforms, customs authorities, and internal planning tools to give procurement and operations leaders real-time visibility into risks, disruptions, and inventory positions across every node of the supply network. Alert-driven workflows ensure the right teams act on exceptions before they escalate.',
  },
  {
    title: 'Quality and Compliance Automation',
    description:
      'Automated quality data capture, non-conformance management, and regulatory compliance reporting solutions reduce the administrative burden of ISO, FDA, and industry-specific quality frameworks while strengthening audit trail completeness and inspection readiness. Integration with MES and ERP systems ensures quality data flows seamlessly across the manufacturing information architecture.',
  },
];

export default function Manufacturing() {
  return (
    <div>
      <PageHeader
        title="Manufacturing"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Manufacturing']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Challenges</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Global manufacturers face relentless cost pressure, supply chain fragility exposed by recent geopolitical
          disruptions, and the imperative to digitise operations to remain competitive in an era of smart factories
          and Industry 4.0. At the same time, many manufacturers carry substantial legacy system debt and
          operational processes built on manual workflows that are slow, error-prone, and difficult to scale.
          The challenge is achieving transformation outcomes without disrupting the production continuity on
          which the business depends.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs works with discrete and process manufacturers across automotive, electronics, industrial
          equipment, chemicals, food and beverage, and consumer goods to automate back-office operations,
          improve supply-chain intelligence, and deploy the analytics capabilities needed to drive operational
          excellence. Our manufacturing domain experts bring deep knowledge of SAP, Oracle, and leading MES
          platforms, ensuring our solutions integrate cleanly with existing technology investments.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            GTS Techs adopts a value-first delivery approach with manufacturing customers, beginning each engagement
            with a rapid process assessment that identifies the highest-ROI automation and analytics opportunities
            and sequences them into a phased roadmap. Proof-of-concept deployments demonstrate measurable results
            within weeks, building organisational confidence and momentum for broader transformation. Our global
            delivery model combines on-site manufacturing expertise with offshore delivery capability to keep
            total cost of transformation competitive.
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
        title="Explore Our Logistics Industry Solutions"
        subtitle="Real-time shipment tracking, freight audit automation, and customs document processing for 3PLs, carriers, and shippers."
        linkLabel="Explore Logistics"
        linkTo="/industries/logistics"
      />
    </div>
  );
}
