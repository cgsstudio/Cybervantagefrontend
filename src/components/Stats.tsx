import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';

const Stats = () => {
  const stats = [
    { number: 200, suffix: '+', label: 'Web Applications' },
    { number: 60, suffix: '+', label: 'Mobile Apps' },
    { number: 10, suffix: 'k+', label: 'Cloud Assets' },
    { number: 25, suffix: 'k+', label: 'APIs' },
    { number: 100, suffix: 'k+', label: 'Network Endpoints' },
  ];

  return (
    <section id="about" className='pt-16 md:pt-20 bg-black'>
         <h2 className="fade-up-element text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white text-center mb-12 heading42-main" data-aos="fade-up" >
          Experience and Trust
        </h2>
       <div className="bg-gradient-to-r from-orange-500 to-purple-600 py-16 md:py-20 counter-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
          {stats.map((stat, index) => {
            // Use Intersection Observer for each stat block
            const { ref, inView } = useInView({
              triggerOnce: false, // Always trigger on re-entry
              threshold: 0.5,     // Trigger when 50% of the element is visible
            });

            return (
              <div key={index} className="text-center" ref={ref}>
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white counter-list">
                  {inView ? (
                    <CountUp 
                      start={0} 
                      end={stat.number} 
                      duration={2.5} 
                      suffix={stat.suffix} 
                    />
                  ) : (
                    '0' // Reset to 0 before the counter starts
                  )}
                </div>
                <div className="text-xl text-white pt-4 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Stats;
