import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const esgPillars = [
  {
    category: 'Environmental',
    color: 'bg-green-50 border-green-200',
    titleColor: 'text-green-800',
    items: [
      { title: 'Carbon Reduction Targets', desc: 'Committed to achieving science-based carbon reduction targets aligned with the Paris Agreement, with a roadmap to net-zero operations by 2040.' },
      { title: 'Green Infrastructure', desc: 'Energy-efficient data centers, LED lighting in all facilities, and renewable energy procurement programs across our largest delivery locations.' },
      { title: 'Waste Minimization', desc: 'Zero-landfill ambition for e-waste through certified disposal partners, paper reduction programs, and single-use plastic elimination across all offices.' },
    ],
  },
  {
    category: 'Social',
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-800',
    items: [
      { title: 'Diversity & Inclusion', desc: 'Measurable D&I targets for gender, disability, and underrepresented groups — tracked quarterly and reported in annual ESG disclosures.' },
      { title: 'Employee Well-being', desc: 'Comprehensive mental health support, flexible work policies, parental leave enhancements, and employee assistance programs across all regions.' },
      { title: 'Community Investment', desc: 'CSR programs focused on education, digital literacy, healthcare access, and rural community development — touching 50,000+ beneficiaries annually.' },
    ],
  },
  {
    category: 'Governance',
    color: 'bg-orange-50 border-orange-200',
    titleColor: 'text-orange-800',
    items: [
      { title: 'Board Independence', desc: 'Majority-independent Board with specialized committees for audit, risk, CSR, and nomination & remuneration — meeting rigorous SEBI listing standards.' },
      { title: 'Ethical AI Governance', desc: 'Formal AI ethics policy covering bias detection, explainability requirements, data privacy, and responsible use guidelines for all GTS Techs AI solutions.' },
      { title: 'Supply Chain Responsibility', desc: 'Vendor code of conduct, supplier ESG assessments, and preferential sourcing from certified sustainable and diverse-owned enterprises.' },
    ],
  },
];

export default function ESG() {
  return (
    <div>
      <PageHeader
        title="Environmental, Social & Governance"
        subtitle="Our ESG framework reflects the belief that sustainable business practices and superior enterprise performance are mutually reinforcing, not competing objectives."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['ESG']]}
      />

      {/* Why ESG */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ESG Commitment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs views Environmental, Social, and Governance (ESG) performance not as a regulatory obligation but as a strategic imperative that creates long-term value for all stakeholders. As a publicly listed technology company with a global footprint, our decisions have environmental, social, and economic consequences — and we accept full accountability for managing these responsibly.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our annual ESG report, reviewed and approved by the Board's CSR and Risk Committees, provides transparent, auditable disclosures against globally recognized frameworks including GRI, BRSR (Business Responsibility and Sustainability Reporting), and UN Sustainable Development Goals. We submit these reports in the belief that transparency builds trust — with investors, clients, employees, and communities.
        </p>
      </section>

      {/* ESG Pillars */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">ESG Framework</h2>
          <div className="space-y-8">
            {esgPillars.map((pillar) => (
              <div key={pillar.category} className={`rounded-xl border p-8 ${pillar.color}`}>
                <h3 className={`text-2xl font-bold mb-6 ${pillar.titleColor}`}>{pillar.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pillar.items.map((item) => (
                    <div key={item.title} className="bg-white rounded-lg p-5 shadow-sm">
                      <h4 className="text-base font-bold text-[#dc2626] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ESG Reporting & Transparency</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs publishes a comprehensive annual ESG report aligned with the Business Responsibility and Sustainability Reporting (BRSR) framework mandated by SEBI for top-listed companies. The report covers quantitative metrics on energy consumption, water usage, GHG emissions, employee demographics, training hours, and governance practices — enabling investors and stakeholders to benchmark our performance objectively.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We engage third-party assurance providers to validate key ESG metrics, ensuring the integrity and credibility of our disclosures. Our ESG performance is also increasingly integrated into our enterprise risk management framework, reflecting the recognition that environmental and social risks are material business risks that require the same rigor as financial and operational risk management.
        </p>
      </section>

      <CtaBanner
        title="Our CSR Programs in Action"
        subtitle="Explore the community initiatives and social investments that bring our ESG commitments to life."
        linkLabel="View CSR Initiatives"
        linkTo="/about/csr"
      />
    </div>
  );
}
