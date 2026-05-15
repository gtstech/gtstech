import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function ResearchAnalytics() {
  const capabilities = [
    "Quantitative Survey Operations",
    "Qualitative Research Services",
    "Data Collection & Field Management",
    "Panel Management",
    "Statistical Analysis",
    "Predictive Modeling",
    "Competitive Intelligence",
    "Market Segmentation Analysis",
  ];

  return (
    <div>
      <PageHeader
        title="Research & Analytics"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Research & Analytics"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Market Research Operations at Global Scale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Research and Analytics services provide market research agencies, insights
              consultancies, and corporate research teams with the operational backbone required to
              design, execute, and analyze research programs at global scale. We manage the complete
              research operations lifecycle — from questionnaire programming and sample management
              through data collection, processing, quality control, and deliverable production —
              enabling our clients to focus on insight generation rather than operational complexity.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our research operations capabilities span quantitative survey execution across online,
              telephone, and mixed-mode methodologies, as well as qualitative research support including
              focus group logistics, in-depth interview coordination, and online community management.
              We operate robust quality control frameworks that detect survey fraud, speeders,
              straight-liners, and other data quality issues before they contaminate analytical outputs,
              maintaining the data integrity standards that rigorous market research demands.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Analytics That Transform Research into Strategy</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Beyond traditional research operations, GTS Techs provides advanced analytics capabilities
            that transform raw research data into strategic intelligence that informs product development,
            market positioning, pricing strategy, and customer experience investments. Our analytics team
            applies segmentation modeling, conjoint analysis, MaxDiff scaling, driver analysis, and
            predictive modeling techniques to extract insight value that descriptive statistics alone
            cannot reveal. We build integrated analytics environments that connect research data with
            CRM, operational, and financial data sources to provide a comprehensive view of market
            dynamics and customer behavior that supports confident, data-driven strategic decisions.
            Deliverables are tailored to executive audiences through compelling data visualizations and
            clear, action-oriented narrative reporting.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Transform Research Data into Strategic Advantage"
        subtitle="Explore our Experience Management Consulting services to build a world-class XM program powered by insights."
        linkLabel="Explore XM Consulting"
        linkTo="/experiences/xm-consulting"
      />
    </div>
  );
}
