import Image from "next/image";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
	{
		title: "Competitive Pricing",
		description:
			"Best value travel packages without compromising quality.",
	},
	{
		title: "24/7 Customer Support",
		description:
			"Dedicated assistance before, during, and after your journey.",
	},
	{
		title: "Expert Travel Planning",
		description:
			"Customized itineraries designed by experienced travel consultants.",
	},
	{
		title: "Trusted & Transparent",
		description:
			"No hidden costs with complete pricing transparency.",
	},
	{
		title: "Fast & Hassle-Free Booking",
		description:
			"Simple booking process with quick confirmations.",
	},
	{
		title: "Worldwide Destinations",
		description:
			"Domestic and international packages covering hundreds of destinations.",
	},
] as const;

export default function WhyChooseUs() {
	return (
		<section id="why-choose-us" className="bg-[#AE957F] py-20 text-white sm:py-24 lg:py-28">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
					<div className="opacity-95">
						<SectionTitle
							title="WHY CHOOSE US?"
							subtitle="Discover why thousands of travelers trust Allen Travels for unforgettable journeys."
						/>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							{features.map((feature) => (
								<Card key={feature.title} className="bg-[#8F6943]">
									<article className="flex h-full flex-col">
										<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(244,231,211,0.12)] text-white ring-1 ring-[rgba(255,255,255,0.12)]">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												className="h-5 w-5"
												aria-hidden="true"
											>
												<path
													d="M20 6L9 17l-5-5"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div className="mt-5">
											<h3 className="text-lg font-semibold text-white">
												{feature.title}
											</h3>
											<p className="mt-2 text-sm leading-6 text-[#E8DCCB]">
												{feature.description}
											</p>
										</div>
									</article>
								</Card>
							))}
						</div>
					</div>

					<aside className="relative lg:pt-14">
						<div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.25)] ring-1 ring-[rgba(255,255,255,0.12)]">
							<Image
								src="/images/why-choose-us.jpg"
								alt="Travel planning and adventure inspiration"
								width={1200}
								height={1400}
								className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px] lg:h-[760px]"
							/>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
