import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Zap } from 'lucide-react';
import slideimg from '../../assest/image/services/slider-img.png';
import slideimg1 from '../../assest/image/services/slider-img1.png';
import slideimg2 from '../../assest/image/services/slider-img2.png';
import slideimg3 from '../../assest/image/services/slider-img3.png';

const SecuritySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "1. Broken Object-Level Authorization in a Healthcare Web Portal",
      content: {
        whatWeFound: "We discovered that patient medical records could be accessed by unauthorized users by manipulating object IDs in API requests, exposing sensitive health information across accounts.",
        howWeFound: "During manual testing of the web application’s API endpoints, we incremented record identifiers in GET requests and were able to retrieve other patients’ records without authentication or access control checks.",
        impact: "This vulnerability violated HIPAA compliance and risked mass data breaches of Protected Health Information (PHI), exposing the organization to regulatory penalties, lawsuits, and reputational harm."
      },
      image: slideimg,
       bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
      
    },
    {
      id: 2,
      subtitle: "2. Insecure Deep Link Handling in a Banking Mobile App ",
      content: {
        whatWeFound: "The mobile banking app accepted unauthenticated deep links that allowed an attacker to bypass login screens and access certain pre-authenticated app functions. ",
        howWeFound: "By reverse-engineering the mobile APK and analyzing manifest files, we identified exported activities with deep link handlers lacking authentication checks, then crafted a malicious deep link to trigger privileged app states. ",
        impact: "An attacker could exploit this flaw in phishing attacks, leading to unauthorized fund transfers or account manipulation, jeopardizing customer assets and exposing the bank to fraud and compliance failures."
      },
      image: slideimg1,
      bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      id: 3,
      subtitle: "️3. Mass Assignment Vulnerability in an E-Commerce API  ",
      content: {
        whatWeFound: "The public API allowed clients to submit extra parameters in JSON payloads that unintentionally overwrote sensitive fields like isAdmin and accountType, enabling privilege escalation. ",
        howWeFound: "We performed fuzz testing with unexpected fields in API requests and confirmed that unauthorized privilege changes were accepted and stored in the backend database.",
        impact: "This bug allowed attackers to escalate user privileges, gain admin access to other customers’ data, and manipulate order transactions — risking fraud, data exposure, and trust erosion."
      },
      image: slideimg2,
      bgGradient: "from-white-500 to-teal-600",
      icon: <Lock className="w-8 h-8" />
    },
    {
      id: 4,
      subtitle: "4. Hardcoded Credentials in Source Code of an Educational Platform",
      content: {
        whatWeFound: "During a source code review of an online learning platform, we identified hardcoded database credentials embedded in a configuration file that was pushed to a public code repository. ",
        howWeFound: "Automated scanning flagged exposed secrets, and manual verification confirmed active database access using the credentials.",
        impact: "Attackers could gain direct database access to millions of student records, grades, and personally identifiable information (PII), leading to data breaches, regulatory fines, and loss of educational partner contracts."
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

export default SecuritySlider;

/* Add this CSS to your global styles or component */
