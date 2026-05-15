import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const leaders = [
  { name: 'Dr. Lalit S. Kanodia', role: 'Founder & Chairman', bio: 'A pioneer of the Indian IT industry, Dr. Kanodia founded GTS Techs in 1975 after completing his doctorate at MIT. His vision of technology-driven enterprise transformation has guided the company for nearly five decades.' },
  { name: 'Rahul L. Kanodia', role: 'Vice Chairman & CEO', bio: 'Rahul leads the company\'s global strategy, growth initiatives, and digital innovation agenda. Under his leadership, GTS Techs has expanded its AI capabilities and diversified its global client base significantly.' },
  { name: 'Divya Kumat', role: 'CFO & President, APAC', bio: 'Divya oversees the company\'s financial strategy, investor relations, and APAC business operations. She brings deep expertise in corporate finance and regional market development.' },
  { name: 'Mitul Mehta', role: 'President, Technology Business', bio: 'Mitul drives the technology services portfolio, including cloud, AI, data analytics, and enterprise platforms. He champions the company\'s GTS Techs.AI initiative and engineering excellence.' },
  { name: 'Tarun Vyas', role: 'President, Operations', bio: 'Tarun leads the digital operations and BPM business, overseeing intelligent automation, finance transformation, and domain-specific process management across regulated industries.' },
  { name: 'Sonia Gupta', role: 'Chief People Officer', bio: 'Sonia shapes talent strategy, organizational culture, and learning initiatives for 6,500+ professionals worldwide. Her focus on inclusion and continuous development keeps GTS Techs\'s talent engine performing at its peak.' },
];

export default function Leadership() {
  return (
    <div>
      <PageHeader
        title="Leadership Team"
        subtitle="Experienced leaders driving innovation, growth, and enterprise transformation across global markets."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Leadership']]}
      />

      {/* Intro */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Guided by Vision, Driven by Outcomes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs is led by a team of seasoned professionals who combine decades of industry experience with a forward-looking perspective on technology and business. Our leadership brings together expertise spanning enterprise software, AI, financial services, operations management, and global talent development — ensuring we remain at the cutting edge while delivering consistent client value.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The management team operates with a strong governance ethos, maintaining transparency with stakeholders and embedding accountability at every level of the organization. This leadership culture flows from the top down, creating a high-performance environment where innovation is celebrated and delivery excellence is non-negotiable.
        </p>
      </section>

      {/* Leadership Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Management Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                <div className="w-16 h-16 rounded-full bg-[#dc2626] flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-[#dc2626] mb-1">{leader.name}</h3>
                <p className="text-sm font-semibold text-[#dc2626] mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Values */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs' Board of Directors comprises independent directors with expertise in technology, finance, law, and corporate strategy. The Board provides robust oversight of management decisions, risk governance, and long-term strategic direction, ensuring that the company operates in the best interests of all stakeholders — employees, clients, investors, and communities.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Board committees covering audit, risk management, nominations and remuneration, and CSR meet regularly to review performance, compliance, and strategic priorities. This disciplined governance structure underpins GTS Techs' reputation as a trusted public-listed entity on both the BSE and NSE.
        </p>
      </section>

      <CtaBanner
        title="Hear from Our Clients"
        subtitle="Discover what global enterprises say about partnering with GTS Techs."
        linkLabel="Read Client Testimonials"
        linkTo="/about/testimonials"
      />
    </div>
  );
}
