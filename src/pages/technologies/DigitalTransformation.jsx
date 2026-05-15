import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function DigitalTransformation() {
  return (
    <div>
      <PageHeader
        title="Digital Transformation Services"
        subtitle="End-to-end transformation services that help enterprises reimagine business models, modernize technology, and build the organizational capabilities needed to thrive in the digital economy."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Digital Transformation"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformation Strategy</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Successful digital transformation begins with a clear strategic foundation — a shared understanding of where the organization needs to go, what capabilities it must build, and how technology investments will be sequenced to deliver value at each stage. GTS Techs partners with executive leadership to develop transformation roadmaps that are ambitious in vision, grounded in operational reality, and measurable in outcome.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our transformation strategists bring industry benchmark data, maturity models, and pattern libraries from hundreds of enterprise transformations. We help you assess your current digital maturity, identify competitive gaps, prioritize initiatives based on value and feasibility, and establish the governance structures and KPIs needed to sustain transformation momentum over multi-year programs.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Digital Maturity Assessment",
            "Transformation Roadmap Design",
            "Operating Model Redesign",
            "Investment Prioritization & Business Case",
            "Agile at Scale Enablement",
            "Transformation Program Governance",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Strategic advisory delivered by experienced transformation practitioners with deep cross-industry insight.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Modernization</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Technology debt is one of the most significant obstacles to enterprise agility. Our technology modernization practice helps organizations systematically retire legacy systems, adopt cloud-native architectures, and implement modern integration patterns — creating a flexible, composable technology landscape that can evolve as business needs change.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Application Portfolio Rationalization",
              "Cloud-Native Architecture Design",
              "Microservices & API Strategy",
              "DevSecOps Implementation",
              "Integration Modernization",
              "Technology Debt Reduction Programs",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Modernization delivered using proven patterns and architecture frameworks that minimize risk and accelerate velocity.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start Your Transformation Journey"
        subtitle="Explore our Artificial Intelligence capabilities and see how AI amplifies every dimension of your digital transformation program."
        linkLabel="Explore Artificial Intelligence"
        linkTo="/technologies/artificial-intelligence"
      />
    </div>
  );
}
