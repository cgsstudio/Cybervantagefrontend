import React from 'react';
import tab7 from '../../assest/image/advisory-tab-icons/header1.svg';
import tab8 from '../../assest/image/advisory-tab-icons/header2.svg';
import tab9 from '../../assest/image/advisory-tab-icons/header3.svg';
import tab10 from '../../assest/image/advisory-tab-icons/header4.svg';
import tab11 from '../../assest/image/advisory-tab-icons/header5.svg';
import { ChevronDown, ChevronUp } from 'lucide-react';
import tab1 from '../../assest/image/advisory-image/Core Service Modules.svg';

// Type definitions
type TabKey = 'Cost Efficiency' | 'Strategic Guidance' | 'Flexible Support' | 'Compliance & Risk Expertise' | 'Incident Response Preparedness';

const tabs: TabKey[] = [
  'Cost Efficiency',
  'Strategic Guidance',
  'Flexible Support',
  'Compliance & Risk Expertise',
  'Incident Response Preparedness'
];

const tabIcons = [tab7, tab8, tab9, tab10, tab11];

const shortDescriptions = {
  'Cost Efficiency': "You gain seasoned cybersecurity leadership without executive-level salaries, benefits, or recruitment overhead.",
  'Strategic Guidance': "External perspective uncovers blind spots and ensures unbiased risk evaluation and recommendations.",
  'Flexible Support': "Whether interim, part-time, or project-based, a vCISO scales to your evolving needs and teams dispersed across geographies.",
  'Compliance & Risk Expertise': "Supports alignment with standards like ISO 27001, NESA, SAMA, GDPR, PCI DSS, and more, streamlining readiness and reporting.",
  'Incident Response Preparedness': "Proactive planning, tabletop exercises, and tactical support to navigate crises effectively."
};

const contentByTab = {
  'Cost Efficiency': {
    image: 'path_to_image',
    offerings: [
      {
        title: '1. Advisory & Governance',
        description: <ul className="list-disc pl-4">
          <li>Craft information security strategy aligned with business objectives</li>
          <li>Design comprehensive policies, standards, and a governance framework</li>
        </ul>
      },
      {
        title: '2. Risk Assessment & Mitigation',
        description: <ul className="list-disc pl-4">
          <li>Conduct gap analyses and assess risk across systems and environments</li>
          <li>Prioritize and prescribe controls or remediation plans</li>
        </ul>
      },
      {
        title: '3. Security Implementation',
        description: <ul className="list-disc pl-4">
          <li>Oversee deployment of security controls—from technical safeguards to policy enforcement</li>
          <li>Provide guidance on Cloud, Endpoint, Network, and Application security</li>
        </ul>
      },
      {
        title: '4. Incident Response & Resilience',
        description: <ul className="list-disc pl-4">
          <li>Define incident response playbooks and escalation workflows</li>
          <li>Facilitate tabletop simulations and post-incident reviews</li>
        </ul>
      },
      {
        title: '5. Compliance Management',
        description: <ul className="list-disc pl-4">
          <li>Evaluate alignment with regulatory frameworks and compliance standards</li>
          <li>Deliver audit support and readiness documentation for certifying bodies</li>
        </ul>
      },
      {
        title: '6. Awareness & Training',
        description: <ul className="list-disc pl-4">
          <li>Educate staff through tailored security awareness programs</li>
          <li>Embed cybersecurity culture into everyday operations</li>
       
        </ul>
      }
    ]
  },
  'Strategic Guidance': {
    image: 'path_to_image',
    offerings: [
      {
        title: 'Offering 1',
        description: 'Description for offering 1 under Strategic Guidance'
      },
      {
        title: 'Offering 2',
        description: 'Description for offering 2 under Strategic Guidance'
      }
    ]
  },
  'Flexible Support': {
    image: 'path_to_image',
    offerings: [
      {
        title: 'Offering 1',
        description: 'Description for offering 1 under Flexible Support'
      },
      {
        title: 'Offering 2',
        description: 'Description for offering 2 under Flexible Support'
      }
    ]
  },
  'Compliance & Risk Expertise': {
    image: 'path_to_image',
    offerings: [
      {
        title: 'Offering 1',
        description: 'Description for offering 1 under Compliance & Risk Expertise'
      },
      {
        title: 'Offering 2',
        description: 'Description for offering 2 under Compliance & Risk Expertise'
      }
    ]
  },
  'Incident Response Preparedness': {
    image: 'path_to_image',
    offerings: [
      {
        title: 'Offering 1',
        description: 'Description for offering 1 under Incident Response Preparedness'
      },
      {
        title: 'Offering 2',
        description: 'Description for offering 2 under Incident Response Preparedness'
      }
    ]
  }
};

export default function AdvisoryTab() {
  const [expandedOffering, setExpandedOffering] = React.useState<number | null>(null);

  const toggleOffering = (index: number) => {
    setExpandedOffering(expandedOffering === index ? null : index);
  };

  return (
    <div className='bg-black'>


  
    <div className="container mx-auto px-8 text-white py-8 lg:py-16" id='digitalfinance'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-orange-500 mb-6 heading-h1-main">
          Why Choose a vCISO?
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-24">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className="transition-all duration-300 relative z-0 hover:bg-[linear-gradient(90deg,#F57A00,#7103A4)] hover:scale-105"
            style={{
              borderRadius: 8,
              padding: 2,
            
            }}
          >
            <div
              className="rounded-md bg-[#1F1F1F] p-6 h-full w-full flex flex-col items-center min-h-[200px] md:min-h-[300px] hover:bg-black transition-all duration-300"
              style={{
                borderRadius: 6,
              }}
            >
              <img src={tabIcons[i]} alt="" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-3" />
              <span className="font-bold text-orange-500 text-center text-base md:text-xl mb-2 uppercase">{tab}</span>
              <p className="text-base text-white text-center leading-tight">
                {shortDescriptions[tab]}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-orange-500 mb-6 heading-h1-main">
                Core Service Modules
              </h2>
            </div>
            
            {/* Accordion Content Cards */}
            <div className="space-y-4">
              {contentByTab['Cost Efficiency'].offerings.map((offering, index) => (
                <div
                  key={index}
                  className="overflow-hidden"
                  style={{
                    borderRadius: 8,
                    padding: 1,
                    background: 'linear-gradient(90deg, #F57A00, #7103A4)',
                    margin: '6px 0 6px 6px',
                    marginBottom: '20px'
                  }}
                >
                  <div className="bg-black rounded-[6px] overflow-hidden">
                    <button
                      onClick={() => toggleOffering(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-orange-500">
                        {offering.title}
                      </h3>
                      {expandedOffering === index ? (
                        <ChevronUp className="w-5 h-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-300 ${
                      expandedOffering === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-4">
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full">
              <img 
                src={tab1}
                alt="Security Visual" 
                className="w-full object-contain rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
  );
}