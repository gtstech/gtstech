import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Newsletters() {
  const items = [
    {
      title: "The Intelligence Digest — Q1 2025",
      topic: "Q1 2025 Edition",
      desc: "This quarter's edition covers the rise of agentic AI frameworks, highlights from GTS Techs' latest analyst recognitions, and a roundup of the most impactful automation deployments of the quarter.",
    },
    {
      title: "The Intelligence Digest — Q4 2024",
      topic: "Q4 2024 Edition",
      desc: "Year-end edition featuring a retrospective on enterprise AI adoption in 2024, key product milestones for TruBot and TruCap+, and predictions for intelligent automation trends in 2025.",
    },
    {
      title: "The Intelligence Digest — Q3 2024",
      topic: "Q3 2024 Edition",
      desc: "Highlights include GTS Techs' expanded Salesforce practice, deep dives into contact center AI deployments, and an interview series with finance transformation leaders across sectors.",
    },
    {
      title: "The Intelligence Digest — Q2 2024",
      topic: "Q2 2024 Edition",
      desc: "Covers the launch of FINATO 3.0, industry commentary on the state of hyperautomation, and curated research links on generative AI's emerging role in enterprise document processing.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Newsletters"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Newsletters"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Browse past issues of The Intelligence Digest — GTS Techs' quarterly newsletter featuring curated insights on AI, automation, digital transformation, product updates, and industry trends.
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
        title="Want More In-Depth Reading?"
        subtitle="Explore our full blog library for expert articles on AI, automation, and enterprise digital transformation."
        linkLabel="Read Our Blogs"
        linkTo="/resources/blogs"
      />
    </div>
  );
}
