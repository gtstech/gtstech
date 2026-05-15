import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Data Management and Governance',
    description:
      'Comprehensive data management services for international organisations cover data collection from member states and partner organisations, normalisation and quality assurance, master data management, and the maintenance of longitudinal statistical datasets that underpin policy analysis and reporting. Our data governance frameworks align with international standards including SDMX, ISO 11179, and UN data principles.',
  },
  {
    title: 'Research and Statistical Analytics',
    description:
      'Dedicated research analytics teams support the statistical, econometric, and geospatial analysis requirements of international bodies — from processing large survey datasets and socioeconomic indicators to building predictive models for development planning and impact assessment. Our statisticians and data scientists bring experience with the specific methodological frameworks and disclosure standards used by UN agencies, development banks, and regional bodies.',
  },
  {
    title: 'Publication and Content Services',
    description:
      'End-to-end publication support services cover the production workflow for reports, working papers, statistical releases, and digital knowledge products — including editorial support, data visualisation, multilingual layout, accessibility compliance, and digital publication on web and mobile platforms. Our production teams are experienced in the house style and quality standards of major international organisations.',
  },
  {
    title: 'Multilingual Document Processing',
    description:
      'AI-powered multilingual document processing capabilities handle the translation, classification, and content extraction requirements of international organisations operating across six or more official languages — dramatically accelerating the document management workflows that are central to international institutional operations. Quality assurance processes incorporate subject-matter expert review to maintain terminological precision in specialised technical domains.',
  },
];

export default function InternationalOrgs() {
  return (
    <div>
      <PageHeader
        title="International Organisations"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['International Organisations']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Unique Requirements</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          International organisations — including United Nations agencies, multilateral development banks,
          regional bodies, and intergovernmental institutions — operate with a unique set of requirements
          that distinguish them from both public sector and commercial clients. They work across multiple
          languages and jurisdictions, maintain strict neutrality and confidentiality standards, produce
          authoritative statistical and analytical outputs that influence global policy, and must operate
          within the procurement, vendor management, and data governance frameworks specific to the
          international public sector.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs has served a range of international organisations with data management, research support,
          and publication services for over fifteen years, building the institutional knowledge, security
          clearance frameworks, and delivery processes needed to meet the unique expectations of this
          demanding client segment. Our teams understand the operational culture of international institutions
          and are experienced in working within their specific procurement, quality, and governance frameworks.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services for International Bodies</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our services for international organisations are delivered by specialised teams combining
            technical expertise with the discretion, multilingual capability, and institutional sensitivity
            required by this sector. All engagements operate under robust data security and confidentiality
            frameworks, with ISO 27001 certification, data residency options, and background screening
            protocols appropriate to the sensitivity of client data and research outputs. We are committed
            to the values of accuracy, impartiality, and accessibility that define the work of the
            international organisations we serve.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow border-l-4 border-[#dc2626]">
                <h3 className="font-bold text-[#dc2626] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Explore Our Retail Industry Solutions"
        subtitle="E-commerce operations, loyalty management, AP automation, and content services for omnichannel retailers."
        linkLabel="Explore Retail"
        linkTo="/industries/retail"
      />
    </div>
  );
}
