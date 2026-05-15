import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Survey Programming',
    description:
      'Expert survey programming services support scripting of quantitative and qualitative surveys across all major platforms — Confirmit, Decipher, Qualtrics, SPSS, and custom web-based engines — with the routing logic complexity, multimedia elements, and device optimisation that modern research designs demand. Our programmers are experienced in the specific requirements of tracking studies, ad testing, concept tests, and large-scale omnibus surveys.',
  },
  {
    title: 'Data Processing and Coding',
    description:
      'High-quality data processing services cover data cleaning, weighting, cross-tabulation, open-ended response coding, and verbatim translation — delivered with the accuracy, confidentiality, and turnaround speed that research agencies need to meet client reporting deadlines. AI-assisted open-end coding and sentiment analysis accelerate qualitative data processing without sacrificing the nuance that drives actionable insight.',
  },
  {
    title: 'Advanced Research Analytics',
    description:
      'Quantitative research analytics capabilities encompass advanced statistical modelling including MaxDiff, conjoint analysis, cluster segmentation, driver analysis, and structural equation modelling — supporting market research agencies and in-house insights teams seeking to extract deeper value from their survey data. Our analysts work within client-preferred statistical software environments including SPSS, R, Stata, and Python.',
  },
  {
    title: 'Data Visualisation and Reporting',
    description:
      'Research report production and data visualisation services transform processed research data into compelling, client-ready outputs — including interactive dashboards, executive summary presentations, infographic reports, and automated insight narratives. Automated reporting pipelines support tracking study clients with scheduled, template-driven report production that eliminates repetitive manual formatting effort.',
  },
];

export default function MarketResearch() {
  return (
    <div>
      <PageHeader
        title="Market Research"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Market Research']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Industry Expertise</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          The market research industry is under structural pressure to deliver faster, more sophisticated,
          and more cost-effective insights as clients' internal analytics capabilities grow and the competitive
          landscape for primary research services intensifies. Research agencies and in-house insights teams
          alike face the challenge of scaling analytical throughput, managing complex multi-market projects,
          and adopting AI-augmented research methods — all while maintaining the data quality and client
          service standards on which their reputation depends.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs has been a specialist market research operations partner for over twenty years, serving
          global full-service agencies, specialist boutiques, and corporate insights functions with survey
          programming, data processing, advanced analytics, and reporting services. Our market research
          operations teams combine deep methodological knowledge with technology-driven productivity to
          help research organisations expand their analytical capacity, improve data quality, and reduce
          project delivery timelines simultaneously.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services for Market Research Agencies</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our market research services are delivered by a dedicated team of research operations specialists
            who understand the methodological rigour, client confidentiality requirements, and deadline
            pressure inherent to the market research business. We operate as a true extension of our
            clients' teams — adopting their processes, quality standards, and communication protocols —
            rather than a generic back-office provider. AI tools are applied judiciously and transparently
            to accelerate processing and coding tasks, with human review at every stage to maintain the
            interpretive quality that distinguishes high-value research.
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
        title="See How Our Clients Apply These Insights"
        subtitle="Explore GTS Techs case studies to see real-world examples of market research operations transformation in action."
        linkLabel="View Case Studies"
        linkTo="/resources/case-studies"
      />
    </div>
  );
}
