import PageHeader from '../../../components/PageHeader';
import CtaBanner from '../../../components/CtaBanner';

export default function TestimonialsResource() {
  const items = [
    {
      title: "ECU Worldwide: Accelerating Global Freight Operations",
      topic: "Logistics & Supply Chain",
      desc: "\"GTS Techs helped us automate our freight documentation process, reducing processing time by 65% and significantly improving accuracy across our global network.\" — CTO, ECU Worldwide",
    },
    {
      title: "Incora: Transforming Aerospace Supply Chain Efficiency",
      topic: "Aerospace & Defense",
      desc: "\"The intelligent automation solution delivered by GTS Techs has been a game-changer for our supply chain. We've seen a 40% reduction in operational costs within the first year.\" — VP Operations, Incora",
    },
    {
      title: "Monument Bank: Redefining Digital Banking Experiences",
      topic: "Banking & Financial Services",
      desc: "\"GTS Techs' AI-powered customer experience platform enabled Monument Bank to onboard customers 3x faster while maintaining the highest compliance standards.\" — Head of Digital, Monument Bank",
    },
    {
      title: "OneTouch Direct: Elevating Contact Center Performance",
      topic: "Customer Experience",
      desc: "\"Our contact center NPS scores improved by 28 points after deploying GTS Techs' SuperCX solution. Agent productivity and customer satisfaction both reached record highs.\" — Director of CX, OneTouch Direct",
    },
    {
      title: "Harris Teeter: Modernizing Retail Data Analytics",
      topic: "Retail & Consumer Goods",
      desc: "\"GTS Techs' TruBI platform gave our merchandising team real-time insights that previously took days to compile. Decision velocity has improved dramatically across all store categories.\" — Chief Data Officer, Harris Teeter",
    },
    {
      title: "Ingram Micro: Scaling Intelligent Document Processing",
      topic: "Technology Distribution",
      desc: "\"TruCap+ from GTS Techs handles millions of documents monthly with near-perfect accuracy. The ROI was evident within six months of deployment, far exceeding our projections.\" — SVP Technology, Ingram Micro",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        breadcrumbs={[["Home", "/"], ["Resources", "/resources"], ["Client Testimonials"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Hear directly from our clients about how GTS Techs' intelligent automation, AI, and digital transformation solutions have delivered measurable business outcomes across industries.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-l-4 border-[#dc2626] hover:shadow-md transition">
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wide">{item.topic}</span>
              <h3 className="font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="See What Our Clients Are Saying"
        subtitle="Explore the full collection of client success stories and discover how GTS Techs drives real results."
        linkLabel="View All Testimonials"
        linkTo="/about/testimonials"
      />
    </div>
  );
}
