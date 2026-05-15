import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Infographics() {
  const items = [
    {
      title: "Automation ROI Calculator: What Enterprises Gain in Year One",
      topic: "Automation ROI",
      desc: "A visual breakdown of average cost savings, efficiency gains, and error reduction rates achieved by enterprises in their first year of intelligent automation deployment across five key industries.",
    },
    {
      title: "AI Adoption Stats 2025: Where Enterprises Stand Today",
      topic: "AI Adoption",
      desc: "Key data points and survey findings on AI adoption maturity levels, investment priorities, and the top barriers organizations face when scaling AI across business functions.",
    },
    {
      title: "The Anatomy of an Intelligent Document Processing Workflow",
      topic: "Document AI",
      desc: "A step-by-step visual guide to how TruCap+ processes documents — from ingestion and classification to extraction, validation, and system integration — with accuracy benchmarks at each stage.",
    },
    {
      title: "Digital Finance Transformation: The Journey from Manual to Autonomous",
      topic: "Digital Finance",
      desc: "This infographic maps the maturity stages of finance operations transformation, from manual processes to AI-augmented and fully autonomous finance — with key milestones and enabling technologies.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Infographics"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Infographics"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Browse GTS Techs' collection of data-rich infographics that visualize key trends, benchmarks, and frameworks in AI adoption, intelligent automation, digital finance, and document processing.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-l-4 border-[#dc2626] hover:shadow-md transition">
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wide">{item.topic}</span>
              <h3 className="font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Want the Full Story?"
        subtitle="Read our detailed case studies for the data, context, and outcomes behind every transformation."
        linkLabel="Explore Case Studies"
        linkTo="/resources/case-studies"
      />
    </div>
  );
}
