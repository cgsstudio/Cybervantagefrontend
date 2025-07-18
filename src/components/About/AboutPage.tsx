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
import CertificationsBanner from './CertificationsBanner';
import hero01 from '../../assest/image/about/about-partner-logos/new.png';


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

      {/* Section Navigation Bar */}
      <div className="w-full bg-[#232323] py-4 flex justify-center items-center border-b border-[#333]">
        <nav className="flex items-center">
          <Link to="#about-us" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">About Us</Link>
          <span className="mx-4 text-gray-500">|</span>
          <Link to="#our-global-presence" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Our Global Presence</Link>
          <span className="mx-4 text-gray-500">|</span>
          <Link to="#our-values" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Our Values</Link>
          <span className="mx-4 text-gray-500">|</span>
          <Link to="#why-choose-us" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Why Choose Us</Link>
        </nav>
      </div>

      {/* Who We Are Section */}
      <div id="about-us">
        <TwoColumnContent
          title="Who We Are"
          content={whoWeAreContent}
          image={section2}
          imageAlt="Who We Are"
          backgroundColor="bg-black"
        />
      </div>

   

  


      {/* Our Global Presence Section */}
      <div id="our-global-presence" className="relative w-full h-screen overflow-hidden  ">
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


      </div>
      <div id="our-values">
        <AboutTabContent />
      </div>

      {/* Why Choose Us Section */}
      <div id="why-choose-us" className="w-full py-8 min-h-[70vh]  relative flex items-stretch overflow-hidden">
        {/* Left Column: Text Content inside container */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch relative z-10">
          <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-8 max-w-xl py-16 md:py-0 z-20" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">Why Choose Us</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1 flex-shrink-0">
                  {/* Use imported check SVG */}
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Trusted by global enterprises and critical sectors</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Hands-on expertise in APT simulation, zero-day research, and emerging technology.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">Transparent reporting, clear ROI, and risk-aligned strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                </span>
                <span className="text-white text-lg font-medium">24x7 support from real cybersecurity operators — not ticket queues</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4 mt-1 flex-shrink-0">
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
      <CertificationsBanner/>
         {/* What We Do Section */}
         <div id="what-we-do">
        <TwoColumnContent
          title="What We Do"
          image={hero01}
          imageAlt="What We Do"
          backgroundColor="bg-black"
          content={
            <>
              <div className="mb-2">
                <span className="text-xl font-semibold text-orange-400">We offer end-to-end security services across:</span>
              </div>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Application & Network Penetration Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Red Teaming & Threat Emulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Cloud, OT, and ICS Security Assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Zero-Day Research & AI Red Teaming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Digital Finance & Incident Response</span>
                </li>
              </ul>
            </>
          }
        />
      </div>
          <section id="contact" className='py-24 '>
            <div className="">
      <div className="container mx-auto flex flex-col gap-4 justify-between items-center text-center md:text-left bg-gradient-to-r from-[#F57A00] to-[#7103A4] py-20 px-6 rounded-lg ">
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight lg:leading-relaxed md:leading-relaxed mb-4 md:mb-0 relative z-10 heading-call-to">
        Ready to Engage?
        </h2>
        <p className='text-xl md:text-3xl font-semibold text-center'>Whether you're facing a live threat, undergoing a digital transformation, or preparing for the next audit — we’re ready.</p>
        <button className="bg-white text-orange-500 hover:text-orange-600 font-semibold py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 relative z-10">
        Talk to Our Experts →
        </button>
      </div>
    </div>
    </section>
  
    </>
  );
};

export default AboutPage;