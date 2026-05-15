import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function CustomerLoyalty() {
  const capabilities = [
    "Loyalty Program Administration",
    "Points & Rewards Management",
    "Tier Management & Upgrades",
    "Partner & Coalition Programs",
    "Member Onboarding & Servicing",
    "Redemption Processing",
    "Fraud & Abuse Monitoring",
    "Loyalty Helpdesk Support",
  ];

  return (
    <div>
      <PageHeader
        title="Customer Loyalty Management"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Customer Loyalty Management"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              End-to-End Loyalty Program Operations
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Customer Loyalty Management services provide the operational backbone for
              complex loyalty programs across retail, hospitality, financial services, and airline
              industries. We manage the complete loyalty program lifecycle including member registration,
              points accrual and redemption processing, tier management, partner integration, fraud
              monitoring, and member servicing — at the scale that global loyalty programs demand,
              often processing tens of millions of transactions per month.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our loyalty operations teams combine deep program knowledge with customer engagement
              expertise, ensuring that every member interaction reinforces program value and
              encourages ongoing participation. We maintain rigorous accuracy standards for points
              and rewards calculations, implement robust fraud detection to protect program economics,
              and provide multi-channel member servicing capabilities that resolve issues quickly
              and maintain member satisfaction even when things go wrong.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Retention Analytics That Drive Loyalty ROI</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            The most successful loyalty programs are those that use member behavior data to deliver
            personalized, timely, and relevant experiences that deepen emotional connection with the
            brand. GTS Techs provides advanced retention analytics services that analyze member
            engagement patterns, redemption behaviors, and churn risk signals to identify intervention
            opportunities before members disengage. Our analytics team builds predictive churn models,
            next-best-offer engines, and segmentation frameworks that enable loyalty program managers
            to run precision retention campaigns with measurable impact on member lifetime value.
            Clients consistently report 10–20 percent improvements in active member rates and significant
            increases in program ROI within 12–18 months of implementing our analytics-led approach
            to loyalty management.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Maximize Member Lifetime Value"
        subtitle="Learn how our Trust and Safety services protect your customers and platforms from fraud, abuse, and harmful content."
        linkLabel="Explore Trust and Safety"
        linkTo="/experiences/trust-and-safety"
      />
    </div>
  );
}
