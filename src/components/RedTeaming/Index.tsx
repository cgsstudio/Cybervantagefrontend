import React from 'react';
import serv from '../../assest/image/services/RedTeaming.png';
import CallToAction from '../CallToAction';
import RedTeamingslider from './RedTeamingslider';
import RedTeamingTabs from './RedTeamingTabs';


const RedTeaming = () => {
  return (
    <>
      <div className="w-full  from-purple-900 via-gray-900 to-black min-h-screen flex items-center banner-image">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-[70vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 mt-4 md:mt-0">
              <div>
                <h1 className="font-bold text-white mt-4 headingh2">Your Security Needs a Reality Check
                </h1>
                <h2 className='font-bold text-white mt-4 text-2xl'>If your team’s never faced a real attack, how do you know you’re ready?

                </h2>
              </div>
              <p className="text-lg  leading-relaxed max-w-xl paragraphcommon">
                Experience where your organization’s security stands when our most elite hackers
                target your organization. We test not just your systems, but your people, processes, and
                monitoring capabilities.
                Our engagements are objective-driven and customized to mimic the tactics, techniques,
                and procedures (TTPs) of real-world attackers — without prior knowledge to blue teams or
                internal IT.
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
      <RedTeamingslider />
      <RedTeamingTabs />
      <CallToAction />

    </>
  );
};

export default RedTeaming;