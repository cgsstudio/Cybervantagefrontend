import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from "../assest/image/mainlogo.svg";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  currentPage?: string;
  onPageChange?: (page: string) => void;
};
// Navbar Component
const Navbar = ({ currentPage, onPageChange }: NavbarProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background color when scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    if (onPageChange) onPageChange(page);
    closeMobileMenu();
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  // Helper for mobile: closes menu and navigates
  const handleMobileNavigate = (page: string) => {
    handleNavigation(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`py-4 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-black/60 backdrop-blur-sm border-gray-800' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={Logo}
                alt="Cyber Vantage Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8">
              <Link to="/">
                <button
                  onClick={() => handleNavigation('home')}
                  className={`text-white hover:text-[#CA6200] hover:underline font-semibold transition-colors ${
                    currentPage === 'home' ? 'text-[#CA6200]' : ''
                  }`}
                >
                  Home
                </button>
              </Link>
              
              <Link to="/about">
                <button
                  onClick={() => handleNavigation('about')}
                  className={`text-white hover:text-[#CA6200] hover:underline font-semibold transition-colors ${
                    currentPage === 'about' ? 'text-[#CA6200]' : ''
                  }`}
                >
                  About Us
                </button>
              </Link>

              {/* Assurance Services Dropdown (fixed) */}
              <div className="relative group">
                <button className="text-white hover:text-[#CA6200] hover:underline font-semibold transition-colors flex items-center space-x-1">
                  <span>Assurance Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-60 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/application-security-assessment"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                    onClick={() => handleNavigation('application-security-assessment')}>
                    Application Security Assessment
                  </Link>
                  <Link to="/network-penetration-testing"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                    onClick={() => handleNavigation('network-penetration-testing')}>
                    Network Penetration Testing
                  </Link>
                  <Link to="/red-teaming"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                    onClick={() => handleNavigation('red-teaming')}>
                    Red Teaming
                  </Link>
                  <Link to="/cloud-security-assesment"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                    onClick={() => handleNavigation('cloud-security-assesment')}>
                    Cloud Security Assessment
                  </Link>
                  <Link to="/digital-finance-banking"
                    className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                    onClick={() => handleNavigation('digital-finance-banking')}>
                    Digital Finance & Banking
                  </Link>
                </div>
              </div>

              {/* Advisory Services Dropdown - updated */}
              <div className="relative group">
                <button className="text-white hover:text-[#CA6200] hover:underline font-semibold transition-colors flex items-center space-x-1">
                  <span>Advisory Services</span>
                  
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/vciso" 
                    className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                    onClick={() => handleNavigation("vciso")}>
                    vCISO
                  </Link>
                </div>
              </div>

              {/* Audits Dropdown - now after Advisory Services */}
              <div className="relative group">
                <button className="text-white hover:text-[#CA6200] hover:underline font-semibold transition-colors flex items-center space-x-1">
                  <Link to={"/audits"}>
                  <span>Audits</span>
                  </Link>
                  
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/audits#iso27001" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleNavigation("audits")}>
                        ISO 27001
                      </Link>
                      <Link to="/audits#pci-dss" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleNavigation("audits")}>
                        PCI DSS
                      </Link>
                      <Link to="/audits#soc2" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleNavigation("audits")}>
                       SOC 2
                      </Link>
                </div>
              </div>

              <Link to="/partner">
                <button
                  onClick={() => handleNavigation('partnerships')}
                  className={`text-white hover:text-[#CA6200] hover:underline font-semibold transition-colors ${
                    currentPage === 'partnerships' ? 'text-[#CA6200]' : ''
                  }`}
                >
                  Partnerships
                </button>
              </Link>
              
              <Link to="/contact-us">
                <button
                  onClick={() => handleNavigation('contact')}
                  className="gradient-bg contact-btn px-6 py-2 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden text-white hover:text-[#CA6200] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden py-4 border-t border-gray-800 bg-black w-screen absolute left-0 min-h-screen">
              <div className="flex flex-col space-y-2 items-center text-center w-full px-4">
                <Link to="/#home" className="w-full">
                  <button
                    onClick={() => handleMobileNavigate('home')}
                    className="w-full text-2xl font-bold text-white hover:text-[#CA6200] transition-colors py-2 text-center"
                  >
                    Home
                  </button>
                </Link>
                
                <Link to="/about" className="w-full">
                  <button
                    onClick={() => handleMobileNavigate('about')}
                    className="w-full text-2xl font-bold text-white hover:text-[#CA6200] transition-colors py-2 text-center"
                  >
                    About Us
                  </button>
                </Link>

                {/* Assurance Services Accordion */}
                <div className="w-full">
                  <button
                    className="w-full flex items-center justify-center text-white font-bold text-2xl py-2 text-center hover:text-[#CA6200] transition-colors"
                    onClick={() => toggleAccordion('assurance')}
                  >
                    <span>Assurance Services</span>
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openAccordion === 'assurance' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'assurance' && (
                    <div className="mt-2 space-y-1 w-full flex flex-col items-center">
                      <Link to="/application-security-assessment" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('application-security-assessment')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          Application Security Assessment
                        </button>
                      </Link>
                      <Link to="/network-penetration-testing" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('network-penetration-testing')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          Network Penetration Testing
                        </button>
                      </Link>
                      <Link to="/red-teaming" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('red-teaming')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          Red Teaming
                        </button>
                      </Link>
                      <Link to="/cloud-security-assesment" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('cloud-security-assesment')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          Cloud Security Assessment
                        </button>
                      </Link>
                      <Link to="/digital-finance-banking" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('digital-finance-banking')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          Digital Finance & Banking
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Advisory Services Accordion */}
                <div className="w-full">
                  <button
                    className="w-full flex items-center justify-center text-white text-2xl font-bold py-2 text-center hover:text-[#CA6200] transition-colors"
                    onClick={() => toggleAccordion('advisory')}
                  >
                    <span>Advisory Services</span>
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openAccordion === 'advisory' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'advisory' && (
                    <div className="mt-2 space-y-1 w-full flex flex-col items-center">
                      <Link to="/vciso" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('vciso')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          vCISO
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Audits Accordion */}
                <div className="w-full">
                  <button
                    className="w-full flex items-center justify-center text-white text-2xl font-bold py-2 text-center hover:text-[#CA6200] transition-colors"
                    onClick={() => toggleAccordion('audits')}
                  >
                    <span>Audits</span>
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openAccordion === 'audits' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'audits' && (
                    <div className="mt-2 space-y-1 w-full flex flex-col items-center">
                      <Link to="/audits#iso27001" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('iso-27001')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          ISO 27001
                        </button>
                      </Link>
                      <Link to="/audits#pci-dss" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('pci-dss')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          PCI DSS
                        </button>
                      </Link>
                      <Link to="/audits#soc2" className="w-full">
                        <button
                          onClick={() => handleMobileNavigate('soc-2')}
                          className="w-full text-gray-300 hover:text-[#CA6200] transition-colors py-1 text-center"
                        >
                          SOC 2
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/partner">
                  <button
                    onClick={() => handleMobileNavigate('partner')}
                    className="text-white hover:text-[#CA6200] transition-colors py-2 text-2xl font-bold text-center"
                  >
                    Partnerships
                  </button>
                </Link>
                
                <Link to="/contact-us">
                  <button
                    onClick={() => handleMobileNavigate('contact')}
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-2xl px-4 py-2 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 mt-2 text-center font-bold"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;