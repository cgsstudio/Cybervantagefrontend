import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Smartphone, Database, Code, Eye, Lock, Zap, AlertTriangle, Users, FileText, Globe, Monitor, ChevronRight } from 'lucide-react';
import Networktabs from '../../assest/image/services/Networktab1.svg';
import Networktabs1 from '../../assest/image/services/Networktab2.svg';
import Networktabs2 from '../../assest/image/services/Networktab3.svg';
import Networktabs3 from '../../assest/image/services/Networktab4.svg';
import Accordion from '../../assest/image/services/Accordion.png';
import dns1 from '../../assest/image/NetworkPenetrationslider/1.1.png';
import dns2 from '../../assest/image/NetworkPenetrationslider/1.2.png';
import firewall1 from '../../assest/image/NetworkPenetrationslider/2.2.png';
import firewall2 from '../../assest/image/NetworkPenetrationslider/2.2.png';
import firewall3 from '../../assest/image/NetworkPenetrationslider/2.3.png';
import proxy1 from '../../assest/image/NetworkPenetrationslider/3.1.png';
import proxy2 from '../../assest/image/NetworkPenetrationslider/3.2.png';
import vpn1 from '../../assest/image/NetworkPenetrationslider/4.1.png';
import vpn2 from '../../assest/image/NetworkPenetrationslider/4.2.png';

const tabIcons = [
  Networktabs,    // Web Application Security
  Networktabs1,   // Mobile Application Security
  Networktabs2,   // API Security
  Networktabs3    // Source Code Review
];

const tabs = [
  'DNS Security',
  'Firewall and Edge Devices', 
  'Corporate Proxy & Captive Portals',
  'Remote Access – VPN and ZTNA Infrastructure',
];

const tabContent = {
  'DNS Security': [
    {
      title: ' Public DNS Assessment ',
      heading2: 'Key Assessment Areas:',
      description: [
        { label: 'Zone Transfer (AXFR) Misconfiguration', text: "Detect open or misconfigured name servers that allow unauthorized zone transfers, exposing a complete inventory of internal or external subdomains." },
        { label: 'Subdomain Takeover Risks', text: "Identify dangling DNS records (CNAMEs, A, or NS) pointing to deprovisioned third-party services (e.g., AWS S3, GitHub Pages, Heroku), enabling attackers to hijack your subdomain and host malicious content." },
        { label: 'Enumeration Resistance', text: "Evaluate DNS record entropy and protection against automated bruteforcing of subdomains through techniques like wildcard records and split-horizon DNS. " },
        { label: 'DNSSEC Configuration', text: "Review the implementation and validity of DNS Security Extensions to prevent spoofed or forged DNS responses in transit. " },
        { label: 'Exposure of Sensitive Records ', text: "Identify TXT, SPF, DMARC, or misused SRV records leaking internal infrastructure details, mail server mappings, or VPN endpoints. " }
      ],
      image: dns1
    },
    {
      title: 'Internal DNS Assessment',
      heading2: 'Key Assessment Areas:',
      description: [
        { label: 'Recursive Resolver Behavior & Cache Poisoning', text: "Assess internal resolvers for vulnerabilities to cache poisoning, lack of query validation, or improper upstream trust chains. " },
        { label: 'Name Spoofing & Response Forging', text: "Validate protections against malicious responses crafted to impersonate legitimate internal domains or resolve attacker-controlled hosts." },
        { label: 'Split-Horizon DNS Validation ', text: "Review the separation between internal and public zones to prevent data leakage or cross-zone contamination. Assess whether internal-only records are improperly exposed externally. " },
        { label: 'Access Control on Zone Modifications ', text: "Evaluate who can create, update, or delete internal records. Improper ACLs could allow low-privilege users to redirect traffic or hijack service resolution. " },
        { label: 'Unsecured Dynamic DNS Updates', text: "Detect whether endpoints can register records without authentication—commonly abused for persistence by malware and rogue devices." }
      ],
      image: dns2
    },
  ],
  'Firewall and Edge Devices': [
    {
      title: 'Network Firewall Assessment (Perimeter & Segmentation)',
      descriptionText: 'Network firewalls enforce segmentation between external and internal networks, as well as between trust zones. We perform both black-box and authenticated configuration reviews. ',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'Rule Base Review & Cleanup', text: "Identify overly permissive rules (e.g., any-any, wildcard sources/destinations), shadowed rules, obsolete entries, and service misclassifications. " },
        { label: 'Firewall Evasion Techniques', text: "Test the firewall's resistance to obfuscation techniques like packet fragmentation, port hopping, or malformed traffic that bypasses standard filtering. " },
        { label: 'Zone Segmentation Validation', text: "Validate segmentation controls between trusted, DMZ, and untrusted zones, ensuring critical internal assets are not exposed or reachable. " },
        { label: 'Administrative Interface Exposure', text: "Scan for exposed management interfaces (SSH, Telnet, SNMP, HTTPS) from untrusted networks, often a precursor to lateral movement or device takeover. " },
        { label: 'Unsecured Dynamic DNS Updates', text: "Detect whether endpoints can register records without authentication—commonly abused for persistence by malware and rogue devices." }
      ],
      image: firewall1
    },
    {
      title: 'Web Application Firewall (WAF) Evaluation',
      descriptionText: 'WAFs are designed to protect web applications from injection attacks, protocol abuse, and data leakage. We assess both rule configuration and bypass resistance. ',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'Rule Set Evaluation & Attack Simulation Base Review & Cleanup', text: "Test effectiveness against OWASP Top 10 attacks (e.g., SQLi, XSS, SSRF), including payload obfuscation and encoding to test bypass resilience. " },
        { label: 'Positive & Negative Security Model Testing', text: "Evaluate whether the WAF relies on signature-based detection (negative security) or tight request validation (positive model), and identify evasion paths accordingly. " },
        { label: 'WAF Placement & SSL Offloading Review ', text: "Confirm proper inline deployment, SSL inspection capability, and behavior under load or fail-open conditions. " },
        { label: 'False Positive & Logging Behavior', text: "Assess logging granularity, alerting thresholds, and how well WAFs handle non-malicious but unexpected input (important for usability and tuning)." },
      ],
      image: firewall2
    },
    {
      title: 'Host-Based Firewall Review (Endpoint Defense)',
       descriptionText: 'Local firewalls are often the last line of defense for endpoint and server hardening. We evaluate their configuration and resistance to local exploitation. ',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'Inbound/Outbound Filtering Rules', text: "Review if workstations and servers restrict inbound traffic from peer systems and only allow required outbound connectivity to enterprise services. " },
        { label: 'Unauthorized Service Exposure', text: "Discover open services (e.g., SMB, RDP, RPC) on endpoints that are unintentionally exposed due to misconfigured host firewall rules." },
        { label: 'Application-Based Filtering', text: "Assess if firewall policies apply granular controls based on application binaries and paths, minimizing risks from rogue binaries or impersonation. " },
        { label: 'Enforcement Consistency Across OS Variants', text: "Ensure firewall policies are uniformly applied across Windows, Linux, and Mac endpoints via centralized policy enforcement (e.g., via GPO, MDM, or Ansible). " },
      ],
      image: firewall3
    },
  ],
  'Corporate Proxy & Captive Portals': [
    {
      title: 'Corporate Proxy Assessment',
      descriptionText: 'Corporate proxies serve as control and visibility points for outbound internet traffic. They enforce acceptable use policies, provide malware filtering, and block unauthorized connections. Misconfigurations can allow bypass, data leakage, or abuse of trusted proxy behaviors. ',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'Proxy Bypass Techniques', text: "Identify ways to circumvent proxy restrictions via tunneling (e.g., HTTPS over port 443, SSH tunneling, DNS tunneling), proxy-aware applications, or IP-based direct connections. " },
        { label: 'Authentication and Session Handling', text: "Assess NTLM/Kerberos authentication schemes, session reuse, credential relay attacks, and abuse of trusted internal headers (e.g., X-Forwarded-For, X-Authenticated-User). " },
        { label: 'Content Filtering and SSL Interception Gaps', text: "Evaluate effectiveness of domain and category-based filtering, test for gaps in SSL inspection that allow traffic exfiltration through uninspected HTTPS or cloud services (e.g., GitHub, Pastebin). " },
        { label: 'Misuse of Trusted Certificate Chains', text: "Review the implementation of enterprise root certificates for SSL interception, and check for the risk of user-controlled MITM via custom certs in mobile or unmanaged endpoints. " },
      ],
      image: proxy1
    },
    {
      title: 'Captive Portal Security Evaluation',
      descriptionText: 'Captive portals are often used in guest networks, BYOD setups, or remote work hotspots to enforce access control before full network access is granted. If misconfigured, they can leak sensitive information, enable MAC spoofing, or allow unauthorized access to internal assets. ',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'MAC Spoofing and Session Hijacking', text: "Test whether user identity is tied only to MAC address, allowing attackers to spoof addresses and hijack authenticated sessions with minimal effort. " },
        { label: 'Bypass of Portal Restrictions', text: "Attempt to access unauthorized services before authentication using protocol smuggling, alternate DNS resolvers, or VLAN misconfigurations. " },
        { label: 'Inter-User Isolation and Network Segmentation', text: "Validate whether clients on the same captive network are isolated (e.g., via client isolation or private VLANs) to prevent man-in-the-middle (MitM) or ARP spoofing attacks. " },
        { label: 'Credential Harvesting & Phishing Surface', text: "Review portal customization and phishing resistance. Test whether users can be tricked into providing credentials via cloned or manipulated versions of the captive login page. " },
      ],
      image: proxy2
    },
  ],
  'Remote Access – VPN and ZTNA Infrastructure': [
    {
      title: 'VPN Security Assessment (Legacy & Modern VPNs)',
      descriptionText: 'VPN solutions such as IPSec, SSL VPN, and clientless gateways are still widely used, but commonly suffer from legacy cryptography, exposed management interfaces, and weak client hardening. ',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'Authentication and MFA Enforcement', text: "Validate support and enforcement of MFA for all user classes. Test for fallback or bypass paths (e.g., “emergency” or contractor accounts without MFA, password reuse, or legacy authentication fallback). " },
        { label: 'Access Control and Segmentation Validation', text: "Test whether users have lateral access to internal subnets or sensitive systems beyond their intended scope. Check enforcement of role-based ACLs post-authentication. " },
        { label: 'Protocol Exposure and Gateway Hardening', text: "Evaluate if VPN gateways expose unnecessary services (e.g., SMB, RDP, web interfaces), use weak TLS configurations, or outdated VPN software susceptible to CVEs (e.g., CVE-2019-11510 in Pulse Secure). " },
        { label: 'Session Management and Token Handling', text: "Assess how session tokens are handled (e.g., in browser-based VPNs or mobile clients), and test for reuse, token leakage, or failure to revoke upon logout or timeout. " },
        { label: 'Example: ', text: "During one engagement, we discovered a VPN portal with valid certificate-based authentication but no MFA enforcement for legacy IPSec connections — leading to lateral movement from contractor accounts into restricted finance systems. " },
      ],
      image: vpn1
    },
    {
      title: 'Zero Trust Network Access (ZTNA) Security Assessment',
     descriptionText: 'ZTNA platforms (e.g., Zscaler Private Access, Cloudflare Access, Prisma Access) are designed to limit access to apps—not networks—but poor integration and overbroad policy definitions can nullify their benefits.',
      heading2: 'Assessment Areas:',
      description: [
        { label: 'Policy Definition & Enforcement Testing', text: "Assess ZTNA rules mapping users/groups to applications. Test whether users can access unauthorized apps via misconfigured group memberships, overly permissive policies, or untagged applications. " },
        { label: 'Identity & Device Trust Evaluation', text: "Evaluate whether access is gated by both strong identity verification and device trust checks (posture, patch level, MDM enrollment). Attempt to bypass using unmanaged or spoofed devices. " },
        { label: 'SSO Integration and Session Propagation', text: "Review SAML/OAuth integrations for weaknesses in token handling, insecure redirection, ID token reuse, or policy misalignment between IdP and ZTNA provider. " },
        { label: 'Audit & Visibility Gaps', text: "Examine the logging, alerting, and session visibility capabilities of the ZTNA provider. Determine whether lateral movements, anomalous access patterns, or policy violations are detectable. " },
        { label: 'Example: ', text: "We were able to bypass ZTNA access controls by using a synced but unmanaged BYOD device. The provider relied solely on user group memberships in Azure AD, without validating device posture — resulting in unauthorized access to dev and staging environments. " },
      ],
      image: vpn2
    },
  ],
};

const getTabIcon = (tabName) => {
  switch(tabName) {
    case 'DNS Security': return <Shield className="w-5 h-5" />;
    case 'Firewall and Edge Devices': return <Smartphone className="w-5 h-5" />;
    case 'Corporate Proxy & Captive Portals': return <Database className="w-5 h-5" />;
    case 'Remote Access – VPN and ZTNA Infrastructure': return <Code className="w-5 h-5" />;
    default: return <Shield className="w-5 h-5" />;
  }
};

const SecurityTestingSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSection, setActiveSection] = useState(0);
  const [expandedTabs, setExpandedTabs] = useState<string[]>([]);
  const [expandedMobileItems, setExpandedMobileItems] = useState<{[key: string]: number}>({});

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? -1 : index);
  };

  const toggleTab = (tab: string) => {
    setExpandedTabs(prev => 
      prev.includes(tab) 
        ? prev.filter(t => t !== tab)
        : [...prev, tab]
    );
  };

  const toggleMobileItem = (tab: string, index: number) => {
    setExpandedMobileItems(prev => ({
      ...prev,
      [tab]: prev[tab] === index ? -1 : index
    }));
  };

  const isTabExpanded = (tab: string) => expandedTabs.includes(tab);

  const currentTabContent = React.useMemo(() => tabContent[activeTab], [activeTab]);

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-8 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">
            Network Security Assessment — Tailored for<br />Every Platform
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            One-size-fits-all doesn't work for security. That's why we specialize in below targeted areas 
            hybrid environments, remote work, SaaS adoption, and multi-cloud sprawl have redefined the attack surface.
          </p>
        </div>

        {/* Desktop View - visible on lg and above */}
        <div className="hidden lg:block">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center  mb-12 w-full">
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
                    : '#000000',
                  margin: '6px',
                  width: '100%',
                  height: 200,
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

          {/* Tab-specific Heading and Paragraph */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-6xl font-bold text-orange-500 mb-4 leading-none">
              {(() => {
                switch (activeTab) {
                  case 'DNS Security':
                    return 'DNS Security ';
                  case 'Firewall and Edge Devices':
                    return 'Firewall and Edge Devices Security ';
                  case 'Corporate Proxy & Captive Portals':
                    return 'Corporate Proxy & Captive Portals Security';
                  case 'Remote Access – VPN and ZTNA Infrastructure':
                    return 'Remote Access – VPN and ZTNA Infrastructure';
                  default:
                    return '';
                }
              })()}
            </h2>
            <p className="text-white-300 max-w-4xl mx-auto mt-5">
              {(() => {
                switch (activeTab) {
                  case 'DNS Security':
                    return 'DNS is a foundational yet often-overlooked part of enterprise infrastructure and a prime target for reconnaissance, impersonation, and redirection attacks. Our DNS Security assessment covers both public-facing and internal DNS environments, ensuring the integrity, confidentiality, and availability of name resolution services across your organization. ';
                  case 'Firewall and Edge Devices':
                    return 'Firewalls and edge devices form the first line of defense in any enterprise security architecture. Our assessment simulates real-world adversarial behavior to identify bypass vectors, coverage gaps, and attack surfaces across various firewall layers and edge devices. ';
                  case 'Corporate Proxy & Captive Portals':
                    return 'Corporate proxies and captive portals are foundational elements for managing internet access, enforcing security policies, and onboarding users into enterprise networks. ';
                  case 'Remote Access – VPN and ZTNA Infrastructure':
                    return 'Remote access technologies are vital for enabling workforce flexibility, vendor access, and hybrid operations. However, if improperly configured or lacking robust controls, VPNs and ZTNA gateways can become high-risk attack surfaces, often exploited in initial access stages of real-world breaches. Our assessment evaluates legacy VPN implementations, modern Zero Trust Network Access platforms, and their integration with identity providers and access control layers. The goal is to identify weaknesses in access enforcement, authentication, segmentation, and protocol exposure. ';
                  default:
                    return '';
                }
              })()}
            </p>
          </div>

          {/* Accordion Content */}
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              {currentTabContent.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden"
                  style={{
                    minWidth: '120px',
                    borderRadius: 8,
                    padding: 2,
                    background: 'linear-gradient(90deg, #F57A00, #7103A4)',
                    margin: '6px'
                  }}
                >
                  <div className="bg-black rounded-[6px] overflow-hidden">
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full px-4 md:px-6 py-4 md:py-6 text-left flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-orange-500">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-orange-500 flex-shrink-0">
                        {activeSection === index ? (
                          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
                        ) : (
                          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {activeSection === index && (
                      <div className="flex flex-col md:flex-row px-4 md:px-6 pb-4 md:pb-6 gap-6 bg-black">
                        {/* Content Side (60%) */}
                        <div className="w-full md:w-3/5">
                          {/* Heading after title */}
                          {item.heading1 && (
                            <h4 className="text-base md:text-lg font-semibold text-orange-500 mb-2">
                              {item.heading1}
                            </h4>
                          )}
                          {item.heading1Desc && (
                            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                              {item.heading1Desc}
                            </p>
                          )}
                          {/* Description */}
                          {item.descriptionText && (
                            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                              {item.descriptionText}
                            </p>
                          )}

                          {/* Heading before list */}
                          {item.heading2 && (
                            <h4 className="text-base md:text-lg font-semibold text-orange-500 mb-2">
                              {item.heading2}
                            </h4>
                          )}
                          {item.heading2Desc && (
                            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                              {item.heading2Desc}
                            </p>
                          )}
                          {/* List with orange dot and text below each */}
                          {Array.isArray(item.description) ? (
                            <ul className="text-gray-400 leading-relaxed text-left pl-6 space-y-4">
                              {item.description.map((point, idx) => (
                                <li key={idx} className="relative pl-6">
                                  <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-orange-500"></span>
                                  <span className="text-orange-500 font-semibold">{point.label}</span>
                                  <div className="text-sm md:text-base text-gray-300 mt-1">{point.text}</div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm md:text-base text-white-400 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {/* Image Side (40%) */}
                        <div className="w-full md:w-2/5 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - visible below lg breakpoint */}
        <div className="lg:hidden space-y-4">
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
                {/* Mobile/Tablet Tab Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-3">
                    {(() => {
                      switch (tab) {
                        case 'DNS Security':
                          return 'DNS Security';
                        case 'Firewall and Edge Devices':
                          return 'Firewall and Edge Devices Security';
                        case 'Corporate Proxy & Captive Portals':
                          return 'Corporate Proxy & Captive Portals Security';
                        case 'Remote Access – VPN and ZTNA Infrastructure':
                          return 'Remote Access – VPN and ZTNA Infrastructure';
                        default:
                          return '';
                      }
                    })()}
                  </h2>
                  <p className="text-gray-300">
                    {(() => {
                      switch (tab) {
                        case 'DNS Security':
                          return 'DNS is a foundational yet often-overlooked part of enterprise infrastructure...';
                        case 'Firewall and Edge Devices':
                          return 'Firewalls and edge devices form the first line of defense...';
                        case 'Corporate Proxy & Captive Portals':
                          return 'Corporate proxies and captive portals are foundational elements...';
                        case 'Remote Access – VPN and ZTNA Infrastructure':
                          return 'Remote access technologies are vital for enabling workforce flexibility...';
                        default:
                          return '';
                      }
                    })()}
                  </p>
                </div>

                {/* Mobile/Tablet Content Items */}
                <div className="space-y-6">
                  {tabContent[tab].map((item, index) => (
                    <div key={index} className="bg-black rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleMobileItem(tab, index)}
                        className="w-full p-4 flex items-center justify-between"
                        style={{
                          background: 'linear-gradient(90deg, #F57A00, #7103A4)',
                        }}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                            style={{
                              background: '#000',
                            }}
                          >
                            {index + 1}
                          </div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        {expandedMobileItems[tab] === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>

                      <div
                        className={`transition-all duration-300 ${
                          expandedMobileItems[tab] === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="p-4 space-y-4">
                          <img src={item.image} alt="" className="w-full h-[200px] object-contain" />
                          {item.descriptionText && (
                            <p className="text-gray-300">{item.descriptionText}</p>
                          )}
                          {item.heading2 && (
                            <h4 className="text-lg font-semibold text-orange-500">
                              {item.heading2}
                            </h4>
                          )}
                          {Array.isArray(item.description) && (
                            <ul className="space-y-3">
                              {item.description.map((point, idx) => (
                                <li key={idx} className="relative pl-6">
                                  <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-orange-500"></span>
                                  <span className="text-orange-500 font-semibold">
                                    {point.label}
                                  </span>
                                  <div className="text-gray-300 mt-1">{point.text}</div>
                                </li>
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
          ))}
        </div>

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTestingSection;