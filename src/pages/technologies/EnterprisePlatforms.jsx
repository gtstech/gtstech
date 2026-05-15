import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

const platforms = [
  {
    name: "Salesforce",
    href: "/technologies/salesforce",
    description:
      "End-to-end Salesforce implementation, customization, and Einstein AI integration services that help organizations maximize the value of the world's leading CRM platform.",
  },
  {
    name: "Microsoft",
    href: "/technologies/microsoft",
    description:
      "Comprehensive Microsoft 365, Azure, and Dynamics 365 services — from cloud migration and modern workplace transformation to Copilot-powered productivity enhancement.",
  },
  {
    name: "Amazon Web Services",
    href: "/technologies/aws",
    description:
      "AWS migration, data engineering, and managed cloud services delivered by certified practitioners who architect scalable, secure, and cost-optimized cloud environments.",
  },
  {
    name: "OutSystems",
    href: "/technologies/outsystems",
    description:
      "Low-code application development and legacy modernization on the OutSystems platform, enabling enterprises to deliver enterprise-grade applications at speed.",
  },
];

export default function EnterprisePlatforms() {
  return (
    <div>
      <PageHeader
        title="Enterprise Platform Services"
        subtitle="Deep expertise across the world's leading enterprise platforms — accelerating adoption, integration, and innovation."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Enterprise Platforms"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Expertise That Delivers Results</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Enterprise platforms are the operational backbone of modern organizations. Yet unlocking their full potential requires more than configuration — it demands strategic vision, deep technical expertise, and a clear understanding of business processes. GTS Techs brings all three, helping enterprises implement, customize, and continuously evolve their platform investments.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our platform practices maintain the highest levels of partner certification across Salesforce, Microsoft, AWS, and OutSystems. We combine certified practitioners with proprietary implementation accelerators and industry-specific templates to compress project timelines and reduce implementation risk. From greenfield deployments to complex migrations and integrations, we deliver platform projects that stay on time, on budget, and on target.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Platform Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#dc2626] text-xl mb-2">
                  <Link to={p.href} className="hover:text-[#dc2626] transition-colors">
                    {p.name}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                <Link
                  to={p.href}
                  className="text-sm font-medium text-[#dc2626] hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Cross-Platform Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Platform Strategy & Roadmapping",
            "Multi-Platform Integration",
            "Data Migration & ETL",
            "Custom Development & Extensions",
            "Training & Change Management",
            "Platform Managed Services",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                Specialized capability delivered by certified platform experts with proven delivery frameworks and industry best practices.
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Maximize Your Platform Investment"
        subtitle="Connect with our Salesforce practice to explore how we help enterprises transform customer relationships and revenue operations."
        linkLabel="Explore Salesforce Services"
        linkTo="/technologies/salesforce"
      />
    </div>
  );
}
