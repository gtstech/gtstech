import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Privacy() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="GTS Techs' commitment to protecting your personal information across all our digital touchpoints and business interactions."
        breadcrumbs={[['Home', '/'], ['Legal', '/legal/privacy'], ['Privacy Policy']]}
      />

      {/* Introduction */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs Global Services Limited ("GTS Techs," "we," "us," or "our") respects your privacy and is committed to protecting any personal information you provide to us through our website (www.GTS Techs.com), our digital platforms, or through other business interactions. This Privacy Policy explains what information we collect, how we use it, who we share it with, and what rights you have in relation to your personal information.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          This Policy applies to information collected via our website and other online touchpoints, including contact pages, resource download portals, webinar registration systems, and career portals. It does not apply to personal data processed by GTS Techs as a data processor on behalf of its enterprise clients — that data is governed by the respective client data processing agreements and the client's own privacy policies.
        </p>
        <p className="text-gray-600 leading-relaxed">
          By using our website or otherwise providing us with your personal information, you acknowledge that you have read and understood this Privacy Policy. This Policy may be updated periodically; material changes will be communicated via prominent notice on our website and, where appropriate, by email to individuals who have previously provided their contact details to us.
        </p>
      </section>

      {/* What We Collect */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We collect personal information in the following ways and across the following categories, depending on how you interact with GTS Techs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Contact & Identity Information', desc: 'Name, job title, employer, email address, phone number, and business address — typically provided when you request information, download a resource, register for a webinar, or submit an inquiry.' },
              { title: 'Website Usage Data', desc: 'Pages visited, time spent, referring URLs, browser type, device identifiers, IP address, and navigation patterns — collected automatically via cookies and analytics tools to improve website performance and user experience.' },
              { title: 'Communication Records', desc: 'Records of communications between you and GTS Techs, including emails, meeting notes, and interaction logs maintained for business continuity and service quality purposes.' },
              { title: 'Professional Information', desc: 'Industry, company size, role, technology interests, and business challenges — shared by you through event registrations, content downloads, or sales engagement interactions to enable relevant, personalized communications.' },
              { title: 'Recruitment Data', desc: 'For job applicants: CV/resume, education history, employment history, skills, references, and other information voluntarily provided during the application process.' },
              { title: 'Cookies & Tracking Technologies', desc: 'Session cookies, persistent cookies, pixel tags, and similar technologies that enable essential website functionality, analytics, and where you have consented, targeted advertising relevant to enterprise technology solutions.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-base font-bold text-[#dc2626] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use & Your Rights */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information & Your Rights</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We use personal information to respond to inquiries and deliver requested services; to send relevant thought leadership content, product updates, and event invitations to individuals who have opted in; to analyze website traffic and improve our digital properties; to process job applications; and to comply with legal obligations. We do not sell personal information to third parties. We may share data with carefully vetted service providers under contractual protections, with professional advisors under confidentiality obligations, and with authorities when required by law.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Depending on your jurisdiction, you have rights including: access to your personal data, correction of inaccurate data, erasure in certain circumstances, restriction of processing, data portability, and the right to object to processing for direct marketing. Marketing communications include an unsubscribe link in every email, and you can also contact us directly at <strong>privacy@GTS Techs.com</strong> to exercise any of your rights or raise concerns.
        </p>
        <p className="text-gray-600 leading-relaxed">
          GTS Techs retains personal data for the period necessary to fulfill the stated purpose and as required by applicable law and regulatory obligations. Our retention schedules are reviewed annually. Personal data that is no longer required is securely deleted or anonymized. For questions about specific retention periods, please contact our Data Protection Officer at <strong>dpo@GTS Techs.com</strong>.
        </p>
      </section>

      <CtaBanner
        title="Our Terms of Use"
        subtitle="Review the terms governing access to and use of GTS Techs' digital properties."
        linkLabel="Terms of Use"
        linkTo="/legal/terms"
      />
    </div>
  );
}
