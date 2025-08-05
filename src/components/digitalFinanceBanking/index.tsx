import React from 'react';
import financeHero from '../../assest/image/digitalfinancehero.svg';
import SecuritySlider from './SecuritySlider';
import TabContent from './TabContent';
import CallToAction from '../CallToAction';
import Breadcrumb from '../Breadcrums/Breadcrumb';

const DigitalFinanceHero = () => {
    return (
        <>

        <Breadcrumb 
        pageTitle="Digital Finance & Banking"
        items={[
        { label: 'Digital Finance & Banking', path: '/digital-finance-banking' },

    ]} 
    />
            <div className="w-full from-purple-900 via-gray-900 to-black flex items-center banner-image">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-8 mt-4 md:mt-0 text-center lg:text-left">
                            <div>
                                <h2 className="font-semibold text-white mt-4 text-4xl lg:text-5xl 2xl:text-6xl">
                                    Securing the Digital Vault, Before Someone Else Makes a Withdrawal
                                </h2>
                                {/* <h2 className='font-bold text-white mt-4 text-2xl'>Banks get breached. Wallets get drained. And cybercriminals don’t take holidays. We test your digital finance ecosystem like real attackers would—minus the criminal record.

                                </h2> */}
                            </div>
                            <p className="text-lg leading-relaxed max-w-xl paragraphcommon">
                                Banks get breached. Wallets get drained. And cybercriminals don’t take holidays. We test your digital finance ecosystem like real attackers would, minus the criminal record.
                            </p>
                          
                            <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <a href="#explore-now">Explore Our Solutions</a>
                            </button>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="relative w-full max-w-sm xl:max-w-[320px] 2xl:max-w-lg flex items-center justify-center">
                                <img
                                    src={financeHero}
                                    alt="Digital Finance and Banking"
                                    className="w-full h-auto"
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
