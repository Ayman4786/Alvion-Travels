/**
 * PrimaryButton
 *
 * Renders the main call-to-action as either a button or
 * a client-side link depending on whether an href is provided.
 */

import Link from "next/link";

// Shared button props.
type PrimaryButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
	className?: string;
};

// Base styling for primary actions.
const baseClasses =
	"inline-flex items-center justify-center rounded-full bg-[var(--button-bg)] px-8 py-3 font-semibold text-white shadow-[0_10px_24px_var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[var(--button-hover)] hover:shadow-[0_14px_30px_var(--shadow)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

// Primary CTA component.
export default function PrimaryButton({
	children,
	onClick,
	href,
	className = "",
}: PrimaryButtonProps) {
	const mergedClasses = `${baseClasses} ${className}`.trim();

	// Use a link when navigation is requested.
	if (href) {
		return (
			<Link
				href={href}
				className={mergedClasses}
				style={{ color: "#FFFFFF" }}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={mergedClasses}
			style={{ color: "#FFFFFF" }}
		>
			{children}
		</button>
	);
}