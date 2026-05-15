import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function DigitalContent() {
  const capabilities = [
    "Editorial Production Services",
    "Rich Media Content Creation",
    "Document Digitization",
    "Metadata & Taxonomy Management",
    "Multilingual Translation",
    "Localization & Cultural Adaptation",
    "Content Quality Assurance",
    "Digital Asset Management",
  ];

  return (
    <div>
      <PageHeader
        title="Digital Content Services"
        breadcrumbs={[["Home", "/"], ["Operations", "/operations"], ["Digital Content Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Scalable Content Production for Digital-First Organizations
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Digital Content Services help publishers, e-commerce platforms, media companies,
              and enterprises manage the full lifecycle of digital content — from initial production
              and editorial enrichment through quality assurance, metadata tagging, and multi-channel
              distribution. Our content operations teams combine skilled editorial professionals with
              AI-assisted workflows to produce high-quality content at the speed and scale that
              digital-first business models demand.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We manage diverse content types including product catalogs, educational courseware,
              regulatory documentation, marketing materials, and digital media assets. Our production
              workflows are built around client style guides, brand standards, and content governance
              frameworks to ensure consistency across every content output, regardless of volume
              or output channel complexity.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Digitization, Localization, and Global Reach</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            As organizations expand into global markets, the ability to rapidly digitize legacy content
            archives and localize new content for multiple languages and cultural contexts becomes a
            critical competitive capability. GTS Techs provides industrial-scale digitization services
            that convert physical documents, legacy media, and analog records into fully searchable,
            indexed digital assets, often processing millions of pages per month for large archival
            projects. Our localization services cover over 50 languages with native-speaking translators
            and cultural adaptation specialists who ensure that content resonates authentically with
            local audiences across APAC, EMEA, LATAM, and North American markets. AI-assisted
            translation tools accelerate throughput while human reviewers maintain the quality and
            cultural sensitivity that automated systems alone cannot guarantee.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Scale Your Content Operations Globally"
        subtitle="Explore our Contact Center CX Services and see how we deliver exceptional customer experiences at every touchpoint."
        linkLabel="Explore Contact Center Services"
        linkTo="/experiences/contact-center"
      />
    </div>
  );
}
