import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Omnichannel Routing',
    description:
      'Intelligently route every customer interaction — voice, chat, email, social, and messaging — to the best-qualified agent or AI bot in real time. Configurable routing rules incorporate skills, language, sentiment, and customer lifetime value to maximise first-contact resolution.',
  },
  {
    title: 'Conversational AI',
    description:
      'Deploy virtual agents powered by large language models to handle common enquiries around the clock without agent involvement. Seamless escalation paths ensure customers reach a live agent the moment complexity demands human judgement.',
  },
  {
    title: 'Workforce Management',
    description:
      'Forecast interaction volumes, schedule agents, and manage intraday adherence from a single workforce management module. Capacity planning algorithms account for seasonality, skill mix, and service-level targets to keep costs optimised.',
  },
  {
    title: 'Quality Analytics',
    description:
      'Automatically score 100% of interactions using speech and text analytics, surfacing coaching opportunities and compliance risks without manual sampling. Trend dashboards give supervisors actionable insight into team performance every day.',
  },
];

export default function SuperCX() {
  return (
    <div>
      <PageHeader
        title="SuperCX — Omnichannel CX Platform"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['SuperCX']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Capabilities</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          SuperCX is GTS Techs' enterprise-grade omnichannel contact-centre platform, purpose-built to unify every
          customer touchpoint — voice, digital, and self-service — onto a single intelligent workspace. Purpose-built
          routing engines, embedded AI, and real-time analytics give contact-centre leaders the tools to deliver
          consistently exceptional experiences at scale while keeping operational costs firmly in check.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Deployed on-premises or in the cloud, SuperCX integrates with leading CRM, ITSM, and workforce management
          solutions through an open API layer. Implementation teams benefit from pre-built connectors, certified
          migration paths from legacy ACD systems, and dedicated GTS Techs support throughout the go-live journey.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Experience</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            SuperCX embeds AI at every interaction layer — from real-time agent assist cards that surface relevant
            knowledge articles mid-call, to automatic post-interaction summaries that eliminate after-call work.
            Sentiment analysis and next-best-action recommendations guide agents toward outcomes that improve CSAT
            and reduce handle time simultaneously.
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
        title="Automate Workflows Behind Every CX Interaction"
        subtitle="See how TruBot RPA complements SuperCX by automating back-office tasks triggered by contact-centre events."
        linkLabel="Explore TruBot"
        linkTo="/products/trubot"
      />
    </div>
  );
}
