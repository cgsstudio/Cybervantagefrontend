import React from 'react';
import './IndustriesSection.css'; // Import the CSS file for styling
import icon1 from "../../assest/image/DefenseandGovernment.svg";
import icon2 from "../../assest/image/BankingandFinancial.svg";
import icon3 from "../../assest/image/Critical.svg";
import icon4 from "../../assest/image/helth.svg";
import icon5 from "../../assest/image/PowerSector .svg";
import icon6 from "../../assest/image/DigitalandCrypto.svg";
import icon7 from "../../assest/image/Technology.svg";
import icon8 from "../../assest/image/bg-service.png";
import 'aos/dist/aos.css';


const IndustriesSection = () => {
  const industries = [
    {
      title: "Defense and Government",
      description:
        "Fortifying national assets and sensitive data against cyber threats with robust, proactive defenses",
      icon: icon1,
    },
    {
      title: "Banking and Financial Services",
      description:
        "Empowering financial institutions with robust defenses to safeguard assets and customer trust.",
      icon: icon2,
    },
    {
      title: "Critical Infrastructure",
      description:
        "Minimizing risks to critical services with advanced threat detection and prevention strategies",
      icon: icon3,
    },
    {
      title: "Healthcare",
      description:
        "Securing patient data and medical systems from breaches and ransomware attacks",
      icon: icon4,
    },
    {
      title: "Power Sector - Oil, Gas and Energy",
      description:
        "Defending energy grids and production systems against cyber threats and operational disruptions",
      icon: icon5,
    },
    {
      title: "Digital and Crypto",
      description:
        "Providing robust security for digital assets and ensuring safe cryptocurrency transactions.",
      icon: icon6,
    },
    {
      title: "Cutting Edge Technology",
      description:
        "Ensuring the safe adoption of AI, IoT, and quantum systems through expert assessments",
      icon: icon7,
    },
  ];

  // Separate the first item and the remaining items
  const [firstIndustry, ...remainingIndustries] = industries;

  return (
    <section id="support" className="bg-primery bg-main-back"style={{
      backgroundImage: "url('../assest/image/bg-service.png')",
      backgroundPosition: "left center",  
      backgroundSize: "cover",          
      backgroundRepeat: "no-repeat",    
    }}>
      <div className="industries-container container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="industries-main industries-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 items-start"
        >
          {/* Left Column: Heading and Description (spans 2 columns) */}
          <div
            className="col-span-1 xl:col-span-2 max-w-2xl "
            data-aos="fade-right"
          >
            <h2 className="text-4xl lg:text-6xl md:text-6xl font-semibold mb-4 leading-tight text-left heading42-main ">
              Industries We Support
            </h2>
            <p className="text-gray-300 mb-7 text-center xl:text-left">
              We are one of the fastest growing companies with a footprint in India,
              Middle East & North America. Our clientele base spans Banks, PSUs,
              Fortune 1000 companies, IT/ITES, Logistics, Start-ups, and SMBs.
            </p>
          </div>

          {/* Right Column: Single Icon Box */}
          <div
            className="col-span-1 xl:col-span-1 xl:col-start-3"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className="industry-card mb-4">
              <img className="industry-icon mb-2" src={firstIndustry.icon} alt={firstIndustry.title} />
              <h3 className="text-lg font-bold text-white main-text-bold">{firstIndustry.title}</h3>
              <p className="text-gray-300 text-sm text-main-light">{firstIndustry.description}</p>
            </div>
          </div>
        </div>


        {/* Remaining Icon Boxes Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20 mt-8" data-aos="fade" data-aos-delay="300">
          {remainingIndustries.map((industry, index) => (
            <div key={index} className="industry-card mb-4">
              <img className="industry-icon mb-2" src={industry.icon} alt={industry.title} />
              <h3 className="text-lg font-bold text-white main-text-bold">{industry.title}</h3>
              <p className="text-gray-300 text-sm text-main-light">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
