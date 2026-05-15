import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Automation() {
  const platform = [
    "TruBot RPA Engine",
    "TruCap+ Intelligent Capture",
    "TruAgent AI Workforce",
    "Process Discovery & Mining",
    "Low-Code Bot Builder",
    "Cognitive Document Processing",
    "Real-Time Process Orchestration",
    "Centralized Bot Management",
  ];

  return (
    <div>
      <PageHeader
        title="Intelligent Automation"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Intelligent Automation"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Unified Automation Platform: TruBot, TruCap+, and TruAgent
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Intelligent Automation suite integrates three complementary technology pillars —
              TruBot for robotic process automation, TruCap+ for intelligent document capture and
              classification, and TruAgent for AI-powered virtual agent interactions — into a single,
              cohesive platform that addresses automation needs across the enterprise. This unified
              approach eliminates point-solution sprawl and allows organizations to orchestrate complex,
              multi-step automation workflows that span document ingestion, process execution, and
              customer or employee-facing interactions.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The platform is purpose-built for high-volume, rule-intensive business processes and has
              been deployed across financial services, healthcare, insurance, and manufacturing verticals.
              Prebuilt automation accelerators for common process patterns — invoice processing, employee
              onboarding, claims adjudication, and regulatory reporting — allow clients to achieve
              production deployment in weeks rather than months.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {platform.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Measurable Benefits Across the Enterprise</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Organizations deploying GTS Techs Intelligent Automation consistently report dramatic
            improvements across cost, quality, and speed dimensions. Typical outcomes include 40–70 percent
            reductions in manual processing time, error rate reductions exceeding 90 percent for targeted
            processes, and full ROI realization within 6–12 months of initial deployment. Beyond immediate
            efficiency gains, the platform enables 24/7 operations without incremental headcount costs,
            elastic scaling during volume peaks, and continuous improvement through machine learning
            models that self-optimize based on operational feedback loops. Our center-of-excellence model
            ensures clients build internal automation capabilities alongside our platform, creating
            sustainable competitive advantage.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Accelerate Your Automation Journey"
        subtitle="Explore the full capabilities of our Intelligent Automation Platform and see what it can do for your organization."
        linkLabel="Explore the Platform"
        linkTo="/operations/intelligent-automation"
      />
    </div>
  );
}
