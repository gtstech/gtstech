import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Pre-trained Models',
    description:
      'TruCap+ ships with domain-specific pre-trained AI models covering invoices, purchase orders, contracts, identity documents, medical records, and more, enabling immediate accuracy without lengthy training cycles. Models are continuously updated with new document layouts from across the GTS Techs customer base.',
  },
  {
    title: 'Self-learning Accuracy',
    description:
      'An active-learning feedback loop captures human corrections and continuously retrains extraction models, so accuracy improves automatically as document variety grows. Over time, TruCap+ achieves straight-through processing rates that dramatically reduce human review queues.',
  },
  {
    title: 'High-volume Processing',
    description:
      'Cloud-native architecture scales horizontally to process millions of documents per day without performance degradation, supporting the largest enterprise batch and real-time ingestion requirements. Processing pipelines handle structured, semi-structured, and fully unstructured documents with equal precision.',
  },
  {
    title: 'Quality Validation',
    description:
      'Multi-layer validation rules — including cross-field checks, database lookups, and confidence scoring — ensure extracted data meets business quality standards before reaching downstream systems. Exceptions are automatically routed to a configurable human-review workspace with highlighted low-confidence fields.',
  },
];

export default function TruCap() {
  return (
    <div>
      <PageHeader
        title="TruCap+ — Intelligent Document Processing"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['TruCap+']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Document Intelligence</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          TruCap+ is GTS Techs' intelligent document processing platform, combining OCR, computer vision, and large
          language models to automatically classify, extract, validate, and route data from any document regardless
          of format, language, or layout variation. By eliminating manual data entry from document-heavy processes,
          TruCap+ accelerates cycle times, reduces error rates, and frees knowledge workers to focus on analysis
          and decision-making rather than transcription.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          TruCap+ integrates natively with TruBot RPA workflows, ERP systems, and document management platforms
          through a comprehensive REST API and pre-built connectors. The platform is GDPR-compliant, supports
          on-premises and private-cloud deployment, and provides full chain-of-custody audit logging for regulated
          industries including financial services, healthcare, and insurance.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing at Scale</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Whether you process thousands of invoices a month or tens of millions of insurance documents a year,
            TruCap+ scales to meet your volume without sacrificing accuracy or speed. Elastic cloud scaling,
            parallel processing pipelines, and priority queuing ensure SLAs are met even during peak ingestion
            periods, while real-time dashboards give operations teams complete visibility into throughput and
            exception rates at every moment.
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
        title="Turn Data into Decisions with TruBI"
        subtitle="Once TruCap+ has extracted and structured your data, TruBI transforms it into actionable analytics and interactive dashboards."
        linkLabel="Explore TruBI"
        linkTo="/products/trubi"
      />
    </div>
  );
}
