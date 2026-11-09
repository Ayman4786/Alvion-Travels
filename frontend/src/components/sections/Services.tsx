import Image from "next/image";
import { siteImages } from "../../constants/site-images";

const services = [
  { title: "International escapes", description: "Multi-country routes, considered stays and the right amount of spontaneity.", image: siteImages.services.international },
  { title: "Domestic holidays", description: "A fresh view of familiar places, from slow coastlines to mountain air.", image: siteImages.services.domestic },
  { title: "Tailored travel planning", description: "A complete itinerary shaped around your rhythm, interests and wish list.", image: siteImages.services.customized },
  { title: "Honeymoon journeys", description: "Private, unhurried and full of the little details you will remember.", image: siteImages.services.honeymoon },
  { title: "Family adventures", description: "Well-paced escapes where every generation finds something to love.", image: siteImages.services.family },
  { title: "Corporate travel", description: "Seamless movement and considered hospitality for teams on the move.", image: siteImages.services.corporate },
] as const;

export default function Services() {
  return (
    <section id="services" className="section-shell bg-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[var(--aqua)]">What we do</p>
            <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.05] text-[var(--navy)] sm:text-6xl">The art of going <em className="font-editorial text-[var(--aqua)]">well.</em></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--ink-soft)]">From a first idea to your return flight, every piece is handled with care and a clear point of view.</p>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="group">
              <div className="image-frame aspect-[1.18]">
                <Image src={service.image} alt="" fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[var(--navy)]">0{index + 1}</span>
              </div>
              <h3 className="font-display mt-5 text-2xl text-[var(--navy)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
