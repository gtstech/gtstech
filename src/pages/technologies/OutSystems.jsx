import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function OutSystems() {
  return (
    <div>
      <PageHeader
        title="OutSystems Low-Code Services"
        subtitle="Accelerate enterprise application delivery with OutSystems low-code — from greenfield development to legacy modernization at scale."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["OutSystems"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Low-Code Application Development</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            OutSystems is the leading enterprise low-code platform, enabling organizations to build mission-critical applications in a fraction of the time required by traditional development. GTS Techs is a certified OutSystems partner with experienced developers who understand both the platform's capabilities and the enterprise architecture disciplines needed to build solutions that scale, integrate, and perform under real-world load.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our low-code development practice covers web applications, mobile apps, API integration layers, and process automation — all built on OutSystems with robust security, accessibility compliance, and DevOps automation baked in from the start. We follow OutSystems architecture best practices to ensure solutions remain maintainable as they grow in complexity.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Custom Web Application Development",
            "Native Mobile App Development",
            "Reactive Web App Architecture",
            "API Design & Integration",
            "OutSystems DevOps & Pipelines",
            "Performance Optimization & Tuning",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Delivered by OutSystems-certified developers using architecture best practices for enterprise-grade reliability.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Legacy Modernization with OutSystems</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Legacy systems are among the biggest barriers to digital transformation — they are expensive to maintain, difficult to integrate, and unable to support modern user experience expectations. OutSystems provides an accelerated path to modernization, enabling organizations to replace or wrap legacy applications while preserving critical business logic and minimizing disruption to ongoing operations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Legacy Assessment & Roadmapping",
              "Strangler-Fig Modernization Pattern",
              "Data Migration & Transformation",
              "Legacy API Wrapping & Exposure",
              "UI/UX Re-Design & Rebuild",
              "Parallel Run & Cutover Planning",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Proven modernization patterns that reduce risk and accelerate time-to-value for complex legacy replacement programs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Deliver Applications Faster with Low-Code"
        subtitle="See how our Digital Transformation practice helps enterprises reimagine processes and technology for the digital era."
        linkLabel="Explore Digital Transformation"
        linkTo="/technologies/digital-transformation"
      />
    </div>
  );
}
