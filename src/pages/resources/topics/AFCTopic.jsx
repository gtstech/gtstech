import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function AFCTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "GTS Techs Delivers End-to-End AFC System for Major Urban Transit Authority",
      desc: "A metropolitan transit authority implemented GTS Techs' automatic fare collection platform, enabling seamless multi-modal ticketing, real-time revenue reporting, and contactless payment across 400+ stations.",
    },
    {
      type: "White Paper",
      title: "The Future of Urban Mobility: AI-Driven Automatic Fare Collection Systems",
      desc: "Explores how next-generation AFC platforms leverage AI, open-loop payments, and cloud-native architectures to deliver frictionless, interoperable transit experiences.",
    },
    {
      type: "Webinar",
      title: "Open-Loop AFC: Enabling Contactless and Account-Based Ticketing at Scale",
      desc: "Transit technology leaders discuss the shift from closed-loop smart cards to open-loop, account-based ticketing systems and the architectural decisions that enable seamless passenger experiences.",
    },
    {
      type: "Blog",
      title: "How Automatic Fare Collection Is Evolving Beyond Ticketing",
      desc: "Examines how modern AFC systems are becoming mobility data platforms — powering demand forecasting, dynamic pricing, and multimodal journey planning for transit authorities.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Automatic Fare Collection Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Automatic Fare Collection"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore GTS Techs' automatic fare collection resources — covering AFC system implementations, open-loop payment modernization, AI-driven ticketing platforms, and the future of urban mobility technology.
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
        title="Modernize Your Transit Fare Systems"
        subtitle="Discover how GTS Techs' AFC technology delivers seamless, intelligent fare collection for transit authorities worldwide."
        linkLabel="Explore AFC Solutions"
        linkTo="/technologies/automatic-fare-collection"
      />
    </div>
  );
}
