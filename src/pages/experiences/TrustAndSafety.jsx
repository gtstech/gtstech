import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function TrustAndSafety() {
  const capabilities = [
    "Text & Image Content Moderation",
    "Video & Audio Review",
    "Community Policy Enforcement",
    "Account Fraud Detection",
    "Payment Fraud Monitoring",
    "Identity Verification",
    "Abuse & Harassment Investigation",
    "Appeals & Escalation Handling",
  ];

  return (
    <div>
      <PageHeader
        title="Trust and Safety"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Trust and Safety"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Content Moderation at Platform Scale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Trust and Safety services help digital platforms, social networks, marketplaces,
              and online communities maintain safe, welcoming environments for their users by combining
              AI-powered content classification with expert human review. We process millions of content
              items daily across text, images, video, and audio formats, applying client-specific
              community standards and policy frameworks to identify and action policy-violating content
              with speed and accuracy that purely automated systems cannot match alone.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our content moderation programs are built around a tiered review architecture that routes
              clear-cut violations to automated enforcement while directing ambiguous or high-stakes
              cases to specialized human reviewers with deep policy expertise. We invest heavily in
              moderator wellbeing through structured rotation schedules, psychological support programs,
              and resilience training, recognizing that sustainable quality requires protecting our
              teams while they protect the platforms we serve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fraud and Abuse Prevention Across Digital Channels</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Beyond content moderation, GTS Techs Trust and Safety practice provides comprehensive
            fraud and abuse prevention services that protect platform economics, user data, and brand
            integrity. Our fraud operations teams monitor account creation patterns, transaction
            behaviors, and network signals to detect coordinated inauthentic activity, fake account
            networks, payment fraud, and identity theft attempts in real time. Machine learning models
            trained on platform-specific fraud patterns generate risk scores for every significant
            platform action, enabling our analysts to focus investigative resources on the highest-risk
            cases while automated controls handle clear-cut violations at scale. Clients operating
            digital marketplaces and financial platforms report 25–45 percent reductions in fraud
            loss rates following implementation of our combined AI and human fraud prevention model.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Protect Your Platform and Your Users"
        subtitle="Explore our Customer Analytics capabilities and turn every interaction into actionable intelligence about your customers."
        linkLabel="Explore Customer Analytics"
        linkTo="/experiences/customer-analytics"
      />
    </div>
  );
}
