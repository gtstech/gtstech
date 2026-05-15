import PageHeader from '../../components/PageHeader';
import CtaBanner from '../../components/CtaBanner';

export default function Terms() {
  return (
    <div>
      <PageHeader
        title="Terms of Use"
        subtitle="The terms and conditions governing access to and use of GTS Techs' website and digital properties."
        breadcrumbs={[['Home', '/'], ['Legal', '/legal/terms'], ['Terms of Use']]}
      />

      {/* Acceptance */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          By accessing or using the GTS Techs website (www.GTS Techs.com) and any associated digital properties, platforms, or portals (collectively, "the Site"), you agree to be bound by these Terms of Use ("Terms"). These Terms constitute a legally binding agreement between you and GTS Techs Global Services Limited ("GTS Techs," "we," "us," or "our"). If you do not agree to these Terms in their entirety, you should immediately discontinue your use of the Site.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          These Terms apply to all visitors, users, and others who access or use the Site, regardless of the device, browser, or method of access. GTS Techs reserves the right to amend these Terms at any time, with changes becoming effective upon posting to the Site. Your continued use of the Site following any such modification constitutes acceptance of the revised Terms. We recommend reviewing these Terms periodically.
        </p>
        <p className="text-gray-600 leading-relaxed">
          These Terms are governed by and shall be construed in accordance with the laws of India, without regard to conflict of law principles. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India, unless otherwise required by applicable mandatory law in your jurisdiction.
        </p>
      </section>

      {/* Intellectual Property & Use Restrictions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property & Permitted Use</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All content on the Site — including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software — is the exclusive property of GTS Techs or its content suppliers and is protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws. The GTS Techs name and logo are registered trademarks of GTS Techs Global Services Limited. Unauthorized use is strictly prohibited.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Permitted Use', desc: 'You may access and view Site content for lawful, personal, non-commercial informational purposes. You may download or print single copies of individual pages solely for your own personal reference, provided you retain all copyright and proprietary notices.' },
              { title: 'Prohibited Use', desc: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, transmit, or exploit any content from the Site for commercial purposes without GTS Techs\' prior written consent. Systematic extraction, scraping, or data mining is expressly prohibited.' },
              { title: 'Trademarks', desc: 'GTS Techs, GTS Techs.AI, TruBot, TruCap+, TruBI, SuperCX, FINATO, TruAgent, TruDiscovery, and associated logos are trademarks of GTS Techs. All third-party trademarks referenced on the Site are the property of their respective owners.' },
              { title: 'User Content', desc: 'Any communications or materials you transmit to the Site are considered non-confidential and non-proprietary unless subject to a separately executed confidentiality agreement. By transmitting such content, you grant GTS Techs a royalty-free, irrevocable, worldwide license to use it for legitimate business purposes.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-base font-bold text-[#dc2626] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers & Limitation */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimers & Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          THE SITE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. GTS Techs does not warrant that the Site will be uninterrupted, error-free, secure, or free of viruses or other harmful components. The information on the Site may contain inaccuracies or typographical errors; GTS Techs reserves the right to make corrections at any time without notice.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GTS Techs AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE SITE OR ITS CONTENT, EVEN IF GTS Techs HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. In jurisdictions that do not permit limitation or exclusion of implied warranties or liability for certain damages, GTS Techs' liability is limited to the minimum extent permitted by law.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The Site may contain links to third-party websites for your convenience. These links do not imply endorsement by GTS Techs of the linked sites or their content. GTS Techs has no control over third-party sites and is not responsible for their content, privacy practices, or availability. Accessing third-party sites via links on the Site is at your own risk, and you should review the terms and privacy policies of any third-party site you visit.
        </p>
      </section>

      <CtaBanner
        title="Our Data Protection Policy"
        subtitle="Learn how GTS Techs protects personal and organizational data across its global operations."
        linkLabel="Data Protection Policy"
        linkTo="/legal/data-protection"
      />
    </div>
  );
}
