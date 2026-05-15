import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function ProductEngineeringTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "GTS Techs Builds Scalable SaaS Platform for Ed-Tech Startup — 0 to 10M Users",
      desc: "A US-based ed-tech company engaged GTS Techs to architect, build, and QA a cloud-native SaaS platform that scaled from launch to over 10 million active users within 18 months.",
    },
    {
      type: "White Paper",
      title: "Engineering for Scale: Architecting Cloud-Native Products for Enterprise Markets",
      desc: "Covers the key architectural decisions, technology choices, and DevOps practices that enable product engineering teams to build scalable, resilient, and maintainable cloud-native applications.",
    },
    {
      type: "Webinar",
      title: "AI-Augmented QA: How Intelligent Test Automation Is Changing Software Quality",
      desc: "Product engineering and QA leaders discuss how AI-driven test automation, shift-left testing, and continuous quality engineering are reducing defect rates and accelerating release cycles.",
    },
    {
      type: "Blog",
      title: "Why Product Engineering Teams Are Embedding AI from Day One",
      desc: "Examines the shift toward AI-native product development — where machine learning, predictive features, and intelligent workflows are designed in from the start rather than bolted on later.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Product Engineering Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Product Engineering"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore GTS Techs' product engineering resource library — covering software architecture, cloud-native development, AI-augmented QA, and the engineering practices that power high-quality, scalable digital products.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-t-4 border-[#dc2626] hover:shadow-md transition">
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wide">{r.type}</span>
              <h3 className="font-bold text-gray-900 mt-2 mb-3">{r.title}</h3>
              <p className="text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Build Better Products with GTS Techs"
        subtitle="Discover our end-to-end product engineering services — from architecture and development to QA and cloud deployment."
        linkLabel="Explore Product Engineering"
        linkTo="/technologies/product-engineering"
      />
    </div>
  );
}
