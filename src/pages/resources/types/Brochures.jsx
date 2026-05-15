import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Brochures() {
  const items = [
    {
      title: "Intelligent Automation Solutions — Product & Services Overview",
      topic: "Intelligent Automation",
      desc: "This brochure provides a concise overview of GTS Techs' intelligent automation portfolio, including TruBot RPA, TruCap+ document AI, and end-to-end automation delivery services.",
    },
    {
      title: "Digital Finance Operations — FINATO Platform Brochure",
      topic: "Digital Finance",
      desc: "Discover how FINATO streamlines every finance function from purchase-to-pay to record-to-report, delivering speed, accuracy, and continuous compliance for global enterprises.",
    },
    {
      title: "Customer Experience & Contact Center Solutions",
      topic: "Customer Experience",
      desc: "Learn how SuperCX and GTS Techs' BPO capabilities combine to create seamless, AI-powered customer journeys across voice, chat, email, and social channels.",
    },
    {
      title: "Data, Analytics & Business Intelligence — TruBI Platform",
      topic: "Data Analytics",
      desc: "Explore TruBI's capabilities in self-service analytics, predictive modeling, real-time dashboards, and data engineering that turn raw data into strategic business advantage.",
    },
    {
      title: "Enterprise Technology Services — ECM, Salesforce & Product Engineering",
      topic: "Technology Services",
      desc: "A service-area overview covering GTS Techs' capabilities in enterprise content management, Salesforce implementation, and end-to-end product engineering and QA services.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Brochures"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Brochures"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Download GTS Techs' product and solution brochures for a concise, visual overview of our key offerings across intelligent automation, digital finance, customer experience, analytics, and technology services.
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
        title="See the Results for Yourself"
        subtitle="Read detailed case studies that bring our solution capabilities to life with real client outcomes."
        linkLabel="Explore Case Studies"
        linkTo="/resources/case-studies"
      />
    </div>
  );
}
