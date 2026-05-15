import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function About() {
  return (
    <div>
      <PageHeader
        title="About GTS Techs"
        subtitle="For over four decades, GTS Techs has been at the forefront of digital innovation, helping enterprises harness technology to improve efficiency and customer experience."
        breadcrumbs={[['Home', '/'], ['About']]}
      />

      {/* Our Story */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Founded in 1975, GTS Techs has grown from a small data-processing firm into a global digital services leader spanning four continents. Our journey reflects a relentless pursuit of innovation, always placing the customer at the center of every solution we architect. Over nearly five decades, we have weathered technology revolutions — from mainframes to cloud, from rule-based automation to agentic AI — emerging stronger and more relevant with each cycle.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Today we serve 300+ enterprise customers across 50+ countries, supported by a team of 6,500+ professionals who bring deep domain expertise and a passion for measurable outcomes. Our annual revenue of $181 MN reflects the trust our clients place in us year after year.
        </p>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Philosophy — Deep in Digital</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe digital transformation is not a destination but a continuous journey. Our "Deep in Digital" philosophy means we embed technology at the core of every engagement — using AI, automation, cloud, and analytics to drive outcomes that matter: reduced costs, faster processes, and superior customer experiences. We go beyond surface-level digitization to reimagine how enterprises operate at their foundation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This philosophy is embodied across our four integrated service pillars — Technologies, Operations, Experiences, and Products — which work in concert to deliver comprehensive enterprise transformation. Every engagement begins with understanding business outcomes, not technology for its own sake.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'AI-First Mindset', desc: 'We lead every engagement with AI-native thinking, ensuring automation, intelligence, and data underpin every solution we deliver.' },
              { title: 'Outcome Orientation', desc: 'KPIs, ROI targets, and measurable efficiency gains are defined at the outset and tracked rigorously throughout the engagement lifecycle.' },
              { title: 'Partnership Model', desc: 'We function as an extension of our clients\' teams — accountable, transparent, and invested in long-term success beyond the initial delivery.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#dc2626] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Footprint</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          With headquarters in Mumbai and regional offices across the Americas, Europe, and APAC, GTS Techs delivers seamlessly across time zones and geographies. Our global delivery model combines onshore strategic consulting with offshore and nearshore execution excellence, giving clients the best of both worlds: proximity for engagement and scale for delivery.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our four global delivery regions — India, Americas, Europe, and APAC — are supported by state-of-the-art delivery centers equipped with the latest technologies, robust security frameworks, and multilingual teams capable of supporting global enterprise clients across their most complex operating environments.
        </p>
      </section>

      <CtaBanner
        title="Explore the GTS Techs Story in Depth"
        subtitle="Learn about our history, leadership, culture, and corporate values."
        linkLabel="Company Overview"
        linkTo="/about/company-overview"
      />
    </div>
  );
}
