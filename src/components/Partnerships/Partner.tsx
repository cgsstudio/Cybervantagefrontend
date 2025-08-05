import React from "react";
import partner1 from '../../assest/image/about/about-partner-logos/Group 1286.svg';
import partner2 from '../../assest/image/about/about-partner-logos/download 3.svg';
import partner3 from '../../assest/image/about/about-partner-logos/media_149fe055bcfb29eb7d6ce44fd20b2564de86e153f 1.svg';
import partner4 from '../../assest/image/about/about-partner-logos/SU Programs@2x 1.svg';
import partner5 from '../../assest/image/about/about-partner-logos/Group.svg';
import partner6 from '../../assest/image/about/about-partner-logos/Group.svg';
import partner7 from '../../assest/image/about/about-partner-logos/image-1.svg';
import partner8 from '../../assest/image/about/about-partner-logos/OSEP.D_R8bS1A_Z1JYK2E 1.svg';
import partner9 from '../../assest/image/about/about-partner-logos/osee.svg';
import partner10 from '../../assest/image/about/about-partner-logos/kubernetes.svg';
import partner11 from '../../assest/image/about/about-partner-logos/ceh.svg';
// import partner12 from '../../assest/image/about/about-partner-logos/Group-1287.svg';
import partner13 from '../../assest/image/about/about-partner-logos/azure.svg';
import partner14 from '../../assest/image/about/about-partner-logos/wiz.png';
import partner15 from '../../assest/image/about/about-partner-logos/trunkoz.png';
import partner16 from '../../assest/image/about/about-partner-logos/bulwarkers-logo.png';
import partner17 from '../../assest/image/about/about-partner-logos/axway-logo.png';
import partner18 from '../../assest/image/about/about-partner-logos/Google_for_Startups.png';

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
          width: "1100px",
          height: "1100px",
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
            Cybervantage <br />Partner Program
          </h1>
          <p className="text-center text-[#fff] text-lg md:text-xl mb-10 max-w-2xl">
            Empower your customers to build, grow, and keep their SaaS ecosystems secure.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <button
              className="bg-[#101010] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:bg-[#222]"
              style={{ fontFamily: "inherit" }}
            >
              Register a deal
            </button>
            <button
              className="bg-[#101010] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:bg-[#222]"
              style={{ fontFamily: "inherit" }}
            >
              Become a partner
            </button>
           
          </div>
        </div>
        {/* Why Partner with Us section */}
        <div className="relative z-10 w-full flex flex-col items-center mt-20 ">
          <h2 className="text-[#fff] font-bold text-3xl md:text-5xl mb-4 text-center" style={{ fontFamily: "inherit" }}>
            Why Partner with Us
          </h2>
          <p className="text-[#fff] text-lg md:text-xl text-center max-w-2xl">
            Get the structure and support you need to deliver innovative SaaS security solutions to your customers.
          </p>
        </div>
        {/* New 3-column section */}
        <div className="w-full bg-[#000] py-24 flex justify-center items-center">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-[#F57A00] text-[#F57A00] text-4xl font-bold" style={{ fontFamily: "inherit" }}>
                  1
                </span>
              </div>
              <h3 className="text-[#fff] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "inherit" }}>
                Stay Ahead of<br />the Competition
              </h3>
              <p className="text-[#fff] text-base md:text-lg max-w-xs">
                Reco is the leader in securing SaaS environments. Our partnership delivers the competitive edge and expertise you need to close the SaaS security gap that customers are unable to solve.
              </p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-[#F57A00] text-[#F57A00] text-4xl font-bold" style={{ fontFamily: "inherit" }}>
                  2
                </span>
              </div>
              <h3 className="text-[#fff] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "inherit" }}>
                Grow Your<br />Business
              </h3>
              <p className="text-[#fff] text-base md:text-lg max-w-xs">
                Generate new revenue streams and capitalize on financial incentives while delivering value-added outcomes for your customers. We offer partner incentives.
              </p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-[#F57A00] text-[#F57A00] text-4xl font-bold" style={{ fontFamily: "inherit" }}>
                  3
                </span>
              </div>
              <h3 className="text-[#fff] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "inherit" }}>
                Enhance Your<br />Portfolio Offering
              </h3>
              <p className="text-[#fff] text-base md:text-lg max-w-xs">
                Deliver revolutionary security at the SaaS layer to complement your customers’ existing security stack, and establish yourself as an innovative and trusted advisor in the marketplace.
              </p>
            </div>
          </div>
        </div>
        {/* Trusted Partners section */}
        <div className="w-full bg-[#000] py-20 flex flex-col items-center">
          <h2 className="text-[#fff] font-bold text-3xl md:text-5xl mb-12 text-center" style={{ fontFamily: "inherit" }}>
            Trusted Partners
          </h2>
          <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 px-4">
            {/* Row 1 */}
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4 ">
              {/* Replace src with actual logo */}
              <img src={partner1} alt="AWS" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner2} alt="Wiz" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner3} alt="Palo Alto" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner4} alt="Google Cloud" className="w-auto h-full " />
            </div>
            {/* Row 2 */}
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4 col-span-2 md:col-span-1">
              <img src={partner5} alt="Security Scorecard" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner7} alt="Blink" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner8} alt="Tines" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner9} alt="Torq" className="w-auto h-full " />
            </div>
              <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4 col-span-2 md:col-span-1">
              <img src={partner10} alt="Security Scorecard" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner11} alt="Blink" className="w-auto h-full " />
            </div>
            {/* <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner12} alt="Tines" className="w-auto h-full " />
            </div> */}
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner13} alt="Torq" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner14} alt="Torq" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner15} alt="Torq" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner16} alt="Torq" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner17} alt="Torq" className="w-auto h-full " />
            </div>
            <div className="bg-[#fff] rounded-xl flex items-center justify-center h-32 p-4">
              <img src={partner18} alt="Torq" className="w-auto h-full " />
            </div>
          </div>
        </div>
        {/* Types of Partners section */}
        <div className="w-full bg-[#000] py-20 flex flex-col items-center">
          <h2 className="text-[#fff] font-bold text-3xl md:text-5xl mb-4 text-center" style={{ fontFamily: "inherit" }}>
            The Types of Partners We Work With
          </h2>
          <p className="text-[#fff] text-lg max-w-2xl mb-14 text-center">
            From technology alliances, services providers, and solution providers, Reco can partner with you to help your customer base secure their SaaS ecosystem.
          </p>
          <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
            {/* Tech Alliance Partners */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <UserGroupIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-[#fff] text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
                Tech Alliance<br />Partners
              </div>
            </div>
            {/* Channel Partners */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <UsersIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-[#fff] text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
                Channel<br />Partners
              </div>
            </div>
            {/* GSI & Consultancy Partners */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <BriefcaseIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-[#fff] text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
                GSI &<br />Consultancy Partners
              </div>
            </div>
            {/* Managed Services */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ff6b00] mb-6">
                <LockClosedIcon className="w-12 h-12 text-[#fff]" />
              </span>
              <div className="text-[#fff] text-xl font-bold text-center" style={{ fontFamily: "inherit" }}>
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

