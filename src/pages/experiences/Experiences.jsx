import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Experiences() {
  const pillars = [
    "Contact Center CX",
    "Customer Care",
    "Customer Loyalty Management",
    "Trust and Safety",
    "Customer Analytics",
    "Customer Management Consulting",
    "Digital Proctoring",
    "Research & Analytics",
    "Experience Management Consulting",
    "GCC for Market Research",
    "Research Technology",
    "Customer Journey Analytics",
  ];

  return (
    <div>
      <PageHeader
        title="Digital Experiences"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Digital Experiences"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Reimagining Every Customer and User Experience
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Digital Experiences practice helps organizations design, operate, and continuously
              improve the interactions that define their relationships with customers, employees, and
              stakeholders. From AI-augmented contact center operations and customer loyalty programs
              through digital proctoring and advanced market research analytics, we bring together
              domain expertise, technology, and data science to create experiences that drive loyalty,
              trust, and measurable business outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our experience delivery model integrates seamlessly with client brand standards and
              technology ecosystems, enabling organizations to scale high-quality interactions without
              proportionally scaling costs. Whether the goal is transforming a legacy contact center
              into an omnichannel engagement hub or building a global market research capability through
              a GCC model, GTS Techs provides the people, processes, and platforms to deliver.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Experiences Define Competitive Advantage</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            In today's hyper-connected marketplace, the quality of customer and user experiences has
            become the primary differentiator between market leaders and laggards. Research consistently
            demonstrates that customers who have excellent experiences spend more, churn less, and
            advocate more actively for the brands they love. GTS Techs partners with leading global
            brands to build experience capabilities that are measurable, scalable, and continuously
            improving through rigorous analytics and feedback loops. Our team of CX strategists,
            technology architects, and operations specialists works collaboratively with clients to
            diagnose experience gaps, design target-state operating models, and execute the transformation
            programs required to achieve and sustain world-class experience outcomes.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Transform Your Customer Experiences"
        subtitle="Start with our Contact Center CX Services and discover how we help leading brands deliver exceptional customer interactions at scale."
        linkLabel="Explore Contact Center CX"
        linkTo="/experiences/contact-center"
      />
    </div>
  );
}
