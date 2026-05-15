import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

const features = [
  {
    title: 'Automated Fare Collection',
    description:
      'AI-driven fare collection systems for transit authorities, airlines, and mobility providers automate ticketing, revenue reconciliation, and settlement across multiple payment channels and fare products — reducing revenue leakage and manual reconciliation effort simultaneously. Integration with back-office finance and ERP systems ensures all fare revenue is accurately captured, classified, and reported.',
  },
  {
    title: 'Customer Care Operations',
    description:
      'GTS Techs operates specialised customer care teams and intelligent automation solutions for airlines, hotels, OTAs, and cruise lines, handling booking modifications, cancellations, disruption management, and service recovery across voice, chat, email, and social channels. Our travel-trained agents and AI virtual assistants deliver the empathy and efficiency that travellers expect during stressful journey disruptions.',
  },
  {
    title: 'Loyalty Programme Operations',
    description:
      'End-to-end loyalty operations services cover member servicing, points and miles calculation and adjustment, tier status management, partner award fulfilment, and loyalty programme reporting — all delivered with the accuracy and speed that premium loyalty members demand. Process automation reduces loyalty administration cost per member while improving servicing response times.',
  },
  {
    title: 'Back-Office Finance Automation',
    description:
      'Travel industry back-office automation solutions handle airline settlement through BSP and ARC, hotel commission reconciliation, GDS billing management, and accounts payable processing — replacing labour-intensive manual processes with governed, auditable automated workflows. AI document capture handles the extraordinary variety of financial documents generated across travel distribution channels.',
  },
];

export default function TravelHospitality() {
  return (
    <div>
      <PageHeader
        title="Travel & Hospitality"
        breadcrumbs={[['Home', '/'], ['Industries', '/industries'], ['Travel & Hospitality']]}
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Dynamics</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          The travel and hospitality industry operates in an environment of extreme demand volatility, wafer-thin
          margins, and customer expectations shaped by digital-native booking and service experiences. Airlines,
          hotels, online travel agencies, cruise lines, and ground transportation companies must simultaneously
          manage complex operational logistics, deliver personalised guest experiences at scale, and control
          administrative costs across enormously complex distribution and settlement ecosystems.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          GTS Techs has served travel and hospitality leaders for over two decades, developing deep expertise
          in the operational, financial, and customer service challenges unique to the sector. Our solutions
          are deployed by some of the world's largest airlines, hotel groups, and travel technology companies
          to automate back-office processes, elevate customer care performance, and manage loyalty programme
          operations at millions-of-member scale.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Travel and Hospitality</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Our travel and hospitality solutions target the operational functions where automation and
            intelligent technology deliver the fastest and most measurable ROI: fare collection and settlement,
            customer care, loyalty operations, and back-office finance. Each solution is built on deep
            understanding of travel industry data models, distribution systems (GDS, NDC, OTA APIs), and
            the operational tempo that characterises 24/7 travel businesses, ensuring rapid integration and
            minimal disruption to live operations during deployment.
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
        title="Specialised Solutions for Credit Rating Agencies"
        subtitle="Data operations, research support, and rating analytics services purpose-built for the credit rating industry."
        linkLabel="Explore Credit Rating"
        linkTo="/industries/credit-rating"
      />
    </div>
  );
}
