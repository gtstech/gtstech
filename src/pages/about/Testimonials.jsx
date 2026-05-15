import { testimonials } from '../../data/content.js';
import PageHeader from '../../components/PageHeader';
import TestimonialCard from '../../components/TestimonialCard';
import CtaBanner from '../../components/CtaBanner';

export default function Testimonials() {
  return (
    <div>
      <PageHeader
        title="Customer Testimonials"
        subtitle="What global enterprise leaders say about partnering with GTS Techs — in their own words."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Testimonials']]}
      />

      {/* Intro */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Global Enterprises</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our client relationships are built on transparency, delivery excellence, and a genuine investment in shared outcomes. Across banking, logistics, retail, healthcare, and technology sectors, GTS Techs has earned the trust of marquee enterprises by consistently delivering solutions that move the needle on efficiency, customer experience, and business agility.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The testimonials below represent a cross-section of our client base — spanning different industries, geographies, and engagement types. Each story reflects a partnership that goes beyond vendor-client dynamics, embodying the collaborative, outcome-driven ethos that defines how GTS Techs works.
        </p>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} client={t.client} quote={t.quote} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Begin Your Transformation?"
        subtitle="Join 300+ enterprises that trust GTS Techs to drive digital outcomes at scale."
        linkLabel="Explore Company Overview"
        linkTo="/about/company-overview"
      />
    </div>
  );
}
