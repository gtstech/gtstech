import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function BigDataTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "Big Data Analytics Unlocks $8M in Revenue Opportunities for a Retail Chain",
      desc: "Leveraging GTS Techs' TruBI and data engineering services, a 500-store retail chain gained real-time SKU performance insights and demand forecasting capabilities that identified $8M in untapped revenue.",
    },
    {
      type: "White Paper",
      title: "Building a Modern Data Architecture: From Data Lakes to AI-Ready Platforms",
      desc: "A technical and strategic guide to designing scalable data architectures that support real-time analytics, ML model training, and enterprise-wide data democratization.",
    },
    {
      type: "Webinar",
      title: "From Raw Data to Business Value: Practical Data Engineering for Enterprise Teams",
      desc: "GTS Techs data architects walk through modern data pipeline design, lakehouse architectures, and the governance practices that ensure data quality and analytical reliability.",
    },
    {
      type: "Blog",
      title: "Building a Data-Driven Culture: Lessons from Leading Enterprises",
      desc: "Shares practical strategies for fostering data literacy, democratizing self-service analytics, and aligning data initiatives with business outcomes at scale.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Big Data Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Big Data"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Access GTS Techs' big data resource library — featuring real-world analytics case studies, data architecture white papers, engineering best practices, and insights on building genuinely data-driven organizations.
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
        title="Turn Data into Competitive Advantage"
        subtitle="Explore GTS Techs' data analytics and engineering capabilities that help enterprises extract real business value from big data."
        linkLabel="Explore Data Analytics"
        linkTo="/technologies/data-analytics"
      />
    </div>
  );
}
