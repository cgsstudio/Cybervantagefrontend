import React from 'react';
import financeHero from '../../assest/image/digitalfinancehero.svg';
import SecuritySlider from './SecuritySlider';
import TabContent from './TabContent';
import CallToAction from '../CallToAction';

const DigitalFinanceHero = () => {
    return (
        <>
            <div className="w-full from-purple-900 via-gray-900 to-black min-h-screen flex items-center banner-image">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-[70vh]">
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-8 mt-4 md:mt-0">
                            <div>
                                <h1 className="font-bold text-white mt-4 headingh2">
                                    Securing the Digital Vault—Before Someone Else Makes a Withdrawal
                                </h1>
                                <h2 className='font-bold text-white mt-4 text-2xl'>Banks get breached. Wallets get drained. And cybercriminals don’t take holidays. We test your digital finance ecosystem like real attackers would—minus the criminal record.

                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed max-w-xl paragraphcommon">
                                In the high-stakes world of digital finance, every click, transaction, and API call is a
                                potential target. From mobile banking apps to ATM fleets and IoT-powered branches, the
                                financial sector is a playground for fraudsters, phishers, and full-time cyber troublemakers.
                            </p>
                            <p className="text-lg leading-relaxed max-w-xl paragraphcommon">
                                At <span className='font-bold'>CyberVantage</span>, we bring a sharp offensive edge to financial cybersecurity. Our experts
                                dive deep into the systems that power your digital economy—scanning for weak links,
                                simulating fraud campaigns, and fortifying the digital doors your customers trust every day.
                                Whether you're securing SCADA in a data center or ensuring your ATMs don't go rogue, we
                                make sure your systems are tougher than your compliance checklist.
                            </p>
                            <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Explore Our Solutions
                            </button>
                        </div>
                        <div className="relative flex justify-center lg:justify-center">
                            <div className="relative w-full max-w-lg flex items-center justify-center">
                                <img
                                    src={financeHero}
                                    alt="Digital Finance and Banking"
                                    className="w-full h-auto scale-[1] 2xl:scale-[1.4]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <TabContent />
             <SecuritySlider />
            <CallToAction />
        </>
    );
};

export default DigitalFinanceHero;
