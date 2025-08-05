import React, { useEffect } from 'react';
import MyHexagon from '../assest/image/hero01.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import herobanner from '../assest/image/Hero-video/home-bg.mp4'
import { Link } from 'react-router-dom';


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="relative min-h-[100%] lg:min-h-screen xl:min-h-screen bg-black flex items-center px-4 sm:px-8 md:px-12 lg:px-[3rem] xl:px-24 overflow-x-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          maxWidth: '100vw', // Prevent overflow
        }}
      >
        <source src={herobanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0" />
      <div className="container mx-auto relative z-10 pt-20 md:pt-30 lg:pt-20 pt-[10rem]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center mb-10 md:mb-16 md:pt-30 lg:pt-30 lg:text-left" data-aos="fade-up">
            <h1 className=" text-[34px] md:text-[42px] xl:text-[50px] 2xl:text-[75px] leading-normal font-bold text-white mb-4 md:mb-6 heading-h1-main heading-main">
              Security from Every Angle, Protection in Every Layer
            </h1>
            <p className="text-white-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-medium leading-relaxed">
              Uncompromising Security Tailored for Your Business from Code to Cloud with proven expertise and unmatched experience.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to={'/contact-us'}>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg">
                Explore How We Help
              </button>
              
              </Link>
           
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mt-8 lg:mt-0" data-aos="fade-left">
            <img
              src={MyHexagon}
              alt="Custom Hexagon"
              className="hidden sm:w-3/4 md:w-2/3 lg:w-full animate-pulse image-hero-main"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;