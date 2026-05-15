import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function FPA() {
  const capabilities = [
    "Annual Budgeting & Planning",
    "Rolling Forecast Management",
    "Driver-Based Modeling",
    "Scenario & Sensitivity Analysis",
    "Variance Analysis & Commentary",
    "KPI Dashboard Development",
    "Long-Range Financial Planning",
    "Executive Reporting Packages",
  ];

  return (
    <div>
      <PageHeader
        title="Financial Planning & Analysis"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Financial Planning & Analysis"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Budgeting and Forecasting That Keeps Pace with Business
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Financial Planning and Analysis (FP&A) services transform the planning and
              forecasting function from a periodic, backward-looking exercise into a dynamic, continuous
              process that delivers real-time insight into business performance. Our FP&A specialists
              design and operate driver-based financial models that connect operational metrics to financial
              outcomes, enabling finance leaders to rapidly quantify the impact of strategic decisions,
              market changes, and operational shifts on the P&L, balance sheet, and cash flow.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We replace static annual budget processes with rolling forecast models that update on a
              monthly or quarterly basis, maintaining relevance as business conditions evolve. Our
              team manages the full planning cycle including data collection from business partners,
              consolidation and validation, scenario analysis, executive review preparation, and
              board presentation materials, reducing the burden on internal finance teams by 40–60 percent
              during peak planning periods.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Decision Support Analytics for Executive Leadership</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Modern FP&A extends beyond spreadsheet modeling into advanced analytics, business intelligence,
            and data visualization that empowers executives to make faster, more confident decisions.
            GTS Techs FP&A practice builds integrated analytics environments that surface profitability
            by customer, product, channel, and geography — dimensions that traditional planning tools
            typically obscure through aggregation. Our data engineers and FP&A analysts collaborate to
            create automated data pipelines from operational systems into planning platforms such as
            Anaplan, Adaptive Insights, and OneStream, ensuring executives always have access to the
            most current performance data without waiting for manual report refreshes. The result is
            an FP&A function that acts as a genuine strategic partner to business leadership rather
            than a reactive reporting function.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Elevate Your Finance Function to Strategic Partner"
        subtitle="Discover how our Digital Content Services complement our operations portfolio with expert content management solutions."
        linkLabel="Explore Digital Content Services"
        linkTo="/operations/digital-content"
      />
    </div>
  );
}
