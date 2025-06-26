import React, { useState } from 'react';
import { Shield, Smartphone, Database, Code, CreditCard, LineChart, Lock, Globe, ChevronRight } from 'lucide-react';
import tab1 from '../../assest/image/digitalfinance/Rectangle 95.png';
import tab2 from '../../assest/image/digitalfinance/image.png';
import tab3 from '../../assest/image/digitalfinance/Rectangle 96.png';
import tab4 from '../../assest/image/digitalfinance/Rectangle 97.png';
import tab5 from '../../assest/image/services/tab5.png';
import tab6 from '../../assest/image/services/tab6.png';
import tab7 from '../../assest/image/digitalfinanceicon/fraud.svg';
import tab8 from '../../assest/image/digitalfinanceicon/openbanking.svg';
import tab9 from '../../assest/image/digitalfinanceicon/atm.svg';
import tab10 from '../../assest/image/digitalfinanceicon/iot.svg';

const tabs = [
  'Fraud Red Teaming',
  'Open banking Security',
  'ATM security Assessment',
  'IoT Security for Banking & Finance'
];



const tabIcons = [
  tab7, // Digital Banking Platform
  tab8, // Payment Solutions
  tab9, // Risk Management
  tab10 // Open Banking
];

const contentByTab = {
  'Fraud Red Teaming': {
    offerings: [
      {
        title: "Simulated Fraud Campaigns",
        description: "Emulate fraudulent activities including social engineering, SIM swapping, payment manipulation, insider threats, and mule network abuse."
      },
      {
        title: "Account Takeover Scenarios",
        description: "Phish, brute-force, and MFA-bypass attacks on customer portals and employee workstations."
      },
      {
        title: "Business Email Compromise (BEC) Exercises",
        description: ": Craft spear-phishing campaigns targeting finance teams to validate your email defenses."
      },
      {
        title: "Insider Threat Simulations",
        description: "Deploy covert tactics—malicious USB drops, privilege escalation—to test internal monitoring and response."
      },
      {
        title: "API Abuse Testing",
        description: "Probe your APIs for authentication flaws, logic flaws, and data leakage."
      },
       {
        title: "Detailed Remediation Roadmap",
        description: "Prioritized findings, fraud-focused playbooks, and tabletop exercises to harden controls."
      }
    ],
    image: tab1
  },
  'Open banking Security': {
    offerings: [
      {
        title: "API Security Testing",
        description: "Assess security of account info (AISP), payment initiation (PISP), and confirmation of funds (CBPII) APIs, including OAuth2.0/MTLS security and scope enforcement."
      },
      {
        title: "TPP Onboarding Flows",
        description: "Review how banks authenticate and authorize TPPs, including JWS/JWT validation, certificate pinning, and audit trails."
      },
      {
        title: "Consent Lifecycle Testing",
        description: "Validate consent revocation, expiry handling, and unauthorized re-authorization risks."
      },
      {
        title: "Data Minimization & Privacy Controls",
        description: "Review GDPR compliance, data leakage prevention between APIs, and customer data exposure."
      },
      {
        title: "Security of Developer Portals",
        description: "Test sandbox isolation, authentication mechanisms, and open redirect issues in public developer environments."
      }
    ],
    image: tab2
  },
  'ATM security Assessment': {
    offerings: [
      {
        title: "Physical Penetration Testing",
        description: "Simulate break-in attempts, tampering, and lockpicking to evaluate kiosk robustness."
      },
      {
        title: "Black-Box Jackpotting Exercises",
        description: "Emulate card reader and dispenser exploits remotely and on-site."
      },
      {
        title: "Firmware Integrity & Update Mechanism Review",
        description: "Analyze ATM OS, application software, and auto-update channels for vulnerabilities."
      },
      {
        title: "Network Communication Security",
        description: "Verify encryption and authentication on ATMto-backend links (ISO 8583, TCP/IP)."
      },
      {
        title: "PCI-DSS & Local Compliance Alignment",
        description: "Ensure your ATMs meet card-holder data and regulatory requirements."
      },
      {
        title: "Secure Remote Access Validation",
        description: "Harden VPNs, jump servers, and vendor connections to hardware and software support components."
      }
    ],
    image: tab3
  },
  'IoT Security for Banking & Finance': {
    offerings: [
      {
        title: "Firmware & Software Analysis",
        description: "Reverse-engineer firmware images to uncover backdoors, debug interfaces, and hardcoded credentials."
      },
      {
        title: "Wireless Protocol Testing",
        description: "Evaluate the security & configuration of Wi-Fi,Bluetooth, Zigbee, LoRaWAN, and cellular links powering your IoT network."
      },
      {
        title: "Secure Provisioning & OTA Updates",
        description: "Validate your onboarding processes and overthe-air update mechanisms against man-in-the-middle attacks."
      },
      {
        title: "Network Segmentation Review",
        description: "Confirm IoT devices are isolated in their own VLANs or micro-segments to contain breaches."
      },
      {
        title: "Continuous Monitoring & Threat Hunting",
        description: "Deploy lightweight sensors and analytics to detect anomalous IoT behavior in real time."
      }
    ],
    image: tab4
  }
};

const tabHeaders = {
  'Fraud Red Teaming': {
    title: 'Fraud Red Team',
    description: 'Our Fraud Red Team simulates real-world financial crime campaigns against your organization—combining technical exploits, social engineering, and data-driven deception to test the resilience of your people, processes, and platforms and assess how attackers might exploit banking systems, user workflows, and human behavior.'
  },
  'Open banking Security': {
    title: 'Open Banking Security',
    description: 'We assess the security of open banking APIs, third-party integrations, consent management, and data access flows to protect customer data and ensure compliance with PSD2 and regional regulations.'
  },
  'ATM security Assessment': {
    title: 'ATM Security Assessment',
    subTitle: 'Every ATM is a high-value target—make sure yours can’t be turned into a jackpotting machine.',
    description: 'Our end-to-end ATM assessments blend physical penetration, OS boot order attacks, malware injection, and network security testing to block skimming, peripheral device security, response tampering, and black-box attacks.'
  },
  'IoT Security for Banking & Finance': {
    title: 'IoT Security for Banking & Finance',
    subTitle: 'From smart kiosks to branch-wide sensors, every connected device is an entry point.',
    description: 'Banking institutions increasingly deploy IoT for customer engagement, environmental monitoring, and branch automation. We ensure your IoT estate can’t be turned into a beachhead for large-scale attacks.'
  }
};

export default function FinanceTabContent() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [expandedTabs, setExpandedTabs] = useState<string[]>([]);

  const toggleTab = (tab: string) => {
    setExpandedTabs(prev => 
      prev.includes(tab) 
        ? prev.filter(t => t !== tab)
        : [...prev, tab]
    );
  };

  const isTabExpanded = (tab: string) => expandedTabs.includes(tab);

  return (
    <div className="container mx-auto min-h-screen text-white py-20" id='digitalfinance'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white line-heading-tight">
          Digital Finance and Banking— Tailored for Every Platform
        </h1>
        <p className="text-white-400 text-lg max-w-3xl mx-auto">
          Our Digital Finance and Banking security practice covers key domains to ensure your operations remain resilient, efficient, and secure.
        </p>
      </div>

      {/* Desktop View - visible on lg and above */}
      <div className="hidden lg:block">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 w-full">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center transition-all duration-300 relative z-0 ${
                activeTab === tab 
                  ? 'text-white'
                  : 'text-gray-300 bg-black'
              }`}
              style={{
                minWidth: '120px',
                borderRadius: 8,
                padding: 2,
                background: activeTab === tab 
                  ? 'linear-gradient(90deg, #F57A00, #7103A4)' 
                  : "#000000",
                margin: '6px',
                width: '100%',
                height: 250,
                maxWidth: 350,
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
                <img src={tabIcons[i]} alt="" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-3" />
                <span className="font-medium text-center text-sm md:text-base">{tab}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Header Section */}
        <div className="max-w-7xl mx-auto mt-16 mb-12">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500">
              {tabHeaders[activeTab].title}
            </h2>
            {tabHeaders[activeTab].subTitle && (
              <h3 className="text-2xl font-semibold text-gray-300 mt-2">
                {tabHeaders[activeTab].subTitle}
              </h3>
            )}
            <p className="text-gray-300 text-lg leading-relaxed">
              {tabHeaders[activeTab].description}
            </p>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="container mx-auto mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                <img 
                  src={contentByTab[activeTab].image} 
                  alt="Security Visual" 
                  className="w-full object-contain "
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 "></div>
              </div>
            </div>

            {/* Right Side: Content Cards */}
            <div className="space-y-8">
              <h2 className="text-[32px] font-bold text-orange-500">
                Key Offerings:
              </h2>
              <ul className="space-y-6">
                {contentByTab[activeTab].offerings.map((offering, index) => (
                  <li key={index} className="space-y-2">
                    <h3 className="text-xl text-orange-500 font-semibold">
                      • {offering.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed pl-4">
                      {offering.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View - visible below lg breakpoint */}
      <div className="lg:hidden space-y-4 px-4">
        {tabs.map((tab, i) => (
          <div key={tab} className="w-full">
            <button
              onClick={() => toggleTab(tab)}
              className="w-full p-[2px] rounded-lg transition-all duration-300"
              style={{
                background: isTabExpanded(tab)
                  ? 'linear-gradient(90deg, #F57A00, #7103A4)'
                  : '#000000',
              }}
            >
              <div className="bg-black rounded-md p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={tabIcons[i]} alt="" className="w-[35px] h-[35px]" />
                  <span className="font-medium text-sm">{tab}</span>
                </div>
                <ChevronRight 
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    isTabExpanded(tab) ? 'rotate-90' : ''
                  }`} 
                />
              </div>
            </button>

            <div 
              className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                isTabExpanded(tab) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {/* Tab Header Content */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-orange-500 mb-3">
                  {tabHeaders[tab].title}
                </h2>
                {tabHeaders[tab].subTitle && (
                  <h3 className="text-xl text-gray-300 mb-2">
                    {tabHeaders[tab].subTitle}
                  </h3>
                )}
                <p className="text-gray-300">
                  {tabHeaders[tab].description}
                </p>
              </div>

              {/* Image */}
              <div className="mb-6">
                <img 
                  src={contentByTab[tab].image} 
                  alt="Security Visual" 
                  className="w-full object-contain rounded-lg"
                />
              </div>

              {/* Offerings Content */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-500">
                  Key Offerings:
                </h2>
                <ul className="space-y-4">
                  {contentByTab[tab].offerings.map((offering, index) => (
                    <li key={index} className="space-y-2">
                      <h3 className="text-lg text-orange-500 font-semibold">
                        • {offering.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed pl-4">
                        {offering.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

// Add custom scrollbar styles to your global CSS
const customScrollbarStyles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #F57A00, #7103A4);
  border-radius: 3px;
}
`;