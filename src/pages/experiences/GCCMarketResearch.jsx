import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function GCCMarketResearch() {
  const capabilities = [
    "GCC Setup & Advisory",
    "Talent Acquisition & Onboarding",
    "Research Operations Management",
    "Data Science & Analytics Team",
    "Technology Platform Support",
    "Quality Management Systems",
    "Knowledge Transfer Programs",
    "Governance & Compliance",
  ];

  return (
    <div>
      <PageHeader
        title="GCC for Market Research"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["GCC for Market Research"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The GCC Model for Market Research Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              A Global Capability Center (GCC) model offers market research organizations a powerful
              strategic alternative to traditional outsourcing: building a dedicated, branded offshore
              capability that operates with the depth, commitment, and cultural alignment of an internal
              team while delivering the cost efficiency and talent access advantages of a global delivery
              model. GTS Techs partners with leading market research agencies and insights-driven
              corporations to design, establish, and operate GCCs that become genuine centers of research
              excellence rather than low-cost execution arms.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our GCC advisory team guides clients through every phase of the establishment journey —
              from market assessment and location selection through entity setup, talent acquisition,
              technology infrastructure, and operational ramp-up. We draw on deep experience establishing
              GCCs in India, the Philippines, and Eastern Europe to provide practical, risk-mitigated
              advice that accelerates time-to-productivity and avoids the common pitfalls that derail
              less experienced market research GCC programs.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Capabilities and Talent That Scale with Your Research Ambition</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            The success of a market research GCC depends on recruiting and retaining talent with the
            specialized skills that modern research programs demand — survey programmers, data scientists,
            insights analysts, qualitative researchers, and research technology specialists. GTS Techs
            provides end-to-end talent services for GCC clients, including role profiling, targeted
            recruitment campaigns, rigorous skills assessment, structured onboarding programs, and
            ongoing learning and development frameworks that build capability continuously over time.
            Our talent pipeline partnerships with leading universities and research associations across
            GCC locations give clients access to high-caliber graduates who are trained in the latest
            research methods, analytics tools, and technology platforms. Clients consistently report
            40–60 percent cost advantages compared to equivalent onshore hiring while maintaining
            research quality and methodological rigor that meets global client standards.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Build Your Market Research Global Capability Center"
        subtitle="Explore our Research Technology services and see how modern platform engineering accelerates research program delivery."
        linkLabel="Explore Research Technology"
        linkTo="/experiences/research-technology"
      />
    </div>
  );
}
