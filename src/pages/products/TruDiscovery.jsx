import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Predictive Coding',
    description:
      'Active learning algorithms train on attorney-coded documents and then automatically rank the remaining corpus by relevance, so review teams can prioritise the most important documents first and reach defensible completeness without reading every file. Predictive coding consistently reduces review populations by 70–90% compared with linear keyword searches.',
  },
  {
    title: 'Concept Clustering',
    description:
      'Unsupervised topic modelling groups documents by conceptual similarity regardless of the specific keywords used, revealing themes across millions of documents that keyword searches would never surface. Cluster visualisations allow attorneys to rapidly orient themselves to unfamiliar document populations and identify the key narratives of a case.',
  },
  {
    title: 'Email Threading',
    description:
      'Automated email threading reconstructs complete conversation chains, deduplicates redundant messages, and presents the full discussion in chronological order, dramatically reducing the number of individual documents reviewers must examine. Family-level suppression of inclusive emails alone can remove 30–50% of volume from email-heavy document sets.',
  },
  {
    title: 'Audit Trail',
    description:
      'Every processing step, coding decision, search query, and user action is captured in an immutable, timestamped audit log that satisfies the most rigorous proportionality and defensibility requirements in litigation, regulatory investigation, and internal investigation contexts. Reports can be exported in formats compatible with all major legal hold and matter management platforms.',
  },
];

export default function TruDiscovery() {
  return (
    <div>
      <PageHeader
        title="TruDiscovery — eDiscovery Platform"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['TruDiscovery']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">eDiscovery Automation</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          TruDiscovery is GTS Techs' AI-powered eDiscovery platform, built to help legal teams, law firms, and
          corporate counsel process, review, and produce massive volumes of electronically stored information
          faster and at significantly lower cost than traditional review-heavy approaches. The platform handles
          the complete EDRM lifecycle — from legal hold and collection through processing, review, analysis,
          and production — in a single cloud-based environment.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          TruDiscovery ingests data from every modern enterprise source including Microsoft 365, Google Workspace,
          Slack, Zoom, cloud storage platforms, and structured databases, normalising all content into a unified
          review workspace. Advanced processing capabilities handle multilingual documents, encrypted files,
          audio transcription, and image OCR, ensuring no relevant evidence is overlooked regardless of format.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance and Audit</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            TruDiscovery is purpose-built for the high-stakes compliance and litigation environments where every
            process decision must be defensible to opposing counsel, regulators, and courts. The platform's
            privilege detection, PII redaction, and confidentiality tier management tools help legal teams meet
            their obligations without slowing down the review cycle. Comprehensive reporting templates support
            Rule 26(f) meet-and-confer preparation and court-ordered proportionality submissions across all
            major jurisdictions.
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
        title="Modernise Your Finance Operations with FINATO"
        subtitle="FINATO brings AI document processing, intelligent workflows, and real-time analytics to the entire finance function."
        linkLabel="Explore FINATO"
        linkTo="/products/finato"
      />
    </div>
  );
}
