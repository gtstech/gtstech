import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function DigitalFinance() {
  const capabilities = [
    "Accounts Payable Automation",
    "Accounts Receivable Management",
    "General Ledger Optimization",
    "AI-Powered Reconciliation",
    "Cash Flow Forecasting",
    "Regulatory Reporting",
    "Close Cycle Acceleration",
    "ERP Integration Services",
  ];

  return (
    <div>
      <PageHeader
        title="Digital Finance"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Digital Finance"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Finance BPM Built for the Modern Enterprise
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Digital Finance services modernize the entire finance value chain by combining
              business process management expertise with advanced automation and analytics capabilities.
              We help CFOs and finance leaders move from reactive, compliance-driven operations to
              proactive, insight-led financial management that supports strategic decision-making.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our finance BPM framework covers every major process tower — from procure-to-pay and
              order-to-cash through record-to-report and financial planning and analysis. Each engagement
              begins with a detailed process discovery and benchmarking phase to identify automation
              opportunities, control gaps, and efficiency levers that deliver rapid, measurable ROI.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI-Powered Finance Transformation</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Our proprietary AI and machine learning models are embedded directly into finance workflows to
            eliminate manual touchpoints, reduce exception rates, and accelerate month-end close cycles
            by up to 40 percent. Intelligent document processing handles invoices, purchase orders, and
            contracts with high accuracy, while predictive analytics surface cash flow risks and working
            capital optimization opportunities before they become critical issues. The result is a finance
            function that is leaner, faster, and far more capable of supporting executive decision-making
            with real-time data and scenario models.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Modernize Your Finance Function Today"
        subtitle="Discover how our Finance and Accounting Outsourcing services can reduce costs and accelerate your close cycle."
        linkLabel="Explore F&A Outsourcing"
        linkTo="/operations/finance-accounting"
      />
    </div>
  );
}
