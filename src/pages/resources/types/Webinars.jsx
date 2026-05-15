import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Webinars() {
  const items = [
    {
      title: "Scaling RPA: From Pilot to Enterprise-Wide Deployment",
      topic: "Intelligent Automation",
      desc: "This webinar covers the critical success factors for scaling RPA beyond the pilot phase — including CoE setup, bot lifecycle management, and measuring automation ROI at enterprise scale.",
    },
    {
      title: "AI-Powered Finance: Transforming AP, AR, and Financial Close",
      topic: "Digital Finance",
      desc: "Finance leaders and GTS Techs automation architects discuss practical approaches to deploying AI in finance operations, with live demonstrations of FINATO's core workflows.",
    },
    {
      title: "The Omnichannel CX Imperative: Delivering Seamless Customer Journeys",
      topic: "Customer Experience",
      desc: "Explore how leading brands are unifying customer interactions across channels using AI, real-time analytics, and intelligent routing — with measurable improvements in CSAT and resolution rates.",
    },
    {
      title: "Unlocking Business Value with Data Analytics and TruBI",
      topic: "Data Analytics",
      desc: "A live product walkthrough combined with industry use cases showing how organizations leverage TruBI's self-service dashboards and AI-powered insights to drive smarter business decisions.",
    },
    {
      title: "Intelligent Document Processing: Beyond OCR to Cognitive Understanding",
      topic: "Document AI",
      desc: "This session explores the evolution from basic OCR to full cognitive document processing, with demonstrations of TruCap+'s ability to handle complex, multi-format, unstructured documents.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Webinars"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Webinars"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Join GTS Techs' expert-led webinars for live discussions, product demonstrations, and actionable insights on AI, automation, digital finance, customer experience, and data analytics.
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
        title="Keep Learning with Our Blog"
        subtitle="Explore expert articles and commentary on the latest trends in AI, automation, and digital transformation."
        linkLabel="Read Our Blogs"
        linkTo="/resources/blogs"
      />
    </div>
  );
}
