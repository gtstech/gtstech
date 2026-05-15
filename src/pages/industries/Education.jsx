import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Digital Proctoring',
    description:
      'AI-powered online proctoring solutions for universities, professional certification bodies, and EdTech platforms deliver secure, scalable remote exam administration with automated identity verification, behaviour monitoring, and post-exam review workflows. GTS Techs proctoring services combine AI detection capabilities with human proctor review to maintain exam integrity while delivering a respectful candidate experience.',
  },
  {
    title: 'LMS Integration and Support',
    description:
      'Technical integration services connect learning management systems — Canvas, Blackboard, Moodle, D2L, and custom platforms — with student information systems, assessment engines, content libraries, and analytics platforms to create a coherent digital learning ecosystem. Managed LMS operations support covers configuration management, user provisioning, troubleshooting, and release management for institutions without dedicated LMS administration capacity.',
  },
  {
    title: 'Student Support Automation',
    description:
      'AI-powered student support solutions handle high-volume, repetitive enquiries about enrolment, financial aid, academic records, course schedules, and campus services through intelligent chatbots and automated workflows — reducing the burden on student services staff while improving response times for students. Escalation workflows ensure complex or sensitive cases receive prompt human attention from the appropriate team.',
  },
  {
    title: 'Content Digitisation',
    description:
      'End-to-end content digitisation services convert physical educational materials — textbooks, library archives, assessment banks, and reference collections — into structured, accessible digital formats compatible with modern LMS and e-reader platforms. Accessibility remediation services ensure digital content meets WCAG 2.1 and Section 508 standards, broadening access for students with disabilities.',
  },
];

export default function Education() {
  return (
    <div>
      <PageHeader
        title="Education"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Education']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education Technology</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          The education sector is undergoing accelerated digital transformation driven by the mainstreaming
          of online and hybrid learning, growing demand for flexible credentialing pathways, and the imperative
          to personalise learning experiences at institutional scale. Universities, community colleges,
          EdTech platforms, professional certification bodies, and corporate learning organisations all face
          the challenge of delivering high-quality digital learning experiences while managing the operational
          complexity and cost of technology-enabled education at scale.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs brings dedicated education technology expertise to institutions seeking to improve
          assessment security, streamline learning technology operations, scale student support, and digitise
          educational content libraries. Our education solutions are deployed by leading universities, global
          EdTech companies, and professional certification bodies across North America, Europe, and Asia-Pacific,
          with a track record spanning over a decade of supporting digital education at scale.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Education Institutions</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our education solutions address the four domains where technology and operational support most
            directly impact learning quality, student experience, and institutional efficiency: assessment
            integrity through digital proctoring, learning technology management through LMS support, student
            services efficiency through intelligent automation, and knowledge preservation through content
            digitisation. Each solution is designed to integrate with existing institutional systems and
            processes, minimising disruption during implementation while delivering measurable outcomes.
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
        title="Powering Market Research with Advanced Analytics"
        subtitle="Survey programming, data processing, and analysis services that help market research agencies deliver faster and more accurate insights."
        linkLabel="Explore Market Research"
        linkTo="/industries/market-research"
      />
    </div>
  );
}
