import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function CompanyOverview() {
  return (
    <div>
      <PageHeader
        title="Company Overview"
        subtitle="GTS Techs is a global digital services and solutions company enabling enterprises to go Deep in Digital."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Company Overview']]}
      />

      {/* Who We Are */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs Global Services Limited is a publicly listed, NASSCOM-recognized IT and BPM company headquartered in Mumbai, India. Established in 1975 by Dr. Lalit S. Kanodia, the company has evolved into a multi-dimensional enterprise serving marquee clients across banking, insurance, healthcare, manufacturing, logistics, and technology sectors. Our 6,500+ professionals operate across delivery centers in India, the USA, the UK, Singapore, and beyond.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Listed on both the BSE and NSE, GTS Techs brings the governance and transparency of a public company alongside the agility and innovation culture of a technology-first organization. With annual revenues of $181 MN, we are a trusted partner for enterprises that demand reliability, compliance, and breakthrough outcomes.
        </p>
      </section>

      {/* Business Portfolio */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Business Portfolio</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our integrated business portfolio spans four pillars that work synergistically to deliver end-to-end digital transformation. Each pillar brings specialized expertise while drawing on shared capabilities in AI, cloud, data, and automation — enabling us to offer cohesive enterprise solutions rather than siloed services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Technologies', desc: 'AI platforms, enterprise software, cloud transformation, data analytics, hyper-automation, and digital assurance services.' },
              { title: 'Operations', desc: 'Intelligent BPM for finance, banking, insurance, healthcare processes — powered by FINATO and automation platforms.' },
              { title: 'Experiences', desc: 'Contact center transformation, digital proctoring, and market research & analytics through XM consulting.' },
              { title: 'Products', desc: 'Proprietary products including TruBot (RPA), TruCap+ (IDP), TruBI, SuperCX, TruAI Underwriting, and TruDiscovery.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-[#dc2626] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Governance</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          As a publicly listed entity on the BSE and NSE, GTS Techs upholds the highest standards of corporate governance, financial transparency, and stakeholder accountability. Our Board of Directors comprises industry veterans and independent directors who provide strategic oversight while ensuring ethical conduct and regulatory compliance across all geographies.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We adhere to SEBI listing obligations, the Companies Act, and international data protection regulations including GDPR. Our robust internal audit framework, risk management practices, and ESG commitments reflect our belief that sustainable business performance and responsible corporate citizenship go hand in hand.
        </p>
      </section>

      <CtaBanner
        title="Meet the Leaders Behind GTS Techs"
        subtitle="Discover the experienced team driving our global vision and client success."
        linkLabel="View Leadership Team"
        linkTo="/about/leadership"
      />
    </div>
  );
}
