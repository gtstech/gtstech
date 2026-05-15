import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function IntelligentAutomationTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "Hyperautomation Cuts Operational Costs by 45% for a Leading Logistics Provider",
      desc: "A global logistics company deployed GTS Techs' hyperautomation stack — combining RPA, AI, and process mining — to eliminate manual handoffs and achieve end-to-end process automation.",
    },
    {
      type: "White Paper",
      title: "Hyperautomation: Combining RPA, AI, and Process Mining for Maximum Impact",
      desc: "Explores the convergence of RPA, machine learning, and process mining and provides a phased adoption model for large-scale hyperautomation deployments.",
    },
    {
      type: "Webinar",
      title: "Scaling RPA: From Pilot to Enterprise-Wide Deployment",
      desc: "Covers critical success factors for scaling RPA beyond pilots, including CoE setup, bot lifecycle management, and enterprise-wide automation ROI measurement.",
    },
    {
      type: "Blog",
      title: "RPA vs. Hyperautomation: Understanding the Difference and Choosing the Right Path",
      desc: "Breaks down the evolution from rule-based RPA to hyperautomation and helps business leaders choose the right approach for their automation maturity level.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Intelligent Automation Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Intelligent Automation"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore GTS Techs' intelligent automation resource library — covering RPA, hyperautomation, AI-driven process orchestration, and everything enterprises need to automate at scale and deliver measurable operational impact.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-t-4 border-[#dc2626] hover:shadow-md transition">
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wide">{r.type}</span>
              <h3 className="font-bold text-gray-900 mt-2 mb-3">{r.title}</h3>
              <p className="text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Automate Smarter with GTS Techs"
        subtitle="Discover our end-to-end intelligent automation services and how we help enterprises scale from pilot to production."
        linkLabel="Explore Intelligent Automation"
        linkTo="/operations/intelligent-automation"
      />
    </div>
  );
}
