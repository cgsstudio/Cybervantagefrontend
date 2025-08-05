import React, { useState } from 'react';
import { Target, Shield, Brain, RotateCcw, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceTabs from './ServiceTabs';
import ServiceCard from './ServiceCard';
// import { ReactComponent as Ser1 } from '../../assest/image/services/ser1.svg';
// import { ReactComponent as Ser2 } from '../../assest/image/services/ser2.svg';
// import { ReactComponent as Ser3 } from '../../assest/image/services/ser3.svg';
// import { ReactComponent as Ser4 } from '../../assest/image/services/ser4.svg';
// import { ReactComponent as Ser6 } from '../../assest/image/services/ser6.svg';
import Ser1 from '../../assest/image/digitalfinanceicon/fraud.svg'
import Ser2 from '../../assest/image/digitalfinanceicon/openbanking.svg'
import Ser3 from '../../assest/image/digitalfinanceicon/atm.svg'
import Ser4 from '../../assest/image/digitalfinanceicon/iot.svg'
import Ser6 from '../../assest/image/services/ser6.svg'
import Ser5 from '../../assest/image/services/tab-1.svg'
import Ser7 from '../../assest/image/services/tab-2.svg'
import Ser8 from '../../assest/image/services/tab-3.svg'
import Ser9 from '../../assest/image/services/tab-4.svg'
import Ser10 from '../../assest/image/services/ser10.svg'
import Ser11 from '../../assest/image/services/Networktab1.svg'
import Ser12 from '../../assest/image/services/Networktab2.svg'
import Ser13 from '../../assest/image/services/Networktab3.svg'
import Ser14 from '../../assest/image/services/Networktab4.svg'
import Ser15 from '../../assest/image/cloudsecuritytabicon/num01.svg'
import Ser16 from '../../assest/image/cloudsecuritytabicon/num02.svg'
import Ser17 from '../../assest/image/cloudsecuritytabicon/num03.svg'
import Ser18 from '../../assest/image/cloudsecuritytabicon/num04.svg'
import Ser19 from '../../assest/image/services/ser19.svg'
import Ser20 from '../../assest/image/digitalfinanceicon/iot.svg'
import Ser21 from '../../assest/image/digitalfinanceicon/openbanking.svg'
import Ser22 from '../../assest/image/digitalfinanceicon/fraud.svg'
import Ser23 from '../../assest/image/digitalfinanceicon/atm.svg'
import Ser24 from '../../assest/image/services/ser24.svg'
import Ser25 from '../../assest/image/services/ser25.svg'
import Ser26 from '../../assest/image/services/ser26.svg'
import Ser27 from '../../assest/image/services/ser27.svg'
import Ser28 from '../../assest/image/services/ser28.svg'
import 'aos/dist/aos.css';





const SERVICES = {
  'Red Teaming': [
    {
      title: 'Advanced Penetration Testing',
      description: 'Simulate real-world attacker tactics to uncover weaknesses across people, processes, and technology.',
      icon: Ser1,
      link: '/red-teaming#redteaming',
    },
    {
      title: 'DDoS Simulation',
      description: 'Assess your organization’s resilience against volumetric, application, and protocol-based denial-of-service attacks.',
      icon: Ser2,
      isHighlighted: true,
      link: '/red-teaming#redteaming',
    },
    {
      title: 'AI Red teaming',
      description: 'Stress-test AI models for prompt injection, model manipulation, and data leakage.',
      icon: Ser3,
      link: '/red-teaming#redteaming',
    },
    {
      title: 'Zero Day Hunting',
      description: 'Discover unknown vulnerabilities in proprietary applications or systems before adversaries do.',
      icon: Ser4,
      isHighlighted: true,
      link: '/red-teaming#redteaming',
    },

  ],
  'Application Security': [
    {
      title: 'Web Application Security',
      description: 'Identify and remediate vulnerabilities in modern web applications through in-depth manual and automated testing.',
      icon: Ser5,
      link: '/application-security-assessment#applicationsecurity',
    },
    {
      title: 'Mobile Application Security',
      description: 'Secure iOS and Android apps against reverse engineering, insecure storage, and runtime threats.',
      icon: Ser7,
      isHighlighted: true,
      link: '/application-security-assessment#applicationsecurity',
    },
    {
      title: 'API Security',
      description: 'Assess exposed APIs for authentication, authorization, and business logic flaws.',
      icon: Ser8,
      link: '/application-security-assessment#applicationsecurity',
    },
    {
      title: 'Source Code Review',
      description: 'Analyze application source code for security flaws, logic errors, and hardcoded secrets.',
      icon: Ser9,

      link: '/application-security-assessment#applicationsecurity',
    },
 
  ],
  'Network Penetration Testing':[
    {
      title: 'DNS Security',
      description: 'Test for DNS misconfigurations, hijacking risks, and exposure of sensitive records.',
      icon: Ser11,
      link: '/network-penetration-testing#networksecurity',
    },
    {
      title: 'Firewall and Edge Devices',
      description: 'Evaluate the resilience of perimeter firewalls, routers, and IDS/IPS against targeted attacks.',
      icon: Ser12,
      isHighlighted: true,
      link: '/network-penetration-testing#networksecurity',
    },
    {
      title: 'Corporate Proxy & Captive Portals',
      description: 'Analyze web filtering mechanisms, captive portals, and potential bypass techniques.',
      icon: Ser13,
      link: '/network-penetration-testing#networksecurity',
    },
    {
      title: 'Remote Access – VPN and ZTNA Infrastructure',
      description: 'Validate the security of remote connectivity infrastructure including VPNs and Zero Trust implementations.',
      icon: Ser14,
      link: '/network-penetration-testing#networksecurity',
    }
  ],
  'Cloud Security': [
    {
      title: 'Containers and Kubernetes Security',
      description: 'Evaluate the security posture of your container workloads and Kubernetes clusters.',
      icon: Ser15,
      isHighlighted: true,
      link: '/cloud-security-assesment#cloudsecurity',
    },
    {
      title: 'Virtualization Infrastructure Security',
      description: 'Identify risks in virtualized environments including hypervisor misconfigurations and insecure VM setups.',
      icon: Ser16,
      link: '/cloud-security-assesment#cloudsecurity',
    },
    {
      title: 'Public Cloud Security',
      description: 'Review cloud configurations and access controls across AWS, Azure, GCP, and Oracle Cloud.',
      icon: Ser17,
      link: '/cloud-security-assesment#cloudsecurity',
    },
    {
      title: 'SaaS Security',
      description: 'Assess SaaS platforms like Microsoft 365, Salesforce, and GitHub for configuration drift and data exposure.',
      icon: Ser18,
      link: '/cloud-security-assesment#cloudsecurity',
    },
 
  ],
  'Digital Finance and Banking': [
    {
      title: 'Fraud Red Teaming',
      description: 'Emulate sophisticated fraud techniques to uncover exploitable paths in digital finance ecosystems.',
      icon: Ser22,
      isHighlighted: true,
      link: '/digital-finance-banking#digitalfinance',
    },
    {
      title: 'Open Banking Security',
      description: 'Secure APIs and integrations in open banking platforms against tampering and abuse.',
      icon: Ser21,
      link: '/digital-finance-banking#digitalfinance',
    },
    {
      title: 'ATM Security Assessment',
      description: 'Test ATM hardware, software, and network connectivity for physical and logical vulnerabilities.',
      icon: Ser23,
      link: '/digital-finance-banking#digitalfinance',
    },
    {
      title: 'IoT Security for Banking & Finance',
      description: 'Identify security risks in connected payment and banking IoT ecosystems.',
      icon: Ser20,
      link: '/digital-finance-banking#digitalfinance',
    },
    
  ],
  'Operational Technology Security (OT)': [
    {
      title: 'SCADA',
      description: 'Identifying vulnerabilities in SCADA networks to protect critical industrial processes',
      icon: Ser25,
    },
    {
      title: 'ATM Security Assessments',
      description: 'Performing advanced attacks against software and hardware systems of ATM',
      icon: Ser24,
    },
    {
      title: 'Computing Security Assessments',
      description: 'Protecting connected ecosystems with tailored IoT and edge security solutions',
      icon: Ser28,
    },
    {
      title: 'BMS',
      description: 'Securing smart building systems to prevent disruptions and unauthorized control',
      icon: Ser27,
    },
    {
      title: 'Supply Chain Security',
      description: 'Strengthening OT supply chains by identifying third-party and supplier risks',
      icon: Ser26,
    },
  ]
  
};


const Services = () => {
  const [activeTab, setActiveTab] = useState('Application Security Assessment');

  const getServicesData = () => SERVICES[activeTab] || [];

  // Helper to wrap ServiceCard with Link if link exists
  const renderServiceCard = (service, index) => {
    const card = <ServiceCard {...service} />;
    return service.link ? (
      <Link
        to={service.link}
        key={index}
        className="h-full w-full flex"
        style={{ textDecoration: 'none' }}
      >
        {card}
      </Link>
    ) : (
      <div key={index} className="h-full w-full flex">
        {card}
      </div>
    );
  };

  // Create contentMap to pass to ServiceTabs
  const contentMap = {
    'Application Security Assessment': (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Application Security'].map(renderServiceCard)}
      </div>
    ),
    'Network Penetration Testing': (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Network Penetration Testing'].map(renderServiceCard)}
      </div>
    ),
    'Red Teaming': (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Red Teaming'].map(renderServiceCard)}
      </div>
    ),
    'Cloud Security Assessment': (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Cloud Security'].map(renderServiceCard)}
      </div>
    ),
    'Digital Finance and Banking': (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Digital Finance and Banking'].map(renderServiceCard)}
      </div>
    ),
    'Operational Technology Security (OT)': (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
        {SERVICES['Operational Technology Security (OT)'].map(renderServiceCard)}
      </div>
    )
  };

  return (
    <section id="services" className="pt-16 md:pt-20 relative bg-primery">
      <div className="container mx-auto px-4 sm:px-6 md:pb-12 lg:px-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 our-service-main">
  <div className="basis-full md:basis-1/2 max-w-full md:max-w-xl">
    <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-4 leading-tight heading42-main" data-aos="fade-right">
      Our Services And Offerings
    </h2>
  </div>
  <div className="basis-full md:basis-1/2" data-aos="fade-left">
    <h3 className="text-2xl font-semibold text-white-500 mb-2">
      Why settle for 'secure enough'?
    </h3>
    <p className="text-white-300">
      Our in-depth assessments dig deep into your systems to expose hidden risks and build ironclad defenses, ensuring your defenses are not just strong, but future-proof.
    </p>
  </div>
</div>



     
           <ServiceTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          contentMap={contentMap}
        />

    

      </div>
    </section>
  );
};

export default Services;