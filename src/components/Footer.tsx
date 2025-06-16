import React from "react";
import Logo from '../assest/image/download.svg'
import Iso from '../assest/image/iso.svg'
import mail from '../assest/image/mail.svg'
import phone from '../assest/image/phone.svg'
import Address from '../assest/image/Address.svg'
import flag from '../assest/image/netheland-flag.svg'
import flag2 from '../assest/image/flag-2.svg'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-primery text-white py-10">
      <div className="container mx-auto py-6 px-4 2xl:px-0">
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Logo and Description - 35% */}
          <div className="w-full md:basis-[35%]">
            <div className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="Cyber Vantage Logo"
                className="w-100"
              />
            </div>
            <p className="mt-4 text-white-400">
              Cyber Vantage provides end-to-end cybersecurity services that enhance your security maturity. From application and cloud security to red teaming and compliance audits, we strengthen your defenses and improve your organizations's overall security posture, ensuring your business stays one step ahead of cyber risks.
            </p>
            <div className="flex space-x-4 mt-6">
              <img src={Iso} alt="Netherlands" className="w-100" />
            </div>
          </div>

          {/* Quick Links - 20% */}
          <div className="w-full md:basis-[20%]">
            <h3 className="text-xl font-semibold text-orange-500">Assurance Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#network-penetration-testing" className="text-white-400 hover:text-orange-500">
                  Network Penetration Testing
                </a>
              </li>
              <li>
                <a href="#red-teaming" className="text-white-400 hover:text-orange-500">
                  Red Teaming
                </a>
              </li>
              <li>
                <a href="#cloud-security" className="text-white-400 hover:text-orange-500">
                  Cloud Security
                </a>
              </li>
              <li>
                <a href="#ai-security" className="text-white-400 hover:text-orange-500">
                  AI Security
                </a>
              </li>
              <li>
                <a href="#digital-assets-security" className="text-white-400 hover:text-orange-500">
                  Digital Assets Security
                </a>
              </li>
              <li>
                <a href="#ot-security" className="text-white-400 hover:text-orange-500">
                  OT Security
                </a>
              </li>
                <li>
                  <a href="#os-virtual-desktop-security" className="text-white-400 hover:text-orange-500">
                    Operating System(OS)
                  </a>
                </li>
                <li>
                <a href="#virtual-desktop-security" className="text-white-400 hover:text-orange-500">
                 Virtual Desktop Security
                </a>
              </li>
              
            </ul>
          </div>

          {/* Quick Links Duplicate - 20% */}
          <div className="w-full md:basis-[20%]">
            <h3 className="text-xl font-semibold text-orange-500">Advisory Category</h3>
            <ul className="mt-4 space-y-2 mb-4">
              <li>
                <a href="#about" className="text-white-400 hover:text-orange-500">
                  Security Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="text-white-400 hover:text-orange-500">
                  Security Automation
                </a>
              </li>
              <li>
                <a href="#support" className="text-white-400 hover:text-orange-500">
                  Regulatory Gap Assessment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white-400 hover:text-orange-500">
                  Product Hunting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - 25% */}
          <div className="w-full md:basis-[25%]">
            <h3 className="text-xl font-semibold text-orange-500">Contact Info</h3>
            <ul className="mt-4 space-y-4">
              {/* Email */}
              <li className="flex items-center space-x-3">
                <img
                  src={mail}
                  alt="Email Icon"
                  className="w-6 h-6"
                />
                <a
                  href="mailto:sales@cybervantage.ai"
                  className="text-white-400 hover:text-orange-500"
                >
                  sales@cybervantage.ai
                </a>
              </li>
              {/* Address */}
              <li className="flex items-center space-x-3">
                <img
                  src={Address}
                  alt="Location Icon"
                  className="w-6 h-6"
                />
                <a href="https://maps.app.goo.gl/GStFNkFcQchSdunq8" target="_blank">
                <p className="text-white-400 hover:text-orange-500">
                  Cyber Vantage B.V. - Herengracht 449 A, 1017BR Amsterdam, Netherlands
                </p>
                </a>
              </li>
              {/* Phone */}
              <li className="flex items-center space-x-3">
                <img
                  src={phone}
                  alt="Phone Icon"
                  className="w-6 h-6"
                />
                <img
                  src={flag}
                  alt="Netherlands Flag"
                  className="w-6 h-6"
                />
                <a
                  href="tel:+3184438913"
                  className="text-white-400 hover:text-orange-500"
                >
                  +31 97010251921 – Netherlands
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src={phone}
                  alt="Phone Icon"
                  className="w-6 h-6"
                />
                <img
                  src={flag2}
                  alt="Netherlands Flag"
                  className="w-6 h-6"
                />
                <a
                  href="tel:+447400392586"
                  className="text-white-400 hover:text-orange-500"
                >
                  +44 7400392586 - UK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-4">
        <div className="container mx-auto px-6 md:px-12 footer-bottom-text">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white-400 mb-2 md:mb-0 text-center md:text-left w-full md:w-1/2">
              CYBER VANTAGE – All rights reserved |{" "}
              <Link className="hover:text-orange-500" to={"/terms-and-conditions"}>
                 Terms & Conditions |{" "}
              </Link>
              <Link to={'/privacy-policy'} className="hover:text-orange-500">
                 Privacy Policy
              </Link>
            </p>
            <p className="text-white-400 text-center md:text-right w-full md:w-1/2">
              Design & Developed by{" "}
              <Link to={"https://chameleogfxstudio.com"} className="hover:text-orange-500">
                Chameleo GFX Studio
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
