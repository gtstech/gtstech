import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Whitepapers() {
  const items = [
    {
      title: "The Future of AI in Enterprise Operations: A Strategic Blueprint",
      topic: "Artificial Intelligence",
      desc: "This white paper examines how enterprises can systematically adopt AI across functions, build governance frameworks, and measure ROI from AI-driven automation initiatives in 2025 and beyond.",
    },
    {
      title: "Hyperautomation: Combining RPA, AI, and Process Mining for Maximum Impact",
      topic: "Intelligent Automation",
      desc: "Explore the convergence of RPA, machine learning, and process mining that defines hyperautomation — and learn the phased adoption model GTS Techs recommends for large-scale deployments.",
    },
    {
      title: "Intelligent Finance Operations: From Manual to Autonomous",
      topic: "Digital Finance",
      desc: "A comprehensive guide to transforming finance functions through automation, covering AP/AR, financial close, compliance reporting, and treasury management with AI-augmented workflows.",
    },
    {
      title: "Reimagining Customer Experience with AI-Powered Contact Centers",
      topic: "Customer Experience",
      desc: "This paper outlines how AI, sentiment analytics, and omnichannel engagement are reshaping the contact center landscape, with frameworks for measuring CX transformation success.",
    },
    {
      title: "Digital Transformation in Healthcare: Data, Automation, and Compliance",
      topic: "Healthcare",
      desc: "GTS Techs explores how healthcare providers and payers can leverage intelligent document processing, RPA, and analytics to streamline operations while maintaining HIPAA and regulatory compliance.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="White Papers"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["White Papers"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Access GTS Techs' library of in-depth white papers covering AI, intelligent automation, digital finance, customer experience, and more — written to help enterprise leaders make informed technology decisions.
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
        title="Stay Ahead with Expert Insights"
        subtitle="Read our latest blog posts for timely commentary on AI, automation, and digital transformation trends."
        linkLabel="Read Our Blogs"
        linkTo="/resources/blogs"
      />
    </div>
  );
}
