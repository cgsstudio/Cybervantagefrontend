import React, { useState } from 'react';
import { Target, Shield, Brain, RotateCcw, Users } from 'lucide-react';
import ServiceTabs from './ServiceTabs';
import ServiceCard from './ServiceCard';
// import { ReactComponent as Ser1 } from '../../assest/image/services/ser1.svg';
// import { ReactComponent as Ser2 } from '../../assest/image/services/ser2.svg';
// import { ReactComponent as Ser3 } from '../../assest/image/services/ser3.svg';
// import { ReactComponent as Ser4 } from '../../assest/image/services/ser4.svg';
// import { ReactComponent as Ser6 } from '../../assest/image/services/ser6.svg';
import Ser1 from '../../assest/image/services/ser1.svg'
import Ser2 from '../../assest/image/services/ser2.svg'
import Ser3 from '../../assest/image/services/ser3.svg'
import Ser4 from '../../assest/image/services/ser4.svg'
import Ser6 from '../../assest/image/services/ser6.svg'
import Ser5 from '../../assest/image/services/ser5.svg'
import Ser7 from '../../assest/image/services/ser7.svg'
import Ser8 from '../../assest/image/services/ser8.svg'
import Ser9 from '../../assest/image/services/ser9.svg'
import Ser10 from '../../assest/image/services/ser10.svg'
import Ser11 from '../../assest/image/services/ser11.svg'
import Ser12 from '../../assest/image/services/ser12.svg'
import Ser13 from '../../assest/image/services/ser13.svg'
import Ser14 from '../../assest/image/services/ser14.svg'
import Ser15 from '../../assest/image/services/ser15.svg'
import Ser16 from '../../assest/image/services/ser16.svg'
import Ser17 from '../../assest/image/services/ser17.svg'
import Ser18 from '../../assest/image/services/ser18.svg'
import Ser19 from '../../assest/image/services/ser19.svg'
import Ser20 from '../../assest/image/services/ser20.svg'
import Ser21 from '../../assest/image/services/ser21.svg'
import Ser22 from '../../assest/image/services/ser22.svg'
import Ser23 from '../../assest/image/services/ser23.svg'
import Ser24 from '../../assest/image/services/ser24.svg'
import Ser25 from '../../assest/image/services/ser25.svg'
import Ser26 from '../../assest/image/services/ser26.svg'
import Ser27 from '../../assest/image/services/ser27.svg'
import Ser28 from '../../assest/image/services/ser28.svg'





const SERVICES = {
  'Red Teaming': [
    {
      title: 'Advanced Penetration Testing',
      description: 'Probing your defenses with expert-led testing to identify vulnerabilities',
      icon: Ser1,
      
    },
    {
      title: 'Fraud Red Teaming',
      description: 'Simulating fraud scenarios to assess organization’s ability to detect and respond effectively',
      icon: Ser2,
      isHighlighted: true,
    },
    {
      title: 'AI Red teaming',
      description: 'Challenging AI with adversarial testing to uncover vulnerabilities and biases',
      icon: Ser3,
      
    },
    {
      title: 'Hunting and reverse engineering',
      description: 'Hunting 0-day threats and reversing exploits to stay ahead of evolving risks',
      icon: Ser4,
      isHighlighted: true,
    },
    {
      title: 'Social Engineering',
      description: 'Testing human and technical defenses against the most sophisticated attacks',
      icon: Ser6,
    },
  ],
  'Application Security': [
    {
      title: 'Web & Mobile Application',
      description: 'Web & Mobile Application',
      icon: Ser5,
    },
    {
      title: 'API Security review',
      description: 'Securing API integrations to prevent data breaches and unauthorized access',
      icon: Ser7,
      isHighlighted: true,
    },
    {
      title: 'Source code review',
      description: 'Detecting security flaws at the source by reviewing application and infrastructure code',
      icon: Ser8,
    },
    {
      title: 'Windows and Mac Applications',
      description: 'Ensuring Windows and Mac applications meet robust security standards',
      icon: Ser9,
    },
    {
      title: 'OS and Virtual Desktops security',
      description: 'Hardening operating systems and virtual desktops against cyber threats',
      icon: Ser10,
    },
  ],
  'Network Penetration Testing':[
    {
      title: 'Advanced Perimeter Control',
      description: 'Building robust protections to secure your network edge and Perimeter controls from evolving threats',
      icon: Ser11,
    },
    {
      title: 'DNS Security',
      description: 'Securing DNS infrastructure to prevent hijacking, spoofing, stale records and data exfiltration',
      icon: Ser12,
      isHighlighted: true,
    },
    {
      title: 'Forward and Reverse Proxy',
      description: 'Securing application delivery and access control with forward and reverse proxies',
      icon: Ser13,
    },
    {
      title: 'Firewall Review',
      description: 'Optimizing firewall configurations to protect applications, hosts, and network layers',
      icon: Ser14,
    }
  ],
  'Cloud Security': [
    {
      title: 'Container & Kuberenetes',
      description: 'Securing containerized environments and Kubernetes clusters from internal and external threats.',
      icon: Ser15,
      isHighlighted: true,
    },
    {
      title: 'Virtualization Infrastructure',
      description: 'Hardening virtualization platforms against misconfigurations and vulnerabilities',
      icon: Ser16,
    },
    {
      title: 'Public Cloud Security',
      description: 'Securing cloud environments with tailored assessments for AWS, Azure, Oracle and GCP',
      icon: Ser17,
    },
    {
      title: 'SAAS Solutions',
      description: 'Optimizing SaaS security settings for compliance and reduced attack surface',
      icon: Ser18,
    },
    {
      title: 'Posture Management',
      description: 'Ensuring compliance and minimizing risks with proactive posture management',
      icon: Ser19,
    }
  ],
  'Future Technology Security': [
    {
      title: 'AI, LLM and Machine Learning',
      description: 'Safeguarding AI and machine learning models against adversarial attacks',
      icon: Ser22,
      isHighlighted: true,
    },
    {
      title: '5G Network Security Assessments',
      description: 'Mitigating risks in 5G architectures to enable secure, high-speed data exchange',
      icon: Ser21,
    },
    {
      title: 'Quantum Computing Security Readiness',
      description: 'Preparing your organization for quantum-safe encryption and future-proof security',
      icon: Ser23,
    },
    {
      title: 'Digital Asset Security Assessments',
      description: 'Building trust in the digital economy with expert security for emerging asset classes like NFT, Cryptocurrencies etc.',
      icon: Ser20,
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
  const [activeTab, setActiveTab] = useState('Red Teaming');

  const getServicesData = () => SERVICES[activeTab] || [];

  return (
    <section id="services" className="py-20 relative bg-primery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 our-service-main">
  <div className="basis-full md:basis-2/3 p-4">
    <h2 className="text-4xl lg:text-6xl md:text-6xl font-semibold mb-4 leading-tight heading42-main">
      Our Services And Offerings
    </h2>
  </div>
  <div className="basis-full md:basis-1/3 p-4">
    <h3 className="text-2xl font-semibold text-white-500 mb-2">
      Why settle for 'secure enough'?
    </h3>
    <p className="text-gray-300 text-lg">
      Our in-depth assessments dig deep into your systems to expose hidden risks and build ironclad defenses, ensuring your defenses are not just strong, but future-proof.
    </p>
  </div>
</div>


        <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div
  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
    getServicesData().length === 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-5'
  } gap-6 `}
>
  {getServicesData().map((service, index) => (
    <ServiceCard key={index} {...service} />
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;