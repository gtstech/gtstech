import PageHeader from "../../components/PageHeader";
import CtaBanner from "../../components/CtaBanner";

export default function AutomaticFareCollection() {
  return (
    <div>
      <PageHeader
        title="Automatic Fare Collection"
        subtitle="End-to-end AFC systems, account-based ticketing, and open-loop payment solutions that modernize transit fare collection for authorities and mobility operators worldwide."
        breadcrumbs={[["Home", "/"], ["Technologies", "/technologies"], ["Automatic Fare Collection"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AFC Systems</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Automatic Fare Collection is the technological foundation of modern public transit — enabling seamless passenger journeys, real-time revenue management, and rich operational data that transit authorities need to optimize service delivery and plan future capacity. GTS Techs has deep, specialized expertise in AFC system design, implementation, integration, and managed operations for metro, bus, and multi-modal transit networks.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our AFC practice covers the complete system scope — from fare gates, validators, and ticket vending machines through central system architecture, back-office clearing, and passenger-facing web and mobile channels. We work with transit authorities at every stage of the AFC lifecycle, from greenfield system design through legacy system replacement, system extension, and technology refresh programs.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "AFC System Architecture & Design",
            "Fare Gate & Validator Integration",
            "Ticket Vending Machine (TVM) Systems",
            "Central System & Back-Office",
            "Passenger Mobile & Web Channels",
            "AFC System Testing & Commissioning",
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Specialized AFC capabilities delivered by engineers with proven experience across metro, bus, and multi-modal transit systems.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Account-Based Ticketing</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Account-Based Ticketing (ABT) represents the next generation of fare collection — decoupling the fare medium from the transaction, enabling best-fare calculation, flexible product configuration, and multi-operator interoperability. GTS Techs designs and implements ABT systems that give transit authorities the agility to introduce new fare products rapidly, support MaaS integration, and deliver the frictionless passenger experience that modern commuters expect.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "ABT Platform Design & Implementation",
              "Best-Fare & Capping Engines",
              "Multi-Operator Clearing & Settlement",
              "Passenger Account Management Portal",
              "Concessionary Fare Management",
              "MaaS & Third-Party Integration",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold text-[#dc2626] mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">ABT solutions that provide transit authorities with the flexibility to innovate fare policy while delivering seamless passenger journeys.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Open-Loop Payments</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Open-loop contactless payments — using EMV bank cards, mobile wallets, and wearables — eliminate the friction of closed-loop transit cards while enabling transit authorities to benefit from the global payments ecosystem. GTS Techs implements open-loop payment acceptance infrastructure, including contactless validators, payment kernel certification, and back-office transaction processing, compliant with EMVCo and card scheme requirements.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our open-loop implementations are designed for the unique demands of transit — high transaction velocity, offline resilience, chargeback management, and fraud mitigation at scale. We work with transit authorities, acquirers, and payment service providers to design secure, scheme-compliant architectures that deliver the convenience passengers want while protecting revenue and managing operational risk.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "EMV Contactless Validator Deployment",
            "Payment Kernel Certification",
            "Acquirer & PSP Integration",
            "Transaction Processing & Reconciliation",
            "Chargeback & Dispute Management",
            "Fraud Detection & Revenue Protection",
          ].map((cap) => (
            <div key={cap} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#dc2626]">
              <p className="text-gray-700 font-medium text-sm">{cap}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Modernize Fare Collection for the Digital Era"
        subtitle="Explore how our Travel & Hospitality industry expertise applies across the broader mobility and transit ecosystem."
        linkLabel="Explore Travel & Hospitality"
        linkTo="/industries/travel-hospitality"
      />
    </div>
  );
}
