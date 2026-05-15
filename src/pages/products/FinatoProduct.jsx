import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'AI Document Processing',
    description:
      'FINATO leverages TruCap+ AI to automatically extract, validate, and route data from invoices, purchase orders, remittances, bank statements, and contracts — eliminating the manual data entry that dominates traditional accounts payable and receivable operations. Straight-through processing rates exceed 85% on most customer deployments within the first 90 days.',
  },
  {
    title: 'Intelligent Workflows',
    description:
      'Configurable approval workflows with conditional routing, escalation rules, and exception queues replace fragmented email-based processes with a governed, auditable digital trail that finance leaders and auditors can trust. Dynamic delegation and mobile approval capabilities ensure financial processes never stall due to key-person unavailability.',
  },
  {
    title: 'Real-time Analytics',
    description:
      'Embedded finance dashboards surface cash flow forecasts, working capital metrics, AP and AR ageing, accrual positions, and period-close progress in real time, giving CFOs and controllers the situational awareness they need to make fast, confident decisions. Variance analysis and drill-through capabilities connect summary metrics directly to underlying transactions.',
  },
  {
    title: 'ERP Integration',
    description:
      'Certified integrations with SAP S/4HANA, Oracle Fusion, Microsoft Dynamics, and NetSuite ensure FINATO acts as an intelligent front-end to existing ERP investments rather than a competing system of record. Bi-directional synchronisation keeps the ERP up to date in real time while FINATO handles the intelligent capture and workflow layers.',
  },
];

export default function FinatoProduct() {
  return (
    <div>
      <PageHeader
        title="FINATO — Finance Operations Platform"
        breadcrumbs={[['Home', '/'], ['Products', '/products'], ['FINATO']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Features</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          FINATO is GTS Techs' AI-first finance operations platform, purpose-built to digitise and automate the
          transaction-heavy processes that consume finance team capacity across accounts payable, accounts receivable,
          treasury, and period-close — without requiring organisations to rip and replace their existing ERP investments.
          By combining intelligent document capture, automated workflows, and real-time analytics, FINATO transforms
          the finance function from a cost centre into a strategic contributor.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Organisations deploying FINATO typically realise 60–80% reductions in manual processing effort, three- to
          five-times faster invoice and payment cycle times, and materially improved compliance with internal controls
          and external audit requirements. The platform is ISO 27001 certified, supports multi-currency and
          multi-entity processing, and is available as a cloud SaaS or on-premises deployment.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ROI and Business Case</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            The business case for FINATO is compelling and rapid. Most enterprise customers achieve positive ROI
            within six to nine months through direct labour savings, elimination of late payment penalties, capture
            of early payment discounts, and significant reductions in audit preparation costs. A dedicated value
            engineering team works with each customer to model the financial impact specific to their process
            volumes, organisational complexity, and strategic priorities before deployment begins.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow border-l-4 border-[#dc2626]">
                <h3 className="font-bold text-[#dc2626] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Unlock Autonomous AI with TruAgent"
        subtitle="TruAgent's agentic AI platform extends FINATO's automation with autonomous, multi-step reasoning across the entire enterprise."
        linkLabel="Explore TruAgent"
        linkTo="/products/truagent"
      />
    </div>
  );
}
