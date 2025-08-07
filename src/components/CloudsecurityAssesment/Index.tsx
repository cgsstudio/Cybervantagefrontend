import React from 'react';
import serv from '../..//assest/image/services/Cloudsecurityhero.png';
import CallToAction from '../CallToAction';
import Cloudsecurityslider from './Cloudsecurityslider';
import CloudsecurityTabs from './CloudsecurityTabs';
import Breadcrumb from '../Breadcrums/Breadcrumb';

const CybersecurityHero = () => {
  return (
    <>

    <Breadcrumb 
      pageTitle="Cloud Security Assesment"
      items={[
    { label: 'Cloud Security Assesment', path: '/cloud-security-assesment' },

  ]} 
/>
      <div className="w-full  from-purple-900 via-gray-900 to-black flex items-center banner-image">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex items-center]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 mt-4 md:mt-0 text-center lg:text-left">
              <div>
                <h2 className="font-semibold text-orange-500 mt-4 text-4xl lg:text-5xl 2xl:text-6xl">
                 Cloud Security That Scales With You, From Code to Cloud, We’ve Got You Covered
                </h2>
                {/* <h2 className='font-bold text-white mt-4 text-2xl'>As organizations accelerate cloud adoption, security can’t be an afterthought.

                </h2> */}
              </div>
              <p className="text-lg  leading-relaxed paragraphcommon">
              Whether you're cloud-native or mid-migration, we help you validate controls, meet compliance, and defend against evolving cloud threats across IaaS, PaaS, and SaaS.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a href="#explore-now">Explore How We Help</a>
              </button>
            </div>
            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm xl:max-w-[320px] 2xl:max-w-lg flex items-center justify-center">
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
      
      <CloudsecurityTabs />
      <Cloudsecurityslider />
      <CallToAction />
    </>
  );
};



export default CybersecurityHero;