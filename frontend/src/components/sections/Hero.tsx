import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative overflow-hidden bg-[#977140] text-white"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,231,211,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,231,211,0.08),transparent_30%)]" />

			<div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
				<div className="order-2 lg:order-1">
					<div className="relative max-w-xl">
						<div className="overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.3)] ring-1 ring-[rgba(255,255,255,0.12)]">
							<Image
								src="/images/hero-main.jpg"
								alt="Scenic travel destination"
								width={1200}
								height={1400}
								priority
								className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[520px] lg:h-[680px]"
							/>
						</div>

						<div className="absolute -bottom-6 right-4 w-[42%] max-w-[240px] overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(143,105,67,0.18)] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:-bottom-8 sm:right-6 lg:-bottom-10 lg:right-8">
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

				<div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-8">
					<span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-sm backdrop-blur-sm sm:text-sm">
						Trusted Travel Experts
					</span>

					<h1 className="max-w-2xl text-4xl font-semibold uppercase leading-[1.05] tracking-[0.08em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
						EXPLORE THE WORLD
						<span className="mt-2 block text-[#F8F3ED]">WITH ALLEN TRAVELS</span>
					</h1>

					<p className="mt-6 max-w-xl text-base leading-8 text-[#F8F3ED] sm:text-lg">
						Your journey, our priority. Let us take care of every detail while
						you create unforgettable memories.
					</p>

					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-full bg-[#F4E7D3] px-7 py-3.5 text-sm font-semibold text-[#5C4033] shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8D6BC] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]"
						>
							Plan Your Trip
						</a>
						<a
							href="#services"
							className="inline-flex items-center justify-center rounded-full border border-[#F4E7D3] bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(244,231,211,0.15)] hover:border-[#F4E7D3]"
						>
							Explore Packages
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
