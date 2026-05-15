import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function DataProtection() {
  return (
    <div>
      <PageHeader
        title="Data Protection Policy"
        subtitle="How GTS Techs collects, processes, stores, and protects personal and organizational data in compliance with applicable laws."
        breadcrumbs={[['Home', '/'], ['Legal', '/legal/data-protection'], ['Data Protection Policy']]}
      />

      {/* Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview & Scope</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GTS Techs Global Services Limited ("GTS Techs," "we," "our," or "us") is committed to protecting the privacy and security of personal data in accordance with applicable data protection laws including the General Data Protection Regulation (GDPR), India's Digital Personal Data Protection Act (DPDPA), the California Consumer Privacy Act (CCPA), and other regional data protection frameworks. This Data Protection Policy ("Policy") applies to all personal data processed by GTS Techs in the course of its business operations — as a data controller for its own business activities and as a data processor on behalf of its enterprise clients.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          This Policy covers personal data collected through GTS Techs' websites, digital properties, client engagement channels, recruitment processes, and internal HR systems. It describes the categories of data we collect, the legal bases for processing, how we use and share data, the rights of data subjects, and the security measures we employ to protect personal information.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This Policy applies to all GTS Techs employees, contractors, vendors, and third parties who process personal data on behalf of GTS Techs. All such individuals and entities are required to read, understand, and comply with this Policy as a condition of their engagement with GTS Techs.
        </p>
      </section>

      {/* Data Processing Principles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Processing Principles</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            GTS Techs processes personal data in accordance with the following principles, which are derived from and consistent with internationally recognized data protection standards including the GDPR and applicable national legislation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Lawfulness, Fairness & Transparency', desc: 'Personal data is processed on a lawful basis (consent, legitimate interest, contract, legal obligation, or vital interests) and in a transparent manner that does not deceive or harm data subjects.' },
              { title: 'Purpose Limitation', desc: 'Personal data is collected for specified, explicit, and legitimate purposes and is not further processed in a manner incompatible with those stated purposes.' },
              { title: 'Data Minimization', desc: 'Only personal data that is adequate, relevant, and limited to what is necessary for the stated processing purposes is collected and retained.' },
              { title: 'Accuracy', desc: 'Reasonable steps are taken to ensure that personal data is accurate and, where necessary, kept up to date. Inaccurate data is corrected or erased without undue delay.' },
              { title: 'Storage Limitation', desc: 'Personal data is retained only for as long as necessary to fulfill the stated purpose, after which it is securely deleted or anonymized in accordance with our Retention Schedule.' },
              { title: 'Integrity & Confidentiality', desc: 'Personal data is processed with appropriate technical and organizational security measures to protect against unauthorized access, loss, destruction, or damage.' },
            ].map((principle) => (
              <div key={principle.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-base font-bold text-[#dc2626] mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Subject Rights */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Subject Rights</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Depending on your jurisdiction and the applicable data protection law, you may have the following rights in respect of your personal data processed by GTS Techs: (i) Right of Access — to obtain confirmation of whether we process your personal data and to receive a copy of that data; (ii) Right to Rectification — to have inaccurate personal data corrected; (iii) Right to Erasure ("Right to be Forgotten") — to request deletion of your personal data under certain circumstances; (iv) Right to Restrict Processing — to request that we limit how we use your data; (v) Right to Data Portability — to receive your data in a structured, machine-readable format; and (vi) Right to Object — to object to processing based on legitimate interests or for direct marketing purposes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          To exercise any of these rights, please contact our Data Protection Officer (DPO) at the contact details provided in this Policy. We will respond to all verified requests within the timeframes required by applicable law — typically 30 days, with an extension of up to 60 additional days for complex or high-volume requests.
        </p>
        <p className="text-gray-600 leading-relaxed">
          GTS Techs' Data Protection Officer can be reached at: <strong>dpo@GTS Techs.com</strong>. You also have the right to lodge a complaint with your national supervisory authority if you believe that your personal data has been processed in violation of applicable law.
        </p>
      </section>

      <CtaBanner
        title="Read Our Privacy Policy"
        subtitle="Learn how GTS Techs handles personal data collected through our websites and digital channels."
        linkLabel="Privacy Policy"
        linkTo="/legal/privacy"
      />
    </div>
  );
}
