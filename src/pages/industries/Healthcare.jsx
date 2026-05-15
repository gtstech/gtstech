import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Revenue Cycle Management',
    description:
      'End-to-end RCM automation covers patient eligibility verification, prior authorisation, charge capture, claim submission, denial management, and payment posting — reducing days in accounts receivable, improving clean claim rates, and maximising net collection for hospitals, physician groups, and ambulatory care providers. AI-driven denial prediction flags likely rejections before submission, enabling corrections that prevent revenue leakage.',
  },
  {
    title: 'Medical Claims Automation',
    description:
      'Intelligent claims processing solutions for health payers automate the ingestion, adjudication, and payment of medical, pharmacy, and dental claims, reducing administrative cost per claim while improving processing accuracy and turnaround time. Integration with clinical coding systems, fraud detection platforms, and provider networks ensures claims are processed correctly and compliantly the first time.',
  },
  {
    title: 'Clinical Documentation',
    description:
      'AI-assisted clinical documentation improvement solutions analyse physician notes, coding patterns, and query response data to improve documentation specificity, CDI query accuracy, and diagnosis-related group capture — directly improving case mix index and reimbursement accuracy for inpatient facilities. NLP-powered ambient documentation tools reduce physician administrative burden while improving note completeness.',
  },
  {
    title: 'Healthcare Analytics',
    description:
      'Integrated healthcare analytics platforms connect clinical, operational, and financial data to deliver population health insights, utilisation management analytics, and operational performance dashboards to healthcare executives and clinical leadership. Configurable quality measure reporting automates CMS quality programme submissions, HEDIS calculations, and value-based care performance tracking.',
  },
];

export default function Healthcare() {
  return (
    <div>
      <PageHeader
        title="Healthcare"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Healthcare']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Focus</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Healthcare organisations operate at the intersection of clinical complexity, regulatory stringency,
          and relentless cost pressure — a combination that demands technology solutions that are both
          sophisticated and reliably safe. GTS Techs serves hospitals, health systems, physician groups,
          health plans, pharmacy benefit managers, and health IT companies with AI, automation, and analytics
          solutions that improve financial performance, operational efficiency, and the quality of care delivered.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Our healthcare solutions are built in full conformance with HIPAA, HL7 FHIR, and applicable CMS
          and ONC regulations, with data security and privacy controls that meet the expectations of health
          system CISOs and compliance officers. Dedicated healthcare domain experts on every delivery team
          bring clinical, coding, and payer-side knowledge that ensures our solutions address the real-world
          complexity of healthcare operations rather than oversimplified textbook representations.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Providers and Payers</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            GTS Techs healthcare solutions address the highest-cost administrative domains across both the
            provider and payer sides of the healthcare system, with solutions designed to reduce administrative
            burden, improve data quality, and accelerate financial performance without compromising patient
            care or regulatory compliance. Our implementations integrate with leading EMR, practice management,
            and claims processing platforms including Epic, Cerner, Athenahealth, and TriZetto.
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
        title="Serving Technology Companies with Technology Excellence"
        subtitle="Product engineering, QA automation, cloud operations, and customer success solutions for software and technology firms."
        linkLabel="Explore Technology"
        linkTo="/industries/technology"
      />
    </div>
  );
}
