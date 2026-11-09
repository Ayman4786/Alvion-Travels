import { NAV_ITEMS } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] px-5 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-3xl">Alvion<span className="text-[var(--sand)]">.</span></p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">Explore Beyond, considered well. For the places you have been dreaming about.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="eyebrow text-white/45">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/65">{NAV_ITEMS.map((item) => <li key={item.href}><a href={item.href} className="transition-colors hover:text-white">{item.label}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className="eyebrow text-white/45">Contact</h2>
            <div className="mt-5 space-y-3 text-sm text-white/65"><a href="tel:+919964855315" className="block hover:text-white">+91 9964855315</a><a href="mailto:info@alviontravels.in" className="block hover:text-white">info@alviontravels.in</a></div>
          </div>
          <div>
            <h2 className="eyebrow text-white/45">Social</h2>
            <p className="mt-5 text-sm leading-6 text-white/65">Social links will be added when the official profiles are available.</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/45 sm:flex-row sm:justify-between"><p>© 2026 Alvion Travels. All rights reserved.</p><p>Made for meaningful escapes.</p></div>
      </div>
    </footer>
  );
}
