import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="contact" className="px-8 py-16 xl:py-20 bg-primery">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left bg-gradient-to-r from-orange-500 to-purple-600 py-20 px-4 sm:px-12 rounded-lg cta-bg gap-8">

  {/* Left Column: 60% on desktop, 100% on tablets and below */}
  <div className="w-full md:w-[70%]">
    <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white leading-tight md:leading-relaxed mb-4 relative z-10 heading-call-to">
      Request A Free Consultation
    </h2>
    <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed">
      Let’s untangle the complex world of information security, one layer at a time
    </p>
  </div>

  {/* Right Column: 40% on desktop, 100% on tablets and below */}
  <div className="w-full md:w-[30%] flex justify-center md:justify-end">
    <Link to="/contact-us">
      <button className="bg-white text-orange-500 hover:text-orange-600 font-semibold py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 relative z-10">
        Get In Touch
      </button>
    </Link>
  </div>

</div>

      </div>
    </section>
  );
};

export default CallToAction;
