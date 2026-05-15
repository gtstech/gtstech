import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function CXTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "SuperCX Deployment Boosts CSAT by 22 Points for Top BPO Provider",
      desc: "A leading BPO integrated SuperCX with AI agent assist and omnichannel analytics, cutting average handle time by 35% and achieving a 22-point improvement in customer satisfaction scores.",
    },
    {
      type: "White Paper",
      title: "Reimagining Customer Experience with AI-Powered Contact Centers",
      desc: "Outlines how AI, sentiment analytics, and omnichannel engagement are reshaping the contact center landscape, with frameworks for measuring CX transformation success.",
    },
    {
      type: "Webinar",
      title: "The Omnichannel CX Imperative: Delivering Seamless Customer Journeys",
      desc: "Explores how leading brands unify customer interactions across voice, chat, email, and social using AI and intelligent routing — with real benchmarks from GTS Techs deployments.",
    },
    {
      type: "Blog",
      title: "What Great CX Looks Like in 2025: AI, Empathy, and Speed",
      desc: "Examines the evolving expectations of modern customers and how AI-powered contact centers can blend efficiency with genuine empathy to deliver differentiated experiences.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Customer Experience Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Customer Experience"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore GTS Techs' customer experience resource library — featuring contact center transformation case studies, AI-powered CX strategy guides, omnichannel framework white papers, and expert insights on delivering exceptional customer outcomes.
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
        title="Elevate Your Customer Experience"
        subtitle="Discover how GTS Techs' contact center solutions and SuperCX platform transform every customer interaction."
        linkLabel="Explore Contact Center Solutions"
        linkTo="/experiences/contact-center"
      />
    </div>
  );
}
