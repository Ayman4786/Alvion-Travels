type CardProps = {
	children: React.ReactNode;
	className?: string;
};

const baseClasses =
	"overflow-hidden rounded-2xl bg-[#8F6943] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)]";

export default function Card({ children, className = "" }: CardProps) {
	return <div className={`${baseClasses} ${className}`.trim()}>{children}</div>;
}
