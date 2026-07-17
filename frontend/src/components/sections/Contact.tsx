/**
 * Contact Section
 *
 * Combines company contact details with a simple inquiry form
 * so visitors can quickly reach out to Allen Travels.
 */

import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionTitle from "@/components/ui/SectionTitle";

// Contact detail items displayed as cards.
const contactDetails = [
	{
		title: "Phone",
		value: "+91 9964855315",
	},
	{
		title: "Email",
		value: "info@allentravels.com",
	},
	{
		title: "Website",
		value: "www.allentravels.com",
	},
	{
		title: "Address",
		value: "4/5-1, Lalbagh Siddapura, Jayanagar 1st Block, Bengaluru",
	},
] as const;

// Contact information and inquiry form.
export default function Contact() {
	return (
		<section id="contact" className="bg-[#AE957F] py-20 text-white sm:py-24 lg:py-28">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Two-column contact layout */}
				<div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
					{/* Left column: contact info */}
					<div>
						{/* Shared section title */}
						<SectionTitle
							title="CONTACT US"
							subtitle="Let's plan your next unforgettable journey."
						/>

						{/* Contact detail cards */}
						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							{/* Render each contact method */}
							{contactDetails.map((item) => (
								<Card key={item.title} className="bg-[#8A6640]">
									<article className="flex h-full flex-col gap-4">
										<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(244,231,211,0.12)] text-sm font-semibold text-white ring-1 ring-[rgba(255,255,255,0.12)]">
											•
										</div>
										<div>
											<h3 className="text-lg font-semibold text-white">
												{item.title}
											</h3>
											<p className="mt-2 text-sm leading-7 text-[#E8DCCB]">
												{item.value}
											</p>
										</div>
									</article>
								</Card>
							))}
						</div>
					</div>

					{/* Right column: contact form */}
					<div className="lg:pt-14">
						{/* Inquiry form */}
						<Card className="bg-[#8A6640]">
							<form className="space-y-5">
								{/* User details */}
								<div className="grid gap-5 sm:grid-cols-2">
									<label className="block">
										<span className="mb-2 block text-sm font-medium text-[#F8F3ED]">
											Name
										</span>
										<input
											type="text"
											name="name"
											className="w-full rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.08)] px-4 py-3 text-white placeholder:text-[#E8DCCB] outline-none transition-all duration-300 focus:border-[rgba(244,231,211,0.35)] focus:bg-[rgba(244,231,211,0.12)]"
											placeholder="Your name"
										/>
									</label>
									<label className="block">
										<span className="mb-2 block text-sm font-medium text-[#F8F3ED]">
											Email
										</span>
										<input
											type="email"
											name="email"
											className="w-full rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.08)] px-4 py-3 text-white placeholder:text-[#E8DCCB] outline-none transition-all duration-300 focus:border-[rgba(244,231,211,0.35)] focus:bg-[rgba(244,231,211,0.12)]"
											placeholder="Your email"
										/>
									</label>
								</div>

								{/* Subject field */}
								<label className="block">
									<span className="mb-2 block text-sm font-medium text-[#F8F3ED]">
										Subject
									</span>
									<input
										type="text"
										name="subject"
										className="w-full rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.08)] px-4 py-3 text-white placeholder:text-[#E8DCCB] outline-none transition-all duration-300 focus:border-[rgba(244,231,211,0.35)] focus:bg-[rgba(244,231,211,0.12)]"
										placeholder="How can we help?"
									/>
								</label>

								{/* Message field */}
								<label className="block">
									<span className="mb-2 block text-sm font-medium text-[#F8F3ED]">
										Message
									</span>
									<textarea
										name="message"
										rows={6}
										className="w-full rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.08)] px-4 py-3 text-white placeholder:text-[#E8DCCB] outline-none transition-all duration-300 focus:border-[rgba(244,231,211,0.35)] focus:bg-[rgba(244,231,211,0.12)]"
										placeholder="Tell us about your travel plans"
									/>
								</label>

								{/* Submit action */}
								<PrimaryButton className="w-full sm:w-auto">Submit</PrimaryButton>
							</form>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
