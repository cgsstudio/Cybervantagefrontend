import React from 'react';
import bgNew from '../assest/image/bg-new.png';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen text-white relative banner-image" >
            {/* Adding top padding to account for fixed header */}
            <div className="pt-[100px] md:pt-[150px] px-6 py-12 relative z-10">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
                    </div>

                    {/* Introduction */}
                    <div className="mb-8 text-gray-300 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-orange-400">1. Effective Date: 15 July 2024</h2>
                        <p className="mb-4 ml-2">
                            Welcome to Cyber Vantage ("Company", "we", "our", or "us"). These Terms and
                            Conditions ("Terms") govern your use of our website, <a href="/" className='text-orange-400 underline'>www.cybervantage.ai</a>, and any
                            associated services provided by Cyber Vantage (collectively, the "Services").
                        </p>
                        <p className='ml-2'>
                            By accessing or using our website, you agree to be bound by these Terms. If you do not
                            agree with these Terms, please do not use our website.
                        </p>
                    </div>

                    {/* Section 2: Use of the Website */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">2. Use of the Website</h2>
                        <div className="text-gray-300 leading-relaxed space-y-3">
                            <p className='ml-2'>
                                You agree to use this website for lawful purposes only. You must not use this website in
                                any way that breaches any applicable local, national, or international law or regulation.
                            </p>
                            <p className='ml-2'>You also agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-3 ml-2">
                                <li>Gain unauthorized access to the website or its connected systems.</li>
                                <li>Introduce viruses, trojans, worms, or other malicious material.</li>
                                <li>Attempt to interfere with the website's proper functioning.</li>
                                <li>Perform security penetration testing or try to circumvent security measures of the website</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3: Intellectual Property */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">3. Intellectual Property</h2>
                        <div className="text-gray-300 leading-relaxed">
                            <p className='ml-2'>
                                All content, trademarks, service marks, logos, and intellectual property on this website are
                                the property of Cyber Vantage unless otherwise stated. No part of this website may be
                                copied, reproduced, distributed, or used for commercial purposes without prior written
                                consent.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Cybersecurity Service Disclaimer */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">4. Cybersecurity Service Disclaimer</h2>
                        <div className="text-gray-300 leading-relaxed space-y-3">
                            <p className='ml-2'>
                                Our services—including assessments, penetration tests, and advisory—are conducted
                                under strict ethical and legal guidelines. Services are only delivered upon entering into a
                                formal agreement and with appropriate client authorization. Unauthorized use of our
                                findings or services is strictly prohibited.
                            </p>
                            <p className='ml-2'>
                                We provide no warranty or guarantee that your systems will be secure after an
                                assessment. Our services aim to identify vulnerabilities based on the agreed scope and
                                timing.
                            </p>
                        </div>
                    </div>

                    {/* Section 5: Confidentiality */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">5. Confidentiality</h2>
                        <div className="text-gray-300 leading-relaxed">
                            <p className='ml-2'>
                                Any information shared between Cyber Vantage and its clients during the course of an
                                engagement is treated as strictly confidential. We adhere to the highest standards of
                                professional conduct and protect sensitive data in line with GDPR and European
                                cybersecurity laws.
                            </p>
                        </div>
                    </div>

                    {/* Section 6: Limitation of Liability */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">6. Limitation of Liability</h2>
                        <div className="text-gray-300 leading-relaxed space-y-3 ml-2">
                            <p>
                                To the fullest extent permitted by law, Cyber Vantage shall not be liable for any direct,
                                indirect, incidental, consequential, or punitive damages resulting from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-3">
                                <li>Your use or inability to use our website</li>
                                <li>Errors or omissions in the content</li>
                                <li>Delays or interruptions in website availability</li>
                                <li>Security vulnerabilities that are beyond our control</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 7: Third-Party Links */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">7. Third-Party Links</h2>
                        <div className="text-gray-300 leading-relaxed ml-2">
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the
                                content or privacy practices of those websites. Use of such links is at your own risk.
                            </p>
                        </div>
                    </div>

                    {/* Section 8: Privacy Policy */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">8. Privacy Policy</h2>
                        <div className="text-gray-300 leading-relaxed space-y-3 ml-2">
                            <p>
                                Use of our website is also governed by our Privacy Policy. &lt;Add Link of Privacy Policy here&gt;
                            </p>
                            <p>Please review it to understand how we collect, use, and protect your data.</p>
                        </div>
                    </div>

                    {/* Section 9: Governing Law and Jurisdiction */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">9. Governing Law and Jurisdiction</h2>
                        <div className="text-gray-300 leading-relaxed ml-2">
                            <p>
                                These Terms are governed by the laws of the Netherlands and the European Union. Any
                                disputes arising from these Terms or your use of our website shall be subject to the
                                exclusive jurisdiction of the Dutch courts.
                            </p>
                        </div>
                    </div>

                    {/* Section 10: Changes to These Terms */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">10. Changes to These Terms</h2>
                        <div className="text-gray-300 leading-relaxed ml-2">
                            <p>
                                We reserve the right to modify these Terms at any time. Updates will be posted on this page
                                with a revised effective date. Continued use of the website following changes constitutes
                                your acceptance of the new Terms.
                            </p>
                        </div>
                    </div>

                    {/* Section 11: Contact */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-orange-400">11. Contact</h2>
                        <div className="text-gray-300 leading-relaxed space-y-2 ml-2">
                            <p>If you have any questions about these Terms, please contact us:</p>
                            <div className="space-y-1 flex flex-col">
                                <Link to={'mailto:security@cybervantage.ai' } className='text-white hover:text-orange-400 transition-color duration-300' ><span className="font-medium">Email:</span> security@cybervantage.ai</Link>
                                <Link to={'https://www.cybervantage.ai'} className='text-white hover:text-orange-400 transition-color duration-300'><span className="font-medium">Website:</span> www.cybervantage.ai</Link>
                                <Link to={'https://maps.app.goo.gl/yCDpkzTBDyCBdKAn7'} className='text-white hover:text-orange-400 transition-color duration-300'><span className="font-medium">Address:</span> Herengracht 449 A, 1017BR Amsterdam</Link>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;