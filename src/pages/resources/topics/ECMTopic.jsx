import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function ECMTopic() {
  const resources = [
    {
      type: "Case Study",
      title: "ECM Implementation Reduces Document Retrieval Time by 85% for Insurance Carrier",
      desc: "A regional insurance carrier deployed GTS Techs' enterprise content management solution to centralize policy documents, claims files, and compliance records with role-based access and audit trails.",
    },
    {
      type: "White Paper",
      title: "Enterprise Content Management in the Age of AI: Beyond Storage and Retrieval",
      desc: "Examines how modern ECM platforms are evolving to incorporate AI-driven classification, intelligent search, and automated document lifecycle management for regulated industries.",
    },
    {
      type: "Webinar",
      title: "Modernizing ECM: Migrating Legacy Document Systems to Cloud-Native Platforms",
      desc: "Covers best practices for ECM modernization, including migration strategies, metadata design, governance frameworks, and integration with downstream ERP and CRM systems.",
    },
    {
      type: "Blog",
      title: "Why ECM Is the Foundation of Every Digital Transformation Initiative",
      desc: "Argues that effective enterprise content management is a prerequisite for AI, automation, and digital workflow initiatives — and outlines the key capabilities modern ECM must provide.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="ECM Resources"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["ECM"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Browse GTS Techs' enterprise content management resources — including implementation case studies, modernization guides, and expert commentary on how ECM underpins digital transformation across regulated industries.
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
        title="Modernize Your Content Management"
        subtitle="Learn how GTS Techs' ECM solutions help enterprises organize, secure, and unlock the value of their content."
        linkLabel="Explore ECM Solutions"
        linkTo="/technologies/ecm"
      />
    </div>
  );
}
