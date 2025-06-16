import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../assest/image/mail.svg';
import Address from '../assest/image/Address.svg';
import bgNew from '../assest/image/bg-new.png';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-white relative banner-image" >
      <div className="pt-[100px] md:pt-[150px] px-6 py-12 relative z-10">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          </div>

          {/* Introduction */}
          <div className="mb-8 text-gray-300 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">1. Effective Date: 15 July 2024</h2>
            <p className="mb-4 ml-2">
              Cyber Vantage ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website <Link className="text-orange-400 underline" to="/">www.cybervantage.ai</Link>, engage with our services, or communicate with us.
            </p>
            <p className='ml-2'>
              Welcome to CyberVantage. We are committed to protecting the privacy and security of your data. This Privacy Policy explains our practices regarding 
              the collection, use, disclosure, and protection of information that applies to our services, as well as your choices about how your information is handled.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 text-orange-400 ml-2">2.1 Information you provide us directly:</h3>
            <div className="text-gray-300 leading-relaxed space-y-3 mb-6">
              <div>
                <span className="font-medium ml-4 ">• Contact Information:</span> Your name, email address, phone number, company name, and role when you request our services or register interest.
              </div>
              <div>
                <span className="font-medium ml-4">• Project Details:</span> Technical specifications, network/IP ranges, system architecture, and other information you share to define the scope of security assessment.
              </div>
              <div>
                <span className="font-medium ml-4">• Communications:</span> Any messages, attachments, or other content you send when you contact us—for example, via email or support requests.
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-orange-400 ml-2">2.2 Information we collect when you use our website:</h3>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <div>
                <span className="font-medium ml-4">• Log Data:</span> Our servers automatically record information such as your IP address, browser type and version, operating system, referring URLs, pages viewed, date/time stamps, and interaction data.
              </div>
              <div>
                <span className="font-medium ml-4">• Analytics & Cookies:</span> Website usage data through cookies and analytics tools such as Google Analytics, Cloudflare CDN, and other application performance monitoring tools.
              </div>
            </div>
          </div>

          {/* Use of Your Information */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">3. Use of Your Information</h2>
            <ul className="text-gray-300 space-y-2">
              <li className='ml-2'>• To respond to inquiries or requests submitted via the website</li>
              <li className='ml-2'>• To provide and deliver our cybersecurity services</li>
              <li className='ml-2'>• To improve our website performance and user experience</li>
              <li className='ml-2'>• To comply with legal obligations or regulatory requirements</li>
              <li className='ml-2'>• To send you relevant updates about our services (with your consent)</li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">4. Sharing Your Information</h2>
            <div className="text-gray-300 space-y-6">
              <div>
                <span className="font-bold text-gray-300 ml-2">4.1 With Trusted Service Providers:</span>
                <p className="ml-4 mt-2 ml-4">We engage third-party providers to support core operations such as cloud infrastructure, analytics, payment processing, and customer service. These providers operate under strict confidentiality obligations and process data solely on our instructions.</p>
              </div>
              <div>
                <span className="font-bold text-gray-300 ml-2">4.2 Legal and Regulatory Compliance:</span>
                <p className="ml-4 mt-2 ml-4">We may share data when required to comply with applicable laws, legal proceedings, or valid governmental requests. This also includes taking action to protect the rights, safety, or property of Cyber Vantage, its clients, or others.</p>
              </div>
              <div>
                <span className="font-bold text-gray-300 ml-2">4.3 Business Transfers:</span>
                <p className="ml-4 mt-2 ml-4">In the event of a merger, acquisition, restructuring, or sale of assets, your personal data may be transferred to the relevant third party as part of the business transaction.</p>
                <p className="ml-4 mt-2 ml-4">Note: We do not sell, trade, or rent your personal data to any third parties or data brokers.</p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">5. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed ml-2">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected—such as delivering services, meeting legal and regulatory obligations, maintaining business records, or resolving disputes. Retention periods are determined based on the type of data and applicable compliance requirements.
            </p>
          </div>

          {/* Security */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">6. Security</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <span className="font-medium text-gray-300 ml-2">• Encryption:</span> Use of TLS encryption for data in transit and AES-256 encryption for data at rest.
              </div>
              <div>
                <span className="font-medium text-gray-300 ml-2">• Access Management:</span> Implementation of strict access controls, including role-based permissions, strong authentication mechanisms, and multi-factor authentication (MFA) for administrative access.
              </div>
              <div>
                <span className="font-medium text-gray-300 ml-2">• Continuous Monitoring & Auditing:</span> Deployment of real-time logging, intrusion detection systems (IDS), and periodic security audits to proactively identify and mitigate risks.
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">7. Contact Us</h2>
            <div className="text-gray-300 space-y-2">
              <div className="flex items-center">
                <img src={mail} alt="Email Icon" className="w-6 h-6 mr-2" />
                <Link to="mailto:security@cybervantage.ai" className="text-white hover:text-orange-400 transition-color duration-300">
                  Email: security@cybervantage.ai
                </Link>
              </div>
              <div className="flex items-center">
                <img src={Address} alt="Address Icon" className="w-6 h-6 mr-2" />
                <Link to={'https://maps.app.goo.gl/zCoasgVgGApXtrX69'} className='text-white hover:text-orange-400 transition-color duration-300'>Herengracht 449 A, 1017BR Amsterdam</Link>
              </div>
            </div>
            <div className="text-gray-300 mt-6">
              <p>By using our service, you acknowledge that you have read and understood this Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
