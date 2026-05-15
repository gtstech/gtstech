import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function HyperAutomation() {
  return (
    <div>
      <PageHeader
        title="Hyper-Automation"
        subtitle="Combining RPA, AI, BPM, and agentic automation to orchestrate end-to-end process automation that transforms enterprise operations at scale."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Hyper-Automation"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hyper-Automation Architecture</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Hyper-automation is the discipline of applying an integrated stack of automation technologies — RPA, AI, BPM, Intelligent Document Processing, and low-code platforms — to automate complex, end-to-end business processes that span multiple systems, decision points, and human touchpoints. Unlike point automation, hyper-automation creates orchestrated, self-improving process chains that deliver exponential efficiency gains.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            GTS Techs designs hyper-automation architectures using platforms including UiPath, Microsoft Power Automate, OutSystems, and OpenAI-powered agent frameworks. Our automation architects map process end-states before selecting technology, ensuring each automation initiative solves a genuine business problem rather than simply digitizing inefficiency.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Automation Strategy & Roadmap",
            "RPA Implementation (UiPath, Power Automate)",
            "Business Process Management (BPM)",
            "Intelligent Document Processing (IDP)",
            "Low-Code Workflow Automation",
            "Automation CoE Setup & Governance",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Automation solutions designed for enterprise reliability, scalability, and long-term ROI optimization.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Process Mining & Discovery</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Effective automation begins with a deep, data-driven understanding of how processes actually run — not how they are supposed to run. Process mining tools extract execution data from enterprise systems to reveal actual process flows, identify bottlenecks, quantify waste, and prioritize automation opportunities based on realistic ROI projections. GTS Techs implements process mining programs that provide an objective foundation for every automation investment decision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Process Mining Implementation",
              "Event Log Analysis & Visualization",
              "Bottleneck & Deviation Detection",
              "Automation Candidate Scoring",
              "ROI Modeling & Prioritization",
              "Continuous Process Monitoring",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Data-driven process intelligence that ensures automation investments target the highest-value opportunities.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Agentic AI in Automation</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            The next frontier of hyper-automation is agentic AI — autonomous AI agents that can perceive context, reason through complex situations, take actions across multiple systems, and handle exceptions that would traditionally require human judgment. GTS Techs builds agentic automation solutions that go beyond rule-based RPA to handle unstructured inputs, ambiguous scenarios, and multi-step decision processes.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our agentic AI automation frameworks are built with robust human-in-the-loop controls, audit logging, and escalation protocols that ensure autonomous actions remain safe, compliant, and aligned with business policies. We design agents with clear task boundaries and confidence thresholds, so the right decisions are handled automatically while edge cases are gracefully escalated for human review.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Multi-Agent Orchestration Frameworks",
            "AI-Augmented RPA (Cognitive Automation)",
            "Conversational AI for Process Automation",
            "Exception Handling & Human-in-Loop Design",
            "Agent Monitoring & Observability",
            "Agentic Process Testing & Validation",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Automate Your Way to Operational Excellence"
        subtitle="Explore our Product Engineering practice to see how we build intelligent products with automation and AI built in from the ground up."
        linkLabel="Explore Product Engineering"
        linkTo="/technologies/product-engineering"
      />
    </div>
  );
}
