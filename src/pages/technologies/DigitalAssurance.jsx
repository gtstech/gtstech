import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function DigitalAssurance() {
  return (
    <div>
      <PageHeader
        title="Digital Assurance Services"
        subtitle="AI-led quality engineering, comprehensive test automation, and specialized testing services that ensure software quality, performance, and security at every stage of the delivery lifecycle."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Digital Assurance"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Led Quality Engineering</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Quality engineering has evolved far beyond manual test execution. GTS Techs brings an AI-led quality engineering discipline that uses machine learning to intelligently prioritize test cases, predict defect-prone areas, generate test data, and analyze test results for patterns that human reviewers would miss. Our AI quality tools integrate into CI/CD pipelines and provide real-time quality intelligence that helps teams release with confidence at the speed modern business demands.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our quality engineering practice operates as an embedded function within agile delivery teams — not a separate gate at the end of the pipeline. Shift-left testing practices, automated quality gates, and continuous feedback loops ensure that quality is built in from the first day of development rather than inspected in at the end, reducing the cost and schedule impact of defects discovered late.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "AI-Powered Test Case Generation",
            "Intelligent Test Prioritization",
            "Predictive Defect Analytics",
            "Quality Gates in CI/CD Pipelines",
            "Test Data Management",
            "Quality Metrics & Dashboards",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">AI-enhanced quality capabilities that accelerate testing velocity while improving defect detection rates.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Automation</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Manual testing at the pace of modern delivery is impossible. Our test automation practice designs, builds, and maintains scalable automation frameworks using industry-leading tools — Selenium, Playwright, Cypress, Appium, and RestAssured — delivering fast, reliable, and maintainable automation suites that serve as the backbone of continuous testing strategies. We assess automation feasibility, develop automation roadmaps, and build automation capabilities that grow with your delivery programs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Automation Framework Design",
              "Web & Mobile UI Automation",
              "API & Integration Test Automation",
              "Regression Suite Development",
              "Automation Maintenance & Governance",
              "Cross-Browser & Cross-Device Testing",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Automation built for long-term reliability, maintainability, and integration with modern CI/CD delivery pipelines.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Testing</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Beyond functional and regression testing, enterprise software requires specialized assurance activities to validate performance under load, security against evolving threats, and compliance with accessibility and regulatory standards. GTS Techs provides dedicated specialist practices across performance engineering, security testing, accessibility testing, and compliance validation — giving enterprises comprehensive assurance coverage across every risk dimension.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our performance engineering teams use JMeter, Gatling, and k6 to simulate realistic user loads, identify bottlenecks, and validate SLA compliance before every major release. Our security testing practice combines automated SAST, DAST, and manual penetration testing to identify vulnerabilities and provide actionable remediation guidance aligned with OWASP and industry security standards.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Performance & Load Testing",
            "Security & Penetration Testing",
            "Accessibility Testing (WCAG)",
            "Usability & UX Testing",
            "Compliance Testing (HIPAA, PCI-DSS)",
            "Chaos Engineering & Resilience",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Deliver Quality Software at Velocity"
        subtitle="Explore our Managed Services practice to see how we ensure continuous reliability and operational excellence after your applications go live."
        linkLabel="Explore Managed Services"
        linkTo="/technologies/managed-services"
      />
    </div>
  );
}
