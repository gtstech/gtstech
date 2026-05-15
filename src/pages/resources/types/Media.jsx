import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Media() {
  const items = [
    {
      title: "GTS Techs Named a Leader in Intelligent Automation by Everest Group",
      topic: "Forbes — March 2025",
      desc: "Forbes covers GTS Techs' recognition in Everest Group's PEAK Matrix, citing the company's consistent client impact scores and expanding AI-powered automation portfolio as key differentiators.",
    },
    {
      title: "How GTS Techs Is Helping Global Enterprises Navigate the AI Transition",
      topic: "Economic Times — February 2025",
      desc: "The Economic Times profiles GTS Techs CEO Rahul Kanodia on the company's strategy for helping Fortune 500 enterprises adopt AI responsibly and at scale without disrupting operations.",
    },
    {
      title: "TruBot Recognized Among Top RPA Platforms for Enterprise Scalability",
      topic: "CIO Review — January 2025",
      desc: "CIO Review highlights TruBot's inclusion in their annual list of top RPA platforms, noting its low-code bot builder, advanced analytics, and enterprise-grade security and governance features.",
    },
    {
      title: "GTS Techs Expands North American Presence with New Technology Center",
      topic: "Business Wire — December 2024",
      desc: "Business Wire reports on GTS Techs' new technology and innovation center in the United States, reinforcing its commitment to serving North American clients with local delivery capabilities.",
    },
    {
      title: "Intelligent Document Processing Is the Next Frontier — GTS Techs Is Leading It",
      topic: "TechCrunch — November 2024",
      desc: "TechCrunch examines the rapid growth of the IDP market and spotlights TruCap+ as one of the platforms setting new benchmarks for accuracy, speed, and domain adaptability in document AI.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Media Coverage"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Media Coverage"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore how leading publications and media outlets are covering GTS Techs' innovations, industry recognition, and leadership in AI, intelligent automation, and digital transformation.
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
        title="Read Our Official Press Releases"
        subtitle="Access the latest news and announcements directly from GTS Techs on our press releases page."
        linkLabel="View Press Releases"
        linkTo="/press-releases"
      />
    </div>
  );
}
