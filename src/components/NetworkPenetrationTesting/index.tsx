import React from 'react';
import serv from '../../assest/image/services/network-penetration-hero.png';
import CallToAction from '../CallToAction';
import NetworkPenterationslider from './NetworkPenterationslider';
import NetworkTabs from './NetworkTabs';


const NetworkPenetrationTesting = () => {
  return (
    <>
      <div className="w-full  from-purple-900 via-gray-900 to-black min-h-screen flex items-center banner-image">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-[70vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 mt-4 md:mt-0">
              <div>
                <h1 className="font-bold text-white mt-4 headingh2">
                  We Break In So Hackers Can’t: Network Penetration Testing That Works
                </h1>
                <h2 className='font-bold text-white mt-4 text-2xl'>Modern enterprises no longer have a fixed perimeter — hybrid environments, remote work, SaaS adoption, and multi-cloud sprawl have redefined the attack surface.

                </h2>
              </div>
              <p className="text-lg  leading-relaxed max-w-xl paragraphcommon">
                Our Network Penetration Testing service simulates real-world attacks to identify
                vulnerabilities in network infrastructure, access controls, and perimeter layer defenses. We
                go beyond automated scans by performing in-depth manual sophisticated attack
                techniques to evaluate the resilience of DNS Infrastructure, Network and Web Application
                Firewalls, Forward Proxies, and remote access gateways.

              </p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore How We Help
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
      <NetworkPenterationslider />
      <NetworkTabs />
      <CallToAction />
    </>
  );
};

export default NetworkPenetrationTesting;