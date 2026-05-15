import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function OrderToCash() {
  const coverage = [
    "Credit Management & Assessment",
    "Order Entry & Validation",
    "Billing & Invoice Generation",
    "Collections & Dunning",
    "Dispute & Deduction Management",
    "Cash Application & Posting",
    "Customer Master Data",
    "AR Aging & Reporting",
  ];

  return (
    <div>
      <PageHeader
        title="Order-to-Cash"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Order-to-Cash"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              O2C Service Coverage Across the Revenue Cycle
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Order-to-Cash (O2C) services manage the entire customer receivables lifecycle,
              beginning with credit risk assessment and order validation and extending through billing,
              collections, dispute resolution, and cash application. Our O2C specialists combine deep
              accounts receivable domain knowledge with intelligent automation to accelerate cash
              collection, reduce days sales outstanding (DSO), and improve the customer experience
              throughout the revenue cycle.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We deploy AI-powered cash application tools that automatically match incoming payments to
              open invoices with over 95 percent straight-through processing rates, dramatically reducing
              the time collectors spend on manual remittance research. Our collections teams use predictive
              analytics to segment customer portfolios by collection risk and payment behavior, enabling
              targeted dunning strategies that maximize recovery rates while preserving customer
              relationships.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {coverage.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cash Flow Optimization Through Intelligent O2C</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Optimizing the order-to-cash process has a direct and measurable impact on working capital
            and liquidity. GTS Techs O2C services consistently deliver DSO reductions of 10–20 days,
            bad debt write-off reductions of 15–25 percent, and cash application straight-through
            processing rates above 90 percent for clients across manufacturing, technology, media, and
            professional services sectors. Our dispute management capabilities resolve billing
            disagreements faster by routing issues to the right internal owners with full contextual
            data, reducing average resolution cycles from weeks to days. The combined effect of faster
            collection, fewer disputes, and automated cash posting gives finance leaders greater
            confidence in cash flow forecasts and frees AR teams to focus on strategic relationship
            management.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Accelerate Your Cash Conversion Cycle"
        subtitle="See how our Record-to-Report services close the loop with accurate financial reporting and close management."
        linkLabel="Explore Record-to-Report"
        linkTo="/operations/record-to-report"
      />
    </div>
  );
}
