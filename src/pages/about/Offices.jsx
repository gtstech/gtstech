import { offices } from '../../data/content.js';
import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Offices() {
  return (
    <div>
      <PageHeader
        title="Our Offices"
        subtitle="GTS Techs maintains a global presence across four regions — delivering locally while operating at global scale."
        breadcrumbs={[['Home', '/'], ['About', '/about'], ['Our Offices']]}
      />

      {/* Intro */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">A Truly Global Organization</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          With offices across India, the Americas, Europe, and APAC, GTS Techs delivers digital transformation services that are simultaneously globally consistent and locally relevant. Our regional offices serve as proximity hubs for client engagement, solutions consulting, and executive relationship management — supported by our world-class delivery centers in India and the Philippines.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Each regional office is staffed with senior professionals who understand the regulatory, cultural, and competitive dynamics of their local markets. This enables GTS Techs to bring global best practices while navigating the nuances that matter most to enterprise clients in each geography.
        </p>
      </section>

      {/* Office Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Global Office Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div key={office.region} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                {/* Region badge */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center text-white text-lg">
                    🌍
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#dc2626] uppercase tracking-wide">{office.region}</span>
                    <span className="block text-lg font-bold text-[#dc2626]">{office.city}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#dc2626]">📍</span>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#dc2626]">✉️</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-[#dc2626] hover:text-[#dc2626] underline underline-offset-2 transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#dc2626]">📞</span>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-[#dc2626] hover:text-[#dc2626] underline underline-offset-2 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#dc2626]">🌐</span>
                    <span>{office.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Centers */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Delivery Centers</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In addition to our commercial offices, GTS Techs operates state-of-the-art delivery centers strategically located to provide round-the-clock service coverage for our global client base. Our delivery centers in India — across Mumbai, Nashik, Bengaluru, and Puducherry — handle the majority of our technology and operations delivery, supported by centers in the Philippines for experience-related services.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Each delivery center adheres to stringent information security protocols, including ISO 27001 certification, SOC 2 compliance, and client-specific security frameworks. Secure client environments, segregated network zones, and continuous monitoring ensure that sensitive enterprise data is handled with the highest levels of care and compliance.
        </p>
      </section>

      <CtaBanner
        title="Get in Touch with Your Nearest Office"
        subtitle="Connect with our regional teams for inquiries, partnerships, or to schedule a consultation."
        linkLabel="Contact Us"
        linkTo="/contact"
      />
    </div>
  );
}
