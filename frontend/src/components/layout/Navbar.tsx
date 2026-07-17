"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants/navigation";

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));

		const updateState = () => {
			const scrollY = window.scrollY;
			setIsScrolled(scrollY > SCROLL_THRESHOLD);

			const sectionOffset = window.innerHeight * 0.35;
			let currentSection = sectionIds[0];

			for (const sectionId of sectionIds) {
				const section = document.getElementById(sectionId);

				if (!section) {
					continue;
				}

				const rect = section.getBoundingClientRect();
				if (rect.top - sectionOffset <= 0 && rect.bottom > sectionOffset) {
					currentSection = sectionId;
					break;
				}

				if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
					currentSection = sectionIds[sectionIds.length - 1];
				}
			}

			setActiveSection(currentSection);
		};

		updateState();
		window.addEventListener("scroll", updateState, { passive: true });
		window.addEventListener("resize", updateState);

		return () => {
			window.removeEventListener("scroll", updateState);
			window.removeEventListener("resize", updateState);
		};
	}, []);

	const handleNavigate = (href: string) => {
		const targetId = href.slice(1);
		const target = document.getElementById(targetId);

		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}

		setActiveSection(targetId);
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				isScrolled
					? "border-b border-[rgba(255,255,255,0.12)] bg-[#977140]/95 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md"
					: "bg-transparent"
			}`}
		>
			<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<button
					type="button"
					onClick={() => handleNavigate("#home")}
					className="group flex items-center gap-3 text-left"
					aria-label="Go to home section"
				>
					<span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.12)] text-sm font-semibold text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
						AT
					</span>
					<span className="flex flex-col leading-tight text-white">
						<span className="text-base font-semibold tracking-wide sm:text-lg">
							Allen Travels
						</span>
						<span className="text-[11px] text-[#E8DCCB] sm:text-xs">
							Your Journey, Our Priority
						</span>
					</span>
				</button>

				<div className="hidden items-center gap-2 lg:flex">
					{NAV_ITEMS.map((item) => {
						const isActive = activeSection === item.href.slice(1);

						return (
							<button
								key={item.href}
								type="button"
								onClick={() => handleNavigate(item.href)}
								className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
									isActive ? "text-white" : "text-[#E8DCCB] hover:text-white"
								} after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#F4E7D3] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
									isActive ? "after:scale-x-100" : ""
								}`}
								aria-current={isActive ? "page" : undefined}
							>
								{item.label}
							</button>
						);
					})}
				</div>

				<button
					type="button"
					onClick={() => setIsMobileMenuOpen((current) => !current)}
					className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.12)] p-3 text-white transition-colors duration-300 hover:bg-[rgba(244,231,211,0.18)] lg:hidden"
					aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-navigation"
				>
					{isMobileMenuOpen ? (
						<svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
							<path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
							<path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
						</svg>
					) : (
						<svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
							<path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
							<path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
							<path d="M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
						</svg>
					)}
				</button>
			</nav>

			<div
				id="mobile-navigation"
				className={`overflow-hidden border-t border-[rgba(255,255,255,0.12)] bg-[#977140]/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
					isMobileMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
					{NAV_ITEMS.map((item) => {
						const isActive = activeSection === item.href.slice(1);

						return (
							<button
								key={item.href}
								type="button"
								onClick={() => handleNavigate(item.href)}
								className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
									isActive ? "bg-[rgba(244,231,211,0.12)] text-white" : "text-[#E8DCCB] hover:bg-[rgba(244,231,211,0.08)] hover:text-white"
								}`}
								aria-current={isActive ? "page" : undefined}
							>
								<span>{item.label}</span>
								<span className="h-px w-8 bg-[#F4E7D3]/50" aria-hidden="true" />
							</button>
						);
					})}
				</div>
			</div>
		</header>
	);
}
