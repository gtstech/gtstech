import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function CaseStudies() {
  const items = [
    {
      title: "AI-Led Digital Transformation for a Global Insurance Leader",
      topic: "AI Transformation",
      desc: "A Fortune 500 insurance company reduced claims processing time by 70% and achieved $12M in annual savings by deploying GTS Techs' end-to-end AI and intelligent automation platform.",
    },
    {
      title: "Finance Automation Drives 80% Faster Month-End Close for Manufacturing Giant",
      topic: "Finance Automation",
      desc: "GTS Techs implemented an intelligent finance operations suite for a global manufacturer, automating reconciliation, AP/AR, and reporting workflows to achieve near-real-time financial visibility.",
    },
    {
      title: "Next-Gen Contact Center Transformation for a Leading BPO",
      topic: "Contact Center",
      desc: "By integrating SuperCX with AI-driven agent assist and analytics, GTS Techs helped a top BPO provider cut average handle time by 35% while boosting CSAT scores by 22 points.",
    },
    {
      title: "Automated Proctoring Solution Scales Online Assessments for Ed-Tech Firm",
      topic: "Proctoring & EdTech",
      desc: "GTS Techs delivered an AI-powered remote proctoring platform enabling a leading ed-tech company to conduct millions of secure online exams with 99.9% uptime and fraud detection accuracy.",
    },
    {
      title: "Data Analytics Platform Unlocks Revenue Insights for Retail Chain",
      topic: "Data Analytics",
      desc: "Leveraging TruBI and advanced analytics, GTS Techs helped a 500-store retail chain identify $8M in untapped revenue opportunities through real-time SKU performance and demand forecasting dashboards.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Case Studies"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Case Studies"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Explore in-depth case studies that illustrate how GTS Techs solves complex business challenges with AI, automation, and data-driven intelligence across industries worldwide.
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
        title="Ready to Write Your Success Story?"
        subtitle="Discover the research and insights behind our client outcomes in our white paper library."
        linkLabel="Explore White Papers"
        linkTo="/resources/whitepapers"
      />
    </div>
  );
}
