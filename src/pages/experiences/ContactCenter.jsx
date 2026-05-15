import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function ContactCenter() {
  const capabilities = [
    "Omnichannel Contact Center Operations",
    "AI-Powered Virtual Agents",
    "Workforce Management & Scheduling",
    "Quality Assurance & Monitoring",
    "Real-Time Agent Assistance",
    "CX Analytics & Reporting",
    "Back-Office Integration",
    "CRM Platform Management",
  ];

  return (
    <div>
      <PageHeader
        title="Contact Center CX Services"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Contact Center CX Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Center Transformation at Enterprise Scale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Contact Center CX Services transform traditional reactive service operations
              into proactive, insight-driven engagement engines that reduce costs, increase first-contact
              resolution, and generate measurable improvements in customer satisfaction scores. We manage
              millions of customer interactions annually across voice, digital messaging, email, and
              self-service channels for leading brands in financial services, telecommunications, retail,
              and technology sectors.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our contact center delivery model is built on a foundation of rigorous operational
              governance, continuous agent training, and real-time performance management. Workforce
              management tools ensure optimal staffing across channels and time zones, while quality
              assurance programs monitor 100 percent of interactions through AI-powered speech and
              text analytics to identify coaching opportunities and compliance risks proactively.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology and Analytics Powering Next-Gen CX</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            The modern contact center is as much a technology operation as a people operation, and
            GTS Techs brings both dimensions together with equal depth. Our technology practice
            encompasses cloud contact center platform implementation (including Genesys, Amazon Connect,
            and NICE CXone), AI chatbot and virtual agent development, real-time agent guidance tools,
            and advanced analytics environments that surface actionable CX insights from every customer
            interaction. Predictive analytics models forecast contact volumes, identify at-risk customers,
            and recommend proactive outreach strategies that prevent escalations and reduce inbound
            contact volume by 15–30 percent over time. The result is a contact center that continuously
            improves itself through data rather than depending solely on periodic review cycles.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Deliver Exceptional Customer Service at Scale"
        subtitle="Explore our Customer Care services and see how we build empathetic, efficient care experiences across every channel."
        linkLabel="Explore Customer Care"
        linkTo="/experiences/customer-care"
      />
    </div>
  );
}
