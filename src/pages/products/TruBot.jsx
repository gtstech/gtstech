import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Visual Designer',
    description:
      'Build automation workflows through an intuitive drag-and-drop studio that requires no programming expertise, allowing business analysts to design, test, and publish bots independently. A rich library of pre-built activity packages covers the most common enterprise application interactions out of the box.',
  },
  {
    title: 'Bot Management',
    description:
      'Centralised orchestration console gives operations teams full visibility into every bot across departments, environments, and geographies. Role-based access controls, scheduling, and queue management ensure the right work gets done by the right bot at the right time.',
  },
  {
    title: 'Real-time Monitoring',
    description:
      'Live dashboards display bot health, task throughput, SLA adherence, and exception rates so teams can respond to disruptions before they affect downstream processes. Configurable alerting integrates with enterprise monitoring platforms via webhook and email.',
  },
  {
    title: 'Exception Handling',
    description:
      'Sophisticated exception management routes unhandled cases to human reviewers with full context, screenshots, and audit logs attached, enabling rapid resolution without process stalls. Machine learning models analyse exception patterns over time to suggest automation improvements proactively.',
  },
];

export default function TruBot() {
  return (
    <div>
      <PageHeader
        title="TruBot — RPA Platform"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['TruBot']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">RPA at Scale</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          TruBot is GTS Techs' enterprise robotic process automation platform, enabling organisations to deploy
          software robots that replicate repetitive, rule-based human actions across any application — web, desktop,
          mainframe, or API-connected — without altering existing IT infrastructure. From high-volume data entry and
          reconciliation to multi-system order management, TruBot bots execute 24/7 with zero fatigue and sub-second
          accuracy.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          TruBot is purpose-built for the enterprise, shipping with a multi-tenant control room, granular role-based
          permissions, built-in credential vaulting, and end-to-end encryption to satisfy even the most demanding
          security and compliance frameworks including SOC 2, ISO 27001, and GDPR.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Ecosystem</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            TruBot ships with hundreds of pre-built connectors for SAP, Oracle, Salesforce, ServiceNow, Microsoft 365,
            and popular banking and ERP platforms, dramatically cutting integration time. An open SDK allows
            development teams to extend the connector library to proprietary or niche applications, ensuring no
            process is left unautomated. Tight integration with TruCap+ and TruAI means bots can trigger intelligent
            document extraction or AI decisioning as part of a single end-to-end workflow.
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
        title="Add Intelligence to Every Document in Your Workflows"
        subtitle="TruCap+ intelligent document processing pairs with TruBot to extract structured data from any document type automatically."
        linkLabel="Explore TruCap+"
        linkTo="/products/trucap"
      />
    </div>
  );
}
