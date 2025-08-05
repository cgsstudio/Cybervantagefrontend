import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Zap } from 'lucide-react';
import slideimg from '../../assest/image/NetworkPenetrationTestingimage/1.png';
import slideimg1 from '../../assest/image/NetworkPenetrationTestingimage/2.png';
import slideimg2 from '../../assest/image/NetworkPenetrationTestingimage/3.png';
import slideimg3 from '../../assest/image/NetworkPenetrationTestingimage/4.png';

const NetworkPenterationslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "1. DNS Cache Poisoning Vulnerability in a Global Retail Chain ",
      content: {
        whatWeFound: "We discovered that the internal recursive DNS servers of a major retail chain were susceptible to cache poisoning attacks, allowing malicious actors to redirect legitimate corporate traffic to attacker-controlled domains.",
        howWeFound: "During an internal network assessment, we simulated slow and fragmented DNS responses and observed that the servers incorrectly cached non-authoritative responses. Further probing revealed that response validation was improperly configured, lacking DNSSEC validation. ",
        impact: "Successful exploitation could allow attackers to hijack employee web traffic, leading to credential theft, malware distribution within the corporate network, and significant disruption of internal operations across hundreds of retail outlets. "
      },
      image: slideimg,
       bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
      
    },
    {
      id: 2,
      subtitle: "2. Misconfigured Firewall Rules Exposing Sensitive APIs in a FinTech Company",
      content: {
        whatWeFound: "We identified overly permissive firewall configurations that unintentionally exposed internal financial APIs to the public internet. ",
        howWeFound: "Through external network reconnaissance combined with controlled scanning from multiple geographic locations, we mapped open TCP ports and fingerprinted the exposed services. Subsequent review of firewall policies showed wildcard rules where granular controls should have been enforced. ",
        impact: "If exploited, unauthorized parties could access sensitive financial transaction endpoints, risking massive data breaches, regulatory fines, and reputational loss."
      },
      image: slideimg1,
      bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      id: 3,
      subtitle: "3. Captive Portal Bypass and Internal Network Access at a Luxury Hotel Chain",
      content: {
        whatWeFound: " What we found: We discovered a vulnerability in the hotel's captive portal implementation, where guests could bypass authentication and gain limited access to internal administrative networks. ",
        howWeFound: "During an on-site penetration test, we analyzed the captive portal flow and injected crafted DNS and HTTP requests. By exploiting an open proxy misconfiguration behind the captive portal, we were able to pivot into restricted network segments. ",
        impact: "Attackers could perform lateral movement, intercept administrative communications, or launch attacks against hotel backend systems, risking the exposure of guest PII (Personally Identifiable Information) and critical operational systems. "
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

  const currentSlideData = slides[currentSlide];

  return (
    <div className="text-white py-16 xl:py-20 px-8">
      <div className="container mx-auto relative px-2 md:px-0">
        <div className="relative overflow-hidden" style={{
          background: "linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)"
        }}>
          <div
            className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
            style={{
              border: "1.5px solid",
              borderImage: "linear-gradient(90deg, #F57A00 0%, #7103A4 100%) 1"
            }}
          ></div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold leading-tight text-white">
                  Innovative Security Bugs & Business Impact
                </h2>
              </div>

              {/* Subtitle */}
              <div className="mb-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CA6200]">
                  {currentSlideData.subtitle}
                </h3>
              </div>

              {/* Scrollable Content Section */}
              <div className="flex-1 pr-4 " 
                   style={{
                     scrollbarWidth: 'thin',
                     scrollbarColor: '#F57A00 transparent'
                   }}>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white-400 mb-2">What we found:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {currentSlideData.content.whatWeFound}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white-400 mb-2">How we found it:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {currentSlideData.content.howWeFound}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white-400 mb-2">Impact:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {currentSlideData.content.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="mt-auto hidden lg:flex items-center gap-4 pt-3">
                <div className="flex items-center space-x-4">
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

                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <img
                  src={currentSlideData.image}
                  alt={`Security Bug ${currentSlideData.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden px-6 pb-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  style={{
                    minWidth: '100px',
                    borderRadius: 8,
                    padding: 2,
                    background: 'linear-gradient(90deg, #F57A00 0%, #7103A4 100%)',
                  }}
                >
                  <div
                    style={{
                      borderRadius: 6,
                      background: '#000000',
                      padding: '0.5rem',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span className="text-white text-sm">Previous</span>
                  </div>
                </button>
                <button
                  onClick={nextSlide}
                  className="px-6 py-2 gradient-bg text-white rounded-lg transition-all duration-300 w-24 text-center text-sm"
                >
                  Next
                </button>
              </div>

              <div className="text-gray-400 text-sm font-medium">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkPenterationslider;