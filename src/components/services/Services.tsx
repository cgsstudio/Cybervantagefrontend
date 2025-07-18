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
      description: 'Probing your defenses with expert-led testing to identify vulnerabilities',
      icon: Ser1,
      link: '/red-teaming#redteaming',
    },
    {
      title: 'DDOS Simulation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser2,
      isHighlighted: true,
      link: '/red-teaming#redteaming',
    },
    {
      title: 'AI Red teaming',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser3,
      link: '/red-teaming#redteaming',
    },
    {
      title: 'Zero Day Hunting',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser4,
      isHighlighted: true,
      link: '/red-teaming#redteaming',
    },

  ],
  'Application Security': [
    {
      title: 'Web Application Security',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser5,
      link: '/application-security-assessment#applicationsecurity',
    },
    {
      title: 'Mobile Application Security',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser7,
      isHighlighted: true,
      link: '/application-security-assessment#applicationsecurity',
    },
    {
      title: 'API Security',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser8,
      link: '/application-security-assessment#applicationsecurity',
    },
    {
      title: 'Source Code Review',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser9,

      link: '/application-security-assessment#applicationsecurity',
    },
 
  ],
  'Network Penetration Testing':[
    {
      title: 'DNS Security',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser11,
      link: '/network-penetration-testing#networksecurity',
    },
    {
      title: 'Firewall and Edge Devices',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser12,
      isHighlighted: true,
      link: '/network-penetration-testing#networksecurity',
    },
    {
      title: 'Corporate Proxy & Captive Portals',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser13,
      link: '/network-penetration-testing#networksecurity',
    },
    {
      title: 'Remote Access – VPN and ZTNA Infrastructure',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser14,
      link: '/network-penetration-testing#networksecurity',
    }
  ],
  'Cloud Security': [
    {
      title: 'Containers and Kubernetes Security',
      description: 'Securing containerized environments and Kubernetes clusters from internal and external threats.',
      icon: Ser15,
      isHighlighted: true,
      link: '/cloud-security-assesment#cloudsecurity',
    },
    {
      title: 'Virtualization Infrastructure Security',
      description: 'Hardening virtualization platforms against misconfigurations and vulnerabilities',
      icon: Ser16,
      link: '/cloud-security-assesment#cloudsecurity',
    },
    {
      title: 'Public Cloud Security',
      description: 'Securing cloud environments with tailored assessments for AWS, Azure, Oracle and GCP',
      icon: Ser17,
      link: '/cloud-security-assesment#cloudsecurity',
    },
    {
      title: 'SAAS Security',
      description: 'Optimizing SaaS security settings for compliance and reduced attack surface',
      icon: Ser18,
      link: '/cloud-security-assesment#cloudsecurity',
    },
 
  ],
  'Digital Finance and Banking': [
    {
      title: 'Fraud Red Teaming',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser22,
      isHighlighted: true,
      link: '/digital-finance-banking#digitalfinance',
    },
    {
      title: 'Open banking Security',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser21,
      link: '/digital-finance-banking#digitalfinance',
    },
    {
      title: 'ATM security Assessment',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: Ser23,
      link: '/digital-finance-banking#digitalfinance',
    },
    {
      title: 'IoT Security for Banking & Finance',
      description: 'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Application Security'].map(renderServiceCard)}
      </div>
    ),
    'Network Penetration Testing': (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Network Penetration Testing'].map(renderServiceCard)}
      </div>
    ),
    'Red Teaming': (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Red Teaming'].map(renderServiceCard)}
      </div>
    ),
    'Cloud Security Assessment': (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Cloud Security'].map(renderServiceCard)}
      </div>
    ),
    'Digital Finance and Banking': (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 items-stretch">
        {SERVICES['Digital Finance and Banking'].map(renderServiceCard)}
      </div>
    ),
    'Operational Technology Security (OT)': (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
        {SERVICES['Operational Technology Security (OT)'].map(renderServiceCard)}
      </div>
    )
  };

  return (
    <section id="services" className="py-20 relative bg-primery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 our-service-main">
  <div className="basis-full md:basis-2/3 p-4 max-w-full md:max-w-xl">
    <h2 className=" text-4xl lg:text-6xl md:text-6xl font-semibold mb-4 leading-tight heading42-main" data-aos="fade-right">
      Our Services And Offerings
    </h2>
  </div>
  <div className="basis-full md:basis-1/3 p-4" data-aos="fade-left">
    <h3 className="text-2xl font-semibold text-white-500 mb-2">
      Why settle for 'secure enough'?
    </h3>
    <p className="text-gray-300 text-lg">
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