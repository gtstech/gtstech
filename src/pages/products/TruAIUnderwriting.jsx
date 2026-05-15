import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Risk Scoring',
    description:
      'Ensemble machine learning models ingest structured and unstructured risk data — financial statements, claims history, public records, and third-party data feeds — to produce calibrated risk scores with full explainability for auditors and regulators. Score models are version-controlled and independently validated, meeting actuarial and regulatory standards.',
  },
  {
    title: 'Coverage Recommendations',
    description:
      'AI-generated coverage recommendations align proposed policy terms with the calculated risk profile, ensuring consistency across underwriters and eliminating the guesswork that drives loss-ratio volatility. Recommendations are presented with supporting evidence, allowing underwriters to accept, modify, or override with documented rationale.',
  },
  {
    title: 'Pricing Guidance',
    description:
      'Dynamic pricing models factor in real-time market data, competitive benchmarks, loss trend analysis, and portfolio composition to recommend technically sound premiums that balance growth and profitability objectives. Pricing decisions are logged with full audit trails to support regulatory filing and internal governance requirements.',
  },
  {
    title: 'Portfolio Analytics',
    description:
      'Aggregated portfolio dashboards give underwriting managers and actuaries a live view of risk concentration, rate adequacy, and loss development across every line of business, geography, and distribution channel. Scenario modelling tools allow teams to stress-test the portfolio against catastrophe events and economic shocks before they occur.',
  },
];

export default function TruAIUnderwriting() {
  return (
    <div>
      <PageHeader
        title="TruAI Underwriting"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['TruAI Underwriting']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Underwriting Automation</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          TruAI Underwriting is GTS Techs' AI-powered platform for insurance carriers seeking to modernise their
          underwriting process from a manual, judgement-driven practice to a data-driven, model-assisted discipline.
          By automating the triage of new submissions, extracting risk data from documents with TruCap+, and applying
          calibrated machine learning models, TruAI Underwriting dramatically reduces submission-to-quote cycle times
          while improving risk selection accuracy and portfolio profitability.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          The platform is built around an explainable AI framework that surfaces model reasoning in language
          underwriters can understand, ensuring regulators and internal governance teams can audit every decision.
          Integration with leading policy administration systems, actuarial models, and reinsurance platforms makes
          TruAI Underwriting a natural extension of the existing insurance technology stack rather than a disruptive
          replacement.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Decision Support</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            TruAI Underwriting is designed to augment human underwriters rather than replace them, delivering
            AI-generated analysis and recommendations that inform expert judgement rather than constrain it.
            Configurable appetite rules, referral triggers, and authority levels ensure the right decisions are
            escalated to the right people while straight-through processing handles the high volume of routine
            submissions automatically. The result is a faster, more consistent, and more profitable underwriting
            operation at any scale.
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
        title="Streamline Legal Discovery with AI"
        subtitle="TruDiscovery applies predictive coding and concept clustering to cut eDiscovery review costs and accelerate case timelines."
        linkLabel="Explore TruDiscovery"
        linkTo="/products/trudiscovery"
      />
    </div>
  );
}
