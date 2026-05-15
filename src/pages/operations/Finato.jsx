import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Finato() {
  const modules = [
    "Accounts Payable Module",
    "Accounts Receivable Module",
    "General Ledger & Close",
    "Treasury Management",
    "AI Invoice Processing",
    "Vendor Portal & Self-Service",
    "Real-Time Cash Visibility",
    "Compliance & Audit Trail",
  ];

  return (
    <div>
      <PageHeader
        title="GTS Techs FINATO"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["GTS Techs FINATO"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              FINATO: An Integrated Finance Platform Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              FINATO is GTS Techs proprietary finance operations platform that integrates intelligent
              automation, AI-driven analytics, and workflow orchestration into a single solution designed
              specifically for enterprise finance and accounting teams. The platform eliminates the
              fragmentation that plagues traditional finance stacks by unifying AP, AR, GL, treasury,
              and compliance modules under one governed environment with consistent data models and
              real-time reporting capabilities.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              FINATO is ERP-agnostic and connects natively to SAP, Oracle, Microsoft Dynamics, NetSuite,
              and other major systems of record through a robust API layer. Implementations are structured
              as phased deployments, typically beginning with the highest-volume process towers to
              generate rapid ROI before expanding across the full finance function. The platform's
              cloud-native architecture supports multi-entity, multi-currency, and multi-language
              deployments for global enterprise clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {modules.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI-Powered Modules That Learn and Improve</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Every module within FINATO is powered by AI models that continuously learn from transaction
            data, exception patterns, and user behavior to improve processing accuracy and recommendation
            quality over time. The Accounts Payable module uses computer vision and NLP to extract and
            validate invoice data with greater than 99 percent accuracy, automatically matching invoices
            to purchase orders and goods receipts for straight-through processing. The Accounts Receivable
            module applies predictive analytics to forecast collection probability, prioritize collector
            workqueues, and recommend optimal dunning strategies for each customer segment. Together,
            these AI-powered modules help finance leaders achieve best-in-class working capital performance
            while reducing the manual effort of their teams by 50–70 percent.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Experience the Power of FINATO"
        subtitle="See the full FINATO product suite and learn how it transforms finance operations for global enterprises."
        linkLabel="Explore FINATO Product"
        linkTo="/products/finato"
      />
    </div>
  );
}
