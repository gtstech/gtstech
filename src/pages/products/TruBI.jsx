import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Self-service Analytics',
    description:
      'Business users build, modify, and share reports and dashboards without writing a single line of SQL or involving IT, dramatically compressing the time from question to insight. Role-based access controls and a governed data catalogue ensure self-service freedom never compromises data quality or security.',
  },
  {
    title: 'Interactive Dashboards',
    description:
      'Pixel-perfect, fully interactive dashboards surface KPIs, trends, and comparisons through a rich library of charts, maps, and custom visualisations optimised for both desktop and mobile viewing. Drill-through navigation lets analysts move from executive summaries all the way down to transaction-level detail in a single click.',
  },
  {
    title: 'Natural Language Querying',
    description:
      'An embedded NLP engine lets users type plain-English questions — "What was revenue by region last quarter?" — and receive instant chart responses without constructing queries manually. The system learns organisational terminology and metric definitions over time, improving answer accuracy with every interaction.',
  },
  {
    title: 'Anomaly Detection',
    description:
      'Machine learning models continuously monitor key metrics and automatically surface statistically significant deviations before they escalate into business problems. Configurable alerting delivers anomaly notifications to the right stakeholders via email, Slack, or Teams the moment a threshold is crossed.',
  },
];

export default function TruBI() {
  return (
    <div>
      <PageHeader
        title="TruBI — Business Intelligence Platform"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['TruBI']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">BI Platform Capabilities</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          TruBI is GTS Techs' enterprise business intelligence platform, designed to connect disparate data sources,
          apply governed transformation logic, and surface decision-ready insights through intuitive dashboards
          available to every user in the organisation — not just data specialists. The platform handles the full
          analytics lifecycle from data ingestion and modelling through to storytelling and automated distribution.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          TruBI connects to databases, data warehouses, cloud data lakes, ERP systems, CRM platforms, and flat files
          through a library of certified connectors. A high-performance in-memory engine delivers sub-second query
          responses across datasets with billions of rows, ensuring analysts are never waiting on infrastructure
          when time-sensitive decisions are at stake.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Augmented Analytics</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            TruBI goes beyond traditional BI by embedding AI capabilities that anticipate analytical needs, surface
            hidden patterns, and generate narrative explanations of data trends in plain language. Predictive models
            built and governed within the platform can be published directly to dashboards, allowing business users
            to act on forward-looking insights alongside historical reporting within a single unified interface.
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
        title="Bring AI to Your Underwriting Process"
        subtitle="TruAI Underwriting applies machine learning to risk data, enabling faster and more accurate policy decisions than traditional methods."
        linkLabel="Explore TruAI Underwriting"
        linkTo="/products/truai-underwriting"
      />
    </div>
  );
}
