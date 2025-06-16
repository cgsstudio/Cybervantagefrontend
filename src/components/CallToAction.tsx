import React from 'react';

const CallToAction = () => {
  return (
    <section id="contact" className='py-24 bg-primery'>
            <div className="">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left bg-gradient-to-r from-orange-500 to-purple-600 py-20 px-6 rounded-lg cta-bg">
        <h2 className="text-4xl md:text-3xl font-semibold text-white leading-tight lg:leading-relaxed md:leading-relaxed mb-4 md:mb-0 relative z-10 heading-call-to">
          Let’s untangle the complex world of information security, <br /> one layer at a time
        </h2>
        <button className="bg-white text-orange-500 hover:text-orange-600 font-semibold py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 relative z-10">
          Get In Touch
        </button>
      </div>
    </div>
    </section>

  );
};

export default CallToAction;
