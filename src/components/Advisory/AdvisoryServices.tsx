import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import advisoryImage from '../../assest/image/advisory-image/What Is A Virtual CISO.svg';
import AdvisoryTab from './AdvisoryTab';
import Breadcrumb from '../Breadcrums/Breadcrumb';
import hero01 from '../../assest/image/advisory-image/CISO-vCiso-Consulting-services.svg';
import hero02 from '../../assest/image/advisory-image/Virtual-CISO-partners.svg';
import check from '../../assest/image/about/check.svg'
import tab7 from '../../assest/image/advisory-tab-icons/header1.svg';
import tab8 from '../../assest/image/advisory-tab-icons/header2.svg';
import tab9 from '../../assest/image/advisory-tab-icons/header3.svg';
import tab10 from '../../assest/image/advisory-tab-icons/header4.svg';
import tab11 from '../../assest/image/advisory-tab-icons/header5.svg';
import { Lightbulb, Shield, Target, Cog, Monitor, BookOpen } from 'lucide-react';
import icon1 from '../../assest/image/advisory-circle-icon/icon1.svg';
import icon2 from '../../assest/image/advisory-circle-icon/icon2.svg';
import icon3 from '../../assest/image/advisory-circle-icon/icon3.svg';
import icon4 from '../../assest/image/advisory-circle-icon/icon4.svg';
import icon5 from '../../assest/image/advisory-circle-icon/icon5.svg';
import icon6 from '../../assest/image/advisory-circle-icon/icon6.svg';
import chevup from '../../assest/image/chevup.svg'
import chevdown from '../../assest/image/chevdown.svg'


const processes = [
  {
    number: "01",
    title: "Discovery Session",
    description: "Understand your structure and risk landscape",
    icon: <img src={icon1} alt="Discovery" className="w-12 h-12 md:w-20 md:h-20" />
  },
  {
    number: "02",
    title: "Security & Compliance Assessment",
    description: "Current state from policies to technical controls",
    icon: <img src={icon2} alt="Assessment" className="w-12 h-12 md:w-20 md:h-20" />
  },
  {
    number: "03",
    title: "Strategy Development",
    description: "Tailored roadmap aligned to objectives and risk appetite",
    icon: <img src={icon3} alt="Strategy" className="w-12 h-12 md:w-20 md:h-20" />
  },
  {
    number: "04",
    title: "Deployment & Execution",
    description: "Implement strategy, oversee projects, and manage controls",
    icon: <img src={icon4} alt="Deployment" className="w-12 h-12 md:w-20 md:h-20" />
  },
  {
    number: "05",
    title: "Monitoring & Review",
    description: "Continuous support, regular status reporting, and risk tracking",
    icon: <img src={icon5} alt="Monitoring" className="w-12 h-12 md:w-20 md:h-20" />
  },
  {
    number: "06",
    title: "Knowledge Transfer",
    description: "Coaching and documentation handover for internal sustainability",
    icon: <img src={icon6} alt="Knowledge" className="w-12 h-12 md:w-20 md:h-20" />
  }
];



// TwoColumnContent reused from Audits.tsx
const TwoColumnContent = ({
  title,
  content,
  image,
  imageAlt,
  reverseOrder = false,
  backgroundColor = "",
  maxWidth = "xl"
}) => (
  <div className={`w-full py-12 flex justify-center items-center bg-black`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className={`lg:w-1/2 w-full mb-12 lg:mr-8 lg:mb-0 ${reverseOrder ? 'order-2 lg:order-1' : 'order-1 lg:order-1'}`} data-aos="fade-right">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>
      <div
        className={`lg:w-1/2 w-full flex justify-center ${reverseOrder ? 'order-1 lg:order-2' : 'order-2 lg:order-2'
          }`}
        data-aos="fade-left"
      >
        <div
          className={`mt-4  lg:text-left flex flex-col items-center lg:items-start`}
        >
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F37803] mb-6 heading-h1-main mb-4">
            {title}
          </h2>

          <div className="space-y-4 ">
            {content}
          </div>


        </div>
      </div>

    </div>
  </div>
);

const TwoColumnContentTwo = ({
  title,
  content,
  image,
  imageAlt,
  reverseOrder = false,
  backgroundColor = "",
  maxWidth = "xl"
}) => (
  <div className={`w-full pb-24 pt-12 flex justify-center items-center bg-black`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className={`lg:w-1/2 w-full mb-12 lg:mr-8 lg:mb-0 ${reverseOrder ? 'order-2 lg:order-1' : 'order-1 lg:order-1'}`} data-aos="fade-right">

        <div
          className={`mt-4  lg:text-left flex flex-col items-center lg:items-start`}
        >
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F37803] mb-6 heading-h1-main mb-4">
            {title}
          </h2>

          <div className="space-y-4 ">
            {content}
          </div>


        </div>

      </div>
      <div
        className={`lg:w-1/2 w-full flex justify-center ${reverseOrder ? 'order-1 lg:order-2' : 'order-2 lg:order-2'
          }`}
        data-aos="fade-left"
      >

        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />

      </div>

    </div>
  </div>
);

const AdvisoryServices = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the difference between a vCISO and an in-house CISO?",
      answer: "A vCISO operates on a flexible basis, no full-time appointment required and offering strategic leadership without the long-term commitment or overhead."
    },
    {
      question: "Is governance and security documentation included?",
      answer: "Yes, policies, standards, incident plans, training guides are all part of the vCISO service."
    },
    {
      question: "Can you support industry compliance in the EMEA?",
      answer: "Absolutely. We deliver support aligned with EMEA specific frameworks like ADHICS, SAMA, Dora, SWIFT, and ISO 27001, CREST."
    }
  ];

  return (
    <>
      <Breadcrumb
        pageTitle="Virtual CISO"
        items={[
          { label: 'Virtual CISO', path: '/vciso' },

        ]}
      />
      <div className="bg-black">
        <div className="container mx-auto px-8 xl:px-8 py-12">
          <div className="pt-4 xl:pt-8 2xl:pt-12">
            {/* Top Hero Section */}
            <div className="text-center mb-20" data-aos="fade-up">
              <h1 className="text-[34px] md:text-[42px] xl:text-[50px] 2xl:text-[75px] leading-normal font-bold text-[#F37803] mb-4 md:mb-6 heading-h1-main heading-main">
                On-Demand Cybersecurity Leadership For Your Organization
              </h1>
            </div>

            {/* Bottom Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              {/* Left Text Section */}
              <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F37803] mb-6 heading-h1-main">
                  What Is A Virtual CISO?
                </h2>
                <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed">
                  <p>
                    A Virtual Chief Information Security Officer (vCISO) delivers tailored cybersecurity leadership and guidance on a flexible, on-demand basis.
                  </p>
                  <p>
                    Combining strategic insight with hands-on support, a vCISO helps organizations of any size to define risk posture, secure their digital assets, manage compliance, and lead incident response efforts, without the expense of a full-time executive.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start mt-8">
                  <Link to={'/contact-us'}>
                    <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg">
                      Get Advisory Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img
                    src={advisoryImage}
                    alt="Advisory Services"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <AdvisoryTab />

      {/* Who Benefits Section */}
      <div id="Who Benefits">
        <TwoColumnContent
          title="Who Benefits Most?"
          image={hero01}
          imageAlt="Who Benefits"
          backgroundColor="bg-black"
          content={
            <>

              <ul className="mt-4 space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Small to medium businesses seeking robust security without full-time CISO hiring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Growing enterprises needing scalable cybersecurity leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Organizations in transition or scale-up phases requiring interim CISO coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Regulated industries targeting compliance controls without permanent staffing increases</span>
                </li>

              </ul>
            </>
          }
        />
      </div>

      {/* Process Section */}


      <div className="relative bg-black py-20 overflow-hidden">


        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F37803] mb-16 text-center">
            How It Works, Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {processes.map((process, index) => (
              <div key={index} className="text-center relative flex flex-col items-center max-w-lg mx-auto">


                {/* Dotted Circle with Icon */}
                <div className="relative mb-6">
                  {/* Number positioned at top-left */}
                  <div className="absolute -top-2 -right-2 z-20 w-14 h-14 flex items-center justify-center bg-[#161616] rounded-full">
                    <span className="text-[#F37803] font-bold text-lg">
                      {process.number}
                    </span>
                  </div>
                  {/* Outer dotted border */}
                  <div className="w-33 h-33 md:w-44 md:h-44 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                    {/* Inner solid circle with icon */}
                    <div className="w-28 h-28 md:w-40 md:h-40 bg-[#1f1f1f] rounded-full flex items-center justify-center">
                      {process.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F37803] mb-3 leading-tight">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="font-normal mt-auto text-white text-xl leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Why Partner Section */}
      <div id="Why Partner">
        <TwoColumnContentTwo
          title="Why Partner With Us"
          image={hero02}
          imageAlt="Who Benefits"
          backgroundColor="bg-black"
          content={
            <>

              <ul className="mt-4 space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Experienced cybersecurity leadership vetted across diverse verticals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Flexible delivery models: remote, hybrid, part-time, or interim</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Track record in compliance regimes relevant to UAE and beyond (ISO 27001, SAMA, NESA, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Cost-effective, scalable resources tailored to organizational maturity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                    <img src={check} alt="check" className="h-6 w-6" />
                  </span>
                  <span className="text-white text-lg">Executive-level strategic alignment to support board-level objectives</span>
                </li>

              </ul>
            </>
          }
        />
      </div>

      {/* call to action */}

      <section id="contact" className=' py-16 xl:py-24 bg-gradient-to-r from-[#F57A00] to-[#7103A4]'>
        <div className="">
          <div className="container  mx-auto flex flex-col justify-center items-center text-center px-6  ">
            <div className='w-full max-w-7xl flex flex-col gap-4 justify-between items-center'>

              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white mb-4 md:mb-0 relative z-10 heading-call-to">
                Ready to Elevate Your Security Culture?
              </h2>
              <p className='text-base sm:text-lg md:text-xl font-normal text-center'>Initiate a free consultation to examine your cybersecurity needs and explore how a virtual CISO can reinforce your defense posture. We deliver customized proposals aligned to your organisation’s priorities.</p>
              <Link to={'/contact-us'}>
                <button className="bg-white text-orange-500 hover:text-orange-600 font-semibold py-4 px-6 mt-8 rounded-lg shadow-md transition-transform transform hover:scale-105 relative z-10">
                  Contact our team to schedule a session
                </button>

              </Link>


            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#F37803] mb-16 text-center">
            FAQs
          </h2>
          <div className=' px-4 py-16 bg-[#1f1f1f] rounded-[10px]  '>


            <div className='mx-auto max-w-7xl'>
              
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[5px] "
                  style={{
                    padding: 1,
                    background: 'linear-gradient(90deg, #F57A00, #7103A4)',
                    margin: '6px 0 6px 6px'
                  }}
                >
                  <div className="rounded-[5px] overflow-hidden" style={{
                    background: '#1f1f1f',
                  }}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:text-[#F37803] transition-colors"
                    >
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      {activeFaq === index ? (
                        <img src={chevup} alt="collapse" className="w-5 h-5" />
                      ) : (
                        <img src={chevdown} alt="expand" className="w-5 h-5" />
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                      <div className="px-6 py-4 text-gray-300">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            </div>



          </div>

        </div>
      </div>

    </>

  );
};

export default AdvisoryServices;