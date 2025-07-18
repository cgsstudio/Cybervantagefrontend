import React from 'react';
import section2 from '../../assest/image/about/section-2.svg'
import design1 from '../../assest/image/about/Design-1.svg'
import worldMap from '../../assest/image/about/map.png'; // Add your actual map image here
import { Link } from 'react-router-dom';
import AboutTabContent from './AboutTabContent';
import locationIcon from '../../assest/image/about/location-icon.svg'; // Add this import
import fourtsectionimg from '../../assest/image/about/aboutsectionimage.png'
import TestimonialSlider from './TestimonialSlider';
import check from  '../../assest/image/about/check.svg'


// TwoColumnContent reused from Audits.tsx
const TwoColumnContent = ({
  title,
  content,
  image,
  imageAlt,
  reverseOrder = false,
  backgroundColor = "",
  maxWidth = "xl"
}) => (
  <div className={`w-full py-12 flex justify-center items-center who-we-wre`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className={`lg:w-1/2 w-full mb-12 lg:mb-0 ${reverseOrder ? 'order-2 lg:order-1' : 'order-1 lg:order-1'}`} data-aos="fade-right">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>
      <div className={`lg:w-1/2 w-full flex justify-center ${reverseOrder ? 'order-1 lg:order-2' : 'order-2 lg:order-2'}`} data-aos="fade-left">
        <div className={`mt-4 max-w-${maxWidth}`}>
          <h3 className="text-[60px] font-semibold text-white mb-4">
            {title}
          </h3>
          <div className="space-y-4">
            {content}
          </div>
          <Link to="/#" >
            <button
              
              className="gradient-bg mt-6 contact-btn px-6 py-2 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Read More
            </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
);

const AboutPage = () => {
  // Who We Are section content
  const whoWeAreContent = (
    <>
      <p className="text-[#CFC9C9] font-normal	 mb-4">
        We are a global cybersecurity service provider committed to defending the digital future. From critical infrastructure to global banks, our team protects some of the world’s most complex environments against ever-evolving threats.
      </p>

      <p className="text-[#CFC9C9] font-normal	">
        With deep technical expertise and a mission-first mindset, we help organizations not just survive cyber threats — but stay ahead of them
      </p>
    </>
  );

  return (
    <>
    
      {/* Hero Section */}
      <div className="min-h-screen bg-black relative overflow-hidden mt-[100px]">
        {/* Background Video with orange gradient overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://vultureconcepts.com/wp-content/uploads/2025/07/shield-icon-cyber-security-secure-network-shield-i-2024-12-11-16-51-06-utc.mp4"
            autoPlay
            loop
            muted
            playsInline
         
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-black/90" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
            {/* Left column */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              {/* Left column content will go here */}
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Relentless In Defense.
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Human In Approach.
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Global In Reach.
              </h2>

            </div>

            {/* Right column */}
            <div className="w-full md:w-1/2 space-y-6 px-4 md:px-8">

            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <TwoColumnContent
        title="Who We Are"
        content={whoWeAreContent}
        image={section2}
        imageAlt="Who We Are"
        backgroundColor="bg-black"
      />

      {/* Our Global Presence Section */}
      <div className="relative w-full h-screen overflow-hidden  ">
        {/* Background Map Container */}
        <div className="absolute inset-0">
          <div className="w-full h-full  flex items-center justify-center ">
            {/* World Map Image - Replace with your actual image */}
            <div className="w-full max-w-7xl h-auto">
              <img
                src={worldMap}
                alt="World Map"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Title - Positioned above the map */}
        <div className="relative z-10 text-center pt-8 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 inline-block px-8 py-4 rounded-lg">
            Our Global Presence
          </h2>
        </div>

        {/* Location Markers */}
        <div className="relative z-10 w-full h-full ">
          {/* North America - Positioned over map */}
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2">
            <div className="relative space-y-4">
              <img src={locationIcon} alt="location" className="w-10 h-10 animate-bounce" />
              <div className="absolute top-8 left-1/2 transform  whitespace-nowrap">
                <div className="bg-[#F57A00] text-white px-3 py-1 rounded text-sm font-[600]">
                  NORTH AMERICA
                </div>
              </div>
            </div>
          </div>

          {/* EMEA - Positioned over map */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
            <div className="relative space-y-4">
              <img src={locationIcon} alt="location" className="w-10 h-10 animate-bounce" />
              <div className="absolute top-8 left-1/2 transform whitespace-nowrap">
                <div className="bg-[#F57A00] text-white px-2 py-1 rounded text-sm font-[600]">
                  EMEA
                </div>
              </div>
            </div>
          </div>

          {/* Middle East - Positioned over map */}
          <div className="absolute top-1/3 right-1/3 transform translate-x-1/2">
            <div className="relative space-y-4">
              <img src={locationIcon} alt="location" className="w-10 h-10 animate-bounce" />
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-[#F57A00] text-white px-3 py-1 rounded text-sm font-[600]">
                  MIDDLE EAST
                </div>
              </div>
            </div>
          </div>

          {/* APAC - Positioned over map */}
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2">
            <div className="relative space-y-4">
              <img src={locationIcon} alt="location" className="w-10 h-10 animate-bounce " />
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-[#F57A00] text-white px-3 py-1 rounded text-sm font-[600]">
                  APAC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutTabContent />

      {/* Why Choose Us Section */}
      <div className="w-full py-8 min-h-[70vh]  relative flex items-stretch overflow-hidden">
        {/* Left Column: Text Content inside container */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch relative z-10">
          <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-8 max-w-xl py-16 md:py-0 z-20" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">Why Choose Us</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1">
                  {/* Use imported check SVG */}
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Trusted by global enterprises and critical sectors</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Hands-on expertise in APT simulation, zero-day research, and emerging technology.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Transparent reporting, clear ROI, and risk-aligned strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">24x7 support from real cybersecurity operators — not ticket queues</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Certified professionals: OSCP, CREST, GIAC, CISSP, CEH, and more</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Column: Full Height Image OUTSIDE container */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 z-0">
          <img
            src={fourtsectionimg}
            alt="Why Choose Us Illustration"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: '500px', maxHeight: 'none' }}
          />
        </div>
      </div>

      {/* Testimonial Slider Section */}
      <TestimonialSlider />
    </>
  );
};

export default AboutPage;