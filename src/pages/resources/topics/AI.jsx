import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function AI() {
  const resources = [
    {
      type: "Case Study",
      title: "AI-Led Transformation Saves Global Insurer $12M Annually",
      desc: "How a Fortune 500 insurer deployed end-to-end AI to automate claims processing, reducing cycle time by 70% and achieving $12M in first-year savings.",
    },
    {
      type: "White Paper",
      title: "The Future of AI in Enterprise Operations: A Strategic Blueprint",
      desc: "A comprehensive framework for enterprise AI adoption covering governance, talent strategy, ROI measurement, and phased implementation roadmaps.",
    },
    {
      type: "Webinar",
      title: "Scaling AI: From Proof-of-Concept to Production at Enterprise Scale",
      desc: "GTS Techs AI architects share the critical decisions and design patterns that separate successful large-scale AI deployments from stalled pilots.",
    },
    {
      type: "Blog",
      title: "How Agentic AI Is Redefining Enterprise Automation in 2025",
      desc: "Explores how autonomous AI agents are orchestrating complex, multi-step enterprise workflows with minimal human intervention.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="AI Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["AI"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore GTS Techs' curated library of AI resources — including case studies, white papers, webinars, and blog posts — that help enterprise leaders understand, adopt, and scale artificial intelligence across their organizations.
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
        title="Explore GTS Techs' AI Capabilities"
        subtitle="Discover how our artificial intelligence solutions drive measurable business outcomes across industries."
        linkLabel="Learn About AI Solutions"
        linkTo="/technologies/artificial-intelligence"
      />
    </div>
  );
}
