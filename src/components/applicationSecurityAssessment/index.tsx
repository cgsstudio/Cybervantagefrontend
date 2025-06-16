import React from 'react';
import serv from '../..//assest/image/services/hero-service.png'
import SecuritySlider from './SecuritySlider';
import TabContent from './TabContent';
import CallToAction from '../CallToAction';


const CybersecurityHero = () => {
  return (
    <>
      <div className="w-full  from-purple-900 via-gray-900 to-black min-h-screen flex items-center banner-image">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-[70vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 mt-4 md:mt-0">
              <div>
                <h1 className="font-bold text-white mt-4 headingh2">
                  Test Your Application Before Hackers Do It for You.
                </h1>
                <h2 className='font-bold text-white mt-4 text-2xl'>Your app is your business. Don’t let bugs, breaches, or bad actors ruin the party. We’ll
                  test your application like hackers would—only nicer.

                </h2>
              </div>
              <p className="text-lg  leading-relaxed max-w-xl paragraphcommon">
                In today’s digital world, your application is your storefront, your bank vault, and your
                reputation—all rolled into one. Whether it's a web app, mobile app, or a financial
                platform, attackers are constantly probing for weaknesses.
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
      <SecuritySlider />
      <TabContent />
      <CallToAction />
    </>
  );
};



export default CybersecurityHero;