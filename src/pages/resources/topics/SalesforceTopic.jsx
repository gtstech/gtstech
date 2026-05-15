import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function SalesforceTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "Salesforce Implementation Accelerates Sales Cycle by 40% for Technology Distributor",
      desc: "GTS Techs designed and deployed a custom Salesforce Sales Cloud and CPQ solution for a global technology distributor, streamlining lead-to-quote-to-close workflows and integrating with SAP ERP.",
    },
    {
      type: "White Paper",
      title: "Maximizing Salesforce ROI: Integration, Automation, and AI-Augmented CRM",
      desc: "Explores strategies for unlocking maximum business value from Salesforce investments through deep ERP integration, Einstein AI adoption, and process automation using Salesforce Flow and TruBot RPA.",
    },
    {
      type: "Webinar",
      title: "Salesforce + RPA: Automating CRM Workflows End-to-End",
      desc: "Demonstrates how combining Salesforce automation capabilities with TruBot RPA eliminates manual data entry, automates cross-system updates, and accelerates sales and service operations.",
    },
    {
      type: "Blog",
      title: "5 Salesforce Implementation Mistakes That Derail ROI — and How to Avoid Them",
      desc: "Identifies the most common Salesforce deployment pitfalls — from poor data migration to under-adoption — and shares GTS Techs' proven strategies for successful, user-centric implementations.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Salesforce Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Salesforce"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Browse GTS Techs' Salesforce resource library — from CRM implementation case studies and ROI optimization guides to webinars on Salesforce + RPA integration and expert blogs on maximizing your Salesforce investment.
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
        title="Get More from Your Salesforce Investment"
        subtitle="Explore how GTS Techs' certified Salesforce practice delivers implementations that drive adoption, integration, and measurable ROI."
        linkLabel="Explore Salesforce Services"
        linkTo="/technologies/salesforce"
      />
    </div>
  );
}
