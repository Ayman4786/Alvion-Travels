/**
 * SectionTitle
 *
 * Shared heading component used across multiple sections
 * to maintain consistent titles and subtitles.
 */

// Props accepted by the SectionTitle component.
type SectionTitleProps = {
	title: string;
	subtitle?: string;
	centered?: boolean;
};

// Reusable section heading component.
export default function SectionTitle({
	title,
	subtitle,
	centered = false,
}: SectionTitleProps) {
	// Determines the alignment of the heading block.
	const alignmentClass = centered ? "mx-auto text-center" : "text-left";

	return (
		<div className={alignmentClass}>
			{/* Main Section Title */}
			<h2 className="text-3xl font-bold uppercase tracking-[0.18em] text-[var(--text)] sm:text-4xl lg:text-5xl">
				{title}
			</h2>

			{/* Decorative Underline */}
			<span
				className={`mt-4 block h-1 rounded-full bg-[var(--primary)] ${
					centered ? "mx-auto w-20" : "w-24"
				}`}
				aria-hidden="true"
			/>

			{/* Optional Subtitle */}
			{subtitle && (
				<p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base lg:text-lg">
					{subtitle}
				</p>
			)}
		</div>
	);
}