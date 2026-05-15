import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function ProcureToPay() {
  const coverage = [
    "Purchase Requisition Management",
    "Purchase Order Processing",
    "Supplier Invoice Validation",
    "3-Way Match & Approval",
    "Exception & Dispute Resolution",
    "Payment Execution & Remittance",
    "Supplier Master Data Management",
    "Spend Analytics & Reporting",
  ];

  return (
    <div>
      <PageHeader
        title="Procure-to-Pay"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Procure-to-Pay"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive P2P Process Coverage
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Procure-to-Pay (P2P) services cover the complete procurement and payables
              lifecycle — from purchase requisition creation and approval routing through purchase
              order issuance, goods receipt confirmation, invoice validation, and final payment
              execution. Our P2P operations teams manage high-volume invoice environments with
              intelligent automation that handles the majority of transactions through straight-through
              processing, reserving human expertise for exceptions, disputes, and strategic supplier
              interactions.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We implement best-practice controls including three-way matching, duplicate invoice
              detection, and delegation-of-authority enforcement to eliminate payment errors and
              reduce fraud risk. Our P2P services integrate with leading ERP and procurement platforms,
              and include supplier portal capabilities that give vendors real-time visibility into
              invoice status and payment schedules, significantly reducing inbound supplier inquiries
              and improving supplier relationships.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {coverage.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Supplier Management and Strategic Sourcing Support</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Effective supplier management is the foundation of a high-performing P2P function. GTS Techs
            provides dedicated supplier master data management services that maintain the accuracy and
            completeness of supplier records, including banking details, tax identifiers, contact
            information, and compliance certifications. Our category spend analytics capabilities give
            procurement leaders granular visibility into spending patterns, supplier concentration risks,
            and early payment discount opportunities, informing strategic sourcing decisions that reduce
            total cost of ownership. Clients consistently achieve 15–30 percent reductions in AP
            processing costs and 20–40 percent improvement in on-time payment rates within the first
            year of engagement.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Streamline Your Procure-to-Pay Process"
        subtitle="Explore how our Order-to-Cash services complete the revenue cycle and accelerate cash conversion."
        linkLabel="Explore Order-to-Cash"
        linkTo="/operations/order-to-cash"
      />
    </div>
  );
}
