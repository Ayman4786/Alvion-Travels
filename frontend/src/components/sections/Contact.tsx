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
		<section id="contact" className="bg-[var(--background)] py-20 text-[var(--text)] sm:py-24 lg:py-28">
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
								<Card key={item.title} className="group rounded-xl border border-[var(--border)] bg-[var(--card-bg)] pt-8 px-6 pb-6 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-hover)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
									<article className="flex h-full flex-col gap-4">
										<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--icon-bg)] text-sm font-semibold text-[var(--text-light)] ring-1 ring-[var(--border)]">
											•
										</div>
										<div>
											<h3 className="text-lg font-semibold text-[var(--text-light)]">
												{item.title}
											</h3>
											<p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
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
						<Card className="group rounded-xl border border-[var(--border)] bg-[var(--card-bg)] pt-8 px-6 pb-6 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-bg)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
							<form className="space-y-5">
								{/* User details */}
								<div className="grid gap-5 sm:grid-cols-2">
									<label className="block">
										<span className="mb-2 block text-sm font-medium text-[var(--text-light)]">
											Name
										</span>
										<input
											type="text"
											name="name"
											className="w-full rounded-2xl border border-[var(--border)] bg-[var(--glass)] px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:bg-[var(--card-hover)]"
											placeholder="Your name"
										/>
									</label>
									<label className="block">
										<span className="mb-2 block text-sm font-medium text-[var(--text-light)]">
											Email
										</span>
										<input
											type="email"
											name="email"
											className="w-full rounded-2xl border border-[var(--border)] bg-[var(--glass)] px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:bg-[var(--card-hover)]"
											placeholder="Your email"
										/>
									</label>
								</div>

								{/* Subject field */}
								<label className="block">
									<span className="mb-2 block text-sm font-medium text-[var(--text-light)]">
										Subject
									</span>
									<input
										type="text"
										name="subject"
										className="w-full rounded-2xl border border-[var(--border)] bg-[var(--glass)] px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:bg-[var(--icon-bg)]"
										placeholder="How can we help?"
									/>
								</label>

								{/* Message field */}
								<label className="block">
									<span className="mb-2 block text-sm font-medium text-[var(--text-light)]">
										Message
									</span>
									<textarea
										name="message"
										rows={6}
										className="w-full rounded-2xl border border-[var(--border)] bg-[var(--glass)] px-4 py-3 text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:bg-[var(--icon-bg)]"
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
