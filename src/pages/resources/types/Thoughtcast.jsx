import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Thoughtcast() {
  const items = [
    {
      title: "Episode 12: The AI-First Enterprise — Are Businesses Ready?",
      topic: "AI Trends",
      desc: "GTS Techs experts discuss the organizational and cultural shifts required for enterprises to become truly AI-first, covering talent, governance, and technology adoption maturity models.",
    },
    {
      title: "Episode 11: Autonomous Finance — The Road to Zero-Touch Operations",
      topic: "Digital Finance",
      desc: "A deep dive into how finance leaders are using intelligent automation and AI to move toward fully autonomous finance operations, with insights from CFOs across manufacturing and services.",
    },
    {
      title: "Episode 10: Customer Experience in the Age of AI — Beyond Chatbots",
      topic: "Customer Experience",
      desc: "This episode explores how AI is reshaping contact centers beyond simple chatbot deployments, focusing on AI-augmented agents, predictive routing, and real-time sentiment orchestration.",
    },
    {
      title: "Episode 09: Data as a Competitive Moat — Building an Analytics Culture",
      topic: "Data & Analytics",
      desc: "Industry leaders share perspectives on building data literacy, democratizing analytics, and creating feedback loops between data science teams and business decision-makers.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Thoughtcast"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Thoughtcast"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Thoughtcast is GTS Techs' video and podcast series featuring conversations with industry leaders, technology experts, and business innovators on the trends shaping the future of intelligent enterprise operations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-l-4 border-[#dc2626] hover:shadow-md transition">
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wide">{item.topic}</span>
              <h3 className="font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Prefer Live Discussions?"
        subtitle="Join our upcoming webinars for real-time conversations with GTS Techs experts and industry practitioners."
        linkLabel="Browse Webinars"
        linkTo="/resources/webinars"
      />
    </div>
  );
}
