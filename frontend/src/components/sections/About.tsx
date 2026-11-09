import Image from "next/image";
import Link from "next/link";
import { siteImages } from "../../constants/site-images";

export default function About() {
  return (
    <section id="about" className="section-shell bg-[var(--cream)]">
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        <div className="relative pl-5 sm:pl-10">
          <div className="absolute left-0 top-10 h-48 w-24 border-l border-t border-[var(--aqua)]/50 sm:h-64 sm:w-32" />
          <div className="image-frame aspect-[4/5] max-w-md">
            <Image src={siteImages.about} alt="A quiet coastal travel experience" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>

        <div>
          <p className="eyebrow text-[var(--aqua)]">The Alvion approach</p>
          <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.05] text-[var(--navy)] sm:text-6xl">
            Travel should feel <em className="font-editorial text-[var(--aqua)]">like yours.</em>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--ink-soft)]">
            Alvion Travels is a small, thoughtful team of travel designers who believe the best trips are never off the shelf. We listen first, then shape each stay, route and experience around what matters to you.
          </p>
          <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-7 border-y border-[var(--line)] py-7">
            {["Local perspective", "Thoughtful pacing", "Honest guidance", "Always human"].map((item, index) => (
              <div key={item} className="flex items-start gap-3">
                <span className="font-editorial text-xl text-[var(--aqua)]">0{index + 1}</span>
                <span className="pt-1 text-sm font-medium text-[var(--navy)]">{item}</span>
              </div>
            ))}
          </div>
          <Link href="#contact" className="link-arrow mt-8 inline-flex">Meet your travel designers <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
