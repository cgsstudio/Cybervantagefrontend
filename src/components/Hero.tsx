import React from 'react';
import MyHexagon from '../assest/image/hero01.svg';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center px-4 sm:px-8 md:px-12 lg:px-[6.25rem] xl:px-24">
      <div className="absolute inset-0 hero-banner" />
      <div className="container mx-auto relative z-10 pt-20 lg:pt-20 pt-[10rem] md:pt-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-normal font-bold text-white mb-4 md:mb-6 heading-h1-main heading-main hero-heading">
              Security from Every Angle, Protection in Every Layer
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-medium leading-relaxed">
              Uncompromising Security Tailored for Your Business from Code to Cloud with proven expertise and unmatched experience.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg">
                Explore How We Help
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className=" flex justify-center mt-8 lg:mt-0">
            <img
              src={MyHexagon}
              alt="Custom Hexagon"
              className=" sm:w-3/4 md:w-2/3 lg:w-full animate-pulse image-hero-main"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
