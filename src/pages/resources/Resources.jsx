import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const resourceTypes = [
  {
    label: "Client Testimonials",
    desc: "Hear from clients like ECU Worldwide, Incora, and Ingram Micro.",
    to: "/resources/testimonials",
    icon: "💬",
  },
  {
    label: "Case Studies",
    desc: "In-depth stories of AI and automation transformations worldwide.",
    to: "/resources/case-studies",
    icon: "📋",
  },
  {
    label: "Product Demos",
    desc: "See TruBot, TruCap+, SuperCX, TruBI, and FINATO in action.",
    to: "/resources/demos",
    icon: "▶",
  },
  {
    label: "Analyst Reports",
    desc: "Recognition from Gartner, Everest Group, NelsonHall, and ISG.",
    to: "/resources/analyst-reports",
    icon: "📊",
  },
  {
    label: "White Papers",
    desc: "Deep-dive research on AI, automation, finance, CX, and more.",
    to: "/resources/whitepapers",
    icon: "📄",
  },
  {
    label: "Brochures",
    desc: "Concise overviews of our key products and service areas.",
    to: "/resources/brochures",
    icon: "📁",
  },
  {
    label: "Thoughtcast",
    desc: "Video and podcast conversations with industry innovators.",
    to: "/resources/thoughtcast",
    icon: "🎙",
  },
  {
    label: "Webinars",
    desc: "Live and on-demand expert sessions on automation and AI.",
    to: "/resources/webinars",
    icon: "🖥",
  },
  {
    label: "Infographics",
    desc: "Visual guides to automation ROI, AI adoption stats, and more.",
    to: "/resources/infographics",
    icon: "📈",
  },
  {
    label: "Blogs",
    desc: "Expert articles on AI, RPA, data analytics, and digital transformation.",
    to: "/resources/blogs",
    icon: "✏",
  },
  {
    label: "Newsletters",
    desc: "Quarterly intelligence digests from GTS Techs experts.",
    to: "/resources/newsletters",
    icon: "📬",
  },
  {
    label: "Media Coverage",
    desc: "Press mentions from Forbes, TechCrunch, Economic Times, and more.",
    to: "/resources/media",
    icon: "📰",
  },
];

const resourceTopics = [
  {
    label: "Artificial Intelligence",
    desc: "AI strategy, implementation, and enterprise transformation.",
    to: "/resources/topics/ai",
  },
  {
    label: "Digital Finance",
    desc: "AP/AR automation, financial close, and FINATO platform resources.",
    to: "/resources/topics/digital-finance",
  },
  {
    label: "Intelligent Automation",
    desc: "RPA, hyperautomation, and end-to-end process automation.",
    to: "/resources/topics/intelligent-automation",
  },
  {
    label: "Enterprise Content Management",
    desc: "ECM modernization, document lifecycle, and governance.",
    to: "/resources/topics/ecm",
  },
  {
    label: "RPA",
    desc: "TruBot platform, CoE setup, and automation ROI resources.",
    to: "/resources/topics/rpa",
  },
  {
    label: "Automatic Fare Collection",
    desc: "AFC systems, open-loop payments, and urban mobility technology.",
    to: "/resources/topics/afc",
  },
  {
    label: "Big Data",
    desc: "Data engineering, analytics platforms, and data-driven culture.",
    to: "/resources/topics/big-data",
  },
  {
    label: "Salesforce",
    desc: "CRM implementation, integration, and AI-augmented Salesforce.",
    to: "/resources/topics/salesforce",
  },
  {
    label: "Product Engineering",
    desc: "Cloud-native development, QA automation, and software architecture.",
    to: "/resources/topics/product-engineering",
  },
  {
    label: "Customer Experience",
    desc: "Contact center AI, omnichannel CX, and SuperCX platform.",
    to: "/resources/topics/cx",
  },
  {
    label: "Research & Analytics",
    desc: "Market research, competitive intelligence, and analytics strategy.",
    to: "/resources/topics/research-analytics",
  },
];

export default function Resources() {
  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Explore our library of case studies, white papers, webinars, analyst reports, and expert insights to accelerate your digital transformation."
        breadcrumbs={[["Home", "/"], ["Resources"]]}
      />

      {/* Browse by Type */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#dc2626] mb-3">Browse by Type</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Find the right format for your needs — from in-depth case studies and white papers to product demos, webinars, and expert blog posts.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {resourceTypes.map((type, i) => (
            <Link
              key={i}
              to={type.to}
              className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:border-[#dc2626] hover:shadow-md transition group flex flex-col gap-2"
            >
              <span className="text-2xl leading-none" aria-hidden="true">{type.icon}</span>
              <h3 className="font-bold text-gray-900 group-hover:text-[#dc2626] transition">{type.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{type.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* Browse by Topic */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#dc2626] mb-3">Browse by Topic</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Explore resources organized by technology, solution area, or industry topic to find exactly what matters to your organization.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {resourceTopics.map((topic, i) => (
            <Link
              key={i}
              to={topic.to}
              className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:border-[#dc2626] hover:shadow-md transition group flex flex-col gap-2"
            >
              <div className="w-8 h-1 rounded-full bg-[#dc2626] mb-1" />
              <h3 className="font-bold text-gray-900 group-hover:text-[#dc2626] transition">{topic.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{topic.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to See Results for Yourself?"
        subtitle="Explore our case studies to understand exactly how GTS Techs delivers measurable business outcomes for clients worldwide."
        linkLabel="View Case Studies"
        linkTo="/resources/case-studies"
      />
    </div>
  );
}
