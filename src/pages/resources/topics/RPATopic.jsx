import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function RPATopic() {
  const resources = [
    {
      type: "Case Study",
      title: "TruBot Automates 2 Million Transactions Monthly for Global Distribution Leader",
      desc: "Ingram Micro deployed TruBot across finance, order management, and HR functions, automating over 2 million monthly transactions and reducing processing costs by 55%.",
    },
    {
      type: "White Paper",
      title: "Building an Enterprise RPA Center of Excellence: A Practical Guide",
      desc: "Covers the organizational structure, governance model, bot development standards, and performance metrics required to build and sustain a high-performing RPA CoE.",
    },
    {
      type: "Webinar",
      title: "TruBot Deep Dive: Architecture, Security, and Scalability for Enterprise RPA",
      desc: "A technical walkthrough of TruBot's enterprise architecture, including its orchestrator, analytics module, role-based access controls, and high-availability deployment options.",
    },
    {
      type: "Blog",
      title: "10 RPA Use Cases Delivering the Highest ROI in Finance and Operations",
      desc: "Ranks the most impactful RPA automation opportunities across AP, AR, reconciliation, procurement, and HR onboarding, with average efficiency and cost benchmarks.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="RPA Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["RPA"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Access GTS Techs' robotic process automation resource library — from TruBot implementation case studies and CoE setup guides to technical webinars and ROI-focused blog content that helps enterprises maximize their automation investments.
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
        title="See TruBot in Action"
        subtitle="Explore TruBot's full capabilities and discover why leading enterprises choose it for enterprise-scale RPA."
        linkLabel="Explore TruBot"
        linkTo="/products/trubot"
      />
    </div>
  );
}
