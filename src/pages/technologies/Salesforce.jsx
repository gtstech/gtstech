import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

const implementationCapabilities = [
  "Sales Cloud Configuration & Customization",
  "Service Cloud & Field Service",
  "Marketing Cloud & Pardot",
  "Experience Cloud Portals",
  "Revenue Cloud & CPQ",
  "Data Cloud & Customer 360",
];

const einsteinCapabilities = [
  "Einstein Prediction Builder",
  "Einstein Copilot for Sales & Service",
  "Agentforce Autonomous AI Agents",
  "Einstein Analytics & CRM Analytics",
  "Prompt Engineering & LLM Integration",
  "AI-Driven Recommendation Engines",
];

const integrationCapabilities = [
  "MuleSoft API-Led Integration",
  "Salesforce Connect & OData",
  "Real-Time Event-Driven Architecture",
  "Legacy System Modernization via API",
  "Third-Party App Connectors",
  "Data Quality & Governance",
];

export default function Salesforce() {
  return (
    <div>
      <PageHeader
        title="Salesforce Services"
        subtitle="End-to-end Salesforce implementation, AI enablement, and integration services that transform how enterprises engage customers and drive revenue."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Salesforce"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation & Customization</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            GTS Techs is a certified Salesforce partner with deep expertise across the full suite of Salesforce clouds. Our implementation methodology combines agile delivery with industry-specific accelerators, enabling enterprises to go live faster without compromising quality or scalability. We tailor every implementation to your unique processes, data model, and integration landscape.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From Sales Cloud implementations that streamline pipeline management to Service Cloud deployments that transform customer support operations, our teams bring hundreds of successful Salesforce projects to every engagement. We ensure clean data migration, comprehensive user training, and an adoption plan that maximizes your return on investment.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {implementationCapabilities.map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Einstein & AI Services</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Salesforce's Einstein AI and the new Agentforce platform unlock transformational capabilities within your CRM ecosystem. Our AI specialists help you design, configure, and deploy intelligent features that automate repetitive tasks, surface predictive insights, and enable autonomous AI agents to handle complex customer interactions — all within the Salesforce security and compliance boundary.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {einsteinCapabilities.map((cap) => (
              <div key={cap} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{cap}</h3>
                <p className="text-gray-600 text-sm">AI-powered capability configured and deployed by certified Salesforce AI specialists.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Salesforce delivers maximum value when it is seamlessly connected to your ERP, marketing stack, data warehouse, and operational systems. Our integration architects design robust, scalable integration patterns using MuleSoft and native Salesforce integration tools, ensuring real-time data flows and a unified view of your customer across all touchpoints.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We apply API-led connectivity principles to future-proof your integration landscape, making it easier to onboard new systems, support business growth, and maintain data quality as your ecosystem evolves. Our integration services include thorough testing, monitoring setup, and operational runbooks to support your team post-launch.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrationCapabilities.map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Unlock the Full Power of Salesforce"
        subtitle="Discover how our Microsoft practice delivers cloud, productivity, and AI solutions for the modern enterprise."
        linkLabel="Explore Microsoft Services"
        linkTo="/technologies/microsoft"
      />
    </div>
  );
}
