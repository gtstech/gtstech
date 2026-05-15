import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Product Engineering',
    description:
      'GTS Techs provides embedded product engineering teams — from architects and developers to UX designers and product managers — that extend the capacity and capability of technology companies building SaaS platforms, mobile applications, IoT solutions, and enterprise software products. Our agile delivery model, combined with deep full-stack engineering expertise, accelerates product roadmap delivery without the overhead of permanent headcount expansion.',
  },
  {
    title: 'QA and Test Automation',
    description:
      'Comprehensive QA services encompassing functional testing, performance engineering, security testing, and automated regression frameworks ensure technology products meet quality and reliability standards before every release. Our test automation engineers build maintainable, CI/CD-integrated test suites using Selenium, Playwright, Cypress, and Appium that catch defects early and reduce release cycle times.',
  },
  {
    title: 'Cloud Operations',
    description:
      'Managed cloud operations services cover infrastructure monitoring, cost optimisation, security posture management, incident response, and platform engineering for technology companies running workloads on AWS, Azure, and Google Cloud. Site reliability engineering practices, combined with AIOps-driven anomaly detection, ensure high availability and rapid incident resolution across production environments.',
  },
  {
    title: 'Customer Success Operations',
    description:
      'GTS Techs supports technology companies in scaling customer success, technical support, and professional services operations through a combination of skilled human resources and intelligent automation. Our CS operations teams handle onboarding, training, technical troubleshooting, renewal management, and expansion pipeline development — helping technology companies improve net revenue retention at scale.',
  },
];

export default function Technology() {
  return (
    <div>
      <PageHeader
        title="Technology"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Technology']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Technology Companies</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Technology companies face a paradoxical challenge: they are in the business of building and selling
          technology solutions, yet they frequently struggle with the operational and talent demands that come
          with scaling a software business at speed. Product roadmaps fall behind due to engineering capacity
          constraints, customer success teams are overwhelmed by growing install bases, and QA bottlenecks slow
          release cycles at the worst possible moments.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs partners with software companies, SaaS providers, platform businesses, and technology
          service firms to address these scaling challenges through expert engineering talent, intelligent
          automation, and managed operations capabilities. Our technology-sector teams understand the pace,
          culture, and quality standards of leading software organisations, and our delivery models are
          designed to integrate seamlessly with your existing engineering and business processes.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Technology Companies</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Whether you need to scale engineering capacity rapidly, improve product quality assurance, manage
            cloud infrastructure more efficiently, or build out customer success operations to match your
            sales growth, GTS Techs provides the capabilities and capacity you need without the lead time
            and overhead of traditional hiring. Our flexible engagement models range from staff augmentation
            for specific skill gaps to fully managed outcomes-based service delivery.
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
        title="Solutions for Travel and Hospitality"
        subtitle="Automated fare collection, customer care excellence, and loyalty operations for airlines, hotels, and travel companies."
        linkLabel="Explore Travel & Hospitality"
        linkTo="/industries/travel-hospitality"
      />
    </div>
  );
}
