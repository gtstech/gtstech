import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Operations() {
  const pillars = [
    "Digital Finance",
    "Intelligent Automation",
    "FINATO Platform",
    "Digital Content",
    "Banking Process",
    "Insurance Process",
    "Healthcare Process",
    "Procure-to-Pay",
  ];

  return (
    <div>
      <PageHeader
        title="Digital Operations"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Digital Operations"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Business Operations Through Digital Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Digital Operations practice helps enterprises reimagine their back-office and middle-office
              processes through a powerful combination of domain expertise, intelligent automation, and data-driven
              insights. We partner with global organizations to reduce operational costs, accelerate cycle times,
              and improve accuracy across every critical business function.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our end-to-end delivery model spans finance and accounting, banking, insurance, and healthcare
              operations, supported by proprietary platforms such as FINATO and TruBot. Whether you are looking
              to outsource entire process towers or augment your in-house teams with automation capabilities,
              our scalable solutions deliver measurable results from day one.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose GTS Techs for Digital Operations</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            With over two decades of operational excellence and a global delivery network spanning multiple
            time zones, GTS Techs brings unmatched depth in process transformation. Our operations teams are
            embedded with Six Sigma practitioners, AI engineers, and certified domain specialists who work
            together to continuously improve KPIs such as first-pass yield, straight-through processing rates,
            and cost-per-transaction benchmarks. We maintain rigorous compliance postures across ISO, SOC 2,
            GDPR, and industry-specific regulatory frameworks, giving clients confidence that their processes
            are both efficient and audit-ready.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to Digitize Your Operations?"
        subtitle="Explore our Digital Finance solutions and discover how we help finance leaders modernize their operations at scale."
        linkLabel="Explore Digital Finance"
        linkTo="/operations/digital-finance"
      />
    </div>
  );
}
