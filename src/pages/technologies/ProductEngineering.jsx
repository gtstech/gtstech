import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function ProductEngineering() {
  return (
    <div>
      <PageHeader
        title="Product Engineering"
        subtitle="End-to-end product engineering services — from market insight and UX design through engineering, DevOps, and lifecycle management — that help enterprises build software products that users love and markets reward."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Product Engineering"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Strategy & Design</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Great software products begin with a deep understanding of user needs, market dynamics, and business goals. GTS Techs brings product strategists, UX researchers, and service designers who apply human-centered design methods — user research, journey mapping, prototyping, and usability testing — to validate product concepts before significant engineering investment is committed.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our product strategy engagements define clear product vision, value propositions, feature prioritization frameworks, and go-to-market considerations. We help product teams adopt modern product management practices — OKRs, continuous discovery, and outcome-based roadmaps — that keep product development aligned with real user and business needs as they evolve.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Product Vision & Strategy",
            "User Research & Market Analysis",
            "UX Design & Prototyping",
            "Design Systems Development",
            "Accessibility & Inclusive Design",
            "Product Roadmap & OKR Facilitation",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Human-centered design services that validate ideas early and reduce the cost of building the wrong product.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineering & DevOps</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Translating product vision into production-quality software requires disciplined engineering, modern tooling, and a culture of continuous improvement. Our product engineering teams build cloud-native, API-first software using agile delivery practices with automated testing, security scanning, and continuous deployment pipelines that keep release cycles short and quality high. We engineer for observability from the start, ensuring production issues surface quickly and are resolved before they impact users.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cloud-Native Product Development",
              "CI/CD Pipeline Automation",
              "Test-Driven & Behavior-Driven Development",
              "SRE & Reliability Engineering",
              "API-First & Event-Driven Architecture",
              "Technical Debt Management",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Engineering practices designed for velocity, reliability, and the long-term health of your product codebase.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Engineer Products That Create Lasting Value"
        subtitle="Explore our CRM Services to see how we help enterprises build customer-centric systems that drive loyalty and revenue growth."
        linkLabel="Explore CRM Services"
        linkTo="/technologies/crm"
      />
    </div>
  );
}
