import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function ResearchTechnology() {
  const capabilities = [
    "Survey Platform Engineering",
    "Scripting & Programming",
    "Multilingual Survey Development",
    "Panel Integration & API Services",
    "Data Pipeline Engineering",
    "ETL & Data Transformation",
    "Research Dashboard Development",
    "Automated Reporting Systems",
  ];

  return (
    <div>
      <PageHeader
        title="Research Technology"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Research Technology"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Survey Platform Engineering for Research Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Research Technology practice provides market research agencies and corporate
              insights teams with the technical expertise required to design, build, and operate
              sophisticated survey platforms and research data infrastructure. Our platform engineers
              specialize in Confirmit, Decipher, Qualtrics, and custom web-based survey environments,
              delivering complex survey programs with advanced logic, quota management, device
              optimization, and multilingual support at scale.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We handle the full spectrum of survey development complexity — from straightforward
              quantitative questionnaires through highly complex conjoint studies, MaxDiff exercises,
              implicit association tests, and interactive concept testing formats. Our engineering
              teams build reusable component libraries and project templates that accelerate delivery
              timelines while maintaining the consistency and quality standards that research clients
              require for defensible, publishable data.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Pipeline Engineering and Advanced Analytics Infrastructure</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Modern market research generates data at volumes and velocities that manual processing
            cannot handle effectively. GTS Techs Research Technology engineers design and build
            automated data pipelines that ingest raw survey data, apply validation and transformation
            rules, merge data from multiple sources including panels, CRM systems, and behavioral data
            streams, and deliver clean, analysis-ready datasets to downstream analytics environments
            in near real time. Our analytics infrastructure capabilities include the design and
            development of dynamic reporting dashboards, automated report generation systems, and
            self-service analytics environments that give research clients and their end customers
            immediate access to study results without waiting for manual processing cycles. These
            investments in research technology infrastructure translate directly into faster
            time-to-insights, lower operational costs, and the ability to support continuous tracking
            programs that traditional batch-processing approaches cannot accommodate effectively.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Modernize Your Research Technology Stack"
        subtitle="Explore our client success stories and see how GTS Techs research and experience capabilities are delivering results for global brands."
        linkLabel="View Case Studies"
        linkTo="/resources/case-studies"
      />
    </div>
  );
}
