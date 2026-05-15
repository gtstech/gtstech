import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function Microsoft() {
  return (
    <div>
      <PageHeader
        title="Microsoft Services"
        subtitle="Comprehensive Microsoft 365, Azure, and Dynamics 365 services that modernize the workplace, accelerate cloud adoption, and embed AI into daily operations."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Microsoft"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Microsoft 365 & Modern Workplace</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            The modern enterprise runs on Microsoft 365 — but deployment and adoption done poorly leads to sprawl, security gaps, and underutilization. GTS Techs delivers structured Microsoft 365 implementations that cover identity, collaboration, information protection, and compliance, ensuring your workforce is productive, connected, and secure from day one.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our modern workplace practice includes Teams architecture and governance, SharePoint intranet design, Power Platform automation, and Microsoft Viva employee experience solutions. We embed change management and end-user training into every engagement so that adoption sticks and your investment in Microsoft 365 delivers lasting productivity gains.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Microsoft Teams Architecture & Governance",
            "SharePoint Online & Intranet Design",
            "Exchange Online Migration",
            "Power Platform (Apps, Automate, BI)",
            "Microsoft Viva Employee Experience",
            "Microsoft 365 Security & Compliance",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Delivered by certified Microsoft professionals using proven implementation frameworks.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Azure Cloud Services</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Azure is the foundation for digital-native enterprise architectures. Our Azure practice covers cloud strategy, infrastructure design, migration execution, and post-migration managed operations — helping organizations move workloads to Azure safely and optimize them for cost, performance, and resilience over time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Azure Architecture Design",
              "Cloud Migration & Lift-and-Shift",
              "Azure Kubernetes Service (AKS)",
              "Azure Data Factory & Synapse Analytics",
              "Azure DevOps & CI/CD Pipelines",
              "Azure Security Center & Sentinel",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade Azure solutions designed for scalability, compliance, and operational efficiency.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dynamics 365 & Microsoft Copilot</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Dynamics 365 unifies CRM and ERP capabilities on a single intelligent platform powered by Microsoft AI. GTS Techs implements Dynamics 365 Sales, Customer Service, Finance, Supply Chain, and Field Service — tailoring each deployment to industry-specific requirements and integrating seamlessly with the broader Microsoft ecosystem including Teams, Outlook, and Azure.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Microsoft Copilot represents a paradigm shift in how knowledge workers interact with enterprise software. Our Copilot enablement practice helps organizations deploy Microsoft 365 Copilot responsibly — establishing governance policies, configuring security controls, identifying high-value use cases, and measuring productivity outcomes to build the business case for broader rollout.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Dynamics 365 Sales & Customer Service",
            "Dynamics 365 Finance & Operations",
            "Dynamics 365 Field Service",
            "Microsoft Copilot for M365",
            "Copilot Studio Custom Agents",
            "Dynamics + Azure AI Integration",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Accelerate Your Microsoft Journey"
        subtitle="See how our AWS practice delivers cloud migration, data engineering, and managed cloud services at enterprise scale."
        linkLabel="Explore AWS Services"
        linkTo="/technologies/aws"
      />
    </div>
  );
}
