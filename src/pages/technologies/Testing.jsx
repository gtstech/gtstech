import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function Testing() {
  return (
    <div>
      <PageHeader
        title="Testing Services"
        subtitle="Comprehensive functional, regression, performance, and security testing services that validate software quality, protect user experience, and safeguard enterprise systems against emerging threats."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Testing Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Functional & Regression Testing</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Functional testing is the foundation of software quality assurance — validating that every feature behaves exactly as specified across the full range of business scenarios and edge cases. GTS Techs provides structured functional testing services that span requirements analysis, test design, execution, and defect management, ensuring that software is verified against business intent and not just technical specification.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            As software evolves, regression testing ensures that new changes do not break existing functionality — a challenge that grows exponentially with application complexity. Our regression practice builds and maintains comprehensive regression suites, combining manual exploratory testing with automation to provide fast, reliable regression assurance on every release cycle. We tailor regression scope and execution strategy to your release cadence and risk tolerance, ensuring thorough coverage without unnecessary delay.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Requirements-Based Test Design",
            "Functional Test Execution",
            "Exploratory & Session-Based Testing",
            "Regression Suite Development",
            "Defect Management & Triage",
            "User Acceptance Testing Support",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Structured testing practices that validate business requirements and protect production quality through every release cycle.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Performance & Security Testing</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Performance and security are non-functional requirements that are easy to overlook during delivery pressure — and costly to address after a production failure or security breach. Our performance engineering teams design and execute realistic load scenarios that validate system behavior under peak demand, identify bottlenecks, and confirm that SLA commitments will be met in production. Our security testing practice combines automated scanning with expert manual penetration testing to identify vulnerabilities before they can be exploited.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Load & Stress Testing",
              "Performance Baseline Establishment",
              "Bottleneck Identification & Tuning",
              "OWASP-Based Security Testing",
              "Penetration Testing",
              "Vulnerability Assessment & Reporting",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Specialist testing that validates non-functional requirements and surfaces risks before they impact users or security posture.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Release Software You Can Trust"
        subtitle="Explore our Automatic Fare Collection practice to see how we apply technology excellence to the specialized demands of modern transit systems."
        linkLabel="Explore Automatic Fare Collection"
        linkTo="/technologies/automatic-fare-collection"
      />
    </div>
  );
}
