import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const awards = [
  { year: '2024', title: 'Everest Group Peak Matrix Leader', category: 'Intelligent Automation', body: 'Recognized as a Leader in Everest Group\'s Intelligent Automation PEAK Matrix® Assessment for outstanding delivery capability and market impact.' },
  { year: '2024', title: 'Gartner Market Guide Recognition', category: 'Robotic Process Automation', body: 'Featured in Gartner\'s Market Guide for Robotic Process Automation for TruBot\'s enterprise-grade automation capabilities and customer satisfaction ratings.' },
  { year: '2023', title: 'NASSCOM Top IT & BPM Company', category: 'Industry Recognition', body: 'Recognized by NASSCOM among India\'s top IT and BPM companies for revenue growth, innovation, and contribution to the digital economy.' },
  { year: '2023', title: 'Asia\'s Best Employer Brand', category: 'People & Culture', body: 'Awarded Asia\'s Best Employer Brand at the World HRD Congress for outstanding talent management, employee engagement, and learning culture.' },
  { year: '2023', title: 'Great Place to Work Certified', category: 'Workplace Excellence', body: 'Certified as a Great Place to Work® for delivering a high-trust, high-performance culture where diverse talent can grow and thrive.' },
  { year: '2022', title: 'AI Breakthrough Award', category: 'Artificial Intelligence', body: 'Won the AI Breakthrough Award for Most Innovative AI Solution for GTS Techs.AI\'s enterprise-wide intelligent automation capabilities.' },
  { year: '2022', title: 'Stevie Award — Best Technology Company', category: 'Business Excellence', body: 'Gold Stevie® Award winner in the Best Technology Company category at the American Business Awards for sustained innovation and client success.' },
  { year: '2021', title: 'IDC Innovators Recognition', category: 'Intelligent Document Processing', body: 'Recognized as an IDC Innovator for TruCap+\'s groundbreaking approach to intelligent document processing and data extraction at enterprise scale.' },
];

export default function Awards() {
  return (
    <div>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Industry accolades that reflect our commitment to innovation, delivery excellence, and a world-class workplace culture."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Awards']]}
      />

      {/* Intro */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognized by the Industry's Most Respected Voices</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs has earned recognition from leading global analysts, industry bodies, and workplace certification organizations — each award validating a different dimension of our organizational excellence. From Gartner and Everest Group endorsements of our technology platforms to Great Place to Work certification for our employee culture, these recognitions collectively reflect the depth and breadth of our organizational quality.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We view awards not as endpoints but as benchmarks — prompts to maintain and raise the standard of what we deliver. Each recognition reinforces our commitment to our clients, our people, and the communities we serve.
        </p>
      </section>

      {/* Awards Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Recent Awards & Accolades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold text-sm text-center leading-tight">
                  {award.year}
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold text-[#dc2626] uppercase tracking-wide mb-1">{award.category}</span>
                  <h3 className="text-base font-bold text-[#dc2626] mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Reflects */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What These Awards Reflect</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every award GTS Techs receives is underpinned by the collective effort of 6,500+ professionals who bring ingenuity, rigor, and client commitment to work every day. Analyst recognitions reflect the quality and innovation of our technology platforms; employer awards reflect the culture and learning environment we have built; and business excellence awards reflect the outcomes we consistently deliver for our enterprise clients.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We are equally proud of recognitions that happen without trophies — when a client renews and expands a relationship, when a new enterprise chooses GTS Techs based on peer referrals, or when our net promoter scores improve year over year. These are the awards that drive us most.
        </p>
      </section>

      <CtaBanner
        title="Explore Our Technology Alliances"
        subtitle="See how our strategic partnerships extend our capabilities and client value."
        linkLabel="View Our Alliances"
        linkTo="/about/alliances"
      />
    </div>
  );
}
