import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function IntelligentAutomation() {
  const platformCapabilities = [
    "Attended & Unattended RPA",
    "AI-Powered OCR & NLP",
    "Exception Handling Workflows",
    "Process Analytics Dashboard",
    "Multi-System Integration",
    "Secure Credential Vault",
    "Drag-and-Drop Bot Designer",
    "Hyperautomation Orchestration",
  ];

  return (
    <div>
      <PageHeader
        title="Intelligent Automation Platform"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Intelligent Automation Platform"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Platform Capabilities Designed for Enterprise Scale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The GTS Techs Intelligent Automation Platform is an enterprise-grade hyperautomation
              environment that combines robotic process automation, artificial intelligence, machine
              learning, and process orchestration into a single governed platform. Built for mission-critical
              deployments, the platform supports both attended automation — where bots assist human workers
              in real time — and unattended automation where bots execute end-to-end processes independently
              on scheduled or event-triggered bases.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The platform's AI layer includes pre-trained models for document understanding, sentiment
              analysis, anomaly detection, and predictive routing that can be further fine-tuned on
              client-specific data. A drag-and-drop bot designer lowers the barrier to automation
              development, enabling citizen developer programs, while a centralized management console
              provides complete visibility into bot performance, schedule adherence, and exception queues
              across the entire automation estate.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {platformCapabilities.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Benefits That Drive Competitive Advantage</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Enterprises that deploy the GTS Techs Intelligent Automation Platform gain compounding
            competitive advantages over time. In addition to immediate cost and cycle time benefits,
            the platform's continuous learning architecture means that automation performance improves
            automatically as more transactions are processed and more feedback is incorporated into
            model training. Clients gain access to a rich library of prebuilt automation components,
            connectors to over 200 enterprise applications and APIs, and a dedicated center-of-excellence
            support team that governs the automation program, tracks benefits realization, and identifies
            new opportunities for expansion across business units. The platform is certified for
            deployment in highly regulated environments including financial services, healthcare, and
            government sectors.
          </p>
        </div>
      </section>

      <CtaBanner
        title="See TruBot in Action"
        subtitle="Learn how TruBot, our flagship RPA engine, delivers precision automation for the world's most demanding processes."
        linkLabel="Explore TruBot"
        linkTo="/products/trubot"
      />
    </div>
  );
}
