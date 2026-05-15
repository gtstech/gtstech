import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Shipment Tracking and Visibility',
    description:
      'Multi-carrier tracking aggregation platforms consolidate shipment events from hundreds of carriers, freight forwarders, and logistics platforms into a single real-time visibility layer accessible to operations teams and customers alike. Predictive ETA models incorporate weather, port congestion, and carrier performance data to provide accurate arrival forecasts rather than static scheduled dates.',
  },
  {
    title: 'Freight Audit and Payment',
    description:
      'AI-powered freight audit solutions automatically validate carrier invoices against contracted rates, accessorial charges, and shipment data, identifying overbillings and rate discrepancies that typically represent 2–5% of freight spend. Straight-through payment processing for approved invoices and automated dispute management for exceptions dramatically reduce the cost and cycle time of freight settlement.',
  },
  {
    title: 'Customs Document Processing',
    description:
      'Intelligent extraction and validation of customs documentation — including commercial invoices, bills of lading, certificates of origin, and customs declarations — accelerates border clearance and reduces the risk of costly delays and penalties. Integration with customs brokers and government filing systems enables automated submission workflows that keep cargo moving.',
  },
  {
    title: 'Warehouse Operations Automation',
    description:
      'RPA and AI solutions automate the high-volume, repetitive data entry and document processing tasks that burden warehouse management teams — including goods receipt confirmation, inventory reconciliation, order status updates, and carrier booking — freeing staff to focus on exception management and customer service.',
  },
];

export default function Logistics() {
  return (
    <div>
      <PageHeader
        title="Logistics"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Logistics']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Logistics Transformation</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          The logistics industry is in the midst of structural transformation driven by explosive e-commerce
          growth, the demand for real-time supply-chain visibility, rising customer expectations for delivery
          precision, and intense margin pressure across the freight and fulfilment value chain. Third-party
          logistics providers, freight brokers, carriers, and shippers are all racing to digitise operations,
          reduce cost-per-shipment, and deliver the data transparency that shippers now demand as table stakes.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs serves leading 3PLs, freight forwarders, carriers, express delivery companies, and
          corporate logistics functions with AI, automation, and analytics solutions that address the specific
          operational bottlenecks of the industry. Our logistics domain experts combine technology depth with
          practical knowledge of carrier operations, customs regulations, warehouse management, and
          transportation management systems to deliver solutions that integrate with — rather than replace —
          your existing technology investments.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Logistics and Supply Chain</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our logistics solutions target the four operational areas that consistently represent the greatest
            ROI opportunity for logistics organisations: shipment visibility, freight cost management, customs
            compliance, and warehouse back-office efficiency. Each solution is designed for rapid implementation
            — most customers achieve production deployment within 8–12 weeks — and integrates via standard
            APIs with TMS, WMS, ERP, and carrier systems without requiring infrastructure changes.
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
        title="Explore Our Healthcare Industry Solutions"
        subtitle="Revenue cycle management, claims automation, and clinical documentation solutions for healthcare providers and payers."
        linkLabel="Explore Healthcare"
        linkTo="/industries/healthcare"
      />
    </div>
  );
}
