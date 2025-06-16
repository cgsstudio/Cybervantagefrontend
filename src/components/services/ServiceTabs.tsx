import React, { useState } from 'react';

const tabs = [
  'Red Teaming',
  'Application Security',
  'Network Penetration Testing',
  'Cloud Security',
  'Future Technology Security',
  'Operational Technology Security (OT)',
];

const ServiceTabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
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
  );
};

export default ServiceTabs;