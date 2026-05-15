import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function AnalystReports() {
  const items = [
    {
      title: "Gartner Magic Quadrant: Intelligent Document Processing",
      topic: "Gartner",
      desc: "GTS Techs is recognized in the Gartner Magic Quadrant for Intelligent Document Processing, highlighting our TruCap+ platform's vision completeness and ability to execute at enterprise scale.",
    },
    {
      title: "Everest Group PEAK Matrix: Intelligent Automation",
      topic: "Everest Group",
      desc: "The Everest Group positions GTS Techs as a Major Contender in its PEAK Matrix for Intelligent Automation, citing strong client impact scores and a robust automation product ecosystem.",
    },
    {
      title: "NelsonHall NEAT Evaluation: Robotic Process Automation",
      topic: "NelsonHall",
      desc: "NelsonHall's NEAT evaluation places GTS Techs among top RPA providers, recognizing TruBot's enterprise-grade scalability, analytics, and pre-built domain-specific automation accelerators.",
    },
    {
      title: "ISG Provider Lens: Finance & Accounting Outsourcing",
      topic: "ISG",
      desc: "ISG names GTS Techs a Leader in the Finance & Accounting Outsourcing quadrant, commending our FINATO-powered delivery model and measurable outcomes for global finance teams.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Analyst Reports"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Analyst Reports"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Access independent analyst evaluations from leading research firms that validate GTS Techs' capabilities, market position, and the business impact of our intelligent automation and AI solutions.
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
        title="Explore the Research Behind Our Solutions"
        subtitle="Dive deeper into our white papers and thought leadership content developed by GTS Techs experts."
        linkLabel="View White Papers"
        linkTo="/resources/whitepapers"
      />
    </div>
  );
}
