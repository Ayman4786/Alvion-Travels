import Link from "next/link";

type IconName = "person" | "map" | "headset" | "badge";

const reasons: readonly [string, string, string, IconName][] = [
  ["01", "Personal, never packaged", "Your trip starts with a conversation, not a dropdown menu.", "person"],
  ["02", "The right local insight", "We know who to call, where to linger and what is worth the detour.", "map"],
  ["03", "Support that feels human", "A real person is only ever a message away, before and during your journey.", "headset"],
  ["04", "Clear from day one", "Thoughtful recommendations, transparent pricing and no awkward surprises.", "badge"],
];

function FeatureIcon({ name }: { name: IconName }) {
  if (name === "person") {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <circle cx="23" cy="15" r="6" />
        <path d="M12 35c1.2-6 4.8-9 11-9s9.8 3 11 9" strokeLinecap="round" />
        <circle cx="35" cy="34" r="6" fill="currentColor" stroke="none" />
        <path d="m32.5 34 1.8 1.8 3.2-3.5" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="m6 11 12-5 12 5 12-5v31l-12 5-12-5-12 5V11Z" strokeLinejoin="round" />
        <path d="M18 6v31M30 11v31" />
        <path d="M24 13a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Z" fill="currentColor" stroke="none" />
        <circle cx="24" cy="19" r="2" fill="#07566A" stroke="none" />
      </svg>
    );
  }

  if (name === "headset") {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M9 27v-3a15 15 0 0 1 30 0v3" strokeLinecap="round" />
        <path d="M9 26h5v11H9a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3ZM39 26h-5v11h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3Z" />
        <path d="M34 37c-1 4-5 5-9 5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="24" cy="24" r="16" />
      <path d="m17.5 24 4.5 4.5 8.5-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 5v4M24 39v4M5 24h4M39 24h4" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative isolate w-full overflow-hidden bg-white text-[#0B2938]"
    >
      <div className="pointer-events-none absolute -left-[70px] top-[8%] hidden h-[620px] w-[620px] rounded-full bg-[#07566A] lg:block" />
      <div className="pointer-events-none absolute -left-[105px] top-[4%] hidden h-[690px] w-[690px] rounded-full border border-[#8FE4DF]/45 lg:block" />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col items-center px-5 py-16 sm:px-8 lg:min-h-[680px] lg:flex-row lg:items-stretch lg:px-0 lg:py-0">
        <div className="relative z-10 flex aspect-square w-[min(94vw,500px)] shrink-0 items-center justify-center rounded-full bg-[#F7F3E9] lg:absolute lg:-left-[90px] lg:top-1/2 lg:w-[620px] lg:-translate-y-1/2">
          <div className="w-[68%] lg:ml-[12%] lg:w-[62%]">
            <p className="text-[0.7rem] font-bold tracking-[0.24em] text-[#15969A]">WHY ALVION</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[0.98] tracking-[-0.04em]">
              More than a booking.
              <br />
              <em className="font-editorial text-[#15969A]">A better way to go.</em>
            </h2>
            <p className="mt-6 text-sm leading-6 text-[#5b686b] sm:text-base">Thoughtful journeys, shaped around you.</p>
            <Link
              href="#contact"
              className="mt-6 inline-flex min-h-12 items-center bg-[#15969A] px-5 text-[0.68rem] font-bold tracking-[0.14em] text-[#F7F3E9] transition-colors hover:bg-[#07566A]"
            >
              PLAN YOUR JOURNEY <span className="ml-4 text-xl leading-none" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-14 flex w-full max-w-[650px] flex-col gap-7 pb-4 lg:absolute lg:right-[3%] lg:top-1/2 lg:mt-0 lg:w-[490px] lg:-translate-y-1/2 lg:gap-6">
          <div className="pointer-events-none absolute -left-[7%] top-1/2 hidden aspect-[0.72] w-[96%] -translate-y-1/2 rounded-[50%] border border-[#8FE4DF]/55 lg:block" aria-hidden="true" />
          {reasons.map(([number, title, description, icon], index) => (
            <article
              key={number}
              className={`relative flex min-h-[88px] items-center rounded-full bg-[#F7F3E9] pl-20 pr-6 shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:pl-24 sm:pr-8 lg:w-[480px] ${
                index % 2 === 1 ? "lg:ml-[8%]" : index === 3 ? "lg:ml-[3%]" : ""
              }`}
            >
              <div className="absolute -left-1 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#8FE4DF] bg-[#07566A] text-[#F7F3E9] shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
                <div className="h-10 w-10">
                  <FeatureIcon name={icon} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-base font-bold leading-tight sm:text-lg">{number} — {title}</h3>
                <p className="mt-2 max-w-[430px] text-xs leading-5 text-[#5b686b] sm:text-sm">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
