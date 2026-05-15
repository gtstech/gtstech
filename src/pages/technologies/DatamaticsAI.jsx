import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

const accelerators = [
  {
    name: "KaiTone",
    description:
      "An AI-powered sentiment and tone analysis accelerator that processes customer interactions across voice, text, and digital channels to surface actionable insights for CX teams.",
  },
  {
    name: "KaiCloud Analyzer",
    description:
      "An intelligent cloud cost governance tool that continuously monitors infrastructure spend, identifies waste, and recommends optimization actions with predicted savings.",
  },
  {
    name: "KaiKnowledge Management",
    description:
      "A generative AI knowledge platform that indexes enterprise content, answers natural-language queries, and surfaces contextual information at the point of decision.",
  },
];

const phases = [
  {
    phase: "Phase 1 — Discover",
    items: ["AI readiness assessment", "Use-case prioritization", "ROI modeling", "Data landscape audit"],
    description:
      "We begin every AI engagement with a structured discovery that maps your current capabilities, identifies high-value use cases, and builds the business case for investment.",
  },
  {
    phase: "Phase 2 — Build & Integrate",
    items: ["Solution architecture", "Model development", "System integration", "Pilot deployment"],
    description:
      "Our engineering teams design, develop, and integrate AI solutions using proven patterns and proprietary accelerators that reduce build time and improve solution reliability.",
  },
  {
    phase: "Phase 3 — Scale & Operate (AI Ops)",
    items: ["Performance monitoring", "Model retraining", "Continuous optimization", "Governance & compliance"],
    description:
      "Post-deployment, our AI Ops practice monitors model performance, manages drift, and ensures ongoing compliance — keeping your AI solutions accurate and aligned with business goals.",
  },
];

export default function DatamaticsAI() {
  return (
    <div>
      <PageHeader
        title="GTS Techs.AI"
        subtitle="A unified AI services portfolio that embeds intelligence across your enterprise — from strategy to scaled operations."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["GTS Techs.AI"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Services Portfolio</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            GTS Techs.AI is our flagship AI practice — a consolidated portfolio of AI strategy, development, integration, and operations services built to help enterprises move from AI experimentation to enterprise-scale production. We bring together a centralized AI Center of Excellence, a library of proprietary accelerators, and a network of certified AI engineers to deliver outcomes that matter.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you are starting your AI journey or looking to industrialize AI at scale, our services span agentic AI, machine learning, natural language processing, computer vision, and generative AI. We adopt a responsible-by-design approach, embedding fairness, explainability, and compliance into every solution we deliver.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Accelerators</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Our proprietary Kai-series accelerators compress delivery timelines and improve solution quality by providing pre-built, production-tested AI capabilities ready for enterprise deployment.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accelerators.map((acc) => (
              <div key={acc.name} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] text-lg mb-2">{acc.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Adoption Journey</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div key={p.phase} className="bg-white rounded-xl p-6 shadow border-t-4 border-[#dc2626]">
              <h3 className="font-semibold text-[#dc2626] text-lg mb-2">{p.phase}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
              <ul className="space-y-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Transform Your Enterprise with AI"
        subtitle="Explore our full Artificial Intelligence capabilities and see how we drive measurable business outcomes."
        linkLabel="Explore Artificial Intelligence"
        linkTo="/technologies/artificial-intelligence"
      />
    </div>
  );
}
