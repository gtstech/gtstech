import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function DigitalProctoring() {
  const capabilities = [
    "Live Online Proctoring",
    "Record & Review Proctoring",
    "AI Automated Proctoring",
    "In-Person Hybrid Proctoring",
    "Facial Recognition Verification",
    "Browser Lockdown & Control",
    "Incident Flagging & Review",
    "Compliance & Accessibility Support",
  ];

  return (
    <div>
      <PageHeader
        title="Digital Proctoring Services"
        breadcrumbs={[["Home", "/"], ["Experiences", "/experiences"], ["Digital Proctoring Services"]]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Secure Online Proctoring for High-Stakes Assessments
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              GTS Techs Digital Proctoring Services provide universities, certification bodies,
              licensing authorities, and corporate learning organizations with secure, flexible
              assessment integrity solutions that enable candidates to test from any location without
              compromising the rigor and trustworthiness of the examination process. Our proctoring
              services span the full delivery spectrum, from fully automated AI proctoring for
              high-volume, lower-stakes assessments through live human proctoring for high-stakes
              professional certifications and academic examinations.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Each proctoring modality is designed to deliver a candidate experience that is
              respectful, clear, and technically straightforward, while maintaining the security
              controls that assessment integrity requires. Our candidate support teams are available
              around the clock to assist with technical issues, identity verification, and accommodations
              for candidates with accessibility needs, ensuring that technical barriers never prevent
              qualified candidates from completing their examinations.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Proctoring Technology and Global Scalability</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Our AI proctoring engine combines computer vision, behavioral biometrics, and environmental
            monitoring to detect anomalies that may indicate cheating or policy violations, flagging
            incidents for human reviewer confirmation before any adverse action is taken against a
            candidate. The system performs continuous identity re-verification through facial recognition
            throughout the examination session, monitors eye movement and gaze patterns, detects
            unauthorized devices and second screens, and flags audio anomalies that may indicate
            collaboration. The platform scales dynamically to support examination events with tens of
            thousands of simultaneous candidates across every global time zone, making it suitable for
            the largest national and international assessment programs. All data is processed in
            compliance with GDPR, FERPA, and regional data protection regulations, with comprehensive
            audit trails available for every examination session.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Protect the Integrity of Every Assessment"
        subtitle="Explore our Research and Analytics services to see how data drives better decisions across experience and market intelligence."
        linkLabel="Explore Research & Analytics"
        linkTo="/experiences/research-analytics"
      />
    </div>
  );
}
