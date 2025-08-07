import React from 'react';
import icon1 from '../../assest/image/about/1.svg';
import icon2 from '../../assest/image/about/2.svg';
import icon3 from '../../assest/image/about/3.svg';
import icon4 from '../../assest/image/about/4.svg';
import partner1 from '../../assest/image/about/about-partner-logos/Group 1286.svg';
import partner2 from '../../assest/image/about/about-partner-logos/download 3.svg';
import partner3 from '../../assest/image/about/about-partner-logos/media_149fe055bcfb29eb7d6ce44fd20b2564de86e153f 1.svg';
import partner4 from '../../assest/image/about/about-partner-logos/SU Programs@2x 1.svg';
import partner5 from '../../assest/image/about/about-partner-logos/Group.svg';
import partner6 from '../../assest/image/about/about-partner-logos/Group.svg';
import partner7 from '../../assest/image/about/about-partner-logos/image-1.svg';
import partner8 from '../../assest/image/about/about-partner-logos/OSEP.D_R8bS1A_Z1JYK2E 1.svg';
import partner9 from '../../assest/image/about/about-partner-logos/osee.svg';
import partner10 from '../../assest/image/about/about-partner-logos/blob 1.svg';
import partner11 from '../../assest/image/about/about-partner-logos/ceh.svg';
import partner12 from '../../assest/image/about/about-partner-logos/Group-1287.svg';
import partner13 from '../../assest/image/about/about-partner-logos/azure.svg';

const valueCards = [
	{
		icon: icon1,
		title: 'Integrity First',
		description:
			'Trust is earned through transparency and action.',
	},
	{
		icon: icon2,
		title: 'Obsessed with Outcomes',
		description:
			'We measure our success by yours',
	},
	{
		icon: icon3,
		title: 'Adapt Like an Attacker',
		description:
			'We evolve faster than the threat landscape.',
	},
	{
		icon: icon4,
		title: 'People-Powered',
		description:
			'Great tech doesn’t matter without great people',
	},
];

export default function AboutTabContent() {
	return (
		<div
			className="container mx-auto  text-white pb-20 pt-0"
			id="digitalfinance"
		>
			{/* Header Section */}
			<div className="text-center mb-8">
				<h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-orange-500 inline-block px-8 py-4 rounded-lg">
					Our Values
				</h2>
			</div>

			{/* Value Cards Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 container mx-auto">
				{valueCards.map((card, index) => (
					<div
						key={index}
						className="relative p-[2px] rounded-[8px] overflow-hidden group transition-all duration-300"
						style={{
							background: '#1F1F1F',
						}}
					>
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background: 'linear-gradient(45deg, #F57A00, #7103A4)',
							}}
						/>
						<div className="bg-[#1F1F1F] group-hover:bg-black transition-colors duration-300 rounded-[8px] p-6 h-full relative z-10">
							<div className="flex flex-col items-center text-center space-y-4">
								<div>
									<img src={card.icon} alt={card.title + ' icon'} className="w-50 h-50" />
								</div>
								<h3 className="lg:text-[18px] xl:text-[22px] font-[800] text-[#F57A00] uppercase leading-[1.2]">
									{card.title}
								</h3>
								<p className="text-gray-300 text-[16px] xl:text-[18px] font-[500] ">{card.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Background Decorative Elements */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
			</div>
		</div>
	);
}