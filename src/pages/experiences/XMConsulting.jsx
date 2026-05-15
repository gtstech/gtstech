import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function XMConsulting() {
  const capabilities = [
    "XM Program Strategy",
    "Listening Architecture Design",
    "KPI & Metric Framework",
    "Survey & Feedback Design",
    "Executive Reporting Design",
    "Closed-Loop Action Programs",
    "XM Platform Implementation",
    "XM ROI Measurement",
  ];

  return (
    <div>
      <PageHeader
        title="Experience Management Consulting"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Experience Management Consulting"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Designing XM Programs That Drive Organizational Action
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Experience Management Consulting practice helps organizations build and mature
              comprehensive XM programs that systematically capture, analyze, and act on experience
              signals from customers, employees, partners, and other key stakeholders. Our XM consultants
              design listening architectures that deploy the right measurement mechanisms at the right
              touchpoints to build a complete, real-time picture of experience quality across every
              dimension of the organization's stakeholder relationships.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We work with XM platform leaders including Qualtrics, Medallia, and InMoment to design
              and implement technology environments that make experience data accessible, actionable,
              and integrated with the business intelligence systems that leaders use for decision-making.
              Our XM programs are not measurement exercises — they are change programs that rewire
              organizational priorities, processes, and behaviors around delivering better experiences
              and driving measurable business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div key={c} className="bg-brand/5 rounded-lg p-4 border-l-4 border-brand">
                <p className="font-semibold text-brand text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Operationalizing XM Across the Enterprise</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            The most common failure mode in experience management is building a measurement program
            that generates insights but fails to trigger meaningful organizational action. GTS Techs
            XM Consulting practice focuses explicitly on the operationalization challenge — designing
            closed-loop action management workflows, role-specific dashboards, and governance rhythms
            that ensure experience insights translate into concrete improvements at the front line and
            strategic decisions at the leadership level. We help organizations establish XM centers of
            excellence that build internal capability over time, define clear accountability frameworks
            for experience outcomes across business units, and develop the data literacy required to
            make XM a sustainable competitive differentiator rather than a compliance exercise. Clients
            that successfully operationalize XM report 20–30 percent improvements in key experience
            metrics within two years and significant reductions in customer churn and employee attrition.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Build an XM Program That Delivers Real Results"
        subtitle="Explore our GCC for Market Research model and see how a Global Capability Center can transform your research operations."
        linkLabel="Explore GCC for Market Research"
        linkTo="/experiences/gcc"
      />
    </div>
  );
}
