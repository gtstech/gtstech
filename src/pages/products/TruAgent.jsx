import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Autonomous Planning',
    description:
      'TruAgent decomposes complex, multi-step business objectives into executable task sequences, selecting the optimal tools, data sources, and sub-agents required to accomplish each step without requiring human intervention at every decision point. Planning is governed by configurable enterprise policies that constrain agent behaviour to approved actions and systems.',
  },
  {
    title: 'Dynamic Execution',
    description:
      'Agents execute plans adaptively, responding to real-time feedback from APIs, databases, and external services — retrying failed actions, rerouting around obstacles, and escalating to human decision-makers only when genuinely novel situations fall outside their authority. Multi-agent orchestration allows specialised agents to collaborate on complex cross-functional workflows.',
  },
  {
    title: 'Human-in-the-Loop',
    description:
      'Configurable human-in-the-loop checkpoints ensure critical decisions, high-value transactions, and sensitive actions always receive human review and approval before execution, maintaining meaningful human oversight even in highly automated end-to-end workflows. Approval interfaces are available on web, mobile, and collaboration platforms for maximum accessibility.',
  },
  {
    title: 'Audit Logging',
    description:
      'Every agent action, tool call, data access, decision, and human interaction is captured in a tamper-evident, structured audit log that provides full transparency into how outcomes were achieved. Audit logs are queryable and exportable to support internal governance, external regulatory examination, and continuous improvement of agent performance.',
  },
];

export default function TruAgent() {
  return (
    <div>
      <PageHeader
        title="TruAgent — Agentic AI Platform"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['TruAgent']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Agentic AI Capabilities</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          TruAgent is GTS Techs' next-generation agentic AI platform, enabling enterprises to deploy AI agents
          that autonomously plan, reason, and execute complex multi-step workflows across enterprise systems —
          going far beyond the simple task automation of traditional RPA or the single-turn responses of
          conventional chatbots. TruAgent agents perceive context, form plans, use tools, and act across
          connected systems to accomplish business objectives end to end.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          TruAgent is designed for enterprise-grade reliability and security from the ground up, with role-based
          agent permissions, policy guardrails, encrypted credential management, and comprehensive audit logging
          built into the core platform rather than bolted on as afterthoughts. Integration with TruBot, TruCap+,
          and TruBI allows agents to leverage the full breadth of the GTS Techs product ecosystem as specialised
          tools in a coordinated intelligent workflow.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Deployment</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            TruAgent is engineered to operate within the governance, security, and operational frameworks of
            large enterprise customers. The platform supports single-tenant private cloud and on-premises deployment
            models for organisations with strict data residency requirements, and includes comprehensive RBAC,
            SSO integration, and network isolation capabilities. A dedicated agent marketplace provides pre-built,
            tested agent templates for common enterprise use cases across finance, supply chain, HR, and customer
            service — dramatically reducing the time and expertise required to deploy production-ready agentic
            solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow border-l-4 border-[#dc2626]">
                <h3 className="font-bold text-[#dc2626] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="See the Full GTS Techs AI Technology Stack"
        subtitle="Explore how GTS Techs AI brings foundation model capabilities, responsible AI governance, and enterprise integration to every product."
        linkLabel="Explore GTS Techs AI"
        linkTo="/technologies/datamatics-ai"
      />
    </div>
  );
}
