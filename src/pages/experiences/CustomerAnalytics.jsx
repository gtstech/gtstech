import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function CustomerAnalytics() {
  const capabilities = [
    "Speech Analytics",
    "Text & Chat Analytics",
    "Sentiment Analysis",
    "Voice of the Customer Programs",
    "Customer Journey Mapping",
    "Touchpoint Attribution Analysis",
    "NPS & CSAT Analytics",
    "Churn Prediction Modeling",
  ];

  return (
    <div>
      <PageHeader
        title="Customer Analytics"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Customer Analytics"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Speech and Text Analytics for Deeper Customer Understanding
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Customer Analytics services transform raw interaction data — spanning recorded
              calls, chat transcripts, email threads, and survey responses — into actionable intelligence
              that enables organizations to understand what customers truly experience and how to improve
              those experiences at scale. Our speech analytics platform processes 100 percent of voice
              interactions, applying natural language processing and sentiment analysis to surface
              themes, trends, and individual coaching opportunities that manual sampling simply cannot
              reveal.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Text analytics capabilities extend this understanding across digital channels, identifying
              sentiment shifts, product pain points, competitive mentions, and emerging customer needs
              from millions of text interactions that would otherwise go unanalyzed. Our analytics
              engineers build custom taxonomies and topic models calibrated to each client's industry
              and customer base, ensuring that insights are specific, actionable, and directly tied
              to the business outcomes that matter most.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Journey Analytics and End-to-End Visibility</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Understanding individual customer interactions is valuable, but understanding how customers
            move through complex, multi-touchpoint journeys over time is transformational. GTS Techs
            Customer Journey Analytics practice stitches together data from CRM systems, contact center
            platforms, digital channels, and operational systems to construct comprehensive journey maps
            that reveal where customers experience friction, confusion, or delight across the end-to-end
            experience lifecycle. Journey analytics models identify the specific touchpoints most likely
            to predict churn, upsell conversion, or advocacy behavior, enabling CX and marketing leaders
            to prioritize investments in the improvements that generate the greatest impact on customer
            lifetime value and overall satisfaction metrics. Organizations that act on journey insights
            consistently report 15–25 percent improvements in NPS and significant reductions in contact
            volume driven by proactive experience design.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Turn Customer Data into Competitive Intelligence"
        subtitle="Explore our Customer Management Consulting services to build the CX strategy and operating model your analytics insights demand."
        linkLabel="Explore Customer Management Consulting"
        linkTo="/experiences/customer-consulting"
      />
    </div>
  );
}
