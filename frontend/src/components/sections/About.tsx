import Image from "next/image";

const features = [
	{
		title: "Customized Packages",
		description:
			"Tailored travel plans designed around your schedule, style, and budget.",
	},
	{
		title: "24/7 Customer Support",
		description:
			"Always available assistance to keep your journey smooth and stress free.",
	},
	{
		title: "Trusted Service",
		description:
			"Reliable travel guidance backed by a team that puts your experience first.",
	},
	{
		title: "Affordable Pricing",
		description:
			"Competitive travel solutions that balance comfort, value, and quality.",
	},
] as const;

export default function About() {
	return (
		<section id="about" className="bg-[#AE957F] py-20 text-white sm:py-24 lg:py-28">
			<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
				<div className="relative">
					<div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.25)] ring-1 ring-[rgba(255,255,255,0.12)]">
						<Image
							src="/images/about.jpg"
							alt="Travel experience"
							width={1200}
							height={1400}
							className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px] lg:h-[680px]"
						/>
					</div>
				</div>

				<div className="flex flex-col">
					<span className="mb-4 inline-flex w-fit rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm sm:text-sm">
						Who Are We?
					</span>

					<h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
						Your Trusted Travel Partner
					</h2>

					<p className="mt-6 max-w-2xl text-base leading-8 text-[#F8F3ED] sm:text-lg">
						We are a passionate travel company dedicated to creating unforgettable
						travel experiences. Whether it&apos;s family vacations, honeymoon packages,
						corporate travel, or international adventures, we focus on comfort,
						affordability, and personalized service.
					</p>

					<div className="mt-10 grid gap-4 sm:grid-cols-2">
						{features.map((feature) => (
							<article
								key={feature.title}
								className="group rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[#8F6943] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8A6640] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
							>
								<div className="flex items-start gap-4">
									<span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(244,231,211,0.12)] text-sm font-semibold text-white ring-1 ring-[rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-105">
										✓
									</span>
									<div>
										<h3 className="text-lg font-semibold text-white">
											{feature.title}
										</h3>
										<p className="mt-2 text-sm leading-6 text-[#E8DCCB]">
											{feature.description}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
