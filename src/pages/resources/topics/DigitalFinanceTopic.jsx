import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function DigitalFinanceTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "Finance Automation Drives 80% Faster Month-End Close for Global Manufacturer",
      desc: "GTS Techs implemented intelligent finance operations for a global manufacturer, automating reconciliation, AP/AR, and reporting to deliver near-real-time financial visibility.",
    },
    {
      type: "White Paper",
      title: "Intelligent Finance Operations: From Manual to Autonomous",
      desc: "A comprehensive guide to transforming finance functions through AI and automation, covering AP/AR, financial close, compliance reporting, and treasury management.",
    },
    {
      type: "Webinar",
      title: "AI-Powered Finance: Transforming AP, AR, and Financial Close",
      desc: "Finance leaders and GTS Techs architects share practical approaches to deploying AI in finance operations, with live FINATO platform demonstrations.",
    },
    {
      type: "Blog",
      title: "5 Signs Your Finance Team Is Ready for Intelligent Automation",
      desc: "A practical checklist for CFOs and finance leaders to assess automation readiness across people, process, and technology dimensions.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Digital Finance Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Digital Finance"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Access GTS Techs' full library of digital finance resources — from practical automation guides and CFO frameworks to real-world case studies demonstrating how AI is transforming finance operations from manual to autonomous.
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
        title="Transform Your Finance Operations"
        subtitle="Discover how GTS Techs' digital finance solutions and FINATO platform deliver speed, accuracy, and compliance."
        linkLabel="Explore Digital Finance"
        linkTo="/operations/digital-finance"
      />
    </div>
  );
}
