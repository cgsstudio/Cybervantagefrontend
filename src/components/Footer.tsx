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
              <Link to="/">
              <img
                src={Logo}
                alt="Cyber Vantage Logo"
                className="w-100"
              />
              </Link>
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
                <Link to="/application-security-assessment" className="text-white-400 hover:text-orange-500">
                  Application Security Assessment
                </Link>
              </li>
              <li>
                <Link to="/network-penetration-testing" className="text-white-400 hover:text-orange-500">
                  Network Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/red-teaming" className="text-white-400 hover:text-orange-500">
                  Red Teaming
                </Link>
              </li>
              <li>
                <Link to="/cloud-security-assesment" className="text-white-400 hover:text-orange-500">
                  Cloud Security Assessment
                </Link>
              </li>
              <li>
                <Link to="/digital-finance-banking" className="text-white-400 hover:text-orange-500">
                  Digital Finance & Banking
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Quick Links Duplicate - 20% */}
          <div className="w-full md:basis-[20%]">
            <h3 className="text-xl font-semibold text-orange-500">Audits</h3>
            <ul className="mt-4 space-y-2 mb-4">
              <li>
                <Link to="/#about" className="text-white-400 hover:text-orange-500">
                  ISO 27001
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-white-400 hover:text-orange-500">
                  PCI DSS
                </Link>
              </li>
              <li>
                <Link to="/#support" className="text-white-400 hover:text-orange-500">
                  SOC 2
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/advisory-services" className="text-orange-500">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-orange-500">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-orange-500">
                  Contact Us
                </Link>
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
        <div className="container mx-auto px-6 md:px-12 lg:px-4 2xl:px-0 footer-bottom-text">
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

