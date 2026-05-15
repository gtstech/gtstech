import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function Blogs() {
  const items = [
    {
      title: "How Agentic AI Is Redefining Enterprise Automation in 2025",
      topic: "Artificial Intelligence",
      desc: "Explores how autonomous AI agents are moving beyond task automation to orchestrating complex, multi-step enterprise workflows with minimal human intervention.",
    },
    {
      title: "5 Signs Your Finance Team Is Ready for Intelligent Automation",
      topic: "Digital Finance",
      desc: "A practical checklist for CFOs and finance leaders to assess their organization's automation readiness across people, process, and technology dimensions.",
    },
    {
      title: "RPA vs. Hyperautomation: Understanding the Difference and Choosing the Right Path",
      topic: "Intelligent Automation",
      desc: "Breaks down the evolution from rule-based RPA to hyperautomation and helps business leaders identify the right approach for their current automation maturity.",
    },
    {
      title: "The Hidden Costs of Manual Document Processing — And How to Eliminate Them",
      topic: "Document AI",
      desc: "Quantifies the true cost of manual document workflows across error rates, processing time, and compliance risk, and outlines an IDP-led path to zero-touch operations.",
    },
    {
      title: "Building a Data-Driven Culture: Lessons from Leading Enterprises",
      topic: "Data Analytics",
      desc: "Shares practical strategies for fostering data literacy, democratizing self-service analytics, and aligning data initiatives with business outcomes across the organization.",
    },
    {
      title: "What Great CX Looks Like in 2025: AI, Empathy, and Speed",
      topic: "Customer Experience",
      desc: "Examines the evolving expectations of modern customers and how AI-powered contact centers can blend efficiency with genuine empathy to deliver differentiated experiences.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Blogs"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Blogs"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Read GTS Techs' expert blog posts covering the latest developments in AI, intelligent automation, digital finance, customer experience, and data analytics to help your organization stay ahead.
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
        title="Get Insights Delivered to Your Inbox"
        subtitle="Subscribe to the GTS Techs newsletter for curated insights on AI, automation, and digital transformation."
        linkLabel="View Newsletters"
        linkTo="/resources/newsletters"
      />
    </div>
  );
}
