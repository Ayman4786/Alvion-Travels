import Link from "next/link";

type SecondaryButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
	className?: string;
};

const baseClasses =
	"inline-flex items-center justify-center rounded-full border-2 border-[#F4E7D3] bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[rgba(244,231,211,0.15)] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4E7D3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#977140]";

export default function SecondaryButton({
	children,
	onClick,
	href,
	className = "",
}: SecondaryButtonProps) {
	const mergedClasses = `${baseClasses} ${className}`.trim();

	if (href) {
		return (
			<Link href={href} className={mergedClasses}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" onClick={onClick} className={mergedClasses}>
			{children}
		</button>
	);
}
