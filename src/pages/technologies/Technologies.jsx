import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function Technologies() {
  const pillars = [
    {
      label: "GTS Techs.AI",
      href: "/technologies/datamatics-ai",
      description:
        "A unified AI services portfolio combining proprietary accelerators, generative AI, and enterprise AI adoption frameworks to help organizations unlock business value at speed.",
    },
    {
      label: "Enterprise Platforms",
      href: "/technologies/enterprise-platforms",
      description:
        "Deep expertise across Salesforce, Microsoft, AWS, and OutSystems, enabling organizations to build, extend, and integrate the enterprise platforms that power modern operations.",
    },
    {
      label: "Digital Transformation",
      href: "/technologies/digital-transformation",
      description:
        "End-to-end transformation services spanning strategy, architecture, application modernization, and change management to help enterprises compete in the digital economy.",
    },
    {
      label: "Digital Assurance",
      href: "/technologies/digital-assurance",
      description:
        "AI-led quality engineering and comprehensive test automation practices that ensure software quality, performance, and security at every stage of the delivery lifecycle.",
    },
    {
      label: "Automatic Fare Collection",
      href: "/technologies/automatic-fare-collection",
      description:
        "Specialized AFC systems, account-based ticketing, and open-loop payment solutions for modern transit authorities and mobility operators worldwide.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Digital Technologies"
        subtitle="Powering enterprise innovation through AI-first services, cloud-native platforms, and intelligent automation."
        breadcrumbs={[["Home", "/"], ["Technologies"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            An AI-First Approach to Enterprise Services
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            GTS Techs delivers a comprehensive portfolio of digital technology services purpose-built for the modern enterprise. Our AI-first delivery model accelerates value creation by embedding intelligence into every engagement — from initial strategy through managed operations. We combine deep domain expertise with proprietary accelerators to reduce time-to-value and maximize ROI.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Across five strategic pillars — GTS Techs.AI, Enterprise Platforms, Digital Transformation, Digital Assurance, and Automatic Fare Collection — we provide integrated capabilities that help organizations innovate rapidly, operate efficiently, and scale with confidence. Our global delivery network and partner ecosystem ensure the right skills are available at every stage of your journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Five Technology Pillars
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Each pillar represents a specialized practice area with dedicated expertise, accelerators, and delivery methodology designed to produce measurable outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#dc2626] text-lg mb-2">
                  <Link to={pillar.href} className="hover:text-[#dc2626] transition-colors">
                    {pillar.label}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                <Link
                  to={pillar.href}
                  className="inline-block mt-4 text-sm font-medium text-[#dc2626] hover:underline"
                >
                  Explore &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why GTS Techs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: "500+", label: "Enterprise Clients Globally" },
            { stat: "25+", label: "Years of Technology Excellence" },
            { stat: "4,000+", label: "Technology Professionals" },
            { stat: "18", label: "Global Delivery Centers" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-6 shadow text-center">
              <div className="text-4xl font-black text-[#dc2626] mb-2">{item.stat}</div>
              <div className="text-gray-600 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to Accelerate Your Digital Journey?"
        subtitle="Explore how our AI-first technology services can transform your enterprise operations."
        linkLabel="Explore GTS Techs.AI"
        linkTo="/technologies/datamatics-ai"
      />
    </div>
  );
}
