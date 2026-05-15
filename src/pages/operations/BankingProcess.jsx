import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function BankingProcess() {
  const capabilities = [
    "KYC & Customer Onboarding",
    "AML Transaction Monitoring",
    "Loan Origination & Processing",
    "Mortgage Servicing",
    "Trade Finance Operations",
    "Regulatory Compliance Reporting",
    "Credit Risk Data Management",
    "Collections & Recoveries",
  ];

  return (
    <div>
      <PageHeader
        title="Banking Process Management"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Banking Process Management"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              KYC, AML, and Loan Operations for Financial Institutions
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Banking Process Management services help retail banks, commercial banks, and
              financial services firms streamline their most compliance-intensive operations including
              Know Your Customer (KYC) onboarding, Anti-Money Laundering (AML) transaction monitoring,
              and end-to-end loan origination and servicing workflows. Our banking operations teams
              are trained in major regulatory frameworks across North America, Europe, and Asia-Pacific,
              ensuring every process meets jurisdiction-specific requirements.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We manage high-volume, time-sensitive banking workflows with the accuracy and auditability
              that regulators demand. Our quality assurance frameworks embed four-eye review processes,
              automated controls, and real-time dashboards that give compliance officers full visibility
              into processing status, exception rates, and regulatory deadlines across all managed portfolios.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Banking Support Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            As digital banking channels proliferate, GTS Techs provides the operational backbone that
            enables banks to scale their digital offerings without proportionally scaling headcount.
            Our digital banking support services encompass account servicing, card operations, dispute
            management, and mobile/online channel support, all delivered through a hybrid human-plus-automation
            model. Intelligent bots handle routine inquiries and data validations while skilled agents
            manage complex cases requiring judgment and regulatory nuance, achieving cost efficiencies of
            25–40 percent compared to fully manual models while maintaining exceptional quality metrics.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Strengthen Your Banking Operations"
        subtitle="See how our Insurance Process Management services deliver the same operational rigor to the insurance sector."
        linkLabel="Explore Insurance Process Management"
        linkTo="/operations/insurance-process"
      />
    </div>
  );
}
