import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function DataAnalytics() {
  return (
    <div>
      <PageHeader
        title="Data & Analytics"
        subtitle="Modern data platform engineering, enterprise BI, and advanced analytics services that transform raw data into strategic intelligence and competitive advantage."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Data & Analytics"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Platform Engineering</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            The foundation of any analytics or AI capability is a well-engineered data platform. GTS Techs designs and builds enterprise data platforms — cloud data lakes, modern data warehouses, and data mesh architectures — that unify data from across the organization into a trusted, governed, and high-performance analytical environment. We work across AWS, Azure, and Google Cloud, as well as leading data platform technologies including Snowflake, Databricks, and Redshift.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our data engineers specialize in designing ELT pipelines, data quality frameworks, metadata management, and lineage tracking that ensure data consumers can trust the information they rely on for decisions. We apply DataOps principles to automate testing, monitoring, and deployment of data pipelines — treating data products with the same engineering rigor as software applications.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cloud Data Lake Architecture",
            "Modern Data Warehouse Design",
            "Data Mesh & Data Product Strategy",
            "ELT Pipeline Development",
            "Data Quality & Observability",
            "Metadata Management & Lineage",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Platform engineering delivered by data architects and engineers with deep cloud and tooling expertise.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">BI & Visualization</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Business intelligence is the bridge between data and decision-making. Our BI practice designs semantic data models, builds interactive dashboards, and embeds analytics into operational workflows — giving business users self-service access to the insights they need without depending on IT for every report. We work with Power BI, Tableau, Looker, and AWS QuickSight, applying UX design principles to ensure analytics are intuitive, contextual, and actionable.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Enterprise BI Strategy & Governance",
              "Semantic Layer & Data Modeling",
              "Power BI & Tableau Development",
              "Self-Service Analytics Enablement",
              "Embedded Analytics",
              "Executive & Operational Dashboards",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">BI solutions designed for adoption, trust, and measurable impact on operational decision quality.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Analytics</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Beyond descriptive reporting, advanced analytics unlocks predictive and prescriptive intelligence — forecasting what will happen and recommending optimal actions before problems materialize. GTS Techs builds advanced analytics solutions including demand forecasting, churn prediction, anomaly detection, and optimization models that drive measurable operational improvements.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our data scientists work closely with business stakeholders to frame analytical problems, select appropriate modelling approaches, and deploy solutions in production environments where they can be acted upon. We pair every advanced analytics engagement with clear performance metrics and feedback loops so that models improve continuously as new data becomes available.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Predictive Analytics & Forecasting",
            "Customer Churn & Propensity Models",
            "Anomaly Detection & Root Cause",
            "Supply Chain Optimization",
            "Statistical Analysis & Experimentation",
            "Natural Language Analytics",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Turn Your Data into Competitive Advantage"
        subtitle="Explore our Cloud Solutions practice to see how we design and operate the infrastructure that powers your data and AI platforms."
        linkLabel="Explore Cloud Solutions"
        linkTo="/technologies/cloud"
      />
    </div>
  );
}
