/**
 * Card
 *
 * Generic brown card shell used across feature,
 * service, and contact content blocks.
 */

// Base card styling shared by all content cards.
type CardProps = {
	children: React.ReactNode;
	className?: string;
};

// Maintains a consistent surface while allowing overrides.
const baseClasses =
	"overflow-hidden rounded-2xl bg-[#8A6640] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)]";

// Reusable card wrapper.
export default function Card({ children, className = "" }: CardProps) {
	return <div className={`${baseClasses} ${className}`.trim()}>{children}</div>;
}
