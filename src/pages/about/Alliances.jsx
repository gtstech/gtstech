import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const partners = [
  { name: 'Microsoft', tier: 'Gold Partner', desc: 'Azure, Dynamics 365, Power Platform, and Microsoft 365 solutions. Our Microsoft Gold Partnership reflects deep engineering expertise and a large certified practitioner base.' },
  { name: 'Salesforce', tier: 'Consulting Partner', desc: 'Sales Cloud, Service Cloud, Marketing Cloud, and Einstein AI implementations. Certified Salesforce architects and developers across CRM, CPQ, and industry clouds.' },
  { name: 'Amazon Web Services', tier: 'Advanced Consulting Partner', desc: 'Cloud migration, managed services, data lake architecture, and AI/ML workloads on AWS. Multiple AWS competency certifications across analytics, machine learning, and migration.' },
  { name: 'OutSystems', tier: 'Platinum Partner', desc: 'Low-code application development and rapid modernization of legacy systems. GTS Techs is among the most certified OutSystems partners globally.' },
  { name: 'UiPath', tier: 'Gold Partner', desc: 'Complementary RPA capabilities alongside TruBot for enterprise clients requiring UiPath-native automation within a broader intelligent automation framework.' },
  { name: 'ServiceNow', tier: 'Implementation Partner', desc: 'ITSM, HRSD, and workflow automation implementations that modernize enterprise operations and enhance employee and customer digital experiences.' },
  { name: 'OpenAI / Azure OpenAI', tier: 'Technology Alliance', desc: 'Leveraging large language model capabilities within enterprise-grade GTS Techs.AI solutions to deliver generative AI applications with security and compliance controls.' },
  { name: 'Kofax', tier: 'Value-Added Reseller', desc: 'Intelligent automation and document processing capabilities that complement GTS Techs\' TruCap+ platform for complex multi-vendor enterprise deployments.' },
];

export default function Alliances() {
  return (
    <div>
      <PageHeader
        title="Alliances & Partnerships"
        subtitle="Strategic technology alliances that extend our capabilities and amplify the value we deliver to enterprise clients globally."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Alliances']]}
      />

      {/* Why Alliances Matter */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Strategic Alliances</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In the modern enterprise technology landscape, no single vendor can address every dimension of digital transformation. GTS Techs' alliance strategy is built on a deliberate selection of technology partners whose platforms, when combined with GTS Techs' proprietary IP and domain expertise, create compound value for our clients. We invest in deep, certified partnerships — not superficial affiliations — ensuring our alliance portfolio delivers genuine technical depth.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our technology alliances span cloud hyperscalers, CRM leaders, low-code platforms, automation tools, and AI providers. Each partnership is governed by a joint business plan that aligns on shared client success metrics, certification targets, and co-development initiatives — ensuring that our alliance value continuously expands over time.
        </p>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Alliance Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#dc2626]">{partner.name}</h3>
                  <span className="text-xs font-semibold text-white bg-[#dc2626] rounded-full px-3 py-1">{partner.tier}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Innovation */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Co-Innovation with Partners</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Beyond standard implementation partnerships, GTS Techs actively co-innovates with selected alliance partners to build joint solutions, accelerators, and industry-specific offerings. These co-innovation programs are particularly active in AI-augmented CRM, intelligent document processing integrated with cloud platforms, and low-code automation accelerators for regulated industries.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our partner ecosystem also includes relationships with niche technology providers in areas such as API management, cybersecurity, and advanced testing frameworks — ensuring we can assemble the optimal technology stack for each client engagement without being constrained by a single-vendor approach.
        </p>
      </section>

      <CtaBanner
        title="Enterprise Platforms That Drive Results"
        subtitle="Explore how our Microsoft, Salesforce, AWS, and OutSystems capabilities power your digital transformation."
        linkLabel="Explore Enterprise Platforms"
        linkTo="/technologies/enterprise-platforms"
      />
    </div>
  );
}
