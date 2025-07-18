import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import partner1 from '../../assest/image/about/about-partner-logos/Group 1286.svg';
import partner2 from '../../assest/image/about/about-partner-logos/download 3.svg';
import partner3 from '../../assest/image/about/about-partner-logos/media_149fe055bcfb29eb7d6ce44fd20b2564de86e153f 1.svg';
import partner4 from '../../assest/image/about/about-partner-logos/SU Programs@2x 1.svg';
import partner5 from '../../assest/image/about/about-partner-logos/Group.svg';
import partner6 from '../../assest/image/about/about-partner-logos/Group.svg';

const CertificationsBanner = () => {
  // First slider logos - Security Certifications
  const securityCertifications = [
    {
      id: 1,
      name: 'ISO 27001',
      logo: partner1
    },
    {
      id: 2,
      name: 'CREST',
      logo: partner2
    },
    {
      id: 3,
      name: 'AWS',
      logo: partner3
    },
    {
      id: 4,
      name: 'ISO 27001',
      logo: partner4
    },
    {
      id: 5,
      name: 'CREST',
      logo: partner5
    },
    {
      id: 6,
      name: 'AWS',
      logo: partner6
    },
    {
      id: 7,
      name: 'ISO 27001',
      logo: partner1
    }
  ];

  // Second slider logos - Partnership Certifications
  const partnershipCertifications = [
    {
      id: 1,
      name: 'Partner 1',
      logo: partner1
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: partner2
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: partner3
    },
    {
      id: 4,
      name: 'Partner 4',
      logo: partner4
    },
    {
      id: 5,
      name: 'Partner 5',
      logo: partner5
    },
    {
      id: 6,
      name: 'Partner 6',
      logo: partner6
    },
    {
      id: 7,
      name: 'Partner 7',
      logo: partner1
    }
  ];

  return (
    <div className="w-full  relative overflow-hidden">
      <div className="relative z-10 px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 inline-block px-8 py-4 rounded-lg">
            Certifications & Global Accreditations
          </h1>
        </div>

        {/* First Slider - Security Certifications (Left to Right) */}
        <div className="mb-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={7}
            slidesPerGroup={1}
            loop={true}
            loopedSlides={securityCertifications.length}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 12,
              },
            }}
            className="certification-swiper"
          >
            {/* Duplicate slides for smooth loop */}
            {[...securityCertifications, ...securityCertifications, ...securityCertifications].map((cert, index) => (
              <SwiperSlide key={`security-${index}`}>
                <div className="w-auto h-28 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-3">
                  <img src={cert.logo} alt={cert.name} className="h-12 md:h-14 object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Slider - Partnership Certifications (Right to Left) */}
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={7}
            slidesPerGroup={1}
            loop={true}
            loopedSlides={partnershipCertifications.length}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={3000}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 12,
              },
            }}
            className="certification-swiper"
          >
            {/* Duplicate slides for smooth loop */}
            {[...partnershipCertifications, ...partnershipCertifications, ...partnershipCertifications].map((cert, index) => (
              <SwiperSlide key={`partnership-${index}`}>
                <div className=" w-auto h-28 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-3">
                  <img src={cert.logo} alt={cert.name} className="h-12 md:h-14 object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS for swiper styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .certification-swiper {
              overflow: visible;
            }
            .certification-swiper .swiper-wrapper {
              transition-timing-function: linear;
            }
            .certification-swiper .swiper-slide {
              transition: transform 0.3s ease;
            }
            .certification-swiper .swiper-slide:hover {
              transform: translateY(-5px);
            }
          `
        }}
      />
    </div>
  );
};

export default CertificationsBanner;