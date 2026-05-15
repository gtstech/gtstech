import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const pillars = [
  { icon: '🤖', title: 'AI at the Core', desc: 'From classical machine learning to large language models and agentic AI, we embed intelligence at every layer of the enterprise stack.' },
  { icon: '⚙️', title: 'Automation at Scale', desc: 'Hyper-automation, RPA, and IDP technologies eliminate manual bottlenecks and create self-healing, autonomous process ecosystems.' },
  { icon: '📊', title: 'Data-Driven Decisions', desc: 'Unified data platforms, advanced analytics, and real-time dashboards transform raw data into strategic competitive advantage.' },
  { icon: '☁️', title: 'Cloud-Native Delivery', desc: 'Multi-cloud architectures and cloud-native engineering accelerate deployment, enhance resilience, and reduce total cost of ownership.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'Digital assurance, managed security services, and regulatory compliance frameworks protect enterprise assets in an evolving threat landscape.' },
  { icon: '🌐', title: 'Experience-First Design', desc: 'Customer and employee experience sit at the heart of every digital initiative, ensuring technology investments translate to tangible satisfaction gains.' },
];

export default function DeepInDigital() {
  return (
    <div>
      <PageHeader
        title="Deep In Digital"
        subtitle="More than a tagline — our defining philosophy for how we engage, innovate, and deliver enterprise transformation."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Deep In Digital']]}
      />

      {/* What It Means */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What "Deep In Digital" Means</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          "Deep in Digital" is not a marketing phrase — it is the operating principle that governs every GTS Techs engagement. It means we do not offer surface-level digitization. We go deep: into your processes, your data, your technology architecture, and your industry dynamics to architect solutions that create lasting, compounding value. Our teams bring expertise that is both broad across technologies and deep in domain knowledge.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This philosophy manifests in our proprietary AI platforms, our industry-specific process frameworks, our investment in R&D through DataLabs, and our commitment to co-innovating with clients rather than simply implementing prescribed solutions. We believe the most impactful digital transformations happen when technology and domain wisdom intersect at depth.
        </p>
      </section>

      {/* Six Dimensions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Six Dimensions of Depth</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Our "Deep in Digital" philosophy is expressed across six interconnected dimensions that together define how we approach enterprise transformation in the modern era.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold text-[#dc2626] mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Culture */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">An Innovation Culture Built on Depth</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs invests continuously in innovation through its DataLabs initiative, where researchers and engineers explore emerging technologies including generative AI, quantum-ready architectures, and next-generation automation. These innovations are rapidly translated into production-ready solutions that our clients can adopt with confidence.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our partnerships with leading technology providers — including Microsoft, Salesforce, AWS, and OutSystems — further deepen our capabilities, ensuring our clients benefit from the best of GTS Techs' proprietary innovation and the broader technology ecosystem. Being "deep in digital" means staying ahead of the curve so our clients do not have to.
        </p>
      </section>

      <CtaBanner
        title="Experience Our AI Flagship Platform"
        subtitle="Discover GTS Techs.AI — the intelligence layer powering enterprise transformation."
        linkLabel="Explore GTS Techs.AI"
        linkTo="/technologies/datamatics-ai"
      />
    </div>
  );
}
