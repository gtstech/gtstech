import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function ECM() {
  return (
    <div>
      <PageHeader
        title="Enterprise Content Management"
        subtitle="Comprehensive document management, intelligent workflow automation, and compliance solutions that transform how enterprises capture, manage, and govern their content assets."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Enterprise Content Management"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Document Management</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Enterprise content is one of the most underutilized — and highest-risk — assets in any organization. Unstructured documents scattered across file shares, email inboxes, and siloed systems create compliance exposure, slow operational processes, and prevent organizations from extracting value from their information. GTS Techs implements modern ECM platforms that bring order to content chaos through structured capture, intelligent classification, and governed access control.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our document management implementations cover the full content lifecycle — from high-volume capture and AI-assisted classification through secure storage, version control, retention management, and defensible disposition. We implement leading ECM platforms including Microsoft SharePoint, OpenText, and Box, tailored to the specific regulatory and operational requirements of your industry.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "ECM Platform Implementation",
            "Intelligent Document Capture",
            "AI-Powered Document Classification",
            "Version Control & Audit Trails",
            "Records Management & Retention",
            "Secure Access Control & Permissions",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Document management solutions designed for enterprise scale, regulatory compliance, and operational efficiency.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Workflow & Compliance</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Document-centric processes — contract approvals, invoice processing, onboarding, regulatory submissions — are among the most time-consuming and error-prone in any organization. Our workflow and compliance practice automates these processes using intelligent document processing, configurable approval chains, and rule-based routing — dramatically reducing cycle times while creating the audit trails required for regulatory compliance and internal governance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Contract Lifecycle Management",
              "Invoice & AP Automation",
              "Regulatory Submission Workflows",
              "HR & Onboarding Document Automation",
              "Compliance Reporting & Audit Trails",
              "eSignature Integration",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Workflow automation that reduces manual effort, shortens cycle times, and ensures compliance across every document-intensive process.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Take Control of Your Enterprise Content"
        subtitle="Explore our Professional Services practice to see how our advisory and implementation capabilities accelerate complex technology programs."
        linkLabel="Explore Professional Services"
        linkTo="/technologies/professional-services"
      />
    </div>
  );
}
