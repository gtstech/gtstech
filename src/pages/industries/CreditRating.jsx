import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Issuer Data Management',
    description:
      'Comprehensive data operations services manage the collection, normalisation, validation, and maintenance of issuer financial and non-financial data from public filings, regulatory disclosures, and proprietary data feeds — ensuring rating analysts always work from accurate, timely, and consistently structured information. Automated data quality checks and exception workflows maintain data integrity at scale.',
  },
  {
    title: 'Research Analytics Support',
    description:
      'Skilled research analysts and data scientists support rating agency research teams with sector analysis, financial modelling, peer comparison studies, and quantitative model maintenance — expanding analytical capacity without proportional headcount growth. Our research operations teams integrate seamlessly with in-house analyst workflows and quality review processes.',
  },
  {
    title: 'Ratings Process Automation',
    description:
      'Process automation solutions streamline the administrative components of the ratings workflow — committee pack preparation, criteria application checklists, rating history maintenance, and regulatory disclosure compilation — freeing senior analysts to focus on the qualitative judgements that drive rating quality. RPA and AI together reduce ratings administration time by 40–60% in typical deployments.',
  },
  {
    title: 'Surveillance and Monitoring',
    description:
      'Automated credit surveillance solutions continuously monitor rated issuers for material data changes, news events, financial disclosure updates, and market signals that may warrant rating review — enabling rating teams to focus surveillance attention on issuers where deterioration risk is highest. Configurable alert thresholds and escalation workflows ensure timely review initiation across large, diversified rating portfolios.',
  },
];

export default function CreditRating() {
  return (
    <div>
      <PageHeader
        title="Credit Rating"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Credit Rating']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Rating Agency Support</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Credit rating agencies operate at the intersection of financial analysis, regulatory obligation, and
          market responsibility — a uniquely demanding environment where data accuracy, analytical rigour, and
          process integrity are not merely operational goals but fundamental requirements of market credibility.
          As rating portfolios grow in size and geographic complexity, the operational challenge of maintaining
          quality across every rating action, surveillance review, and regulatory submission intensifies.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs has partnered with leading global and regional credit rating agencies to deliver specialised
          data management, research analytics support, and process automation services that enhance operational
          efficiency without compromising the analytical independence and quality standards that are the
          foundation of a rating agency's value proposition. Our rating-industry specialists understand the
          regulatory environment — IOSCO, SEC, ESMA, SEBI — and the operational workflows of the credit
          rating process in depth.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Operations for Rating Agencies</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            The data operations that underpin the credit rating process — issuer data collection, financial
            data normalisation, document management, and surveillance monitoring — are high-volume, high-stakes
            activities that consume significant analyst time when performed manually. GTS Techs applies
            AI-powered document processing, structured data management, and intelligent automation to
            industrialise these operations, enabling rating agencies to scale their coverage and improve
            data quality simultaneously while redeploying analyst capacity to higher-value analytical work.
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
        title="Supporting International Organisations Worldwide"
        subtitle="Specialised data management, research analytics, and publication support for intergovernmental bodies and international agencies."
        linkLabel="Explore International Organisations"
        linkTo="/industries/international-organisations"
      />
    </div>
  );
}
