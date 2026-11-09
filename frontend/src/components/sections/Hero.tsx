import Link from "next/link";
import { siteImages } from "../../constants/site-images";
import HeroImage from "@/components/ui/HeroImage";

export default function Hero() {
  return (
    <section id="home" className="hero-section relative isolate min-h-[720px] overflow-hidden text-white">
      <HeroImage
        src={siteImages.hero}
        alt="Aerial view of a turquoise Maldives lagoon"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,28,40,0.84)_0%,rgba(4,28,40,0.52)_42%,rgba(4,28,40,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,28,40,0.65)_0%,transparent_38%)]" />

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1440px] items-end px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">
        <div className="max-w-3xl animate-rise">
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.6rem]">
            Go further.<br />
            <em className="font-editorial text-[var(--sand)]">Feel more.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
            Considered journeys for curious travellers. From hidden lagoons to
            high-alpine escapes, we plan the details so you can stay present.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#destinations" className="button-primary">
              Discover your journey <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#contact" className="button-ghost">
              Speak with an expert
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-5 hidden items-center gap-4 text-xs uppercase tracking-[0.22em] text-white/65 sm:flex lg:right-12">
        <span className="h-px w-14 bg-white/50" />
        Scroll to explore
      </div>
    </section>
  );
}
