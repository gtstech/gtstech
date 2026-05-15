import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Demos() {
  const items = [
    {
      title: "TruBot — Intelligent RPA Platform Demo",
      topic: "Robotic Process Automation",
      desc: "See TruBot in action as it automates high-volume, repetitive workflows across finance, HR, and operations. Watch how bots are built, deployed, and monitored with zero coding required.",
    },
    {
      title: "TruCap+ — Intelligent Document Processing Demo",
      topic: "Document AI",
      desc: "Explore TruCap+'s AI-powered OCR and document understanding capabilities. The demo covers structured and unstructured document extraction, validation, and straight-through processing.",
    },
    {
      title: "SuperCX — Omnichannel Contact Center Platform Demo",
      topic: "Customer Experience",
      desc: "Walk through SuperCX's unified agent desktop, AI-powered sentiment analysis, real-time coaching, and omnichannel routing that elevates every customer interaction.",
    },
    {
      title: "TruBI — Business Intelligence & Analytics Demo",
      topic: "Data Analytics",
      desc: "Discover TruBI's self-service dashboards, predictive analytics models, and real-time data visualizations that empower business users to make faster, data-driven decisions.",
    },
    {
      title: "FINATO — Financial Automation Suite Demo",
      topic: "Digital Finance",
      desc: "See how FINATO automates accounts payable, receivable, reconciliation, and financial close processes, delivering speed, accuracy, and compliance for finance teams.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Product Demos"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Product Demos"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Experience GTS Techs' flagship products in action. Our product demos showcase real capabilities and workflows, helping you understand exactly how our solutions fit your business needs.
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
        title="Want a Personalized Product Walkthrough?"
        subtitle="Explore our full product portfolio and find the right solution for your business transformation journey."
        linkLabel="View All Products"
        linkTo="/products"
      />
    </div>
  );
}
