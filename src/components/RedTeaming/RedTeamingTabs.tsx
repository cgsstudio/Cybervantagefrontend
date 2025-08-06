import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Smartphone, Database, Code, Eye, Lock, Zap, AlertTriangle, Users, FileText, Globe, Monitor, ChevronRight } from 'lucide-react';
import Networktabs from '../../assest/image/digitalfinanceicon/fraud.svg';
import Networktabs1 from '../../assest/image/digitalfinanceicon/openbanking.svg';
import Networktabs2 from '../../assest/image/digitalfinanceicon/atm.svg';
import Networktabs3 from '../../assest/image/digitalfinanceicon/iot.svg';
import redteam1 from '../../assest/image/services/tab-1.svg';
import redteam2 from '../../assest/image/services/tab-2.svg';
import redteam3 from '../../assest/image/services/tab-3.svg';
import redteam4 from '../../assest/image/services/tab-4.svg';
import apt1 from '../../assest/image/Advanced-Penetration-Testingimage/Group-1.svg';
import apt2 from '../../assest/image/Advanced-Penetration-Testingimage/Group.svg';
import apt3 from '../../assest/image/Advanced-Penetration-Testingimage/Group-1246.svg';  
import apt4 from '../../assest/image/Advanced-Penetration-Testingimage/Group-1247.svg';
import art1 from '../../assest/image/AI-Red-Teamingimage/Frame.svg';
import art2 from '../../assest/image/AI-Red-Teamingimage/Group 1249.svg';
import art3 from '../../assest/image/AI-Red-Teamingimage/Illustration.svg';
import art4 from '../../assest/image/AI-Red-Teamingimage/Speech_Bubble.svg';
import zdh1 from '../../assest/image/Zero-Day-Hunting/Frame-1.svg';
import zdh2 from '../../assest/image/Zero-Day-Hunting/Frame.svg';
import zdh3 from '../../assest/image/Zero-Day-Hunting/Group.svg'; 
import zdh4 from '../../assest/image/Zero-Day-Hunting/OBJECTS.svg';
import ddos1 from '../../assest/image/ddos-simulation/Frame-1.svg';
import ddos2 from '../../assest/image/ddos-simulation/Frame.svg'; 
import ddos3 from '../../assest/image/ddos-simulation/Group-1.svg';
import ddos4 from '../../assest/image/ddos-simulation/Group.svg';


const tabIcons = [
  Networktabs,    // Web Application Security
  Networktabs1,   // Mobile Application Security
  Networktabs2,   // API Security
  Networktabs3    // Source Code Review
];

const tabs = [
  'Advanced Penetration Testing',
  'DDOS Simulation', 
  'AI Red Teaming',
  'Zero Day Hunting',
];

const tabDescriptions = {
  'Advanced Penetration Testing': {
    title: 'Advanced Penetration Testing',
    description: 'Our Advanced Penetration Testing simulates sophisticated cyber attacks to uncover deep vulnerabilities that standard assessments might miss. We combine human expertise with advanced tooling to identify complex attack chains and business logic flaws.',
  },
  'DDOS Simulation': {
    title: 'DDOS Simulation & Testing',
    description: 'Validate your DDoS resilience through controlled simulation of various attack vectors. We test your infrastructure\'s ability to withstand volumetric attacks, protocol abuse, and application-layer exhaustion while maintaining service availability.',
  },
  'AI Red Teaming': {
    title: 'AI Red Teaming',
    description: 'As AI systems become central to business operations, they present unique security challenges. Our AI Red Team specializes in testing machine learning models, training data integrity, and AI-powered security controls against adversarial attacks.',
  },
  'Zero Day Hunting': {
    title: 'Zero Day Vulnerability Research',
    description: 'Our expert researchers conduct deep technical analysis to discover previously unknown vulnerabilities in your critical systems before attackers do. We focus on high-impact flaws that could lead to system compromise.',
  }
};

const tabContent = {
  'Advanced Penetration Testing': [
    {
      title: 'External Perimeter Compromise',
      description: [
        "Testing public-facing assets (e.g., portals, APIs, email servers) for vulnerabilities such as RCE, SSRF, IDOR, and exposed admin panels.",
        "Example: Gaining initial access via a forgotten subdomain still running a vulnerable Jenkins server."
      ],
      image: apt1
    },
    {
      title: 'Lateral Movement Simulation',
      description: [
        "Exploiting trust relationships, misconfigured Active Directory privileges, and pass-the-hash/ticketing techniques to traverse internal systems.",
        "Example: Pivoting from a misconfigured jump box to domain controllers using stolen cached credentials."
      ],
      image: apt2
    },
    {
      title: 'Privileged Escalation and Domain Takeover',
      description: [
        "Chaining misconfigurations (e.g., GPO abuse, Kerberoasting, unconstrained delegation) to compromise privileged accounts or entire domains.",
        "Example: Escalating from a service account to domain admin through an unconstrained delegation flaw."
      ],
      image: apt4
    },
    {
      title: 'Data Exfiltration Simulation',
      description: [
        "Exfiltrating sensitive data while evading detection mechanisms (e.g., via DNS tunneling, encrypted channels).",
        "Example: Exfiltrating production secrets using DNS exfiltration without triggering DLP or anomaly alerts."
      ],
      image: apt3
    }
  ],
  'DDOS Simulation': [
    {
      title: 'Simulated Fraud Scenarios',
      description: [
        "Emulating real-world fraudulent activities like refund fraud, credit card fraud, bitcoin/crypto, promo abuse, fake account creation, synthetic identity usage.",
        "Example: Successfully abusing an e-commerce site's promo engine to create unlimited coupons via race condition."
      ],
      image: ddos2
    },
    {
      title: 'Business Logic Bypass',
      description: [
        "Identifying flaws in KYC/AML workflows, payment gateways, transaction verification, and approval hierarchies.",
        "Example: Bypassing OTP validation during high-value cross-border payment settlement transfers using intercepted token replay."
      ],
      image: ddos4
    },
    {
      title: 'Insider Threat Simulation',
      description: [
        "Assessing impact of compromised employees or suppliers exploiting access to critical systems and workflows.",
        "Example: Accessing customer PII and modifying loan approvals by abusing misconfigured internal dashboards."
      ],
      image: ddos1
    },
    {
      title: 'Detection & Response Evaluation',
      description: [
        "Measuring how effectively the SOC detects and reacts to simulated fraud patterns or behavior anomalies.",
        "Example: Mimicking rapid transaction spikes or location anomalies to test fraud engine thresholds."
      ],
      image: ddos3
    }
  ],
  'AI Red Teaming': [
    {
      title: 'Model Poisoning & Adversarial Inputs',
      description: [
        "Testing robustness of ML models against crafted inputs that manipulate outputs or leak training data.",
        "Example: Triggering false negatives in fraud detection models using adversarial transaction patterns."
      ],
      image: art2
    },
    {
      title: 'Prompt Injection & Model Manipulation',
      description: [
        "Injecting malicious content into user prompts to alter LLM behavior, data access, or bypass ethical boundaries.",
        "Example: Causing a chatbot to leak internal admin functions via hidden prompt chaining."
      ],
      image: art1
    },
    {
      title: 'Model Abuse & Overfitting Detection',
      description: [
        "Testing how AI-based systems (recommendation engines, biometric verifiers) can be manipulated by attacker-controlled inputs.",
        "Example: Bypassing face recognition with AI-generated deepfake imagery or print spoofing."
      ],
      image: art4
    },
    {
      title: 'Data Leakage & Inference Risks',
      description: [
        "Evaluating if models are unintentionally leaking sensitive information from training sets.",
        "Example: Extracting real user data from generative models trained without proper differential privacy controls."
      ],
      image: art3
    }
  ],
  'Zero Day Hunting': [
    {
      title: 'Source Code Analysis & Fuzzing',
      description: [
        "Analyzing proprietary apps, firmware, or open-source components for memory corruption, logic bugs, or hardcoded secrets.",
        "Example: Discovering a heap overflow in a router's firmware update parser through binary fuzzing."
      ],
      image: zdh4
    },
    {
      title: 'Protocol Abuse & Stack Attacks',
      description: [
        "Testing undocumented behaviors or edge cases in custom protocols, libraries, or integrations.",
        "Example: Crashing custom IoT communication stacks using malformed MQTT payloads."
      ],
      image: zdh3
    },
    {
      title: 'Supply Chain Vulnerability Discovery',
      description: [
        "Identifying unpatched vulnerabilities in embedded third-party components or SDKs.",
        "Example: Finding a zero-day in a widely used medical device SDK exposing hospital patient networks."
      ],
      image: zdh1
    },
    {
      title: 'Cloud-Specific Attack Vectors',
      description: [
        "Assessing cloud consoles, IAM roles, metadata services, and cloud-managed services for undisclosed flaws.",
        "Example: Discovering SSRF-to-RCE in a cloud load balancer diagnostic API used by multiple financial firms."
      ],
      image: zdh2
    }
  ]
};

const getTabIcon = (tabName) => {
  switch(tabName) {
    case 'Advanced Penetration Testing ': return <Shield className="w-5 h-5" />;
    case 'DDOS Simulation': return <Smartphone className="w-5 h-5" />;
    case 'AI Red Teaming': return <Database className="w-5 h-5" />;
    case 'Zero Day Hunting': return <Code className="w-5 h-5" />;
    default: return <Shield className="w-5 h-5" />;
  }
};

const generateTabId = (tabName: string) => {
  return tabName.toLowerCase().replace(/\s+/g, '-');
};

const RedTeamingTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [expandedTabs, setExpandedTabs] = useState<string[]>([]);

  // Add useEffect for hash navigation
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const matchingTab = tabs.find(tab => generateTabId(tab) === hash);
      if (matchingTab) {
        setActiveTab(matchingTab);
      }
    }
  }, []);

  const toggleTab = (tab: string) => {
    setExpandedTabs(prev => 
      prev.includes(tab) 
        ? prev.filter(t => t !== tab)
        : [...prev, tab]
    );
  };

  const isTabExpanded = (tab: string) => expandedTabs.includes(tab);

  const currentTabContent = React.useMemo(() => tabContent[activeTab] || [], [activeTab]);

  return (
    <div className="text-white" id='redteaming'>
      <div id='explore-now' className="container mx-auto px-8 pt-8 lg:pt-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-4 text-white">
            Red Teaming Services
          </h2>
          <p className="text-white-400 text-lg max-w-6xl mx-auto">
          Experience where your organization’s security stands when our most elite hackers target your organization. From phishing and lateral movement to privilege escalation and exfiltration, we test your organization the way real attackers would: no shortcuts, no assumptions.
          </p>
        </div>

        {/* Desktop View - visible on lg and above */}
        <div className="hidden lg:block">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center  mb-12 w-full">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                id={generateTabId(tab)}
                onClick={() => {
                  setActiveTab(tab);
                  window.history.pushState(null, '', `#${generateTabId(tab)}`);
                }}
                className={`flex flex-col items-center transition-all duration-300  relative z-0 ${
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
                    : '#000000',
                  margin: '6px',
                  width: '100%',
                  height: 200,
                  maxWidth: window.innerWidth >= 1024 && window.innerWidth <= 1535 ? 210 : 350,
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

          {/* Tab-specific Heading and Paragraph */}
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-orange-500 mb-4 leading-none">
              {tabDescriptions[activeTab].title}
            </h2>
            <p className="text-white-300 max-w-4xl mx-auto mt-5">
              {tabDescriptions[activeTab].description}
            </p>
          </div>

          {/* Responsive Timeline Content Section */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Desktop Timeline - Zigzag */}
              <div className="hidden md:flex flex-col items-center">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#5A5A5A] z-0"></div>
                <div className="w-full">
                  {currentTabContent.map((item, index) => {
                    const isEven = index % 2 === 1;
                    return (
                      <div
                        key={index}
                        className="relative flex items-center w-full my-12"
                        style={{ minHeight: 160 }}
                      >
                        <div className="absolute left-1/2 -translate-x-1/2 z-10">
                          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            style={{
                              background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)'
                            }}>
                            {index + 1}
                          </div>
                        </div>

                        <div className={`flex-1 flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center`}>
                          <div className="w-1/2 flex justify-center">
                            <div className="w-[100%] h-[250px] flex items-center justify-center">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="object-contain w-full h-full" 
                              />
                            </div>
                          </div>

                          <div className="w-28"></div>

                          <div className="w-1/2 flex justify-center md:justify-end">
                            <div className="backdrop-blur-sm transition-all duration-300 max-w-lg w-full shadow-lg flex flex-col items-start text-left">
                              <h3 className="text-xl font-semibold mb-4 tabs-heading text-orange-500">{item.title}</h3>
                              <ul className="list-disc pl-6 text-white space-y-3">
                                {item.description.map((text, i) => (
                                  <li key={i} className="text-base">{text}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Timeline - Single Column with Left Numbers */}
              <div className="md:hidden">
                <div className="relative">
                  {/* Vertical line on the left */}
                  <div className="absolute left-7 top-0 bottom-0 w-1 bg-white z-0"></div>
                  
                  {currentTabContent.map((item, index) => (
                    <div key={index} className="relative flex mb-8 last:mb-0">
                      {/* Number circle on the left */}
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10"
                          style={{
                            background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)'
                          }}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        {/* Image */}
                        <div className="mb-4">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-contain" 
                          />
                        </div>
                        
                        {/* Text Content */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-orange-500">{item.title}</h3>
                          <ul className="list-disc pl-5 text-white space-y-2">
                            {item.description.map((text, i) => (
                              <li key={i} className="text-sm leading-relaxed">{text}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - visible below lg breakpoint */}
        <div className="lg:hidden space-y-4">
          {tabs.map((tab, i) => (
            <div key={tab} className="w-full">
              <button
                id={`mobile-${generateTabId(tab)}`}
                onClick={() => {
                  toggleTab(tab);
                  window.history.pushState(null, '', `#${generateTabId(tab)}`);
                }}
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
                {/* Tab Description */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-3">
                    {tabDescriptions[tab].title}
                  </h2>
                  <p className="text-gray-300">
                    {tabDescriptions[tab].description}
                  </p>
                </div>

                {/* Content Items */}
                <div className="relative">
                  <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-white opacity-20"></div>
                  <div className="space-y-8">
                    {tabContent[tab].map((item, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="absolute left-0 z-10">
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            style={{
                              background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)'
                            }}
                          >
                            {index + 1}
                          </div>
                        </div>
                        <div className="pl-20">
                          <div className="w-full">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-[200px] object-contain mb-4" 
                            />
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">{item.title}</h3>
                            <ul className="list-disc pl-5 text-white space-y-2">
                              {item.description.map((text, i) => (
                                <li key={i} className="text-sm leading-relaxed">{text}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Keep existing background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default RedTeamingTabs;