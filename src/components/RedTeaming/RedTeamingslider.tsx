import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Zap } from 'lucide-react';
import slideimg from '../../assest/image/services/slider-img.png';
import slideimg1 from '../../assest/image/Redteamingslider/2.png';
import slideimg2 from '../../assest/image/Redteamingslider/Group 1244 (1) (1).png';
import slideimg3 from '../../assest/image/Redteamingslider/Group-1245.png';
import slideimg4 from '../../assest/image/services/slider-img4.png';

const RedTeamingslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "1. Privilege Escalation via Kerberos Delegation Abuse in a Global Financial Institution (Advanced Penetration Testing)  ",
      content: {
        whatWeFound: 'The internal Active Directory environment improperly allowed "Unconstrained Delegation" on key service accounts, enabling lateral movement to critical systems.',
        howWeFound: "After compromising a low-privileged user during simulated phishing, we scanned domain controllers and service principal names (SPNs) to identify unconstrained delegation, then used ticket-granting ticket (TGT) attacks to escalate privileges. ",
        impact: "Attackers could have moved laterally to compromise domain controllers, obtain sensitive financial data, disrupt critical systems, and achieve full network takeover — posing severe operational, reputational, and regulatory risks"
      },
      image: slideimg4,
       bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
      
    },
    {
      id: 2,
      subtitle: "2. DDoS Resilience Bypass via Dynamic IP Resource Exhaustion at a Telecom Provider (DDoS Simulation) ",
      content: {
        whatWeFound: "The telecom's DDoS mitigation relied solely on static IP blocking and rate limiting, making it vulnerable to dynamic IP-based resource exhaustion attacks.",
        howWeFound: " During the DDoS simulation, we leveraged a distributed network of cloud-based instances with rotating IP addresses to flood application-layer endpoints, overwhelming backend databases while evading traditional detection thresholds.",
        impact: "The telecom's critical online services could have been taken offline for extended periods, causing mass service outages, regulatory fines, and significant customer churn in a highly competitive market. "
      },
      image: slideimg1,
      bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      id: 3,
      subtitle: "3. Prompt Injection Attack Enabling Unauthorized Data Access in an AI Customer Support Chatbot (AI Red Teaming) ",
      content: {
        whatWeFound: "The AI-powered customer support chatbot was vulnerable to prompt injection, allowing attackers to manipulate the AI into revealing restricted internal information. ",
        howWeFound: " By crafting adversarial inputs that embedded hidden commands inside normal customer queries, we bypassed standard input sanitization and extracted confidential support scripts and internal process documents. ",
        impact: " Sensitive internal knowledge leaks could enable social engineering attacks, regulatory non-compliance, and significant erosion of customer trust in the company’s AIdriven services. "
      },
      image: slideimg2,
      bgGradient: "from-white-500 to-teal-600",
      icon: <Lock className="w-8 h-8" />
    },
    {
      id: 4,
      subtitle: "4. Remote VPN Session Hijacking in a Healthcare Provider’s ZTNA Deployment",
      content: {
        whatWeFound: "We identified a flaw in the ZTNA (Zero Trust Network Access) token handling process that allowed session hijacking under certain race conditions. ",
        howWeFoundit: "Through a combination of simulated network congestion scenarios and race-condition fuzzing during VPN session establishment, we noticed that expired tokens were accepted in rare edge cases, allowing session impersonation. ",
        impact: "An attacker could impersonate legitimate healthcare workers, gaining unauthorized access to sensitive EHR (Electronic Health Records) systems, risking patient confidentiality and HIPAA compliance violations."
      },
      image: slideimg3,
      bgGradient: "from-white-500 to-emerald-600",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides (optional)
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="w-full py-10 md:px-4 2xl:px-0" >
      <div className="w-full max-w-[1440px] mx-auto relative px-2 md:px-0" style={{
        background: "linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)"
      }}>
        {/* Main Slider Container */}
        <div className="relative h-[700px]  lg:h-[750px] overflow-hidden">
          {/* Fixed Border */}
          <div
            className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
            style={{
              border: "1.5px solid",
              borderImage: "linear-gradient(90deg, #F57A00 0%, #7103A4 100%) 1"
            }}
          ></div>
          {/* Fixed Heading (inside border, absolutely positioned at top) */}
          <div className="absolute top-0 left-0 w-full lg:w-[750px] z-30 px-4 sm:px-6 lg:px-12 pt-8">
            <h1 className="text-2xl md:text-3xl lg:text-[50px] lg:leading-[55px] font-bold leading-tight text-white">
              Innovative Security Bugs & Business Impact
            </h1>
          </div>

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-10`}></div>
              {/* Content Grid */}
              <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-0 p-0 pt-20 sm:pt-24">
                {/* Left Content */}
                <div className="flex flex-col justify-center space-y-6 text-white px-4 lg:px-0  lg:pl-12 pb-6 lg:pb-12">
                  <div className="space-y-4">
                    <h2
                      className="text-base sm:text-lg lg:text-xl font-semibold mt-5"
                      style={{ color: "#CA6200" }}
                    >
                      {slide.subtitle}
                    </h2>
                  </div>
                  {/* Content Sections */}
                  <div className="space-y-4 text-xs sm:text-sm lg:text-base">
                    <div>
                      <h3 className="font-bold text-white-400 mb-2">What we found:</h3>
                      <p className="text-gray-300 leading-relaxed">{slide.content.whatWeFound}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white-400 mb-2">How we found it:</h3>
                      <p className="text-gray-300 leading-relaxed">{slide.content.howWeFound}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white-400 mb-2">Impact:</h3>
                      <p className="text-gray-300 leading-relaxed">{slide.content.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Right Image/Visual */}
                <div className="hidden lg:flex items-center justify-center p-0 h-full">
                  <div className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[600px] flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt="Security Visual"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Navigation Buttons */}
        <div className="absolute bottom-3 2xl:bottom-[3rem] left-1/2 transform -translate-x-1/2 lg:left-10 lg:transform-none flex items-center space-x-4">
          <button
            onClick={prevSlide}
            style={{
              minWidth: '128px',
              borderRadius: 8,
              padding: 2,
              background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)',
            }}
          >
            <div
              style={{
                borderRadius: 6,
                background: '#000000',
                padding: '0.75rem',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="text-white">Previous</span>
            </div>
          </button>
          <button
            onClick={nextSlide}
            className="px-8 py-3 gradient-bg text-white rounded-lg transition-all duration-300 w-32 text-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedTeamingslider;