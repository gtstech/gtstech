import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function Cloud() {
  return (
    <div>
      <PageHeader
        title="Cloud Solutions"
        subtitle="Strategic cloud advisory, architecture design, and migration services that help enterprises build secure, resilient, and cost-optimized cloud environments across AWS, Azure, and Google Cloud."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Cloud Solutions"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Strategy & Architecture</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            A well-defined cloud strategy is the prerequisite for a successful cloud program. GTS Techs works with enterprise technology and business leaders to design cloud strategies that align with organizational goals, risk appetite, regulatory requirements, and existing technology investments. We evaluate multi-cloud versus hybrid approaches, assess total cost of ownership, and build the business case that secures executive alignment and funding.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our cloud architects apply Well-Architected Framework principles across the five pillars — operational excellence, security, reliability, performance efficiency, and cost optimization — to design cloud environments that are right-sized from day one and built to evolve. We deliver architecture blueprints, landing zone designs, and governance frameworks that provide a solid foundation for all workloads that follow.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cloud Strategy & Business Case",
            "Multi-Cloud & Hybrid Architecture",
            "Cloud Landing Zone Design",
            "FinOps & Cost Governance",
            "Cloud Security Architecture",
            "Cloud Operating Model Design",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Strategic cloud advisory delivered by certified architects with deep multi-cloud expertise and industry experience.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Migration</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Cloud migration at enterprise scale is a complex, multi-wave program that demands rigorous planning, proven tooling, and experienced execution. Our migration practice applies structured discovery, portfolio classification, and wave-based execution to move workloads to the cloud with minimal business disruption. We manage the full migration lifecycle from initial assessment through to post-migration optimization.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Application Portfolio Discovery",
              "Dependency Mapping & Analysis",
              "Migration Wave Planning",
              "Lift-and-Shift Execution",
              "Replatforming & Modernization",
              "Cloud Testing & Validation",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Migration services engineered for speed, safety, and operational continuity throughout every phase of the program.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Accelerate Your Cloud Transformation"
        subtitle="Discover how our Application Services practice builds, modernizes, and manages the applications that run on your cloud infrastructure."
        linkLabel="Explore Application Services"
        linkTo="/technologies/applications"
      />
    </div>
  );
}
