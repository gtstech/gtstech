import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function AWS() {
  return (
    <div>
      <PageHeader
        title="Amazon Web Services"
        subtitle="AWS migration, data platform engineering, and managed cloud services delivered by certified practitioners who architect for performance, resilience, and cost efficiency."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Amazon Web Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Migration to AWS</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Migrating to AWS is one of the highest-impact decisions an enterprise can make, but complexity and risk are real if not managed properly. GTS Techs applies the AWS Cloud Adoption Framework and proven 6R migration strategies to design migration paths that minimize downtime, preserve data integrity, and deliver immediate operational benefits.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our migration factory model enables high-velocity workload movement through standardized tooling, automated testing, and wave-based execution. We handle assessment, dependency mapping, pilot migrations, and cutover planning end-to-end, with dedicated hypercare support in the weeks following go-live to ensure stability before transitioning to steady-state operations.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "AWS Migration Readiness Assessment",
            "Application Portfolio Analysis",
            "Rehost, Replatform & Refactor",
            "Database Migration Service",
            "Cutover Planning & Execution",
            "Post-Migration Hypercare",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Delivered using AWS best practices and proprietary migration accelerators that reduce time and risk.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data on AWS</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            AWS offers the world's most comprehensive data platform — but building an enterprise-grade data lake, warehouse, or real-time analytics architecture requires architectural expertise and careful engineering. Our data on AWS practice designs and implements modern data platforms that unify structured and unstructured data, enable real-time analytics, and provide the foundation for advanced AI and ML workloads.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Amazon S3 Data Lake Architecture",
              "Amazon Redshift Data Warehousing",
              "AWS Glue ETL & Data Catalog",
              "Amazon Kinesis Real-Time Streaming",
              "Amazon SageMaker ML Platform",
              "AWS Lake Formation & Governance",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Engineered for scale, performance, and cost efficiency with built-in data quality and lineage controls.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Managed Cloud Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Operating AWS environments at enterprise scale requires 24/7 vigilance, proactive cost management, security monitoring, and continuous optimization. Our AWS managed services offering provides dedicated cloud operations teams that act as an extension of your IT organization, managing infrastructure health, security posture, and cloud spend on your behalf.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We leverage AWS-native monitoring tools alongside our proprietary cloud operations dashboards to provide visibility into resource utilization, cost trends, and security events in real time. Monthly governance reviews, optimization recommendations, and a defined escalation path ensure your AWS environment continuously improves over its lifecycle.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "24/7 Infrastructure Monitoring",
            "Cost Optimization & FinOps",
            "Security & Compliance Management",
            "Patch Management & Updates",
            "Incident Response & Remediation",
            "Cloud Governance Reporting",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Build a High-Performance AWS Foundation"
        subtitle="Explore how OutSystems low-code development accelerates application delivery across your enterprise."
        linkLabel="Explore OutSystems Services"
        linkTo="/technologies/outsystems"
      />
    </div>
  );
}
