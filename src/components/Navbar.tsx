import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../assest/image/mainlogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // Track  menu
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    // Function to detect scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false); 
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed w-full text-white z-50 py-3 ${scrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4  2xl:px-0">
        <div className="flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0 w-1/4">
            <Link to="/" className="flex items-center w-full">
              <img src={Logo} alt="Logo" className="h-20 w-auto max-w-full" />
            </Link>
          </div>

          {/* Center: Menu (desktop only) */}
          <div className="hidden lg:flex justify-center w-3/5">
            <div className="nav-container nav-menu py-5 px-3 space-x-6 flex items-center justify-center w-full">
              <Link
                to="/"
                className={`text-white font-semibold hover:text-orange-500 transition-colors duration-200 ${activeMenu === "home" ? "" : ""}`}
                onClick={() => handleMenuClick("home")}
              >
                Home
              </Link>
              <Link
                to="#about"
                className={`text-white font-semibold hover:text-orange-500 transition-colors duration-200 ${activeMenu === "about" ? "" : ""}`}
                onClick={() => handleMenuClick("about")}
              >
                About Us
              </Link>
              
              {/* Assurance Services Dropdown */}
              <div
                className="relative inline-block"
                onMouseEnter={() => setActiveDropdown('assurance')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('assurance')}
                  className={`flex items-center space-x-1 font-semibold hover:text-orange-500 transition-colors duration-200 ${activeMenu === "assurance" ? "text-orange-500 " : "text-white"}`}
                >
                  <span>Assurance Services</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'assurance' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'assurance' && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-gray-800/90 backdrop-blur-sm rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link to="/application-security-assessment" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Application Security Assessment
                      </Link>
                      <Link to="/network-penetration-testing" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Network Penetration Testing
                      </Link>
                      <Link to="/red-teaming" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Red Teaming
                      </Link>
                      <Link to="/cloud-security-assesment" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Cloud Security Assessment
                      </Link>
                      <Link to="/digital-finance-banking" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Digital Finance & Banking
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Audit Service Dropdown */}
              <div
                className="relative inline-block"
                onMouseEnter={() => setActiveDropdown('audit')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('audit')}
                  className={`flex items-center space-x-1 font-semibold hover:text-orange-500 transition-colors duration-200 ${activeMenu === "audit" ? "text-orange-500 " : "text-white"}`}
                >
                  <span>Advisory Services</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'audit' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'audit' && (
                  <div className="absolute top-full left-0  w-48 bg-gray-800/90 backdrop-blur-sm rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link to="#internal-audits" 
                         className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-orange-500"
                         onClick={() => handleMenuClick("audit")}>
                        Internal Audits
                      </Link>
                      <Link to="#external-audits" 
                         className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-orange-500"
                         onClick={() => handleMenuClick("audit")}>
                        External Audits
                      </Link>
                      <Link to="#audit-reports" 
                         className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-orange-500"
                         onClick={() => handleMenuClick("audit")}>
                        Audit Reports
                      </Link>
                    </div>
                  </div>
                )}
              </div>

             

              <Link
                to="#partnerships"
                className={`text-white font-semibold hover:text-orange-500 transition-colors duration-200 ${activeMenu === "partnerships" ? "" : ""}`}
                onClick={() => handleMenuClick("partnerships")}
              >
                Partnerships
              </Link>
            </div>
          </div>

          {/* Right: Contact Us button (desktop only) */}
          <div className="hidden lg:flex items-center flex-shrink-0 justify-end w-1/6 ">
            <Link
              to="#contact"
              className={`gradient-bg contact-btn px-6 py-2 font-semibold transition-all duration-200 transform hover:scale-105 ${activeMenu === "contact" ? "" : ""}`}
              onClick={() => handleMenuClick("contact")}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/90 backdrop-blur-sm rounded-lg mt-2">
              <Link
                to="/"
                className={`block px-3 py-2 text-center ${activeMenu === "home" ? "" : "text-gray-300 hover:text-white"}`}
                onClick={() => handleMenuClick("home")}
              >
                Home
              </Link>
              <Link
                to="#about"
                className={`block px-3 py-2 text-center ${activeMenu === "about" ? "" : "text-gray-300 hover:text-white"}`}
                onClick={() => handleMenuClick("about")}
              >
                About Us
              </Link>
              
              {/* Mobile Assurance Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-assurance')}
                  className={`flex items-center justify-center gap-2 w-full px-3 py-2 text-center ${activeMenu === "assurance" ? "text-orange-500 " : "text-gray-300 hover:text-white"}`}
                >
                  <span>Assurance Services</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'mobile-assurance' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-assurance' && (
                  <div className="ml-4 mt-2 space-y-1 p-2 bg-black rounded-lg">
                     <Link to="/application-security-assessment" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Application Security Assessment
                      </Link>
                      <Link to="/network-penetration-testing" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Network Penetration Testing
                      </Link>
                      <Link to="/red-teaming" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Red Teaming
                      </Link>
                      <Link to="/cloud-security-assesment" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Cloud Security Assessment
                      </Link>
                      <Link to="/digital-finance-banking" 
                         className="block px-4 py-2 text-sm text-white hover:text-orange-500"
                         onClick={() => handleMenuClick("assurance")}>
                        Digital Finance & Banking
                      </Link>
                  </div>
                )}
              </div>

              {/* Mobile Audit Service */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-audit')}
                  className={`flex items-center justify-center gap-2  w-full px-3 py-2 text-center ${activeMenu === "audit" ? "text-orange-500 " : "text-gray-300 hover:text-white"}`}
                >
                  <span>Audit Service</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'mobile-audit' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-audit' && (
                  <div className="ml-4 mt-2 space-y-1 p-2 bg-black rounded-lg">
                    <Link to="#internal-audits" 
                       className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-500"
                       onClick={() => handleMenuClick("audit")}>
                      Internal Audits
                    </Link>
                    <Link to="#external-audits" 
                       className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-500"
                       onClick={() => handleMenuClick("audit")}>
                      External Audits
                    </Link>
                    <Link to="#audit-reports" 
                       className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-500"
                       onClick={() => handleMenuClick("audit")}>
                      Audit Reports
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-products')}
                  className={`flex items-center justify-center gap-2  w-full px-3 py-2 text-center ${activeMenu === "products" ? "text-orange-500 " : "text-gray-300 hover:text-white"}`}
                >
                  <span>Products</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-products' && (
                  <div className="ml-4 mt-2 space-y-1 p-2 bg-black rounded-lg">
                    <Link to="#security-tools" 
                       className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-500"
                       onClick={() => handleMenuClick("products")}>
                      Security Tools
                    </Link>
                    <Link to="#software-solutions" 
                       className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-500"
                       onClick={() => handleMenuClick("products")}>
                      Software Solutions
                    </Link>
                    <Link to="#enterprise-suite" 
                       className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-500"
                       onClick={() => handleMenuClick("products")}>
                      Enterprise Suite
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="#partnerships"
                className={`block px-3 py-2 text-center ${activeMenu === "partnerships" ? "" : "text-gray-300 hover:text-white"}`}
                onClick={() => handleMenuClick("partnerships")}
              >
                Partnerships
              </Link>
              
              <Link
                to="#contact"
                className={`block px-3 py-2 text-center gradient-bg rounded-full ${activeMenu === "contact" ? "" : ""}`}
                onClick={() => handleMenuClick("contact")}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;