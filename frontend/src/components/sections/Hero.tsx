/**
 * Hero Section
 *
 * Introduces the brand with the main headline,
 * supporting copy, CTA buttons, and layered travel imagery.
 */

import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";

// Main hero banner for the landing page.
export default function Hero() {
	return (
		<section
			id="home"
			className="relative overflow-hidden bg-[var(--background)] py-20 text-[var(--text)] sm:py-24 lg:py-28"
		>
			{/* Decorative background layer */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,231,211,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,231,211,0.08),transparent_30%)]" />

			<div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
				{/* Left image column */}
				<div className="order-2 lg:order-1">
					<div className="relative max-w-xl">
						{/* Primary travel image */}
						<div className="overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.3)] ring-1 ring-[var(--border)]">
							<Image
								src="/images/hero-main.jpg"
								alt="Scenic travel destination"
								width={1200}
								height={1400}
								priority
								className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[520px] lg:h-[680px]"
							/>
						</div>

						{/* Floating accent image */}
						<div className="absolute -bottom-6 right-4 w-[42%] max-w-[240px] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[rgba(138,102,64,0.18)] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:-bottom-8 sm:right-6 lg:-bottom-10 lg:right-8">
							<Image
								src="/images/hero-side.jpg"
								alt="Travel inspiration"
								width={600}
								height={700}
								className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
							/>
						</div>
					</div>
				</div>

				{/* Right content column */}
				<div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-8">
					{/* Brand badge */}
					<span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--icon-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)] shadow-sm backdrop-blur-sm sm:text-sm">
						Trusted Travel Experts
					</span>

					{/* Main headline */}
					<h1 className="max-w-2xl text-4xl font-semibold uppercase leading-[1.05] tracking-[0.08em] text-[var(--heading)] sm:text-5xl lg:text-6xl xl:text-7xl">
						EXPLORE THE WORLD
						<span className="mt-2 block text-[var(--heading)]">WITH ALLEN TRAVELS</span>
					</h1>

					{/* Supporting description */}
					<p className="mt-6 max-w-xl text-base leading-8 text-[var(--text)] sm:text-lg">
						Your journey, our priority. Let us take care of every detail while
						you create unforgettable memories.
					</p>

					{/* CTA buttons */}
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
						{/* Primary Button */}
						<PrimaryButton href="#contact">
							Plan Your Trip
						</PrimaryButton>

						<a
							href="#services"
							className="
							inline-flex items-center justify-center
							rounded-full
							border border-[var(--button-bg)]
							bg-[var(--button-bg)]
							px-7 py-3.5
							text-sm font-semibold
							text-white
							transition-all duration-300
							hover:-translate-y-0.5
							hover:scale-105
							hover:bg-[var(--button-hover)]
							hover:border-[var(--button-hover)]
							hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)]
							"
							style={{ color: "#FFFFFF" }}
							>
							Explore Packages
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
