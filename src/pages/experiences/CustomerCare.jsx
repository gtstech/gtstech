import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function CustomerCare() {
  const capabilities = [
    "Voice & Phone Support",
    "Live Chat & Messaging",
    "Email & Ticket Management",
    "Social Media Customer Care",
    "Self-Service Portal Support",
    "Video-Assisted Support",
    "Technical Help Desk",
    "Complaint & Escalation Handling",
  ];

  return (
    <div>
      <PageHeader
        title="Customer Care"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Customer Care"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Omnichannel Customer Care Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Customer Care services provide seamless, empathetic support experiences across
              every channel a customer chooses — voice, live chat, email, social media, video, and
              self-service platforms. Our omnichannel delivery model ensures that customers receive
              consistent, high-quality service regardless of the interaction channel, with full
              context continuity when customers switch between channels mid-journey.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We design and operate customer care programs that balance efficiency with genuine human
              connection, recognizing that the moments that matter most to customers are often the ones
              that require empathy, judgment, and expertise beyond what automation can provide. Our
              care agents are recruited, trained, and coached to brand standards that reflect each
              client's unique values, voice, and customer expectations, functioning as genuine extensions
              of the client organization rather than generic service providers.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI-Augmented Agents for Superior Outcomes</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            GTS Techs equips every customer care agent with AI-powered tools that surface the right
            information, suggest the optimal response, and flag compliance risks in real time —
            enabling agents to focus on the human dimensions of care while AI handles the cognitive
            load of information retrieval and policy navigation. Real-time agent assistance tools
            pull relevant knowledge base articles, customer history, and next-best-action recommendations
            based on live conversation context, reducing average handle time by 15–25 percent while
            simultaneously improving first-contact resolution rates. Post-interaction analytics
            automatically score conversations for quality, sentiment, and compliance adherence,
            providing supervisors with precise coaching targets and enabling continuous improvement
            at scale without manual call monitoring overhead.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Build Lasting Customer Relationships"
        subtitle="Explore our Customer Loyalty Management services and see how we help brands turn satisfied customers into loyal advocates."
        linkLabel="Explore Customer Loyalty"
        linkTo="/experiences/customer-loyalty"
      />
    </div>
  );
}
