/**
 * Why Choose Us Section
 *
 * Highlights the trust-building reasons that differentiate
 * Allen Travels through a feature grid and supporting image.
 */

import Image from "next/image";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

// Trust-focused feature list.
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

// Persuasive feature and image section.
export default function WhyChooseUs() {
	return (
		<section id="why-choose-us" className="bg-[var(--background)] py-20 text-[var(--heading)] sm:py-24 lg:py-28">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Two-column layout */}
				<div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
					{/* Left content: title and feature cards */}
					<div className="opacity-95">
						{/* Shared section title */}
						<SectionTitle
							title="WHY CHOOSE US?"
							subtitle="Discover why thousands of travelers trust Allen Travels for unforgettable journeys."
						/>

						{/* Feature cards */}
						<div className="mt-10 grid gap-5 sm:grid-cols-2">
							{/* Render trust highlights */}
							{features.map((feature) => (
								<article
									key={feature.title}
									className="group rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-hover)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
								>
									<div className="flex items-start gap-4">
									{/* Icon */}
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--glass)] text-[var(--card-icon)] ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105">
										<svg
										viewBox="0 0 24 24"
										fill="none"
										className="h-5 w-5"
										aria-hidden="true"
										>
										<path
											d="M20 6L9 17L4 12"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										</svg>
									</div>

									{/* Content */}
									<div className="flex-1">
										<h3 className="text-lg font-semibold text-[var(--primary)] sm:text-lg">
										{feature.title}
										</h3>

										<p className="mt-2 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
										{feature.description}
										</p>
									</div>
									</div>
								</article>
								))}
						</div>
					</div>

					{/* Right content: supporting image */}
					<aside className="relative lg:pt-14">
						{/* Main section image */}
						<div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.25)] ring-1 ring-[var(--border)]">
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
