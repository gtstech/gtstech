import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function CustomerManagementConsulting() {
  const capabilities = [
    "CX Vision & Strategy Development",
    "Customer Segmentation Design",
    "Service Blueprint Creation",
    "Channel Strategy Optimization",
    "CX Maturity Assessment",
    "Operating Model Redesign",
    "Governance Framework Design",
    "Change Management & Enablement",
  ];

  return (
    <div>
      <PageHeader
        title="Customer Management Consulting"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Customer Management Consulting"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              CX Strategy That Connects Vision to Execution
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Customer Management Consulting practice helps organizations develop and execute
              customer experience strategies that align with business objectives, brand positioning, and
              evolving customer expectations. Our CX consultants combine deep industry expertise with
              proven strategic frameworks to assess the current state of client experience capabilities,
              identify the most impactful improvement opportunities, and design clear transformation
              roadmaps that build toward a differentiated, sustainable CX advantage.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We develop CX strategies that are grounded in rigorous customer research — including
              ethnographic studies, journey mapping workshops, and quantitative surveys — rather than
              internal assumptions. This outside-in perspective ensures that strategic priorities reflect
              what customers actually value, not just what organizations find operationally convenient,
              creating strategies that resonate with target customers and drive measurable improvements
              in loyalty and advocacy.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Operating Model Design for CX Excellence</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            A compelling CX strategy can only be realized through an operating model that has the
            people, processes, technology, and governance structures to deliver it consistently at
            scale. GTS Techs helps clients design and implement CX operating models that define clear
            accountability for customer outcomes, establish the right balance between centralized
            oversight and front-line empowerment, and integrate the technology tools and data systems
            required to make excellent experiences achievable in every customer interaction. Our change
            management expertise ensures that operating model transformations are adopted effectively
            by front-line teams and supported sustainably by leadership, creating lasting behavioral
            change rather than short-lived project improvements. We measure success through improvements
            in CX KPIs that matter to both customers and the business, including NPS, customer effort
            score, retention rates, and revenue from experience-driven upsell opportunities.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Build a CX-Led Competitive Advantage"
        subtitle="Explore our Digital Proctoring Services and see how technology is enabling secure, scalable assessment experiences globally."
        linkLabel="Explore Digital Proctoring"
        linkTo="/experiences/digital-proctoring"
      />
    </div>
  );
}
