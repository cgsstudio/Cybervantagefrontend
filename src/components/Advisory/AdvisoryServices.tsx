import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import advisoryImage from '../../assest/image/services/hero-service.png';
import AdvisoryTab from './AdvisoryTab';
import Breadcrumb from '../Breadcrums/Breadcrumb';
const AdvisoryServices = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  
  return (
    <>
    <Breadcrumb 
  pageTitle="Advisory Services"
  items={[
    { label: 'Advisory Services', path: '/advisory-services' },

  ]} 
/>
        <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-[6.25rem] xl:px-24 py-16">
        <div className="pt-20 lg:pt-20 pt-[10rem] md:pt-0">
          {/* Top Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-normal font-bold text-orange-500 mb-4 md:mb-6 heading-h1-main heading-main hero-heading">
              On-Demand Cybersecurity Leadership For Your Organization
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-medium leading-relaxed">
              Enter proactive cybersecurity consolidated
            </p>
          </div>

          {/* Bottom Content Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            {/* Left Text Section */}
            <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-orange-500 mb-6 heading-h1-main">
                What Is A Virtual CISO?
              </h2>
              <div className="space-y-4 text-[#CFC9C9] text-base sm:text-lg leading-relaxed">
                <p>
                  A Virtual Chief Information Security Officer (vCISO) delivers tailored cybersecurity leadership and guidance on a flexible, on-demand basis.
                </p>
                <p>
                  Combining strategic insight with hands-on support, a vCISO helps organizations of any size to define risk posture, secure their digital assets, manage compliance, and lead incident response efforts, without the expense of a full-time executive.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start mt-8">
                <Link to={'/contact-us'}>
                  <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg">
                    Get Advisory Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img 
                  src={advisoryImage} 
                  alt="Advisory Services" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    <AdvisoryTab />
    
    </>

  );
};

export default AdvisoryServices; 