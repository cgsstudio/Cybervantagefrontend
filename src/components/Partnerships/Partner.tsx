import React from "react";
import partner1 from '../../assest/image/about/about-partner-logos/wiz.png';
import partner2 from '../../assest/image/about/about-partner-logos/trunkoz.png';
import partner3 from '../../assest/image/about/about-partner-logos/bulwarkers-logo.png';
import partner4 from '../../assest/image/about/about-partner-logos/axway-logo.png';
import partner5 from '../../assest/image/about/about-partner-logos/Google_for_Startups.png';

// Heroicons imports
import { UserGroupIcon, UsersIcon, BriefcaseIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// Hero section for Partner Program
const Partner: React.FC = () => {
  return (
    <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#000000] overflow-hidden">
      {/* Large green circle background */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0"
        style={{
          width: "1050px",
          height: "990px",
          background: "linear-gradient(90deg, #F57A00 0%, #7103A4 100%)",
          borderRadius: "50%",
          top: "-500px",
        }}
      />
      {/* All content in a container */}
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center py-32">
          <h1 className="text-center font-bold text-[#fff] text-[40px] md:text-[56px] leading-tight mb-4" style={{ fontFamily: "inherit" }}>
            Partnerships
          </h1>
          <p className="text-center text-[#fff] text-lg md:text-xl mb-10 max-w-2xl">
            Partner with a global cybersecurity leader to expand your offerings, build trust, and deliver measurable value to your customers.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
              <button
              className="bg-[#101010] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:bg-[#222]"
              style={{ fontFamily: "inherit" }}
            >
              <a href="/contact-us">Become a Partner</a>
            </button>
           
          </div>
        </div>
        {/* Why Partner with Us section */}
        <div className="relative z-10 w-full flex flex-col items-center mt-12 sm:mt-20 ">
          <h2 className="text-orange-500 font-semibold text-4xl lg:text-5xl 2xl:text-6xl mb-4 text-center" style={{ fontFamily: "inherit" }}>
            Why Partner With Us
          </h2>
          <p className="text-[#fff] text-lg md:text-xl text-center max-w-4xl">
            Enhance your offering with enterprise-grade cybersecurity solutions, trusted by global organizations to secure critical infrastructure, applications, and cloud environments.
          </p>
        </div>
        {/* New 3-column section */}
        <div className="w-full bg-[#000] py-20 flex justify-center items-center">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-[#F57A00] text-[#F57A00] text-4xl font-bold" style={{ fontFamily: "inherit" }}>
                  1
                </span>
              </div>
              <h3 className="text-orange-500 text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: "inherit" }}>
                Expertise That<br />Scales Globally
              </h3>
              <p className="text-[#fff] text-base lg:text-lg max-w-xs">
                Access a seasoned team of cybersecurity and penetration testing professionals with experience across industries, technologies, and geographies.
              </p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-[#F57A00] text-[#F57A00] text-4xl font-bold" style={{ fontFamily: "inherit" }}>
                  2
                </span>
              </div>
              <h3 className="text-orange-500 text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: "inherit" }}>
                Unlock New<br />Revenue Streams
              </h3>
              <p className="text-[#fff] text-base lg:text-lg max-w-xs">
                Drive business growth through partner-exclusive incentives while delivering high-impact security outcomes that add value to your customers.
              </p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-[#F57A00] text-[#F57A00] text-4xl font-bold" style={{ fontFamily: "inherit" }}>
                  3
                </span>
              </div>
              <h3 className="text-orange-500 text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: "inherit" }}>
                Accelerate Market<br />Differentiation
              </h3>
              <p className="text-[#fff] text-base lg:text-lg max-w-xs">
                Stand out in a competitive landscape by aligning with a globally recognized security provider that helps you deliver measurable risk reduction and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
        {/* Trusted Partners section */}
        <div className="w-full bg-[#000] py-8 lg:py-12 flex flex-col items-center">
          <h2 className="text-orange-500 font-semibold text-4xl lg:text-5xl 2xl:text-6xl mb-12 text-center" style={{ fontFamily: "inherit" }}>
            Trusted Partners
          </h2>
          <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10 px-4">
            {/* Row 1 */}
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner1} alt="Torq" className="w-auto" />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner2} alt="Torq" className="w-auto " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner3} alt="Torq" className="w-auto h-full" />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner4} alt="Torq" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner5} alt="Torq" className="w-auto " />
            </div>
          </div>
        </div>
        {/* Types of Partners section */}
        <div className="w-full bg-[#000] py-20 flex flex-col items-center">
          <h2 className="text-orange-500 font-semibold text-4xl lg:text-5xl 2xl:text-6xl mb-4 text-center" style={{ fontFamily: "inherit" }}>
            The Types of Partners We Work With
          </h2>
          <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 px-4 pt-8">
            {/* Tech Alliance Partners */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <UserGroupIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-orange-500 text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
                Tech Alliance<br />Partners
              </div>
            </div>
            {/* Channel Partners */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <UsersIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-orange-500 text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
                Channel<br />Partners
              </div>
            </div>
            {/* Managed Services */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <LockClosedIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-orange-500 text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
                Managed<br />Services
              </div>
            </div>
          </div>
        </div>
        {/* SaaS Ecosystem Section */}
        {/* <div className="w-full bg-[#000000] py-20 flex flex-col items-center">
      
          <h2 className="text-[#fff] font-bold text-3xl md:text-5xl mb-12 text-center" style={{ fontFamily: "inherit" }}>
            Secure Your Customers’ Entire<br />SaaS Ecosystem
          </h2>
          <div className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-2">
          
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Salesforce" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Microsoft 365" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Google Workspace" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Snowflake" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Okta" className="h-20" />
            </div>
       
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="ServiceNow" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Workday" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Slack" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Oracle" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Oracle Netsuite" className="h-20" />
            </div>
    
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Vanta" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="GitHub" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="GitLab" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Zoom" className="h-20" />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center h-32">
              <img src={partner1} alt="Zoom" className="h-20" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Partner;

