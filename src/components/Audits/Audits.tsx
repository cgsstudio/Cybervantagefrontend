// Main Audits Component
import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, Link as RouterLink } from 'react-router-dom';

// Import images
import serv from '../../assest/image/audithero.svg';
import sec02 from '../../assest/image/Auditsec-02.svg';
import sec03 from '../../assest/image/Auditsec-03.svg';
import sec04 from '../../assest/image/auditsec04.svg';
import sec05 from '../../assest/image/auditsec05.svg';
import sec06 from '../../assest/image/Auditsec07.svg';
import sec07 from '../../assest/image/Auditsec08.svg';
import sec08 from '../../assest/image/auditdec09.svg';
import sec09 from '../../assest/image/auditsec10.svg';
import CallToAction from '../CallToAction';
import tab1 from "../../assest/image/audit-tabicon/1.svg";
import tab2 from "../../assest/image/audit-tabicon/2.svg";
import tab3 from "../../assest/image/audit-tabicon/3.svg";  
import Breadcrumb from '../Breadcrums/Breadcrumb';

// Constants
const AUDIT_PHASES = [
  {
    title: "Phase 1: Gap Assessment & Risk Analysis",
    content: [
      "Evaluate current policies, procedures, and controls.",
      "Conduct risk assessments aligned with ISO 27005.",
      "Identify non-conformities and improvement areas."
    ],
  },
  {
    title: "Phase 2: ISMS Design and Implementation Support",
    content: [
      "Define the scope of the ISMS based on business processes.",
      "Assist with the development of information security policies, asset registers, and risk treatment plans.",
      "Guide in control implementation based on Annex A controls."
    ],
  },
  {
    title: "Phase 3: Internal Audit & Pre-Certification Review",
    content: [
      "Conduct a mock internal audit to ensure readiness.",
      "Address any remaining gaps prior to formal certification."
    ],
  },
  {
    title: "Phase 4: Certification Audit (Stage 1 & Stage 2)",
    content: [
      "Partner with a certified body to carry out the official audit.",
      "Stage 1: Documentation and design review.",
      "Stage 2: Control effectiveness and operational review."
    ],
  },
];

const PCI_AUDIT_PHASES = [
  {
    title: "1. Scoping & Environment Mapping",
    content: [
      "Determine cardholder data environment (CDE).",
      "Identify all systems, networks, applications, and users that fall under the scope.",
      "Conduct interviews and documentation reviews."
    ],
  },
  {
    title: "2. Gap Analysis & Remediation Roadmap",
    content: [
      "Analyze current state against the 12 core PCI DSS requirements.",
      "Identify gaps such as lack of segmentation, weak access controls, or missing logs.",
      "Deliver a prioritized remediation plan with risk ratings."
    ],
  },
  {
    title: "3. Remediation & Testing",
    content: [
      "Guide implementation of security controls: firewalls, encryption, multifactor authentication, etc.",
      "Conduct internal vulnerability scans and penetration tests.",
      "Provide advisory support for policy development and staff training."
    ],
  },
  {
    title: "4. Formal Audit & Attestation",
    content: [
      "Prepare and submit either:",
      "Report on Compliance (ROC) for Level 1 merchants.",
      "Self-Assessment Questionnaire (SAQ) for Levels 2–4.",
      "Include required documentation, test results, and compensating controls."
    ],
  },
];

const SOC2_AUDIT_PHASES = [
  {
    title: "1. SOC 2 Readiness Assessment",
    content: [
      "Define scope: Which trust criteria apply to your services?",
      "Review current policies, procedures, and controls.",
      "Identify and document gaps with control mapping."
    ],
  },
  {
    title: "2. Control Design & Documentation Support",
    content: [
      "Assist in implementing or strengthening controls.",
      "Provide templates and guidance for policies (access, incident response, change management, etc.).",
      "Train internal teams on audit evidence and documentation."
    ],
  },
  {
    title: "3. SOC 2 Type I & Type II Audits",
    content: [
      "Type I: Evaluates control design at a point in time.",
      "Type II: Assesses operating effectiveness over a 6–12 month period.",
      "Partner with a licensed CPA firm for the audit report."
    ],
  },
  {
    title: "4. Post-Audit Support",
    content: [
      "Assist with customer inquiries about the SOC 2 report.",
      "Provide ongoing monitoring, risk assessments, and control testing for future audits."
    ],
  },
];

// Reusable Components

// Hero Section Component
const HeroSection = ({ 
  title, 
  description, 
  buttonText, 
  heroImage, 
  onButtonClick,
  backgroundClass = "banner-image" 
}) => (
  <div className={`w-full from-purple-900 via-gray-900 to-black flex items-center ${backgroundClass}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="mt-4 md:mt-0">
          <div className="space-y-8" data-aos="fade-up">
            <div>
              <h1 className="font-bold text-[#F57A00] mt-4 text-[34px] leading-[40px] md:text-[42px] md:leading-[50px] xl:text-[50px] xl:leading-[60px] 2xl:text-[75px] 2xl:leading-[80px]">
                {title}
              </h1>
            </div>
            <p className="text-lg leading-relaxed max-w-xl paragraphcommon">
              {description}
            </p>
            <button 
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
          <div className="relative w-full max-w-sm xl:max-w-[350px] 2xl:max-w-lg flex items-center justify-center">
            <img
              src={heroImage}
              alt="Audit Services"
              className="max-w-[80%] 2xl:max-w-full 2xl:w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section Header Component
const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`w-full py-12 flex justify-center items-center ${centered ? 'text-center' : ''}`}>
    <div className="container mx-auto px-4 flex flex-col items-center" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-[#F57A00] mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white text-lg max-w-3xl mb-0">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

// Two Column Content Component
const TwoColumnContent = ({ 
  title, 
  content, 
  image, 
  imageAlt, 
  reverseOrder = false,
  backgroundColor = "",
  maxWidth = "xl"
}) => (
  <div className={`w-full py-12 flex justify-center items-center ${backgroundColor}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className={`lg:w-1/2 w-full mb-12 lg:mb-0 ${reverseOrder ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`} data-aos="fade-right">
        <div className={`mt-4 max-w-${maxWidth}`}>
          <h3 className="text-[40px] font-semibold text-[#F57A00] mb-4">
            {title}
          </h3>
          <div className="space-y-4">
            {content}
          </div>
        </div>
      </div>
      <div className={`lg:w-1/2 w-full flex justify-center ${reverseOrder ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}`} data-aos="fade-left">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
);

// Accordion Component
const AccordionItem = ({ 
  title, 
  content, 
  isOpen, 
  onToggle, 
  backgroundColor = "#080808" 
}) => (
  <div
    className="overflow-hidden rounded-lg"
    style={{
      background: 'linear-gradient(90deg, #F57A00, #7103A4)',
      padding: 2,
      margin: '6px 0'
    }}
  >
    <div
      className="rounded-[6px] overflow-hidden"
      style={{ background: backgroundColor }}
    >
      <button
        className="w-full flex justify-between items-center px-6 py-4 xl:py-4 2xl:py-5 focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-left font-semibold text-lg text-[#F57A00] transition-colors duration-200">
          {title}
        </span>
        <span className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" fill="none" stroke={isOpen ? "#F57A00" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out px-6 ${isOpen ? 'max-h-96 opacity-100 py-2 pb-4' : 'max-h-0 opacity-0 overflow-hidden p-0'}`}
        style={{ background: backgroundColor }}
      >
        <ul className="list-disc list-inside text-white space-y-2 pl-2">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Accordion Section Component
const AccordionSection = ({ 
  title, 
  subtitle, 
  image, 
  phases, 
  openPhase, 
  setOpenPhase, 
  phasePrefix = "",
  backgroundColor = "#080808",
  reverseOrder = false 
}) => (
  <div className="w-full py-12 sm:py-20 flex justify-center items-center">
    <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
      <div className={`w-full lg:w-1/2 flex justify-center lg:mb-0 ${reverseOrder ? 'order-2 lg:order-2' : 'order-1 lg:order-1'}`} data-aos="fade-right">
        <img
          src={image}
          alt={title}
          className="w-full h-auto"
        />
      </div>
      <div className={`w-full lg:w-1/2 ${reverseOrder ? 'order-1 lg:order-1' : 'order-2 lg:order-2'}`} data-aos="fade-left">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-semibold text-[#F57A00] mb-2">
            {title}
          </h2>
          <p className="text-white text-base mb-6">
            {subtitle}
          </p>
          <div className="space-y-4">
            {phases.map((phase, idx) => (
              <AccordionItem
                key={idx}
                title={phase.title}
                content={phase.content}
                isOpen={openPhase === `${phasePrefix}${idx}`}
                onToggle={() => setOpenPhase(openPhase === `${phasePrefix}${idx}` ? -1 : `${phasePrefix}${idx}`)}
                backgroundColor={backgroundColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Benefits List Component
const BenefitsList = ({ items, icon: Icon = CheckIcon }) => (
  <ul className="space-y-2 pl-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start text-white">
        <Icon className="w-5 h-5 text-white mr-2 mt-1 flex-shrink-0" strokeWidth={2} stroke="currentColor" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Benefits Section Component
const BenefitsSection = ({ 
  benefitsTitle, 
  benefits, 
  whyChooseTitle, 
  whyChooseItems, 
  image, 
  imageAlt,
  backgroundColor = "" 
}) => (
  <div className={`w-full py-20 flex justify-center items-center ${backgroundColor}`}>
    <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1" data-aos="fade-right">
        <div className="max-w-xl mx-auto">
          <h3 className="text-[28px] md:text-[32px] font-semibold text-[#F57A00] mb-4">
            {benefitsTitle}
          </h3>
          <div className="mb-8">
            <BenefitsList items={benefits} />
          </div>
          <h4 className="text-[22px] md:text-[26px] font-semibold text-[#F57A00] mb-4">
            {whyChooseTitle}
          </h4>
          <BenefitsList items={whyChooseItems} icon={ArrowRightIcon} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2" data-aos="fade-left">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
);

// Main Audits Component
const Audits = () => {
  const [openPhase, setOpenPhase] = useState(0);
  const [activeTab, setActiveTab] = useState('iso27001');
  const location = useLocation();

  // Refs for sections
  const isoRef = useRef<HTMLDivElement>(null);
  const pciRef = useRef<HTMLDivElement>(null);
  const soc2Ref = useRef<HTMLDivElement>(null);

  // Add ref map for navigation
  const sectionRefs = {
    iso27001: isoRef,
    'pci-dss': pciRef,
    soc2: soc2Ref,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Scroll to section if navigated with sectionId
  useEffect(() => {
    if (location.state && location.state.sectionId) {
      const sectionId = location.state.sectionId;
      let ref = null;
      if (sectionId === 'iso27001') ref = isoRef;
      if (sectionId === 'pci-dss') ref = pciRef;
      if (sectionId === 'soc2') ref = soc2Ref;
      if (ref && ref.current) {
        setTimeout(() => {
          ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200); // delay for smooth scroll after render
      }
    }
  }, [location.state]);

  const handleExploreClick = () => {
    // Handle button click logic here
    console.log('Explore button clicked');
  };

  // Navigation click handler
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    // Optionally scroll to top of tab section
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ISO 27001 Content
  const iso27001Content = (
    <>
      <p className="text-white mb-4">
        ISO/IEC 27001 is the internationally recognized standard for creating and managing an Information Security Management System (ISMS). It provides a structured methodology for protecting sensitive data through the implementation of security controls, risk assessments, and continuous monitoring.
      </p>
      <p className="text-white mb-4">
        This standard is applicable to all types and sizes of organizations and is essential for companies seeking to:
      </p>
      <ul className="list-disc list-inside text-white mb-4 pl-2">
        <li>Mitigate data breaches and cyber threats</li>
        <li>Meet contractual and regulatory obligations</li>
        <li>Demonstrate commitment to information security</li>
      </ul>
      <p className="text-[#fff]">
        Achieving ISO 27001 certification demonstrates your organization's dedication to maintaining the highest standards of information security management.
      </p>
    </>
  );

  // PCI DSS Content
  const pciDssContent = (
    <p className="text-[#CFC9C9] text-base max-w-xl">
      The Payment Card Industry Data Security Standard (PCI DSS) is a mandatory compliance framework for any business that stores, processes, or transmits cardholder data. Created by major card brands (Visa, Mastercard, AMEX, etc.), PCI DSS enforces robust security controls to prevent fraud and data breaches in the payment ecosystem. The current version, PCI DSS v4.0, includes new requirements for encryption, authentication, continuous monitoring, and risk management.
    </p>
  );

  // SOC 2 Content
  const soc2Content = (
    <>
      <p className="text-[#CFC9C9] mb-4">
        SOC 2 (System and Organization Controls) is a voluntary compliance standard developed by the AICPA (American Institute of Certified Public Accountants). It applies to service organizations that process, manage, or store customer data, particularly in cloud-based environments.
      </p>
      <p className="text-[#CFC9C9] mb-4">
        SOC 2 focuses on five Trust Service Criteria:
      </p>
      <ul className="list-disc list-inside text-white mb-4 pl-2">
        <li>Security</li>
        <li>Availability</li>
        <li>Processing Integrity</li>
        <li>Confidentiality</li>
        <li>Privacy</li>
      </ul>
      <p className="text-[#CFC9C9]">
        It is particularly relevant for SaaS, cloud service providers, financial tech companies, and data processors.
      </p>
    </>
  );

  // Benefits data
  const iso27001Benefits = [
    "Internationally recognized ISO 27001 certificate.",
    "Lowered risk of data loss and reputational damage.",
    "Enhanced credibility with clients, partners, and regulators.",
    "Structured approach to managing and improving security."
  ];

  const iso27001WhyChoose = [
    "Certified ISO 27001 Lead Auditors with years of hands-on experience.",
    "Proven methodology with industry-specific expertise (finance, healthcare, SaaS, etc.).",
    "Ongoing support for ISMS maintenance, audits, and recertification.",
    "Value-added tools: Policy templates, risk registers, audit logs, and compliance checklists."
  ];

  const pciDsssBenefits = [
    "Full PCI DSS compliance and official attestation.",
    "Reduced likelihood of cardholder data breaches and fraud.",
    "Enhanced relationships with payment processors and banks.",
    "Avoidance of fines, penalties, and reputational damage."
  ];

  const pciDssWhyChoose = [
    "Certified PCI DSS Qualified Security Assessors (QSAs).",
    "End-to-end consulting: from discovery to full compliance.",
    "PCI DSS v4.0 readiness and transition support.",
    "Expertise in cloud-native, hybrid, and on-premise architectures."
  ];

  const soc2Benefits = [
    "SOC 2 attestation report from an accredited CPA firm.",
    "Competitive advantage in procurement, funding, and client acquisition.",
    "Strengthened internal governance and operational maturity.",
    "Better incident response and risk management frameworks."
  ];

  const soc2WhyChoose = [
    "Deep experience across SaaS, fintech, healthcare, and data-driven businesses.",
    "Transparent project plans, real-time updates, and auditor coordination.",
    "Tools for automated control monitoring and evidence collection.",
    "Long-term support for annual renewals and scaling compliance as your business grows."
  ];

  // Navigation tabs data
  const auditTabs = [
    {
      id: 'iso27001',
      label: 'ISO 27001',
      icon: tab1,
    },
    {
      id: 'pci-dss',
      label: 'PCI DSS',
      icon: tab2,
    },
    {
      id: 'soc2',
      label: 'SOC 2',
      icon: tab3,
    },
  ];

  return (
    <>

<Breadcrumb 
      pageTitle="Audits"
      items={[
    { label: 'Audits', path: '/audits' },

  ]} 
/>

      <HeroSection
        title="Cybersecurity Audits & Compliance Services"
        description="At Cyber Vantage, we specialize in helping organizations of all sizes navigate the complexities of information security and compliance. Whether you need to protect customer data, achieve regulatory compliance, or build trust with partners and clients, our audit services are designed to align your business with the world's most recognized security standards."
        buttonText="Explore How We Help"
        heroImage={serv}
        onButtonClick={handleExploreClick}
      />

      {/* Navigation Section (restored UI, tab logic) */}
      <div className="w-full  py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {auditTabs.map((tab) => (
              <div
                key={tab.id}
                className="flex flex-col items-center transition-all duration-300 relative z-0 text-white"
                style={{
                  borderRadius: 8,
                  padding: 2,
                  background: 'linear-gradient(90deg, #F57A00, #7103A4)',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    borderRadius: 6,
                    background: '#000000',
                    padding: '1rem 1rem',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className='flex flex-col items-center gap-3'>
                    <img src={tab.icon} alt={tab.label} className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] " />
                    <span className="font-medium text-2xl text-center ">{tab.label}</span>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                  <button
                    onClick={() => handleNavClick(tab.id)}
                    className="gradient-bg  px-6 py-2 font-semibold mt-4 transition-all duration-200 transform hover:scale-105 rounded-full"
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="w-full">
        {activeTab === 'iso27001' && (
          <div id="iso27001" ref={isoRef}>
            <SectionHeader
              title="ISO 27001 AUDIT SERVICES"
              subtitle="Build a resilient security posture with the global standard for information security"
            />

            <TwoColumnContent
              title="WHAT IS ISO 27001?"
              content={iso27001Content}
              image={sec02}
              imageAlt="ISO 27001 Audit Illustration"
            />

            <AccordionSection
              title="How We Perform The ISO 27001 Audit"
              subtitle="Our process is holistic, collaborative, and tailored to your unique business context."
              image={sec03}
              phases={AUDIT_PHASES}
              openPhase={openPhase}
              setOpenPhase={setOpenPhase}
              phasePrefix=""
            />

            <BenefitsSection
              benefitsTitle="What You Gain"
              benefits={iso27001Benefits}
              whyChooseTitle="Why Choose Our ISO 27001 Services?"
              whyChooseItems={iso27001WhyChoose}
              image={sec04}
              imageAlt="What You Gain ISO 27001"
            />
          </div>
        )}

        {activeTab === 'pci-dss' && (
          <div className="bg-[#101010]" id="pci-dss" ref={pciRef}>
            <SectionHeader
              title="PCI DSS Audit Services"
              subtitle="Secure your payment systems and gain customer trust with PCI DSS compliance."
            />

            <TwoColumnContent
              title="What is PCI DSS?"
              content={pciDssContent}
              image={sec05}
              imageAlt="PCI DSS Illustration"
              backgroundColor="bg-[#101010]"
            />

            <AccordionSection
              title="How We Perform the PCI DSS Audit"
              subtitle="Our PCI audit engagements are comprehensive and customized to match your payment environment (eCommerce, retail, fintech, SaaS, etc.)."
              image={sec05}
              phases={PCI_AUDIT_PHASES}
              openPhase={openPhase}
              setOpenPhase={setOpenPhase}
              phasePrefix="pci"
              backgroundColor="#101010"
            />

            <BenefitsSection
              benefitsTitle="What You Gain"
              benefits={pciDsssBenefits}
              whyChooseTitle="Why Choose Our PCI DSS Services?"
              whyChooseItems={pciDssWhyChoose}
              image={sec06}
              imageAlt="PCI DSS What You Gain"
              backgroundColor="bg-[#101010]"
            />
          </div>
        )}

        {activeTab === 'soc2' && (
          <div className="bg-black" id="soc2" ref={soc2Ref}>
            <SectionHeader
              title="SOC 2 AUDIT SERVICES"
              subtitle="Earn the trust of clients, investors, and partners by demonstrating operational integrity."
            />

            <TwoColumnContent
              title="WHAT IS SOC 2?"
              content={soc2Content}
              image={sec08}
              imageAlt="SOC 2 Audit Services Illustration"
              backgroundColor="bg-black"
            />

            <AccordionSection
              title="How We Perform The SOC 2 Audit"
              subtitle="Our SOC 2 audit process is designed to be smooth, transparent, and aligned with your business goals."
              image={sec07}
              phases={SOC2_AUDIT_PHASES}
              openPhase={openPhase}
              setOpenPhase={setOpenPhase}
              phasePrefix="soc2"
              backgroundColor="#000000"
            />

            <BenefitsSection
              benefitsTitle="What You Gain"
              benefits={soc2Benefits}
              whyChooseTitle="Why Choose Our SOC 2 Services?"
              whyChooseItems={soc2WhyChoose}
              image={sec09}
              imageAlt="SOC 2 What You Gain"
              backgroundColor="bg-black"
            />
          </div>
        )}
      </div>

      <CallToAction />
    </>
  );
};

export default Audits;