import React, { useState } from 'react';
import { Shield, Smartphone, Database, Code, ChevronRight } from 'lucide-react';
import Networktabs from '../../assest/image/cloudsecuritytabicon/num01.svg';
import Networktabs1 from '../../assest/image/cloudsecuritytabicon/num02.svg';
import Networktabs2 from '../../assest/image/cloudsecuritytabicon/num03.svg';
import Networktabs3 from '../../assest/image/cloudsecuritytabicon/num04.svg';
import tab11 from '../../assest/image/services/tab7.png';
import cks1 from '../../assest/image/Containers-and-Kubernetes-Security/Group 1259.svg';
import cks2 from '../../assest/image/Containers-and-Kubernetes-Security/Group 1266.svg';
import cks3 from '../../assest/image/Containers-and-Kubernetes-Security/Group 1267.svg';
import cks4 from '../../assest/image/Containers-and-Kubernetes-Security/Group 1272.svg';  
import cks5 from '../../assest/image/Containers-and-Kubernetes-Security/Illustration.svg';
import vis1 from '../../assest/image/Virtualization-Infrastructure-Securityiamge/Group 1247.svg'
import vis2 from '../../assest/image/Virtualization-Infrastructure-Securityiamge/Group 1251.svg';
import vis3 from '../../assest/image/Virtualization-Infrastructure-Securityiamge/Group 1254.svg';
import vis4 from '../../assest/image/Virtualization-Infrastructure-Securityiamge/Group 1257.svg';
import vis5 from '../../assest/image/Virtualization-Infrastructure-Securityiamge/Group.svg';
import vis6 from '../../assest/image/Virtualization-Infrastructure-Securityiamge/OBJECTS.svg';
import pcs1 from '../../assest/image/Public-Cloud-Security/Group 1263.svg';
import pcs2 from '../../assest/image/Public-Cloud-Security/Group 1264.svg';
import pcs3 from '../../assest/image/Public-Cloud-Security/Group 1265.svg';
import pcs4 from '../../assest/image/Public-Cloud-Security/Group 1270.svg';
import pcs5 from '../../assest/image/Public-Cloud-Security/Group 1278.svg';
import pcs6 from '../../assest/image/Public-Cloud-Security/Group 1285.svg';
import saas1 from '../../assest/image/SaaS-Security/Group 1273.svg';
import saas2 from '../../assest/image/SaaS-Security/Group 1276.svg';
import saas3 from '../../assest/image/SaaS-Security/Group 1277.svg';
import saas4 from '../../assest/image/SaaS-Security/Group 1279.svg';
import saas5 from '../../assest/image/SaaS-Security/Group 1280.svg';
import saas6 from '../../assest/image/SaaS-Security/Group.svg';
const tabIcons = [
  Networktabs,    // Web Application Security
  Networktabs1,   // Mobile Application Security
  Networktabs2,   // API Security
  Networktabs3    // Source Code Review
];

const tabs = [
  'Containers and Kubernetes Security',
  'Virtualization Infrastructure Security', 
  'Public Cloud Security',
  'SaaS Security',
];

const tabContent = {
  'Containers and Kubernetes Security': [
    {
      title: 'Key Assessment Areas:',
      subHeading: 'Container Image Hardening',
      image: cks5, // Using single image for all sections
      description: [
        "Review of base image hygiene, embedded secrets, outdated libraries, SUID binaries, and package managers.",
        "CI/CD pipeline reviews for unsafe image pulls or unsigned images.",
        "Examples: Discovery of leaked AWS keys in base images; exposed debug endpoints in Docker containers",
      ]
    },
    {
      title: 'Runtime Security and Isolation',
      image: cks1,
      description: [
        "Assessment of namespace separation, resource quotas,seccomp/apparmor/bpf profiles, and container breakout risks.",
        "Network policies for pod isolation and namespace-level segmentation.",
        "Review of containers running in privileged mode or accessing host namespaces/filesystems.",
      ]
    },
        {
      title: 'Kubernetes Cluster Hardening',
      image: cks2,
      description: [
        "Review of kube-apiserver flags, RBAC roles, overly permissive service accounts, admission controllers, kubelet access, etc.",
        "Security validation of EKS, AKS, GKE, OpenShift, Rancher, Docker Swarm.",
        "Examples: Privilege escalation via poorly scoped RBAC allowing pod execaccess across namespaces.",
      ]
    },
            {
      title: 'Network Policies and Service Mesh Review',
      image: cks3,
      description: [
        "Inspection of ingress/egress traffic rules, pod-to-pod communication, and sidecar proxy exposure.",
        "Misconfigurations in Istio, Linkerd, Envoy.",
        "Network Security controls between Container Overlay network and Underlay VM/Physical Overlay network.",
      ]
    },
            {
      title: 'Secrets Management',
      image: cks4,
      description: [
        "Evaluation of how secrets (tokens, keys, passwords) are handled, stored, and accessed in the cluster. ",
        "Check container environments for injected secrets or hardcoded values.",
        "Review integration with secret management solutions like Hashicorp Vault, Azure and AWS Key Vaults, CyberARK, Thales KMS etc.",
      ]
    },
  ],
  'Virtualization Infrastructure Security': [
    {
      title: 'Key Assessment Areas & Detailed Coverage:',
      subHeading: 'Hypervisor Hardening & Exploitation Simulation',
      image: vis1,
      description: [
        "Evaluate security posture of hypervisors such as VMware ESXi, Microsoft Hyper-V, KVM, and Xen.",
        "Test for known CVEs (e.g., VENOM, ESXiArgs, CVE-2019-5544) and missing patches.",
        "Validate configuration against vendor and CIS hardening benchmarks.",
        "Simulate privilege escalation from VM to hypervisor (where applicable).",
      ]
    },
    {
      title: 'Virtual Machine Isolation & Guest Security',
      image: vis2,
      description: [
        "Assess guest-to-guest and guest-to-host isolation controls.",
        "Identify exposed clipboard sharing, drag-drop, device passthrough, and shared folder risks.",
        "Test for insecure VM snapshots or hardcoded secrets in VM templates.",
        "Detect orphaned or zombie VMs with outdated OS and software stacks.",
      ]
    },
    {
      title: 'Management Interfaces & API Attack Surface',
      image: vis6,
      description: [
        "Test vCenter, Proxmox, OpenStack Horizon, Nutanix Prism, etc., for authentication weaknesses and privilege escalation.",
        "Enumerate and fuzz management APIs for improper access control or data exposure.",
        "Review RBAC settings, session timeout policies, and logging coverage.",
        "Attempt unauthorized access to administrative consoles via exposed network paths.",
      ]
    },
        {
      title: 'Virtual Networking & Segmentation',
      image: vis3,
      description: [
        "Evaluate vSwitch, DVS, and VLAN configurations for inter-tenant traffic leaks.",
        "Attempt ARP spoofing, MAC/IP spoofing, and DHCP starvation within virtual networks.",
        "Review NSX or Open vSwitch microsegmentation policies.",
        "Test east-west traffic visibility and isolation enforcement between zones.",
      ]
    },
            {
      title: 'Storage & Snapshot Security',
      image: vis4,
      description: [
        "Review access control for VM disk images and backup storage (vSAN, NFS, iSCSI).",
        "Detect sensitive data remnants in old snapshots or improperly discarded images.",
        "Assess snapshot and backup exposure to ransomware-style attacks.",
        "Evaluate encryption status for VM disks and control plane data.",
      ]
    },
                {
      title: 'Remote Console & Access Channel Review',
      image: vis5,
      description: [
        "Test VM console access protections (e.g., WebMKS, SPICE, RDP).",
        "Review clipboard and file-sharing policies between admin console and guest VM.",
        "Identify insecure or unaudited access to consoles and out-of-band management.",
        "Review installed plugins, backup agents, and automation tools for insecure integration.",
        "Evaluate API tokens, service accounts, and hardcoded credentials.",
      ]
    },
  ],
  'Public Cloud Security': [
    {
      title: 'Key Assessment Areas & Detailed Coverage:',
      subHeading: 'Identity & Access Management (IAM)',
      image: pcs4,
      description: [
        "Review roles, policies, and entitlements for overly permissive or misconfigured access (e.g., *:*, Owner, SuperAdmin roles).",
        "Identify privilege escalation paths via role chaining, service principals, trust policies, and default permissions.",
        "Review trust relationships, federated identity providers (e.g., Azure AD, Google Workspace, OIDC), and external account access.",
        "Assess Multi-Factor Authentication (MFA), credential rotation policies, and detection of unused/expired access keys.",
      ]
    },
    {
      title: 'Data Storage & Access Controls',
      image: pcs3,
      description: [
        "Evaluate public exposure of storage (S3, Azure Blob, GCS, Object Storage), anonymous access, and misconfigured pre-signed URLs.",
        "Check data encryption settings at rest and in transit, including KMS/CMEK integration and default encryption usage.",
        "Identify weak access controls (e.g., improper ACLs, inherited permissions) or accidental sharing via misconfigured cloud shares.",
      ]
    },
        {
      title: 'Networking & Perimeter Security',
      image: pcs5,
      description: [
        "Review VPC/subnet architecture, firewall rules (SGs, NSGs), and public IP exposure of cloud resources.",
        "Assess segmentation controls, zero trust principles, and cloud-native perimeter protections (e.g., PrivateLink, VPC Peering).",
        "Test ingress/egress rules, exposed management ports, and effectiveness of cloud-native DDoS and WAF configurations.",
      ]
    },
            {
      title: 'Workload & Compute Security',
      image: pcs1,
      description: [
        "Analyze EC2/VM/Instance security hardening, attached IAM profiles, and exposed metadata endpoints.",
        "Review serverless configurations (Lambda, Azure Functions, Cloud Functions) for privilege misuse and runtime injection.",
        "Validate image and OS baseline controls, patch management, and privilege escalations in managed container environments (EKS, AKS, GKE, OKE).",
      ]
    },
                {
      title: 'Secrets Management & Key Vaults',
      image: pcs2,
      description: [
        "Assess use and access control of secrets vaults (AWS KMS/Secrets Manager, Azure Key Vault, GCP Secret Manager).",
        "Identify secrets exposed in environment variables, Git repositories, CI/CD pipelines, or hardcoded in code.",
        "Review key rotation policies, audit logging, and protection of encryption keys used across cloud workloads.",
      ]
    },
    {
      title: 'Logging, Monitoring & Threat Detection',
      image: pcs6,
      description: [
        "Evaluate logging coverage and completeness across CloudTrail, Azure Monitor, GCP Audit Logs, and similar.",
        "Review security alerting rules, threat detection services (e.g., AWS GuardDuty,Azure Defender), and anomaly detection.",
        "Assess whether logs are protected from tampering, stored securely, and integrated with SIEM/SOC platforms.",
      ]
    },
  ],
  'SaaS Security': [
    {
      title: 'Key Assessment Areas & Detailed Coverage:',
      subHeading: 'Authentication & Access Controls',
      image: saas4,
      description: [
        "Review SSO/SAML/OAuth integrations and enforce MFA policies across user roles and admin accounts.",
        "Analyze role-based access control (RBAC) or attribute-based access control (ABAC) implementations for over-privileged users.",
        "Identify orphaned accounts, stale sessions, or dormant users in platforms like Salesforce, Microsoft 365, Google Workspace, and Workday.",
      ]
    },
    {
      title: 'Data Exposure & Sharing Configurations',
      image: saas3,
      description: [
        "Assess sensitive data sharing settings, such as document and calendar sharing, guest access, and link-based sharing permissions.",
        "Review SaaS app-specific DLP configurations and verify whether customer or PII data is exposed inadvertently.",
        "Detect public-facing dashboards, repositories (e.g., Notion, Confluence), or file shares misconfigured for external access.",
      ]
    },
        {
      title: 'Third-Party App Integrations',
      image: saas2,
      description: [
        "Identify and assess security posture of connected apps with high- scope OAuth tokens or excessive API permissions.",
        "Test for rogue or unapproved integrations that introduce Shadow IT or exfiltration channels.",
        "Evaluate app vetting and approval workflows in platforms like Google Workspace Marketplace or Slack integrations.",
      ]
    },
    {
      title: 'Misconfiguration & Platform Hardening',
      image: saas6,
      description: [
        "Review global security settings, tenant-wide policies, and admin console configurations against best practices.",
        "Identify weak default settings, disabled security controls, or feature misuse across SaaS apps.",
        "Harden configurations based on CIS benchmarks, NIST guidelines,and SaaS-specific security playbooks.",
      ]
    },
    {
      title: 'Incident Readiness & Logging',
      image: saas1,
      description: [
        "Assess the availability, retention, and completeness of audit logs for authentication, data access, and configuration changes.",
        "Evaluate alerting mechanisms for abnormal behavior, access anomalies, or data movement.",
        "Check the integration of SaaS logs with SIEM/SOAR tools for centralized monitoring and faster incident response.",
      ]
    },
        {
      title: 'Tenant Segregation & Environment Security',
      image: saas5,
      description: [
        "Analyze whether test, staging, and production environments are logically segregated and access-controlled.",
        "Identify configuration drifts between environments that may expose attack surfaces.",
        "Ensure environment-specific data (e.g., production PII) isn’t replicated to non-production environments improperly.",
      ]
    },
  ],
};

const generateTabId = (tabName: string) => {
  return tabName.toLowerCase().replace(/\s+/g, '-');
};

const getTabIcon = (tabName) => {
  switch(tabName) {
    case 'Containers and Kubernetes Security': return <Shield className="w-5 h-5" />;
    case 'Virtualization Infrastructure Security': return <Smartphone className="w-5 h-5" />;
    case 'Public Cloud Security': return <Database className="w-5 h-5" />;
    case 'SaaS Security': return <Code className="w-5 h-5" />;
    default: return <Shield className="w-5 h-5" />;
  }
};

const CloudsecurityTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSection, setActiveSection] = useState(0);
  // Add new state for mobile/tablet expanded tabs
  const [expandedTabs, setExpandedTabs] = useState<string[]>([]);

  // Add toggle function for mobile/tablet view
  const toggleTab = (tab: string) => {
    setExpandedTabs(prev => 
      prev.includes(tab) 
        ? prev.filter(t => t !== tab)
        : [...prev, tab]
    );
  };

  const isTabExpanded = (tab: string) => expandedTabs.includes(tab);

  const currentTabContent = React.useMemo(() => tabContent[activeTab], [activeTab]);

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

  return (
    <div className="text-white" id='cloudsecurity'>
      <div id="explore-now" className="container mx-auto px-8 pt-8 lg:pt-10">
        {/* Header Section - visible on all screens */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-4 text-orange-500">
            Cloud Security Assessment Services
          </h2>
          <p className="text-White-400 text-lg max-w-6xl mx-auto">
            Our Cloud Security services provide deep, hands-on evaluations across cloud-native technologies and hybrid deployments. Our assessments help ensure that your cloud infrastructure is secure, compliant, and resilient.
          </p>
        </div>

        {/* Desktop View - visible on lg and above */}
        <div className="hidden lg:block">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 w-full">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                id={generateTabId(tab)}
                onClick={() => {
                  setActiveTab(tab);
                  window.history.pushState(null, '', `#${generateTabId(tab)}`);
                }}
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

          {/* Desktop Tab-specific Heading and Paragraph */}
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-orange-500 mb-4 leading-none">
              {(() => {
                switch (activeTab) {
                  case 'Containers and Kubernetes Security':
                    return 'Containers and Kubernetes Security';
                  case 'Virtualization Infrastructure Security':
                    return 'Virtualization Infrastructure Security ';
                  case 'Public Cloud Security':
                    return 'Public Cloud Security';
                  case 'SaaS Security':
                    return 'SaaS Security';
                  default:
                    return '';
                }
              })()}
            </h2>
            <p className="text-white-300 max-w-5xl mx-auto mt-5">
              {(() => {
                switch (activeTab) {
                  case 'Containers and Kubernetes Security':
                    return 'We perform rigorous vulnerability assessments and penetration tests on container registries, orchestrators, and runtime pods. Our offensive approach uncovers misconfigurations, insecure defaults, and exploitation paths to harden your cloud-native deployments.';
                  case 'Virtualization Infrastructure Security':
                    return 'Our red-team exercises target hypervisors, virtual machines, and management consoles to expose isolation flaws and configuration gaps. You receive prioritized remediation guidance to strengthen the integrity and resilience of your virtual infrastructure.';
                  case 'Public Cloud Security':
                    return 'We execute in-depth penetration tests across your IaaS, PaaS, and serverless environments to identify privilege escalations, data exposures, and misconfigurations. Our actionable findings and threat scenarios help you enforce robust, cloud-native security controls.';
                  case 'SaaS Security':
                    return 'Our offensive security team probes your SaaS applications, APIs, and authentication flows to reveal insecure settings and business-logic vulnerabilities. We deliver clear, prioritized remediation roadmaps to protect your critical data and maintain user trust.';
                  default:
                    return '';
                }
              })()}
            </p>
          </div>

          {/* Desktop Accordion Content */}
          <div className="max-w-7xl mx-auto">
            <div className="relative flex flex-col items-center">
              {/* Remove vertical line */}
              {/* Content Items */}
              <div className="w-full">
                {currentTabContent.map((item, index) => {
                  const isEven = index % 2 === 1;
                  return (
                    <div
                      key={index}
                      className="relative flex items-center w-full my-12"
                      style={{ minHeight: 160 }}
                    >
                      {/* Content Side */}
                      <div className={`flex-1 flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center`}>
                        {/* Image Side */}
                        <div className="w-1/2 flex justify-center">
                          <div className="hidden md:flex w-[100%] h-[250px] items-center justify-center">
                            <img src={item.image} alt="" className="object-contain w-full h-full" />
                          </div>
                        </div>
                        {/* Spacer */}
                        <div className="w-28"></div>
                        {/* Content Side */}
                        <div className="w-1/2 flex justify-center md:justify-end">
                          <div className=" backdrop-blur-sm transition-all duration-300 max-w-lg w-full shadow-lg flex flex-col items-start text-center relative">
                            {/* Step Number - Repositioned to left and bottom spacing added */}
                            <div 
                              className="absolute -top-7 left-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-15"
                              style={{
                                background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)'
                              }}
                            >
                              {index + 1}
                            </div>
                            {/* Rest of content with increased top margin */}
                            <h3 className="text-xl font-semibold mb-3 tabs-heading text-left mt-8">
                              {item.title}
                            </h3>
                            <h4 className="text-base text-orange-500 font-medium mb-4">
                              {item.subHeading}
                            </h4>
                            {item.descriptionText && (
                              <p className="mb-2 text-white-300 text-left">{item.descriptionText}</p>
                            )}
                            {item.heading2 && (
                              <h4 className="text-lg font-semibold text-orange-500 mb-2">
                                {item.heading2}
                              </h4>
                            )}
                            {Array.isArray(item.description) && (
                              <ul className="text-white-400 leading-relaxed text-left list-disc pl-6">
                                {item.description.map((text, idx) => (
                                  <li key={idx} className="mb-2">{text}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - visible below lg breakpoint */}
        <div className="block lg:hidden space-y-4">
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
                  <div className="flex items-center gap-2">
                    <img src={tabIcons[i]} alt="" className="w-[35px] h-[35px]" />
                    <span className="font-medium text-sm text-left">{tab}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      isTabExpanded(tab) ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </button>

              {/* Mobile/Tablet Expanded Content */}
              <div 
                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  isTabExpanded(tab) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {/* Mobile/Tablet Tab-specific Heading */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-3">
                    {tab}
                  </h2>
                  <p className="text-white-300">
                    {(() => {
                      switch (tab) {
                        case 'Containers and Kubernetes Security':
                          return 'We perform rigorous vulnerability assessments and penetration tests on container registries, orchestrators, and runtime pods...';
                        case 'Virtualization Infrastructure Security':
                          return 'Our red-team exercises target hypervisors, virtual machines, and management consoles to expose isolation flaws and configuration gaps...';
                        case 'Public Cloud Security':
                          return 'We execute in-depth penetration tests across your IaaS, PaaS, and serverless environments to identify privilege escalations, data exposures, and misconfigurations...';
                        case 'SaaS Security':
                          return 'Our offensive security team probes your SaaS applications, APIs, and authentication flows to reveal insecure settings and business-logic vulnerabilities...';
                        default:
                          return '';
                      }
                    })()}
                  </p>
                </div>

                {/* Mobile/Tablet Content Items */}
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
                            <img src={item.image} alt="" className="w-full h-[200px] object-contain mb-4" />
                            <h3 className="text-xl font-semibold mb-3 tabs-heading">{item.title}</h3>
                            {item.subHeading && (
                              <h4 className="text-base text-orange-500 font-medium mb-4">
                                {item.subHeading}
                              </h4>
                            )}
                            {Array.isArray(item.description) && (
                              <ul className="text-white-400 list-disc pl-6 space-y-2">
                                {item.description.map((text, idx) => (
                                  <li key={idx}>{text}</li>
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

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CloudsecurityTabs;