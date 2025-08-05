import React, { useState, useEffect, useRef } from 'react';
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
import Breadcrumb from '../Breadcrums/Breadcrumb';


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
      <div className={`lg:w-1/2 w-full mb-12 lg:mr-8 lg:mb-0 ${reverseOrder ? 'order-2 lg:order-1' : 'order-1 lg:order-1'}`} data-aos="fade-right">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>
      <div
  className={`lg:w-1/2 w-full flex justify-center ${
    reverseOrder ? 'order-1 lg:order-2' : 'order-2 lg:order-2'
  }`}
  data-aos="fade-left"
>
  <div
    className={`mt-4 max-w-${maxWidth} lg:text-left flex flex-col items-center lg:items-start`}
  >
    <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white mb-4">
      {title}
    </h2>

    <div className="space-y-4">
      {content}
    </div>

    <Link to="/#">
      <button className="gradient-bg mt-6 contact-btn px-6 py-2 text-lg font-semibold transition-all duration-200 transform hover:scale-105">
        Read More
      </button>
    </Link>
  </div>
</div>

    </div>
  </div>
);

const AboutPage = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navPositionRef = useRef<number>(0);

  useEffect(() => {
    // Store the initial position of the nav when component mounts
    if (navRef.current) {
      navPositionRef.current = navRef.current.offsetTop;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Compare current scroll position with nav's original position
      if (scrollPosition > navPositionRef.current) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Who We Are section content
  const whoWeAreContent = (
    <>
      <p className="text-[#CFC9C9] font-normal	 mb-4">
        We are a global cybersecurity service provider committed to defending the digital future. From critical infrastructure to global banks, our team protects some of the world's most complex environments against ever-evolving threats.
      </p>

      <p className="text-[#CFC9C9] font-normal	">
        With deep technical expertise and a mission-first mindset, we help organizations not just survive cyber threats, but stay ahead of them
      </p>
    </>
  );

  return (
    <>


<Breadcrumb 
  pageTitle="About Us"
  items={[
    { label: 'About Us', path: '/about' },

  ]} 
/>
    
          
      {/* Section Navigation Bar */}
      <div 
        ref={navRef}
        className={`w-full bg-[#232323] px-4 lg:px-0 py-4 flex justify-center items-center border-b border-[#333] transition-all duration-300 z-40 ${
          isNavSticky ? 'fixed top-[95px] left-0 right-0 shadow-lg' : 'relative'
        }`}>
        <div className="w-full overflow-x-auto whitespace-nowrap -mx-2 px-2 custom-scrollbar">
          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #232323;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #F57A00;
              border-radius: 10px;
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #F57A00 #232323;
            }
          `}</style>
          <nav className="flex items-center justify-center whitespace-nowrap min-w-max">
            <Link to="#about-us" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">About Us</Link>
            <span className="mx-4 text-gray-500">|</span>
            <Link to="#our-global-presence" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Our Global Presence</Link>
            <span className="mx-4 text-gray-500">|</span>
            <Link to="#our-values" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Our Values</Link>
            <span className="mx-4 text-gray-500">|</span>
            <Link to="#why-choose-us" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Why Choose Us</Link>
            <span className="mx-4 text-gray-500">|</span>
            <Link to="#certificate" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">Cerifications</Link>
            <span className="mx-4 text-gray-500">|</span>
            <Link to="#what-we-do" className="text-white text-lg font-medium focus:outline-none hover:text-orange-400 transition">What We Do</Link>
          </nav>
        </div>
      </div>

      {/* Add padding when nav is sticky to prevent content jump */}
      {isNavSticky && <div style={{ height: '60px' }}></div>}

      {/* Big Title Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white mb-4 text-center">
          Relentless In Defense.<br />Human In Approach.<br />Global In Reach.
        </h2>
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


      <section className="flex flex-col items-center justify-center px-8 py-16 global-sec" id='our-global-presence'>
        <div className='mb-16 space-y-4 w-full max-w-4xl'>
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F57A00] text-center">
            Our Global Presence
          </h2>
          <p className="text-white text-lg font-medium text-center">With security operations centers across North America, EMEA, APAC, and the Middle East, we offer 24/7 coverage, delivering local context with global capability.</p>

        </div>
    
      
      {/* Map Container */}
      <div className="container h-full mx-auto">
      <img 
        src={worldMap} 
        alt="Global Presence Map"
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 scale-[1.4] lg:scale-100"
      />
    </div>

      

      
    
    </section>
      <div id="our-values">
        <AboutTabContent />
      </div>

      {/* Why Choose Us Section */}
      <div id="why-choose-us" className="w-full py-8 min-h-[70vh] lg:min-h-[40vh] xl:min-h-[50vh] relative flex items-stretch overflow-hidden hidden lg:block">
        {/* Left Column: Text Content inside container */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch relative z-10" >
          <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-8 max-w-xl py-16 md:py-0 z-20" >
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-orange-500 mb-8">
              Why Choose Us
            </h2>
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
                <span className="text-white text-lg font-medium">24x7 support from real cybersecurity operators, not ticket queues</span>
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
        <div className="hidden md:block absolute right-0 pl-8 top-0 h-full w-1/2 z-0">
          <img
            src={fourtsectionimg}
            alt="Why Choose Us Illustration"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: '500px', maxHeight: 'none' }}
          />
        </div>
      </div>

      {/* Mobile & Tablet Why Choose Us Section */}
<div id="why-choose-us-mobile" className="w-full py-8 lg:hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col space-y-8">
      {/* Text Content */}
      <div className="w-full" >
        <h2 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[72px] font-semibold text-orange-500 mb-8 text-center">
          Why Choose Us
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start">
            <span className="text-orange-500 mr-4 mt-1 flex-shrink-0">
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

      {/* Image */}
      <div className="w-full"  >
        <img
          src={fourtsectionimg}
          alt="Why Choose Us Illustration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
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
          <section id="contact" className='px-8 lg:px-8 py-16 xl:py-24'>
            <div className="">
      <div className="container  mx-auto flex flex-col justify-center items-center  text-center md:text-left bg-gradient-to-r from-[#F57A00] to-[#7103A4] py-20 px-6 rounded-lg ">
        <div className='w-full max-w-7xl flex flex-col gap-4 justify-between items-center'>

        <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white mb-4 md:mb-0 relative z-10 heading-call-to">
        Ready to Engage?
        </h2>
        <p className='text-xl md:text-3xl font-semibold text-center'>Whether you're facing a live threat, undergoing a digital transformation, or preparing for the next audit, we're ready.</p>
        <Link to={'/contact-us'}>
        <button className="bg-white text-orange-500 hover:text-orange-600 font-semibold py-4 px-6 mt-8 rounded-lg shadow-md transition-transform transform hover:scale-105 relative z-10">
        Talk to Our Experts →
        </button>
        
        </Link>
      

        </div>
      
      </div>
    </div>
    </section>
  
    </>
  );
};

export default AboutPage;