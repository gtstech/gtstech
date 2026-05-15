import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function RecordToReport() {
  const capabilities = [
    "Journal Entry Management",
    "Account Reconciliation",
    "Intercompany Eliminations",
    "Fixed Asset Accounting",
    "Month-End Close Coordination",
    "Consolidation & Reporting",
    "GAAP & IFRS Compliance",
    "Audit Support Services",
  ];

  return (
    <div>
      <PageHeader
        title="Record-to-Report"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Record-to-Report"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Close Process Excellence for Global Organizations
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Record-to-Report (R2R) services streamline the financial close and reporting
              cycle for multinational enterprises, enabling faster, more accurate month-end, quarter-end,
              and year-end closes. Our R2R specialists manage the full spectrum of general accounting
              activities — from journal entry preparation and account reconciliation through intercompany
              eliminations, consolidation, and statutory reporting — within a governed, controlled
              environment designed to meet the highest audit standards.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We leverage close management platforms and automation tools to compress close cycles
              by 30–50 percent without sacrificing accuracy or control. Our close coordination teams
              maintain detailed task checklists, dependencies, and escalation protocols that give
              controllers and CFOs real-time visibility into close progress across all entities,
              enabling proactive issue resolution and consistent on-time close delivery every period.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Reporting That Supports Decision-Making</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Beyond the close itself, GTS Techs R2R services produce the high-quality management
            and statutory reports that executives and board members rely on to make informed strategic
            decisions. Our reporting specialists prepare board packages, segment reports, GAAP and
            IFRS statutory financial statements, and regulatory filings with consistent formatting,
            clear variance commentary, and supporting schedules that simplify the audit review process.
            We maintain comprehensive technical accounting expertise including lease accounting under
            ASC 842 and IFRS 16, revenue recognition under ASC 606, and hedge accounting, ensuring
            complex transactions are recorded accurately and disclosed appropriately in all financial
            statements and footnotes.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Achieve a Faster, More Accurate Financial Close"
        subtitle="Explore our Financial Planning and Analysis services to turn your financial data into forward-looking strategic insight."
        linkLabel="Explore FP&A Services"
        linkTo="/operations/fpa"
      />
    </div>
  );
}
