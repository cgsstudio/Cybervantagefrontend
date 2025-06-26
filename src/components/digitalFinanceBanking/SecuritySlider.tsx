import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Zap } from 'lucide-react';
import slideimg from '../../assest/image/digitalFinanceBankingslider/Group 1247.png';
import slideimg1 from '../../assest/image/digitalFinanceBankingslider/Group 1248.png';
import slideimg2 from '../../assest/image/digitalFinanceBankingslider/Group 1249.png';
import slideimg3 from '../../assest/image/services/slider-img3.png';

const SecuritySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "1. Synthetic Identity Bypass in a Loan Approval Workflow (Fraud Red Teaming)",
      content: {
        whatWeFound: "The bank’s fraud detection system failed to detect synthetic identities crafted with real but unrelated identity fragments, allowing multiple high-value loans to be approved fraudulently.",
        howWeFound: "As part of a fraud red teaming engagement, we constructed multiple applicant profiles combining legitimate national IDs, fake addresses, and reused phone numbers. These passed KYC and credit scoring systems with minimal friction. Loan approval workflow had a photo verification step as well which we bypassed.",
        impact: "This bypass technique could be weaponized by fraud rings to drain credit portfolios, bypass anti-fraud scoring engines, and generate high financial losses — while also undermining the credibility of customer onboarding and compliance programs."
      },
      image: slideimg,
      bgGradient: "from-white-500 to-pink-600",
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 2,
      subtitle: "2. Insecure implementation of Open banking API Tokens",
      content: {
        whatWeFound: "During an assessment of Digital Bank in EU, we found an authorization flaw in consent revocation where third-party access tokens remained active even after the user revoked them also found that some APIs did not validate JWT scope properly and allowed actions not permitted in the token scope.",
        howWeFound: "By manually inspecting token lifecycles during consent revocation and replaying older tokens during time-bound expiry windows.",
        impact: "Allowed continued access to sensitive account data post-revocation — fixed by implementing instant token invalidation upon consent withdrawal."
      },
      image: slideimg1,
      bgGradient: "from-white-500 to-pink-600",
      icon: <Lock className="w-8 h-8" />
    },
    {
      id: 3,
      subtitle: "3. BIOS-Level Exploit in ATM Allowing Root Shell Access and Malware Injection (ATM Security Assessment)",
      content: {
        whatWeFound: "Several ATMs from a major vendor allowed BIOS access without a password, exposing the device to boot-level compromise and malware installation.",
        howWeFound: "During a physical ATM assessment, we used a standard USB keyboard to access the BIOS menu on reboot and found no password was configured. We then booted a live Linux environment and accessed the ATM’s filesystem where we dropped a sample binary.",
        impact: "A threat actor with short-term physical access could deploy malware to steal card data, jackpot cash, or disable ATM security software — leading to direct financial losses, forensic response costs, and ATM vendor scrutiny."
      },
      image: slideimg2,
      bgGradient: "from-white-500 to-teal-600",
      icon: <Zap className="w-8 h-8" />
    },
    
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
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="w-full max-w-[1440px] mx-auto relative px-2 md:px-0">
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
                <h1 className="text-2xl md:text-3xl lg:text-[50px] lg:leading-[55px] font-bold leading-tight text-white">
                  Innovative Security Bugs & Business Impact
                </h1>
              </div>

              {/* Subtitle */}
              <div className="mb-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#CA6200]">
                  {slides[currentSlide].subtitle}
                </h3>
              </div>

              {/* Scrollable Content Section */}
              <div className="flex-1  pr-4 " 
                   style={{
                     scrollbarWidth: 'thin',
                     scrollbarColor: '#F57A00 transparent'
                   }}>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white-400 mb-2">What we found:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {slides[currentSlide].content.whatWeFound}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white-400 mb-2">How we found it:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {slides[currentSlide].content.howWeFound}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white-400 mb-2">Impact:</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {slides[currentSlide].content.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
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
                  src={slides[currentSlide].image}
                  alt={`Security Bug ${slides[currentSlide].id}`}
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

