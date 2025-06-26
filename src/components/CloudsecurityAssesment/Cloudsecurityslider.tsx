import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, AlertTriangle, Lock, Zap } from 'lucide-react';
import slideimg from '../../assest/image/services/slider-img.png';
import slideimg1 from '../../assest/image/cloudsecurityslider/Group 1284.png';
import slideimg2 from '../../assest/image/cloudsecurityslider/Group 1283.png';
import slideimg3 from '../../assest/image/cloudsecurityslider/Group 1282.png';
import slideimg4 from '../../assest/image/services/slider-img5.png';

const Cloudsecurityslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "1. Unauthenticated etcd Access in a FinTech Kubernetes Cluster",
      content: {
        whatWeFound: "The etcd datastore for a production Kubernetes cluster was exposed without any authentication or TLS encryption, allowing full read/write access to all cluster state.",
        howWeFound: " During a container security review, we ran an internal port scan of the Kubernetes control plane and noticed etcd listening on the public management network. We then connected with a simple HTTP client and enumerated secrets, config maps, and deployment specs.",
        impact: "An attacker could manipulate critical cluster configurations, inject malicious containers, harvest all service credentials (including database and payment API keys), and effectively take over the entire application infrastructure—putting customer financial data at risk and jeopardizing regulatory compliance."
      },
      image: slideimg4,
       bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
      
    },
    {
      id: 2,
      subtitle: "2. Hypervisor Escape via Unpatched Kernel Module in a Healthcare Virtualization Platform",
      content: {
        whatWeFound: "A third-party kernel module used by the organization’s on-premises virtualization host was vulnerable to a privilege escalation flaw, allowing a VM guest to break out into the hypervisor context.",
        howWeFound: "In our virtualization infrastructure assessment, we deployed a proof-of-concept exploit against the targeted kernel driver from within a low-privileged VM. By triggering a crafted IOCTL call, we gained root on the host OS and then obtained control of other guest VMs.",
        impact: "Successful VM escape would let attackers access protected health information (PHI) stored in other VMs, move laterally across critical systems, and fully compromise the healthcare provider’s virtual environment—exposing them to HIPAA violations and patient privacy breaches."
      },
      image: slideimg3,
      bgGradient: "from-white-500 to-pink-600",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      id: 3,
      subtitle: "️3. Server-Side Request Forgery (SSRF) Leading to AWS Metadata Theft in an E-Commerce Cloud",
      content: {
        whatWeFound: "A function in the customer support portal allowed users to supply arbitrary URLs for product image fetching, but failed to whitelist or sanitize input—enabling SSRF.",
        howWeFound: "During public cloud assessment, we crafted URLs pointing at the AWS instance metadata service (169.254.169.254) and observed our SSRF payload return IAM role credentials. We then used those temporary credentials to list and download S3 buckets containing order history.",
        impact: "Attackers could steal IAM credentials, exfiltrate sensitive customer orders and payment records, spin up rogue infrastructure (incurring large costs), and fully compromise the e-commerce environment—leading to massive data breaches and financial loss."
      },
      image: slideimg2,
      bgGradient: "from-white-500 to-teal-600",
      icon: <Lock className="w-8 h-8" />
    },
    {
      id: 4,
      subtitle: "4. Over-Privileged OAuth Scopes in a Retail SaaS Integration",
      content: {
        whatWeFound: "The retail company’s integration with a popular CRM-SaaS invoked OAuth tokens with “full_access” scope, rather than the minimal “read_only” scope they actually needed.",
        howWeFound: "In our SaaS security review, we intercepted the OAuth handshake in transit, inspected the token scopes, and confirmed via API calls that the token could create, modify, and delete all customer records.",
        impact: "If an attacker obtained that token—via phishing or a stolen session—they could modify inventory, rewrite pricing, inject fraudulent orders, or erase entire customer datasets, causing direct revenue impact and severe damage to brand loyalty."
      },
      image: slideimg1,
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
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="w-full max-w-[1440px] mx-auto relative px-2 md:px-0">
        <div className="relative overflow-hidden " style={{
          background: "linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)"
        }}>
          <div
            className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
            style={{
              border: "1.5px solid",
              borderImage: "linear-gradient(90deg, #F57A00 0%, #7103A4 100%) 1"
            }}
          ></div>
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Side - Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col h-full">
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
              <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar" 
                   style={{
                     maxHeight: 'calc(100% - 250px)',
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

export default Cloudsecurityslider;