/**
 * Footer Section
 *
 * Provides brand context, quick links, contact details,
 * and social follow links at the bottom of the page.
 */

import { NAV_ITEMS } from "@/constants/navigation";

// Social destinations shown in the footer.
const socialLinks = [
	{ label: "Instagram", href: "#" },
	{ label: "Facebook", href: "#" },
	{ label: "WhatsApp", href: "#" },
	{ label: "LinkedIn", href: "#" },
] as const;

// Company contact details displayed in the footer.
const contactItems = [
	{ label: "Phone", value: "+91 9964855315" },
	{ label: "Email", value: "info@allentravels.com" },
	{
		label: "Address",
		value: "4/5-1, Lalbagh Siddapura, Jayanagar 1st Block, Bengaluru",
	},
] as const;

// Site footer content and utility links.
export default function Footer() {
	return (
		<footer className="bg-[#AE957F] text-white">
			{/* Footer grid */}
			<div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{/* Brand column */}
					<section aria-label="Company information" className="space-y-5">
						<div className="flex items-center gap-3">
							<span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(244,231,211,0.12)] text-sm font-semibold text-white ring-1 ring-[rgba(255,255,255,0.12)] shadow-sm">
								AT
							</span>
							<div>
								<h2 className="text-xl font-semibold tracking-wide">
									Allen Travels
								</h2>
							</div>
						</div>
						<p className="max-w-sm text-sm leading-7 text-[#E8DCCB]">
							Creating unforgettable travel experiences with personalized
							planning, trusted service, and worldwide destinations.
						</p>
					</section>

					{/* Quick navigation links */}
					<nav aria-label="Quick links" className="space-y-5">
						<h3 className="text-lg font-semibold">Quick Links</h3>
						<ul className="space-y-3">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="group inline-flex items-center gap-2 text-sm text-[#E8DCCB] transition-colors duration-300 hover:text-white"
									>
											<span className="h-px w-4 bg-[#F4E7D3]/50 transition-all duration-300 group-hover:w-6 group-hover:bg-[#F4E7D3]" />
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Contact column */}
					<section aria-label="Contact information" className="space-y-5">
						<h3 className="text-lg font-semibold">Contact Information</h3>
						<ul className="space-y-4 text-sm leading-7 text-[#E8DCCB]">
							{contactItems.map((item) => (
								<li key={item.label}>
									<span className="block font-medium text-white">{item.label}</span>
									<span className="block">{item.value}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Social links */}
					<section aria-label="Follow us" className="space-y-5">
						<h3 className="text-lg font-semibold">Follow Us</h3>
						<ul className="grid gap-3">
							{socialLinks.map((item) => (
								<li key={item.label}>
									<a
										href={item.href}
										className="inline-flex w-fit items-center rounded-full border border-[rgba(255,255,255,0.12)] bg-transparent px-4 py-2 text-sm text-[#E8DCCB] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(244,231,211,0.15)] hover:text-white hover:shadow-md"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</section>
				</div>

				{/* Copyright bar */}
				<div className="mt-14 border-t border-[rgba(255,255,255,0.12)] pt-6">
					<div className="flex flex-col gap-3 text-sm text-[#E8DCCB] sm:flex-row sm:items-center sm:justify-between">
						<p>© 2026 Allen Travels.</p>
						<p>All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
