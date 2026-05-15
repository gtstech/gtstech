import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const initiatives = [
  { icon: '📚', title: 'Education & Digital Literacy', desc: 'Sponsoring STEM education programs, digital literacy initiatives, and scholarship programs in underserved communities across India and beyond.' },
  { icon: '🌱', title: 'Environmental Sustainability', desc: 'Reducing carbon footprint through green data centers, energy-efficient infrastructure, and employee-led sustainability programs.' },
  { icon: '🤝', title: 'Community Development', desc: 'Supporting local community upliftment projects including skill development, women empowerment, and rural healthcare access programs.' },
  { icon: '👩‍💼', title: 'Women in Technology', desc: 'Dedicated programs to increase women\'s participation in technology roles through mentorship, returnship initiatives, and inclusive hiring.' },
  { icon: '♻️', title: 'Responsible Business Practices', desc: 'Embedding responsible sourcing, ethical AI principles, and supply chain transparency across all business operations and vendor relationships.' },
  { icon: '🏥', title: 'Healthcare Access', desc: 'Contributing to rural and underserved community healthcare through funding, technology enablement, and employee volunteering programs.' },
];

export default function CSR() {
  return (
    <div>
      <PageHeader
        title="Corporate Social Responsibility"
        subtitle="Creating lasting positive impact for communities, employees, and the environment — because responsible business is good business."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['CSR']]}
      />

      {/* Our Commitment */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our CSR Commitment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          At GTS Techs, corporate social responsibility is not a compliance exercise — it is an integral dimension of who we are and how we operate. As a publicly listed technology company serving global enterprises, we recognize that our scale and influence carry a corresponding obligation to create positive societal impact. Our CSR philosophy is anchored in four principles: Education, Environment, Empowerment, and Ethical Business.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We direct our CSR investments toward programs that create measurable, lasting change — not one-time contributions. From funding STEM scholarships for economically disadvantaged students to enabling rural healthcare access through technology, our initiatives are designed to address systemic challenges at their roots.
        </p>
      </section>

      {/* Initiatives */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Key Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#dc2626] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Measuring Our Impact</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs publishes annual CSR and ESG reports that provide transparent metrics on our social investments, environmental performance, and governance practices. These reports are available to all stakeholders and are reviewed by our Board-level CSR Committee, which oversees the selection, implementation, and evaluation of all CSR programs.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our CSR spending consistently meets and often exceeds the statutory requirements under the Companies Act, 2013. More importantly, we measure success not merely in rupees spent but in lives touched, skills imparted, and communities strengthened — because that is the true measure of responsible enterprise.
        </p>
      </section>

      <CtaBanner
        title="Our ESG Framework"
        subtitle="Explore how GTS Techs integrates Environmental, Social, and Governance principles across the enterprise."
        linkLabel="View ESG Commitments"
        linkTo="/about/esg"
      />
    </div>
  );
}
