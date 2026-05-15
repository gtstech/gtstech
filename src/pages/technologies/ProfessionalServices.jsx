import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function ProfessionalServices() {
  return (
    <div>
      <PageHeader
        title="Professional Services"
        subtitle="Strategic advisory and hands-on implementation services that help enterprises plan, execute, and sustain complex technology programs with confidence."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Professional Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advisory Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Technology investment decisions are among the most consequential an enterprise makes. GTS Techs advisory services bring independent expertise, benchmarking data, and structured frameworks to help technology and business leaders make informed decisions about platform selection, transformation sequencing, operating model design, and sourcing strategy. Our advisors have hands-on delivery experience — we advise based on what we know works in practice, not just in theory.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our advisory engagements are designed to be focused and decisive. Whether you need a rapid technology assessment, a business case for a major investment, a vendor evaluation, or an independent review of a program in flight, we structure our advisory work to produce clear recommendations with an actionable path forward — not reports that sit on shelves.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Technology Strategy & Roadmapping",
            "Platform & Vendor Selection",
            "Business Case Development",
            "IT Operating Model Design",
            "Program Health Reviews",
            "Sourcing & Governance Advisory",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Independent advisory grounded in delivery experience and supported by industry benchmarks and best-practice frameworks.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Services</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Advisory without delivery is incomplete. Our professional services practice spans the full delivery lifecycle — from program setup and architecture through configuration, development, testing, training, and cutover. We apply structured project management methodologies alongside agile delivery practices, giving enterprise programs the governance they need while maintaining the flexibility to respond to change.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Program Management & PMO Setup",
              "Solution Architecture & Design",
              "Configuration & Custom Development",
              "Systems Integration",
              "User Acceptance Testing (UAT)",
              "Training & Change Management",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Implementation services delivered by experienced practitioners using proven delivery frameworks and accelerators that reduce time and risk.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partner With Experts Who Deliver"
        subtitle="Explore our Digital Assurance practice to see how AI-led quality engineering protects the reliability and performance of your technology investments."
        linkLabel="Explore Digital Assurance"
        linkTo="/technologies/digital-assurance"
      />
    </div>
  );
}
