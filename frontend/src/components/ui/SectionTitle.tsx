/**
 * SectionTitle
 *
 * Shared heading block used across the page to keep section
 * labels, titles, and subtitles visually consistent.
 */

// Reusable heading props.
type SectionTitleProps = {
	title: string;
	subtitle?: string;
	centered?: boolean;
};

// Shared section heading component.
export default function SectionTitle({
	title,
	subtitle,
	centered = false,
}: SectionTitleProps) {
	return (
		{/* Alignment wrapper */}
		<div className={centered ? "mx-auto text-center" : "text-left"}>
			{/* Main title */}
			<h2 className="text-3xl font-bold uppercase tracking-[0.18em] text-white sm:text-4xl lg:text-5xl">
				{title}
			</h2>

			{/* Decorative underline */}
			<span
				className={`mt-4 block h-1 rounded-full bg-[#F4E7D3] ${
					centered ? "mx-auto w-20" : "w-24"
				}`}
				aria-hidden="true"
			/>

			{/* Optional subtitle */}
			{subtitle ? (
				<p className="mt-5 max-w-2xl text-sm leading-7 text-[#E8DCCB] sm:text-base lg:text-lg">
					{subtitle}
				</p>
			) : null}
		</div>
	);
}
