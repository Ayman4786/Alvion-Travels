import Link from "next/link";

type PrimaryButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
	className?: string;
};

const baseClasses =
	"inline-flex items-center justify-center rounded-full bg-[#F4E7D3] px-8 py-3 font-semibold text-[#5C4033] shadow-[0_10px_24px_rgba(92,64,51,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#E8D6BC] hover:shadow-[0_14px_30px_rgba(92,64,51,0.22)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4E7D3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#977140]";

export default function PrimaryButton({
	children,
	onClick,
	href,
	className = "",
}: PrimaryButtonProps) {
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
