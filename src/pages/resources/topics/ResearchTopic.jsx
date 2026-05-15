import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function ResearchTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "Research Analytics Platform Delivers 60% Faster Insights for Pharma Leader",
      desc: "A top-10 pharmaceutical company deployed GTS Techs' research analytics solution to unify clinical trial data, competitive intelligence, and market research into a single, AI-searchable insights platform.",
    },
    {
      type: "White Paper",
      title: "The Intelligence-Led Enterprise: Building Research & Analytics Capabilities That Scale",
      desc: "Explores the organizational design, technology stack, and data governance practices required to build high-impact research and analytics functions that continuously generate business-relevant insights.",
    },
    {
      type: "Webinar",
      title: "AI in Market Research: Automating Insight Generation at Scale",
      desc: "Covers how AI and NLP are transforming market research workflows — from automated survey analysis and social listening to competitive intelligence aggregation and trend detection.",
    },
    {
      type: "Blog",
      title: "From Data to Decisions: How Research Analytics Is Redefining Competitive Strategy",
      desc: "Examines how organizations are embedding research and analytics capabilities into strategic planning cycles to make faster, more confident decisions in dynamic market conditions.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Research & Analytics Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Research & Analytics"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Browse GTS Techs' research and analytics resource library — covering AI-powered market research, competitive intelligence, clinical data analytics, and the practices that help organizations turn information into strategic advantage.
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
        title="Unlock the Power of Research & Analytics"
        subtitle="Explore GTS Techs' research and analytics services that help enterprises convert data into strategic intelligence."
        linkLabel="Explore Research & Analytics"
        linkTo="/experiences/research-analytics"
      />
    </div>
  );
}
