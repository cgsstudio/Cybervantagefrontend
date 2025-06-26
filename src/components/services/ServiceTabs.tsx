import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabs = [
  'Application Security Assessment',
  'Network Penetration Testing',
  'Red Teaming',
  'Cloud Security Assessment',
  'Digital Finance and Banking',
];

const ServiceTabs = ({ activeTab, setActiveTab, contentMap }: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void;
  contentMap: { [key: string]: React.ReactNode };  // Add this prop to map tabs to their content
}) => {
  const [expandedTab, setExpandedTab] = useState<string | null>(null);

  const toggleTab = (tab: string) => {
    if (expandedTab === tab) {
      setExpandedTab(null);
    } else {
      setExpandedTab(tab);
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Helper function to wrap content with AOS attributes
  const wrapWithAOS = (content: React.ReactNode, index: number) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-delay={index * 200}
        key={index}
      >
        {content}
      </div>
    );
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:flex flex-wrap gap-2 justify-center mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
              activeTab === tab
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                : 'border border-orange-500/30 text-gray-300 hover:border-orange-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile View with Expandable Sections */}
      <div className="lg:hidden space-y-4">
        {tabs.map((tab) => (
          <div key={tab} className="w-full">
            <button
              onClick={() => toggleTab(tab)}
              className="w-full p-[2px] rounded-lg transition-all duration-300"
              style={{
                background: expandedTab === tab
                  ? 'linear-gradient(90deg, #F57A00, #7103A4)'
                  : '#000000',
              }}
            >
              <div className="bg-black rounded-md p-4 flex items-center justify-between">
                <span className="font-medium text-sm text-white">{tab}</span>
                <ChevronRight 
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    expandedTab === tab ? 'rotate-90' : ''
                  }`} 
                />
              </div>
            </button>
            
            {/* Show content only for expanded tab */}
            {expandedTab === tab && (
              <div className="mt-4  ">
                {contentMap[tab]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Content Section */}
      <div className="hidden lg:block">
        {Array.isArray(contentMap[activeTab])
          ? contentMap[activeTab].map((content: React.ReactNode, index: number) =>
              wrapWithAOS(content, index)
            )
          : wrapWithAOS(contentMap[activeTab], 0)
        }
      </div>
    </div>
  );
};

export default ServiceTabs;