import React, { useState } from 'react';
import mail from '../../assest/image/mail.svg'
import phone from '../../assest/image/phone.svg'
import Address from '../../assest/image/Address.svg'
import flag from '../../assest/image/netheland-flag.svg'
import flag2 from '../../assest/image/flag-2.svg'
import { Link } from 'react-router-dom';
import calendericon from '../../assest/image/about/calendar.png'
import contactsvg from '../../assest/image/contactus/contact-svg.svg'
import Breadcrumb from '../Breadcrums/Breadcrumb';


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    requestType: 'Request a Proposal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-black relative overflow-hidden">

      {/* Gradient Banner with Contact Us Title */}
      {/* <div className="w-full bg-gradient-to-r from-[#F57A00] to-[#7103A4] py-8 lg:py-16 flex items-center justify-center mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
      </div> */}
      <Breadcrumb 
      pageTitle="Contact Us"
      items={[
    { label: 'Contact Us', path: '/contact-us' },

  ]} 
/>

      {/* Add top padding to account for navbar height */}
      <div className="relative z-10 pt-20 pb-8 px-8 hero-banner">
        {/* Container with max-width and centered alignment to match navbar */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row  justify-between gap-12">
            
            {/* Hero Section - Left Side */}
            <div className="flex-1 text-white max-w-3xl text-center lg:text-left">
              <h1 className="text-[34px] md:text-[42px] xl:text-[50px] 2xl:text-[75px] font-bold mb-6 leading-tight ">
                Let's make security your competitive advantage.
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                We're here to answer your questions, provide guidance, or kickstart a security engagement, wherever you are in the world.
              </p>
              
              {/* Contact SVG Image */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <img src={contactsvg} alt="Contact Us" className="w-32 h-full lg:w-full max-w-sm lg:h-full" />
              </div>
              
              <div className="w-full flex justify-center lg:justify-start">
                <a
                  href="https://calendly.com/rutvi-cybervantage/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r sm:text-xl from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform shadow-lg flex items-center gap-3">
                    <img src={calendericon} alt="Calendar" className="w-6 h-6 mr-2" />
                    Book a meeting directly
                  </button>
                </a>
              </div>

           
            </div>

            {/* Contact Form - Right Side */}
            <div className="flex-1 w-full lg:max-w-2xl pr-0 2xl:pr-8">
              <div className="bg-[#FFFFFF1A] p-8 rounded-[10px] shadow-2xl ">
                <h2 className="text-2xl md:text-4xl font-bold text-[#F57A00] mb-6">Contact Us</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-300 text-base font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-[#3B3B3B]  rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-base font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-[#3B3B3B]  rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-base font-medium mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-[#3B3B3B]  rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-gray-300 text-base font-medium mb-2">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-[#3B3B3B]  rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  {/* Request Type */}
                  <div>
                    <label className="block text-gray-300 text-base font-medium mb-2">
                      What best describes your request? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-[#3B3B3B]  rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="Request a Proposal">Request a Proposal</option>
                      <option value="Book a Security Assessment">Book a Security Assessment</option>
                      <option value="Partnership Inquiry">Partnership Inquiry</option>
                      <option value="Support Request">Support Request</option>
                      <option value="Media/Press Inquiry">Media/Press Inquiry</option>
                      <option value="Careers">Careers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-base font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-[#3B3B3B]  rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      
                    ></textarea>
                  </div>


                  {/* Submit Button */}
                  <button
                    type="submit"
                    className=" bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg mt-6 px-12"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Talk To Us Directly Section */}
      <div className="w-full flex flex-col items-center justify-center py-12 px-8">
        <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white mb-10 text-center">Talk To Us Directly</h2>
        <div className="w-full container flex flex-col md:flex-row gap-4 xl:gap-8 justify-center items-stretch">
          {/* Card 1: Call Us */}
          <div className="flex-1 min-w-[220px] lg:min-w-[260px] bg-[#181818] rounded-xl p-4 xl:p-8 flex flex-col items-center justify-center relative"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#000000, #000000), linear-gradient(90deg, #F57A00, #8f43ea)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <img src={phone} alt="Phone Icon" className="w-10 h-10 mb-3" />
            <div className="font-bold text-lg text-white mb-2">CALL US</div>
            <div className="flex flex-col gap-1 items-center">
              <div className="flex items-center gap-2 text-white text-sm xl:text-base">
                <img src={flag2} alt="UK Flag" className="w-7 h-5 rounded-sm" />
                <a href="tel:+447405302956" className="hover:underline" >+44 7405302956 - UK</a>
              </div>
              <div className="flex items-center gap-2 text-white text-sm xl:text-base">
                <img src={flag} alt="Netherlands Flag" className="w-7 h-5 rounded-sm" />
                <a href="tel:+319701025921" className="hover:underline" >+31 9701025921 - Netherlands</a>
              </div>
            </div>
          </div>
          {/* Card 2: Email */}
          <div className="flex-1 min-w-[220px] lg:min-w-[260px] bg-[#181818] rounded-xl p-4 lg:p-8 flex flex-col items-center justify-center relative"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#000000, #000000), linear-gradient(90deg, #F57A00, #8f43ea)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <img src={mail} alt="Mail Icon" className="w-10 h-10 mb-3" />
            <div className="font-bold text-lg text-white mb-2">EMAIL</div>
            <div className="text-white text-sm xl:text-base">
              <a href="mailto:business@cybervantage.ai" className="hover:underline">business@cybervantage.ai</a>
            </div>
            <div className="text-white text-sm xl:text-base">
              <a href="mailto:sales@cybervantage.ai" className="hover:underline">sales@cybervantage.ai</a>
            </div>
          </div>
          {/* Card 3: Address */}
          <div className="flex-1 min-w-[220px] lg:min-w-[260px] bg-[#181818] rounded-xl p-4 lg:p-8 flex flex-col items-center justify-center relative"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#000000, #000000), linear-gradient(90deg, #F57A00, #8f43ea)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <img src={Address} alt="Address Icon" className="w-10 h-10 mb-3" />
            <div className="font-bold text-lg text-white mb-2">ADDRESS</div>
            <div className="text-white text-sm xl:text-base text-center">
              <a href="https://maps.app.goo.gl/9a3L8zYweU5d96VF8" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Cyber Vantage B.V. - Herengracht 449 A, 1017BR Amsterdam, Netherlands
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full flex justify-center items-center py-16 px-8">
        <div className="w-full container h-[400px] md:h-[600px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Google Maps Embed */}
          <iframe
            title="Cyber Vantage Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.2081843895367!2d4.884199156180898!3d52.36664500010108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ea0944466d%3A0xd6ef7c47caa886a!2sB.V%2C%20Herengracht%20449%20A%2C%201017%20BS%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1753089332774!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>
          {/* Custom Marker Overlay */}
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] z-10 pointer-events-none">
            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#shadow)">
                <path d="M32 0C17.664 0 6 11.664 6 26C6 44.8 32 80 32 80C32 80 58 44.8 58 26C58 11.664 46.336 0 32 0Z" fill="#F57A00"/>
                <circle cx="32" cy="28" r="13" fill="white"/>
              </g>
              <defs>
                <filter id="shadow" x="0" y="0" width="64" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.2"/>
                </filter>
              </defs>
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

