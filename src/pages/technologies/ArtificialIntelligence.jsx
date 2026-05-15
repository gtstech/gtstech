import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function ArtificialIntelligence() {
  return (
    <div>
      <PageHeader
        title="Artificial Intelligence"
        subtitle="Comprehensive AI development, generative AI, and responsible AI governance services that help enterprises move from AI experimentation to scaled production impact."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Artificial Intelligence"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Development & Integration</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Artificial intelligence is no longer a future capability — it is a present competitive necessity. GTS Techs delivers end-to-end AI development services that span strategy, data engineering, model development, integration, and operations. Our AI engineers specialize in machine learning, deep learning, computer vision, NLP, and agentic AI architectures, building solutions that are accurate, explainable, and aligned with business objectives.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We integrate AI solutions seamlessly into existing enterprise systems — CRM, ERP, contact center platforms, and data warehouses — using well-architected APIs and event-driven patterns that ensure reliability, scalability, and maintainability. Our AI integration practice also covers model lifecycle management, ensuring that deployed models continue to perform as data and business conditions evolve.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Custom ML Model Development",
            "Computer Vision Solutions",
            "Natural Language Processing",
            "Agentic AI & Autonomous Agents",
            "AI Model Lifecycle Management",
            "AI System Integration",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Production-grade AI capabilities designed for enterprise scale, reliability, and long-term maintainability.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Generative AI Services</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Generative AI is redefining how enterprises create content, synthesize knowledge, automate complex reasoning, and interact with customers. Our generative AI practice helps organizations identify and implement high-value generative AI use cases — from RAG-powered enterprise search and document intelligence to code generation and customer communication automation — all built responsibly with appropriate guardrails and human oversight.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "LLM Selection & Fine-Tuning",
              "Retrieval-Augmented Generation (RAG)",
              "Prompt Engineering & Optimization",
              "Enterprise AI Copilot Development",
              "Multimodal AI Applications",
              "Generative AI for Code & Documentation",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Generative AI solutions engineered for enterprise security, performance, and measurable productivity outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Ethics & Governance</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            As AI systems take on greater decision-making authority in enterprise operations, governance, fairness, and transparency become non-negotiable. GTS Techs embeds responsible AI principles into every engagement — designing for explainability, testing for bias, enforcing data privacy, and ensuring alignment with applicable regulations including the EU AI Act, GDPR, and sector-specific compliance frameworks.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our AI governance practice helps organizations establish AI policy frameworks, model risk management processes, and audit trails that satisfy internal compliance requirements and external regulatory scrutiny. We work with legal, risk, and technology stakeholders to build governance that is proportionate to risk, practical to implement, and designed to evolve as regulation matures.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "AI Policy & Framework Development",
            "Bias Detection & Fairness Testing",
            "Model Explainability (XAI)",
            "AI Risk Classification & Assessment",
            "Regulatory Compliance (EU AI Act)",
            "AI Audit Trail & Documentation",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Put AI to Work in Your Enterprise"
        subtitle="Explore our Data & Analytics capabilities to see how data engineering and BI amplify the power of your AI investments."
        linkLabel="Explore Data & Analytics"
        linkTo="/technologies/data-analytics"
      />
    </div>
  );
}
