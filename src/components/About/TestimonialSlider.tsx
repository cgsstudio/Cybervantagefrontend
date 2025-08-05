import React from 'react';
import { Star, Quote } from 'lucide-react';
import quote from '../../assest/image/about/quote.svg'

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Their red team simulated a real-world attack with surgical precision. It helped us find gaps we didn't know existed, and helped us fix them on time.",
      author: "CISO, Banking Leader (UK)"
    },
    {
      id: 2,
      rating: 5,
      text: "We needed more than a vendor, we got a true security partner.",
      author: "VP Cyber Security, Healthcare Group (Middle East)"
    },
    {
      id: 3,
      rating: 5,
      text: "The comprehensive penetration testing revealed vulnerabilities we never imagined. Their expertise saved us from potential disasters.",
      author: "CTO, Financial Services (Asia)"
    },
    {
      id: 4,
      rating: 5,
      text: "Outstanding service delivery and attention to detail. They transformed our security posture completely.",
      author: "Security Director, Tech Company (Europe)"
    },
    {
      id: 5,
      rating: 5,
      text: "Professional, thorough, and incredibly knowledgeable. Best cybersecurity partnership we've ever had.",
      author: "IT Manager, Manufacturing (North America)"
    }
  ];

  React.useEffect(() => {
    // Initialize Swiper
    const initSwiper = () => {
      if (window.Swiper) {
        new window.Swiper('.testimonial-swiper', {
          slidesPerView: 1,
          spaceBetween: 32,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    };

    // Load Swiper if not already loaded
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
      document.head.appendChild(link);
    } else {
      initSwiper();
    }
  }, []);

  return (
    <div className=" text-white py-20 px-4 testimonial-slider" >
      {/* Custom Swiper Pagination Styles */}
      <style>{`
        .testimonial-slider .swiper-pagination-bullet {
          background: #888888;
          opacity: 0.4;
        }
        .testimonial-slider .swiper-pagination-bullet-active {
          background: #F57A00;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F57A00] mb-12 text-center">
            Our Testimonials
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="testimonial-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div
                  className="group relative overflow-hidden rounded-2xl transition-all duration-300 h-full"
                  style={{
                    background: 'linear-gradient(96.79deg, #121212 0%, #1e1e1e 50%, #121212 100%)'
                  }}
                >
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                       style={{
                         background: 'linear-gradient(45deg, rgb(245, 122, 0), rgb(113, 3, 164))',
                         padding: '2px'
                       }}>
                    <div className="w-full h-full rounded-2xl" 
                         style={{
                           background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)'
                         }} />
                  </div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[280px]">
                    {/* Rating Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="flex-1 mb-6">
                      
                      <p className="text-xl xl:text-2xl text-white">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="mt-auto flex items-center justify-between">
                      <p className="font-bold text-white text-lg md:text-xl">
                        {testimonial.author}
                      </p>
                    {/* Optional: Add an image for the testimonial author if available */}
                    <img src={quote} alt={testimonial.author} className="w-16 h-16 md:w-auto md:h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Swiper Pagination */}
          <div className="swiper-pagination mt-8 flex justify-center" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="absolute right-0 bottom-1/4 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-2xl" />
        </div>
      </div>

     
    </div>
  );
};

export default TestimonialSlider;