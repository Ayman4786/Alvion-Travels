import Image from "next/image";

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

export default function Services() {
  return (
    <section id="services" className="bg-[#977140] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-flex rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(244,231,211,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm sm:text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Travel Services Designed Around You
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#F8F3ED] sm:text-lg">
            From planning and booking to support throughout the journey, Allen
            Travels delivers polished travel services with comfort, value, and
            convenience in mind.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-[rgba(255,255,255,0.12)]">
              <Image
                src="/images/hero.jpg"
                alt="Travel service showcase"
                width={1000}
                height={1200}
                className="h-70 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80 lg:h-90"
              />
            </div>
            <div className="overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-[rgba(255,255,255,0.12)]">
              <Image
                src="/images/service2.jpg"
                alt="Travel planning support"
                width={1000}
                height={1200}
                className="h-70 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80 lg:h-90"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-[rgba(255,255,255,0.12)] bg-[#8F6943] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8A6640] hover:shadow-[0_18px_44px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(244,231,211,0.12)] text-white ring-1 ring-[rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M12 3.5L15.2 9.9L22 10.7L17 15.3L18.3 22L12 18.7L5.7 22L7 15.3L2 10.7L8.8 9.9L12 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#E8DCCB] sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}