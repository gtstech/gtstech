import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function HealthcareProcess() {
  const capabilities = [
    "Patient Registration & Eligibility",
    "Medical Coding (ICD/CPT)",
    "Claims Submission & Follow-up",
    "Denial Management",
    "Payment Posting & Reconciliation",
    "Prior Authorization Support",
    "Accounts Receivable Management",
    "HIPAA Compliance Oversight",
  ];

  return (
    <div>
      <PageHeader
        title="Healthcare Process Management"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Healthcare Process Management"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Revenue Cycle Management for Healthcare Providers
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Healthcare Process Management services help hospitals, physician groups,
              ambulatory surgical centers, and healthcare networks maximize revenue capture while
              reducing administrative burden. Our end-to-end Revenue Cycle Management (RCM) practice
              covers every step from patient access and eligibility verification through medical
              coding, claims submission, denial management, and final payment reconciliation.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We operate within major EHR and practice management platforms including Epic, Cerner,
              Allscripts, and athenahealth, ensuring seamless integration with existing provider
              systems. Our certified coders, billing specialists, and denial management analysts
              are trained to the latest ICD-10, CPT, and HCPCS code sets, delivering clean claim
              rates above 98 percent and first-pass resolution rates that reduce days in AR by
              an average of 15–25 percent.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI in Healthcare Operations</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Artificial intelligence and machine learning are reshaping healthcare operations by
            enabling predictive denial prevention, automated prior authorization workflows, and
            intelligent coding assistance that reduces coder workloads while improving accuracy.
            GTS Techs embeds AI-powered tools into RCM workflows to flag likely denials before
            claim submission, recommend appropriate codes based on clinical documentation, and
            automatically route complex cases to specialized teams. Our AI models are continuously
            trained on payer-specific denial patterns and reimbursement logic, giving healthcare
            clients a dynamic, learning system that improves outcomes quarter over quarter without
            requiring additional headcount investments.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Maximize Revenue While Reducing Administrative Costs"
        subtitle="Discover how our Intelligent Automation platform accelerates healthcare and other industry operations."
        linkLabel="Explore Intelligent Automation"
        linkTo="/operations/automation"
      />
    </div>
  );
}
