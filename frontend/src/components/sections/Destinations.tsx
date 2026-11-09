import Image from "next/image";
import Link from "next/link";
import { siteImages } from "../../constants/site-images";

const destinations = [
  { name: "Maldives", region: "Indian Ocean", image: siteImages.destinations.maldives },
  { name: "Switzerland", region: "Alpine Europe", image: siteImages.destinations.switzerland },
  { name: "Bali", region: "Indonesia", image: siteImages.destinations.bali },
  { name: "Dubai", region: "United Arab Emirates", image: siteImages.destinations.dubai },
  { name: "Thailand", region: "Southeast Asia", image: siteImages.destinations.thailand },
  { name: "Singapore", region: "Southeast Asia", image: siteImages.destinations.singapore },
] as const;

export default function Destinations() {
  return (
    <section id="destinations" className="section-shell bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[var(--sand)]">Where next?</p>
            <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.05] sm:text-6xl">Places that stay <em className="font-editorial text-[var(--sand)]">with you.</em></h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/60">A few of the places we return to, for good reason.</p>
        </div>
        <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {destinations.map((destination, index) => (
            <Link key={destination.name} href="#contact" className={`group relative overflow-hidden ${index === 0 || index === 3 ? "lg:col-span-5" : "lg:col-span-3"}`}>
              <Image src={destination.image} alt={`${destination.name} travel destination`} fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">{destination.region}</p>
                <h3 className="font-display mt-1 text-2xl">{destination.name}</h3>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/10 text-lg opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
