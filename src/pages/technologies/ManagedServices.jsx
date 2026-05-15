import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function ManagedServices() {
  return (
    <div>
      <PageHeader
        title="Managed Services"
        subtitle="Proactive application managed services and infrastructure operations that keep your enterprise technology running at peak performance — 24/7, at scale, with continuous improvement built in."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Managed Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Managed Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Keeping enterprise applications healthy, performant, and aligned with business needs requires sustained operational expertise that many organizations struggle to maintain in-house. GTS Techs Application Managed Services provide dedicated application support teams who manage incident response, problem management, change requests, minor enhancements, and ongoing optimization — acting as an extension of your internal IT team with defined SLAs, transparent reporting, and continuous service improvement.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our managed services model is built on proactive operations — we use monitoring, alerting, and predictive analytics to identify and resolve issues before they impact users, rather than simply reacting when something breaks. Monthly service reviews, trend analysis, and optimization roadmaps ensure the applications we manage continuously improve in quality and performance over the engagement lifecycle.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "24/7 Application Monitoring & Alerting",
            "Incident & Problem Management",
            "Change & Release Management",
            "Minor Enhancements & Fixes",
            "Application Performance Optimization",
            "SLA Reporting & Service Reviews",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Application operations delivered by dedicated teams with deep platform knowledge and defined service commitments.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure & Cloud Ops</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Cloud infrastructure requires active management to remain secure, compliant, cost-efficient, and highly available. Our Infrastructure & Cloud Ops practice provides managed operations across AWS, Azure, and Google Cloud — covering infrastructure monitoring, security posture management, cost optimization, patch and compliance management, and capacity planning. We operate as a 24/7 cloud operations center, providing enterprises with the peace of mind that their cloud environments are in capable, proactive hands.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cloud Infrastructure Monitoring",
              "Security & Compliance Management",
              "Cost Optimization & FinOps",
              "Patch & Vulnerability Management",
              "Backup & Disaster Recovery",
              "Capacity Planning & Scaling",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Cloud operations managed proactively to maximize availability, minimize cost, and maintain a strong security posture.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Operate Your Technology With Confidence"
        subtitle="Explore our Testing Services to see how comprehensive functional and non-functional testing underpins everything we deliver."
        linkLabel="Explore Testing Services"
        linkTo="/technologies/testing"
      />
    </div>
  );
}
