import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function FinanceAccounting() {
  const scope = [
    "Procure-to-Pay (P2P)",
    "Order-to-Cash (O2C)",
    "Record-to-Report (R2R)",
    "Financial Planning & Analysis",
    "Treasury & Cash Management",
    "Tax Compliance Support",
    "Intercompany Accounting",
    "Audit Readiness Services",
  ];

  return (
    <div>
      <PageHeader
        title="Finance & Accounting Outsourcing"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Finance & Accounting Outsourcing"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              End-to-End F&A Scope Across Every Process Tower
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Finance and Accounting Outsourcing (FAO) practice delivers comprehensive,
              outcome-based services across all four major finance process towers: Procure-to-Pay,
              Order-to-Cash, Record-to-Report, and Financial Planning and Analysis. Our multi-shore
              delivery model combines onshore governance with offshore execution to optimize cost
              structures while maintaining the quality and control standards that global enterprises demand.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Each FAO engagement is structured around a shared services center model with clearly
              defined SLAs, governance frameworks, and escalation protocols. Our finance professionals
              hold industry certifications including CPA, CMA, and ACCA, ensuring deep technical
              expertise is embedded in every process we manage on behalf of our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {scope.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Continuous Improvement Culture</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Our FAO engagements are built on a continuous improvement framework that applies Lean Six Sigma
            methodologies and automation-first thinking to every process we operate. Dedicated improvement
            teams run structured Kaizen events, process mining analyses, and automation opportunity
            assessments on a quarterly basis to identify and capture value beyond the baseline contract.
            Clients consistently report 30–50 percent reductions in cost-per-transaction and significant
            improvements in accuracy, cycle time, and compliance posture within the first 18 months of
            partnership with GTS Techs.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Unlock the Full Potential of Your Finance Operations"
        subtitle="Learn how our Banking Process Management services extend operational excellence to regulated financial institutions."
        linkLabel="Explore Banking Process Management"
        linkTo="/operations/banking-process"
      />
    </div>
  );
}
