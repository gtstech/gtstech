import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const researchAreas = [
  { icon: '🧠', title: 'Generative AI & LLMs', desc: 'Researching enterprise applications of large language models, prompt engineering, retrieval-augmented generation (RAG), and responsible AI governance.' },
  { icon: '🤖', title: 'Agentic AI Systems', desc: 'Building multi-agent orchestration frameworks that enable autonomous decision-making and self-managing enterprise workflows at scale.' },
  { icon: '📄', title: 'Intelligent Document Processing', desc: 'Advancing computer vision, NLP, and contextual understanding to process complex, unstructured documents with near-human accuracy.' },
  { icon: '📊', title: 'Predictive Analytics', desc: 'Developing domain-specific ML models for financial forecasting, demand planning, fraud detection, and customer churn prediction.' },
  { icon: '🔗', title: 'Process Intelligence', desc: 'Process mining, task mining, and conformance checking to identify automation opportunities and measure process execution quality.' },
  { icon: '🔐', title: 'Responsible AI & Ethics', desc: 'Creating frameworks for explainability, fairness, bias detection, and regulatory compliance in enterprise AI deployments.' },
];

export default function DataLabs() {
  return (
    <div>
      <PageHeader
        title="DataLabs"
        subtitle="GTS Techs' innovation engine — where research meets reality and emerging technologies become enterprise-ready solutions."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['DataLabs']]}
      />

      {/* What is DataLabs */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is DataLabs?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          DataLabs is GTS Techs' dedicated research and innovation center, established to explore, prototype, and productize emerging technologies before they reach mainstream enterprise adoption. Operating at the intersection of academic research and commercial application, DataLabs serves as the breeding ground for the AI capabilities, automation frameworks, and data intelligence tools that power our product portfolio and client solutions.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With a team of data scientists, AI researchers, domain experts, and software architects, DataLabs operates with a mandate to look three to five years ahead — identifying technology trends early and building the GTS Techs-proprietary solutions that will define the next wave of enterprise transformation. The lab's output flows directly into products like TruBot, TruCap+, and the GTS Techs.AI platform.
        </p>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            DataLabs concentrates its efforts on six interconnected research domains that reflect the most critical technology frontiers for enterprise transformation in the coming decade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="text-lg font-bold text-[#dc2626] mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Lab to Market */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">From Lab to Market</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          What distinguishes DataLabs from typical corporate R&D functions is the speed and discipline with which innovations are transitioned from research prototypes to production-grade enterprise solutions. Our structured "Lab to Market" methodology includes rigorous validation stages, client co-development programs, and a dedicated productization team that ensures new capabilities are delivered with enterprise-grade reliability and scalability.
        </p>
        <p className="text-gray-600 leading-relaxed">
          DataLabs also collaborates with leading academic institutions, technology partners, and industry consortia to stay at the forefront of knowledge. These partnerships enable our researchers to access cutting-edge developments while contributing GTS Techs' domain expertise to broader technology advancement — a model that benefits both the company and the wider technology ecosystem.
        </p>
      </section>

      <CtaBanner
        title="Explore Our AI Capabilities"
        subtitle="See how DataLabs innovations power the GTS Techs Artificial Intelligence platform."
        linkLabel="Discover AI Solutions"
        linkTo="/technologies/artificial-intelligence"
      />
    </div>
  );
}
