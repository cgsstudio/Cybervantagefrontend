import React from 'react';
import serv from '../../assest/image/services/network-penetration-hero.png';
import CallToAction from '../CallToAction';
import NetworkPenterationslider from './NetworkPenterationslider';
import NetworkTabs from './NetworkTabs';
import Breadcrumb from '../Breadcrums/Breadcrumb';


const NetworkPenetrationTesting = () => {
  return (
    <>

    <Breadcrumb 
      pageTitle="Network Penetration Testing"
      items={[
    { label: 'Network Penetration Testing', path: '/network-penetration-testing' },

  ]} 
/>
      <div className="w-full  from-purple-900 via-gray-900 to-black flex items-center banner-image">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 mt-4 md:mt-0 text-center lg:text-left">
              <div>
                <h2 className="font-semibold text-white mt-4 text-4xl lg:text-5xl 2xl:text-6xl">
                  Network Penetration Testing Services
                </h2>
                
              </div>
              <p className="text-lg  leading-relaxed max-w-xl paragraphcommon">
                Today’s networks are dynamic. We go beyond perimeter testing, uncovering risks across multi-cloud, VPNs, and remote endpoints.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a href='#explore-now'>Explore How We Help</a>
              </button>
            </div>
            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg flex items-center justify-center">
                <img
                  src={serv}
                  alt="Application Security Assessment"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NetworkTabs />
      <NetworkPenterationslider />
      <CallToAction />
    </>
  );
};

export default NetworkPenetrationTesting;