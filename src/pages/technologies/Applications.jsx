import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function Applications() {
  return (
    <div>
      <PageHeader
        title="Application Services"
        subtitle="Custom application development and modernization services that help enterprises build, evolve, and optimize the software applications powering their operations."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Application Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Application Development</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            When off-the-shelf software cannot meet the unique demands of your business, custom application development is the answer. GTS Techs builds web, mobile, and enterprise applications using modern technology stacks — React, Node.js, Java, Python, .NET, and cloud-native services — with engineering practices that emphasize clean architecture, automated testing, and continuous delivery.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our development teams work in close collaboration with product owners and business stakeholders, using agile ceremonies and iterative delivery to validate assumptions early and reduce the risk of building the wrong thing. We embed security, accessibility, and performance engineering into every sprint rather than treating them as post-development afterthoughts.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Web Application Development",
            "Native & Cross-Platform Mobile Apps",
            "API & Microservices Development",
            "Progressive Web Applications (PWA)",
            "Real-Time & Event-Driven Systems",
            "Third-Party Integration Development",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Custom software built with modern engineering practices and a focus on long-term maintainability and scalability.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Modernization</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Legacy applications carry significant technical debt, create operational risk, and limit the business agility needed to compete in a fast-changing market. Our application modernization practice systematically addresses this debt — decomposing monoliths into microservices, migrating to cloud-native runtimes, re-engineering data access layers, and modernizing user interfaces — while keeping critical business functionality intact throughout the transition.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Legacy Application Assessment",
              "Monolith Decomposition Strategy",
              "Cloud-Native Refactoring",
              "Database Modernization",
              "UI/UX Modernization",
              "Containerization & Kubernetes",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Modernization delivered with a clear risk management plan and validated at each milestone before proceeding.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Build Applications That Scale With Your Business"
        subtitle="Explore our Hyper-Automation practice to see how intelligent automation amplifies the value of your application portfolio."
        linkLabel="Explore Hyper-Automation"
        linkTo="/technologies/hyper-automation"
      />
    </div>
  );
}
