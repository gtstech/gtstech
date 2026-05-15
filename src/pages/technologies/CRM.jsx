import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function CRM() {
  return (
    <div>
      <PageHeader
        title="CRM Services"
        subtitle="Strategic CRM transformation, implementation, and integration services that help enterprises build a unified, intelligent view of their customers and maximize lifetime value."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["CRM Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">CRM Transformation</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Customer relationship management is no longer a single system — it is a strategic capability that spans marketing, sales, service, field operations, and digital commerce. GTS Techs helps enterprises design and implement CRM strategies that break down departmental silos, create a unified customer data foundation, and enable personalized engagement at every stage of the customer lifecycle.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our CRM transformation engagements begin with a thorough assessment of your current customer engagement model, technology landscape, and data quality maturity. We define a target architecture, select the right CRM platform for your requirements, and execute implementation using proven methodologies that minimize business disruption and accelerate user adoption across sales, service, and marketing teams.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "CRM Strategy & Platform Selection",
            "Sales Force Automation",
            "Customer Service & Case Management",
            "Marketing Automation",
            "Field Service Management",
            "Customer Data Platform (CDP)",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">CRM capabilities implemented and configured by experienced practitioners with deep platform and industry expertise.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration & Automation</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            A CRM system delivers its greatest value when it is deeply integrated with the rest of your enterprise ecosystem — ERP, marketing platforms, e-commerce, communication tools, and service management systems. Our CRM integration specialists design bidirectional data flows and event-driven integrations that keep customer data current, consistent, and available across every system that needs it.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "CRM–ERP Integration",
              "Marketing Platform Connectors",
              "E-Commerce & Order Management",
              "Contact Center CTI Integration",
              "AI-Powered Lead Scoring",
              "Workflow & Approval Automation",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Robust integration patterns that eliminate data silos and create a single, trusted source of customer truth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Transform Your Customer Relationships"
        subtitle="Explore our Enterprise Content Management practice to see how we help organizations govern information and streamline document-centric workflows."
        linkLabel="Explore ECM Services"
        linkTo="/technologies/ecm"
      />
    </div>
  );
}
