import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Zap, Eye, Users, FileText, Smartphone, Database, Code } from 'lucide-react';
import tab1 from '../../assest/image/services/tab1.png';
import tab2 from '../../assest/image/services/tab2.png';
import tab3 from '../../assest/image/services/tab3.png';
import tab4 from '../../assest/image/services/tab4.png';
import tab5 from '../../assest/image/services/tab5.png';
import tab6 from '../../assest/image/services/tab6.png';
import tab7 from '../../assest/image/services/tab-1.svg';
import tab8 from '../../assest/image/services/tab-2.svg';
import tab9 from '../../assest/image/services/tab-3.svg';
import tab10 from '../../assest/image/services/tab-4.svg';
import tab11 from '../../assest/image/services/tab7.png';
import tab12 from '../../assest/image/services/tab8.png';
import tab13 from '../../assest/image/services/tab9.png';
import tab14 from '../../assest/image/services/tab10.png';
import tab15 from '../../assest/image/services/tab11.png';
import tab16 from '../../assest/image/services/tab12.png';
import tab17 from '../../assest/image/services/tab13.png';
import tab18 from '../../assest/image/services/tab14.png';
import tab19 from '../../assest/image/services/tab15.png';
import tab20 from '../../assest/image/services/tab16.png';
import tab21 from '../../assest/image/services/tab17.png';
import tab22 from '../../assest/image/services/tab18.png';
import tab23 from '../../assest/image/services/tab19.png';
import tab24 from '../../assest/image/services/tab20.png';
import tab25 from '../../assest/image/services/tab21.png';
import scr1 from '../../assest/image/Source-Code-Review/Group 1202.svg';
import scr2 from '../../assest/image/Source-Code-Review/Group 1203.svg';
import scr3 from '../../assest/image/Source-Code-Review/Group 1241.svg';
import scr4 from '../../assest/image/Source-Code-Review/Group 1244.svg';
import scr5 from '../../assest/image/Source-Code-Review/Group 1245.svg';
import scr6 from '../../assest/image/Source-Code-Review/Group-1.svg';
import scr7 from '../../assest/image/Source-Code-Review/Group.svg';
import scr8 from '../../assest/image/Source-Code-Review/Privacy_engineering_2_.svg';


const tabs = [
  'Web Application Security',
  'Mobile Application Security', 
  'API Security',
  'Source Code Review',
];

const tabContent = {
  'Web Application Security': [
    {
      title: 'Comprehensive Vulnerability Assessment',
      descriptionText: "Thorough Manual and automated testing for OWASP Top 10 risks and beyond,including: ",
      description: [
        "Cross-Site Scripting (XSS), SQL Injection (SQLi), Insecure Direct Object References (IDOR), CSRF ",
        "Server-Side Request Forgery (SSRF), Host Header Injection, and other advanced web-layer flaws",
        "Identification of outdated or vulnerable third-party libraries via SCA (Software Composition Analysis). "
      ],
      icon: <Eye className="w-6 h-6" />,
      image: tab11
    },
    {
      title: 'Authentication, Authorization & Session Security Testing',
      description: [
        "Analysis of login, logout, forget password, credential reset workflow etc.",
        "Broken Access Control (BAC) and Bypassing RBAC ",
        "Privilege escalation paths",
        "Session Lifecycle Management, Tokens, Cookies related attacks ",
        "Review of Single Sign On and attacks around OAuth 2.0, SAML, OIDC, Kerberose, MFA Settings and other relevant controls"
      ],
      icon: <Lock className="w-6 h-6" />,
      image: tab12
    },
    {
      title: 'Business Logic Abuse & Workflow Tampering ',
      description: [
        "Identification of logic flaws unique to the application's functionality (e.g.,price manipulation, coupon abuse, order manipulation) ",
        "Skip mandatory steps in multi-stage processes (e.g., bypassing payment to reach confirmation) ",
        "Bypassing Approval Gates (e.g., Bypassing maker-checker controls in payment workflow) ",
        "Race conditions, Double spending attacks or submit duplicate transactions to generate refunds or loyalty credits repeatedly",
        "Access restricted areas or APIs intended only for paid or enterprise-tier users "
      ],
      icon: <Zap className="w-6 h-6" />,
      image: tab13
    },
    {
      title: 'Client-Side Security Review ',
      descriptionText: "Modern web applications rely heavily on rich client-side logic written in JavaScript and executed in users' browsers. This layer is often overlooked in security assessments, despite it being a critical attack vector ",
      description: [
        "DOM-Based XSS, Client-Side Injection, Clickjacking scenarios",
        "Insecure JavaScript Libraries and Dependencies",
        "Clickjacking scenarios using frames or invisible elements.",
        "Browser Memory, Session Memory, HTML5 Local Storage, IndexDB and Cache Leakage",
        "Insecure Use of Web Workers and Service Workers"
      ],
      icon: <Shield className="w-6 h-6" />,
      image: tab14
    },
    {
      title: 'API-Driven Frontend & SPA Testing (Single Page Application)',
      description: [
        "Deep inspection of APIs consumed by frontend frameworks (e.g., React,Angular, Vue), including GraphQL and REST endpoints. ",
        "Evaluate if frontend enforces access control in addition to backend ",
        "Test for Broken Object Level Authorization (BOLA/IDOR) in API endpoints",
        "Header manipulation attacks (e.g., modifying Origin, Referer, or X-Forwarded-For) to bypass protections. "
      ],
      icon: <Users className="w-6 h-6" />,
      image: tab15
    },
    {
      title: 'Deployment and Configuration Review',
      description: [
        "Identification of publicly accessible dashboards, consoles, and panels",
        "Review of Verbose Error Messages and Stack Traces",
        "Exposed secrets in environment variables",
        "Scan for components using factory-set usernames and passwords",
        "Insecure script execution or excessive permissions (e.g., root builds)"
      ],
      icon: <FileText className="w-6 h-6" />,
      image: tab16
    },
    {
      title: 'Network Configuration Review',
      descriptionText: "",
      description: [
        "Missing or insecure settings: X-Frame-Options, X-Content-Type-Options,Referrer-Policy, Strict-Transport-Security-Security, Content-Security-Policy etc. ",
        "Review of DNS settings, Dangling Domains, BGP Routing against best practices ",
        "SSL Configuration such as HTTP to HTTPS redirection, weak ciphers, mTLS settings etc. ",
        "Web Application Firewall configurations (e.g. ensuring WAF is not in learning mode, positive security rules are enabled, custom err ",
        "Unintended exposure of subdomain, Dev environments and network ports.",
        "Presence and effectiveness of DDOS protection service."
      ],
      icon: <FileText className="w-6 h-6" />,
      image: tab17
    },
  ],
  'Mobile Application Security': [
    {
      title: 'Static & Dynamic Analysis (SAST & DAST)',
      description: [
        "Perform static analysis to detect hardcoded credentials, insecure API usage,and sensitive data exposure within the source code. ",
        "Conduct dynamic analysis to inspect runtime behavior, monitor traffic, and identify memory-level leaks or insecure data storage. ",
        "Evaluate app behavior under rooted/jailbroken environments to identify privilege abuse or hidden debug functionalities. "
      ],
      icon: <Eye className="w-6 h-6" />,
      image: tab1
    },
    {
      title: 'Authentication & Session Management',
      description: [
        "Review authentication workflows including MFA, biometric auth, and password reset logic. ",
        "Analyze session lifecycle: token storage, renewal, and invalidation mechanisms. ",
        "Validate cookie and token handling against hijacking, fixation, and replay scenarios. "
      ],
      icon: <Lock className="w-6 h-6" />,
      image: tab2
    },
    {
      title: 'Insecure Implementation of Business Logic',
      description: [
        "Server-Side Trust on Client Input - Evaluate critical flows where the server relies on client-provided parameters (e.g., pricing, discounts, reward points) without proper validation. ",
        "Broken State Management - Assess scenarios where multi-step processes (e.g., checkout, onboarding) can be skipped, replayed, or interrupted to gain unauthorized benefits ",
        "Identify weaknesses in purchase, transfer, or payment flows where parameters can be manipulated to affect financial outcomes or user balances "
      ],
      icon: <Zap className="w-6 h-6" />,
      image: tab3
    },
    {
      title: 'Code Obfuscation, Reverse Engineering & Tamper Resistance',
      description: [
        "Analyze APK/IPA for exposed logic, API endpoints, or embedded secrets, Tokens, Passwords etc. ",
        "Evaluate obfuscation strength (e.g., ProGuard, R8, DexGuard) and anti-reverse engineering controls.",
        "Test for tamper detection, checksum validation, and root/jailbreak resilience.",
        "Bypassing SSL Pinning, Mutual TLS and other Mobile App security Controls"
      ],
      icon: <Shield className="w-6 h-6" />,
      image: tab4
    },
    {
      title: 'Client-Side Business Logic Abuse & UX-layer Bypasses',
      description: [
        "Test for bypassable UI restrictions, disabled features, and hidden elements via layout manipulation. ",
        "Alter client-enforced limits (e.g., transaction amount, location restrictions) without triggering server-side checks. ",
        "Explore abuse of offline modes and local data sync to influence backend logic "
      ],
      icon: <Users className="w-6 h-6" />,
      image: tab5
    },
    {
      title: 'Third-Party Library & SDK Usage',
      description: [
        "Review integrated SDKs for over-permissive access, outdated versions, and insecure data collection.",
        "Identify privacy violations (e.g., unintended data sharing with analytics or crash-reporting SDKs). ",
        "Validate SDK behavior under dynamic instrumentation and ensure compliance with data protection laws."
      ],
      icon: <FileText className="w-6 h-6" />,
      image: tab6
    },
  ],
  'API Security': [
    {
      title: 'Comprehensive API Vulnerability Assessment ',
      descriptionText: "Deep security testing of REST, GraphQL, gRPC, and SOAP APIs, including endpoint fuzzing, injection testing, and protocol-specific abuse detection. ",
      icon: <Lock className="w-6 h-6" />,
      image: tab18
    },
    {
      title: 'Authentication & Authorization Testing',
      descriptionText: "Testing of OAuth2, JWT, API key, and custom token flows to uncover insecure token storage, replay attacks, broken scopes, and privilege escalation. ",
      icon: <Zap className="w-6 h-6" />,
      image: tab19
    },
    {
      title: 'Broken Object Level Authorization (BOLA) & Mass Assignment Testing',
      descriptionText: "Validation of object access control and detection of insecure data binding flaws common in multi-tenant or user-specific API contexts. ",
      icon: <Shield className="w-6 h-6" />,
      image: tab20
    },
    {
      title: 'Business Logic Abuse & Workflow Manipulation ',
      descriptionText: "Mapping of API flows to business operations to identify logic flaws, race conditions, and abuse vectors not detectable by scanners. ",
      icon: <Eye className="w-6 h-6" />,
      image: tab21
    },
    {
      title: 'Rate Limiting, Throttling & Abuse Resistance Testing ',
      descriptionText: "Testing APIs against brute-force attacks, function flooding, enumeration attempts, and bypasses of anti-automation controls.",
      icon: <FileText className="w-6 h-6" />,
      image: tab22
    },
    {
      title: 'Insecure API Schema, Versioning, and Verb Tampering Checks ',
      descriptionText: "Validation of improper input validation, undocumented endpoints, and insecure HTTP verb usage (e.g., hidden PUT/DELETE endpoints).",
      icon: <Users className="w-6 h-6" />,
      image: tab23
    },
    {
      title: 'GraphQL & gRPC Deep Testing ',
      descriptionText: "Abuse detection for query injection, nested introspection, excessive depth, and schema misconfiguration in modern API protocols. ",
      icon: <Users className="w-6 h-6" />,
      image: tab24
    },
    {
      title: 'Security Header and Transport Layer Evaluation ',
      descriptionText: "Verification of TLS configuration, CORS policy abuse, improper content negotiation, and insecure redirection handling. ",
      icon: <Users className="w-6 h-6" />,
      image: tab25
    },
  ],
  'Source Code Review': [
    {
      title: 'Manual Secure Code Review ',
      descriptionText: "Line-by-line, human-led deep analysis of source code for security flaws including logic vulnerabilities, insecure data handling, and faulty authentication mechanisms.",
      icon: <AlertTriangle className="w-6 h-6" />,
      image: scr1
    },
    {
      title: 'Automated Static Code Analysis Integration',
      descriptionText: "Incorporation of SAST tools in CI/CD pipelines to catch issues early across common languages (Java, Python, Go, C#, JavaScript, etc.). ",
      icon: <Eye className="w-6 h-6" />,
      image: scr2
    },
    {
      title: 'Custom Business Logic Abuse Detection',
      descriptionText: "Identification of flaws unique to your application's workflows, like insecure trading algorithms, authorization bypass in invoice systems, or misuse of cryptographic keys.",
      icon: <Lock className="w-6 h-6" />,
      image: scr8
    },
    {
      title: 'Secrets and Credential Leakage Discovery',
      descriptionText: "Scanning for hardcoded secrets, tokens, passwords, and misconfigured environment variables often left behind in repositories or debug functions.",
      icon: <FileText className="w-6 h-6" />,
      image: scr3
    },
    {
      title: 'Secure Dependency & Third-party Library Audit ',
      descriptionText: "Detection of outdated or vulnerable libraries, unsafe imports, and lack of verification mechanisms (e.g., unchecked deserialization or prototype pollution vectors).",
      icon: <Shield className="w-6 h-6" />,
      image: scr4
    },
    {
      title: 'Code Pattern Reuse & Attack Surface Expansion Check',
      descriptionText: "Detection of insecure code reuse patterns across microservices or libraries, especially in shared authentication or data access layers. ",
      icon: <Zap className="w-6 h-6" />,
      image: scr5
    },
        {
      title: 'Security Regression Review Post-Fix ',
      descriptionText: "Verification that previously identified vulnerabilities were fixed correctly, without introducing new security issues or breaking functionality. ",
      icon: <Zap className="w-6 h-6" />,
      image: scr7
    },
        {
      title: 'Source-Control History Analysis (Optional)',
      descriptionText: "Git commit analysis to identify accidental secrets exposure, vulnerable code rollbacks, and misconfigured merges. ",
      icon: <Zap className="w-6 h-6" />,
      image: scr6
    },
  ],
};

const tabIcons = [
  tab7, // Web Application Security
  tab8, // Mobile Application Security
  tab9, // API Security
  tab10 // Source Code Review
];

const getTabIcon = (tabName) => {
  switch(tabName) {
    case 'Web Application Security': return <Shield className="w-5 h-5" />;
    case 'Mobile Application Security': return <Smartphone className="w-5 h-5" />;
    case 'API Security': return <Database className="w-5 h-5" />;
    case 'Source Code Review': return <Code className="w-5 h-5" />;
    default: return <Shield className="w-5 h-5" />;
  }
};

const generateTabId = (tabName: string) => {
  return tabName.toLowerCase().replace(/\s+/g, '-');
};

export default function SecurityTestingSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [expandedTabs, setExpandedTabs] = useState<string[]>([]);

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

  // Memoize the current tab's content
  const currentTabContent = React.useMemo(() => tabContent[activeTab], [activeTab]);

  return (
    <div className="container mx-auto text-white pt-10" id='applicationsecurity'>
      {/* Header Section */}
      <div id='explore-now' className="text-center mb-12 px-8">
        <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-4 text-orange-500 line-heading-tight">
          Application Security Assesment, <br />Tailored For Every Platform
        </h2>
        <p className="text-white-400 text-lg max-w-5xl mx-auto mb-2">
          Think your app is safe? So did everyone before they got breached. Because "It Won't Happen to Us" is not a strategy.
         One-size-fits-all doesn't work for security. That's why we specialize in below targeted areas.
        </p>
      </div>

      {/* Desktop View - visible on lg and above */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 w-full">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              id={generateTabId(tab)}
              onClick={() => {
                setActiveTab(tab);
                window.history.pushState(null, '', `#${generateTabId(tab)}`);
              }}
              className={`flex flex-col items-center transition-all duration-300 relative z-0 ${
                activeTab === tab ? 'text-white' : 'text-gray-300 bg-black'
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

        {/* Desktop Content Section */}
        <div className="max-w-7xl mx-auto">
          <div className="relative flex flex-col items-center px-8">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#5A5A5A] z-0"></div>
            <div className="w-full">
              {currentTabContent.map((item, index) => (
                <div key={index} className="relative flex items-start w-full my-12">
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      style={{ background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)' }}>
                      {index + 1}
                    </div>
                  </div>
                  <div className={`flex-1 flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center pl-20 md:pl-0`}>
                    <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                      <div className="w-full md:w-[100%] h-[250px] items-center justify-center">
                        <img src={item.image} alt="" className="object-contain w-full h-full" />
                      </div>
                    </div>
                    <div className="w-0 md:w-28"></div>
                    <div className="w-full md:w-1/2 flex justify-start md:justify-end">
                      <div className="backdrop-blur-sm transition-all duration-300 max-w-lg w-full shadow-lg flex flex-col items-start text-left">
                        <h3 className="text-xl font-semibold mb-3 tabs-heading">{item.title}</h3>
                        {item.descriptionText && <p className="mb-2 text-white-300">{item.descriptionText}</p>}
                        {Array.isArray(item.description) ? (
                          <ul className="text-white-400 leading-relaxed list-disc pl-6">
                            {item.description.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white-400 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden space-y-2 px-4">
        {tabs.map((tab, i) => (
          <div key={tab} className="w-full">
            <button
              id={`${generateTabId(tab)}`}
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
              <div className="bg-black rounded-md p-3 flex items-center justify-between">
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
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-white opacity-20"></div>
                
                {/* Content items */}
                <div className="space-y-8">
                  {tabContent[tab].map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline number */}
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

                      {/* Content */}
                      <div className="pl-20">
                        <div className="w-full">
                          <img src={item.image} alt="" className="w-full h-[200px] object-contain mb-4" />
                          <h3 className="text-xl font-semibold tabs-heading mb-3">{item.title}</h3>
                          {item.descriptionText && (
                            <p className="mb-3 text-white-300">{item.descriptionText}</p>
                          )}
                          {Array.isArray(item.description) && (
                            <ul className="text-white-400 list-disc pl-6 space-y-2">
                              {item.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          )}
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
    </div>
  );
}