/**
 * Services Section
 *
 * Shows the primary service offerings using a split layout
 * with supporting imagery and reusable cards.
 */

import Image from "next/image";

// Service offerings rendered into cards.
const services = [
  {
    title: "Flight Booking",
    description:
      "Reliable domestic and international flight options tailored to your schedule.",
  },
  {
    title: "Hotel Reservations",
    description:
      "Comfortable stays with handpicked accommodations for every travel style.",
  },
  {
    title: "Tour Packages",
    description:
      "Curated holiday experiences for families, couples, and solo travelers.",
  },
  {
    title: "Visa Assistance",
    description:
      "Smooth documentation support to help simplify your travel preparation.",
  },
  {
    title: "Corporate Travel",
    description:
      "Efficient business travel solutions for teams, meetings, and conferences.",
  },
  {
    title: "Airport Transfers",
    description:
      "Safe and timely pickup and drop-off services for a stress-free journey.",
  },
] as const;

// Travel service offerings and supporting visuals.
export default function Services() {
  return (
    <section
  id="services"
  className="bg-[var(--background)] py-20 text-[var(--text)] sm:py-24 lg:py-28"
>
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section heading */}
    <div className="mb-12 max-w-2xl">
      <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--icon-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)] shadow-sm backdrop-blur-sm sm:text-sm">
        What We Offer
      </span>

      <h2 className="text-3xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
        Travel Services Designed Around You
      </h2>

      <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text)] sm:text-lg">
        From planning and booking to support throughout the journey, Allen
        Travels delivers polished travel services with comfort, value, and
        convenience in mind.
      </p>
    </div>

    {/* Split layout */}
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

      {/* Images */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

        <div className="overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-[var(--border)]">
          <Image
            src="/images/service_img1.jpg"
            alt="Travel service showcase"
            width={1000}
            height={1200}
            className="h-70 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80 lg:h-90"
          />
        </div>

        <div className="overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-[var(--border)]">
          <Image
            src="/images/service_img2.jpg"
            alt="Travel planning support"
            width={1000}
            height={1200}
            className="h-70 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80 lg:h-90"
          />
        </div>

      </div>

      {/* Service Cards */}
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-hover)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--glass)] text-[var(--card-icon)] ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3.5L15.2 9.9L22 10.7L17 15.3L18.3 22L12 18.7L5.7 22L7 15.3L2 10.7L8.8 9.9L12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">

                <h3 className="text-lg font-semibold text-[var(--primary)] sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                  {service.description}
                </p>

              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  </div>
</section>
  );
}