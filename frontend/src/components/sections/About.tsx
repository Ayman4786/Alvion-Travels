/**
 * About Section
 *
 * Explains the brand story and reinforces trust with
 * a supporting image and feature highlights.
 */

import Image from "next/image";

// Feature highlights rendered as cards.
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

// Company introduction and feature summary.
export default function About() {
	return (
		<section id="about" className="bg-[var(--background)] py-20 text-[var(--text)] sm:py-24 lg:py-28">
			<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
				{/* Visual column */}
				<div className="relative">
					{/* About image */}
					<div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.25)] ring-1 ring-[var(--border)]">
						<Image
							src="/images/about.jpg"
							alt="Travel experience"
							width={1200}
							height={1400}
							className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px] lg:h-[680px]"
						/>
					</div>
				</div>

				{/* Content column */}
				<div className="flex flex-col">
					{/* Section label */}
					<span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--icon-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)] shadow-sm backdrop-blur-sm sm:text-sm">
						Who Are We?
					</span>

					<h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
						Your Trusted Travel Partner
					</h2>

					{/* Company description */}
					<p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text)] sm:text-lg">
						We are a passionate travel company dedicated to creating unforgettable
						travel experiences. Whether it&apos;s family vacations, honeymoon packages,
						corporate travel, or international adventures, we focus on comfort,
						affordability, and personalized service.
					</p>

					{/* Feature cards */}
					<div className="mt-10 grid gap-4 sm:grid-cols-2">
						{/* Render each company strength */}
						{features.map((feature) => (
							<article
								key={feature.title}
								className="group rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] pt-8 px-6 pb-6 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-bg)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
							>
								<div className="flex items-start gap-4">
									<span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--glass)] text-sm font-semibold text-[var(--text-light)] ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105">
										✓
									</span>
									<div>
										<h3 className="text-lg font-semibold text-[var(--primary)]">
											{feature.title}
										</h3>
										<p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
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
